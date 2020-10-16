# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all
Category.destroy_all

category1 = Category.create!(name: 'Business')
category2 = Category.create!(name: 'Food & Drink')
category3 = Category.create!(name: 'Health')
category4 = Category.create!(name: 'Music')
category5 = Category.create!(name: 'Auto, Boat & Air')
category6 = Category.create!(name: 'Charity & Causes')
category7 = Category.create!(name: 'Community')
category8 = Category.create!(name: 'Family & Education')
category9 = Category.create!(name: 'Fashion')
category11 = Category.create!(name: 'Film & Media')
category12 = Category.create!(name: 'Hobbies')
category13 = Category.create!(name: 'Home & Lifestyle')
category14 = Category.create!(name: 'Performing & Visual Arts')
category15 = Category.create!(name: 'Government')
category16 = Category.create!(name: 'Spirituality')
category17 = Category.create!(name: 'School Activities')
category18 = Category.create!(name: 'Science & Tech')
category19 = Category.create!(name: 'Holiday')
category20 = Category.create!(name: 'Sports & Fitness')
category21 = Category.create!(name: 'Travel & Outdoor')
category22 = Category.create!(name: 'Other')

user1 = User.create!(username: 'Demo User', email: 'demo@mail.com', password: 'passworddemo')
event11 = Event.create!(name: 'Cooking Class', location: '2640 Steiner St, San Francisco, CA', 
    longitude: -122.436340, latitude: 37.793906, event_type: 'Class, Training, or Workshop',
    description: 'Welcome to my risotto cooking class!', organizer_id: user1.id, category_id: category8.id, 
    start_date: DateTime.new(2020, 10, 13, 9, 30, 0), end_date: DateTime.new(2020, 10, 13, 12, 0, 0), 
    timezone: 'PDT', capacity: 10, status: 'On Sale', is_sold_out: false, 
    start_sales_date: DateTime.new(2020, 10, 1, 12, 0, 0))
user2 = User.create!(username: 'Steve Woz', email: 'swoz@mail.com', password: 'passwordsw')
user3 = User.create!(username: 'Sarah Connor', email: 'sconner@mail.com', password: 'passwordsc')
user4 = User.create!(username: 'Michael Jordan', email: 'mjordan@mail.com', password: 'passwordmj')
user5 = User.create!(username: 'Dave Chappelle', email: 'dchappelle@mail.com', password: 'passworddc')
