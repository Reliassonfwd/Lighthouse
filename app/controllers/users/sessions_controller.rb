class Users::SessionsController < Devise::SessionsController
  include RackSessionsFix
  include Pundit::Authorization
  respond_to :json

  before_action :set_headers, only: [:destroy]
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def set_headers
    if request.method == 'OPTIONS'
      headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
      headers['Access-Control-Allow-Methods'] = 'DELETE, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'Content-Type, X-Requested-With, X-HTTP-Method-Override, Accept'
      headers['Access-Control-Max-Age'] = '1728000'
      head :ok
    end
  end

  def create
    super do |user|
      authorize user, :create_session?
    end
  end

  def destroy
    authorize current_user, :destroy_session?
    super
  end

  def update
    @post = Post.find(params[:id])
    authorize @post
    # Resto de la lógica de actualización
  end

  private

  def respond_with(resource, _opts = {})
    render json: {
      status: {
        code: 200,
        message: 'Logged in successfully.'
      }
    }, status: :ok
  end

  def respond_to_on_destroy
    if request.headers['Authorization'].present?
      jwt_payload = JWT.decode(request.headers['Authorization'].split(' ').last, Rails.application.credentials.devise_jwt_secret_key!).first
      current_user = User.find(jwt_payload['sub'])
    end

    if current_user
      render json: {
        status: 200,
        message: 'Logged out successfully.'
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end

  def user_not_authorized
    render json: {
      status: 403,
      message: "You are not authorized to perform this action."
    }, status: :forbidden
  end
end