class Tour < ApplicationRecord
  belongs_to :company
  has_many :bookings
  has_many :comments
end
