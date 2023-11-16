class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :tour
  belongs_to :payment_method
end
