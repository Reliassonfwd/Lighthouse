class Api::V1::ApiController < ApplicationController
  def index
    render json: {
      bookings: Booking.all,
      comments: Comment.all,
      companies: Company.all,
      payment_methods: PaymentMethod.all,
      tours: Tour.all,
      user_types: UserType.all,
      users: User.all
    }
  end
end
