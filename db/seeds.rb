# Seeding user_types
# admin = UserType.create!(user_type: 'Admin')
# customer = UserType.create!(user_type: 'Customer')

# # Seeding users
# user1 = User.create!(name: 'John Doe', email: 'john@example.com', password: 'password', user_type_id: admin.id)
# user2 = User.create!(name: 'Jane Doe', email: 'jane@example.com', password: 'password', user_type_id: customer.id)

# Seeding companies
company = Company.create(name: 'Costa Cat', description: 'Our COSTA CAT I is a luxury, 55 foot, fully air-conditioned catamaran. The COSTA CAT II, our newest addition, is a 39 foot, open-air catamaran. Both luxury catamarans cruise from the world class Los Sueños Resort & Marina.', address: 'Los Sueños Marina, Herradura, Costa Rica', contact_info: 'www.costacat.com')

# Seeding tours
tour1 = Tour.create(name: 'Isla Tortuga Tour', description: 'Tortuga Island is an uninhabited, paradise island located in the Gulf of Nicoya. Upon arrival at Tortuga Island, an endless amount of relaxation and adventure is in store for you!', duration: '9 hours', price: 150, availability: true, company_id:1)

# Seeding payment_methods
payment_method1 = PaymentMethod.create(payment_type: 'Credit Card')
payment_method2 = PaymentMethod.create(payment_type: 'Cash')
payment_method2 = PaymentMethod.create(payment_type: 'Paypal')


# Seeding bookings
booking = Booking.create(booking_date: Date.today, user_id: 2, tour_id: 1, payment_method_id: 1)

# Seeding comments
comment = Comment.create(comment_text: 'Great tour! it was awsome and the crew and captain were the best', rating: 10, user_id: 2, tour_id: 1)

