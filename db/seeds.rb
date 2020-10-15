# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(username: 'Demo User', email: 'demo@mail.com', password: 'passworddemo')
user2 = User.create!(username: 'Steve Woz', email: 'swoz@mail.com', password: 'passwordsw')
user3 = User.create!(username: 'Sarah Connor', email: 'sconner@mail.com', password: 'passwordsc')
user4 = User.create!(username: 'Michael Jordan', email: 'mjordan@mail.com', password: 'passwordmj')
user5 = User.create!(username: 'Dave Chappelle', email: 'dchappelle@mail.com', password: 'passworddc')