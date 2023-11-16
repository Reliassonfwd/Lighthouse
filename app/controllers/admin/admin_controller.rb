class AdminController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_admin!

  def index
    
  end

  private

  def authorize_admin!
    unless current_user.has_role?(:admin)
      redirect_to root_path, alert: 'No tienes permisos para acceder a esta página.'
    end
  end
end