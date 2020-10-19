# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

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
#event11 = Event.create!(name: 'Homemade Risotto Cooking Class', location: '2640 Steiner St, San Francisco, CA', 
    #longitude: -122.436340, latitude: 37.793906, event_type: 'Class, Training, or Workshop',
    #description: 'Welcome to my risotto cooking class!', organizer_id: user1.id, category_id: category8.id, 
    #start_date: DateTime.new(2020, 10, 13, 9, 30, 0), end_date: DateTime.new(2020, 10, 13, 12, 0, 0), 
    #timezone: 'PDT', capacity: 10, status: 'On Sale', is_sold_out: false, 
    #start_sales_date: DateTime.new(2020, 10, 1, 12, 0, 0))
#event11.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_1.jpg"),
                           #filename: "event_image_1.jpg")
#event12 = Event.create!(name: 'Dave Chappelle Live in New York', location: '117 MacDougal St, New York, NY', 
    #longitude: -74.000551, latitude: 40.730187, event_type: 'Concert or Performance',
    #description: 'Comedian Dave Chappelle is back for a Halloween performance at the Comedy Cellar', organizer_id: user1.id, category_id: category11.id, 
    #start_date: DateTime.new(2020, 10, 31, 22, 30, 0), end_date: DateTime.new(2020, 11, 1, 1, 0, 0), 
    #timezone: 'EDT', capacity: 100, status: 'Sold Out', is_sold_out: true, 
    #start_sales_date: DateTime.new(2020, 10, 5, 12, 0, 0))
    #event12.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_2.jpg"),
    #filename: "event_image_2.jpg")
    #event13 = Event.create!(name: 'Kendrick Lamar Live at Coachella', location: 'Coachella Valley Music and Arts Festival', 
    #longitude: -116.242427, latitude: 33.681587, event_type: 'Concert or Performance',
    #description: 'Kendrick Lamar will be headlining 2021 Coachella', organizer_id: user1.id, category_id: category4.id, 
    #start_date: DateTime.new(2021, 4, 18, 11, 30, 0), end_date: DateTime.new(2021, 4, 17, 11, 30, 0), 
    #timezone: 'PDT', capacity: 10, status: 'On Sale', is_sold_out: false, 
    #start_sales_date: DateTime.new(2021, 1, 1, 0, 0, 0))
#event13.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_3.jpg"),
                           #filename: "event_image_3.jpg")
event14 = Event.create!(name: 'Jello Biafra: Punk Rock Seminar', location: 'San Francisco City Hall', 
    longitude: -122.41925292706068, latitude: 37.77924551206588, event_type: 'Seminar or Talk',
    description: 'Punk rock legend gives a seminar on how to DIY in politics', organizer_id: user1.id, category_id: category15.id, 
    start_date: DateTime.new(2020, 11, 4, 12, 30, 0), end_date: DateTime.new(2020, 11, 4, 3, 30, 0), 
    timezone: 'PDT', capacity: 10, status: 'Free')
event14.event_image.attach(io: open("https://eventbriter-dev.s3-us-west-1.amazonaws.com/jZohZHTUu9qpmoK32Abb1xLH"),
                           filename: "jZohZHTUu9qpmoK32Abb1xLH")
#user2 = User.create!(username: 'Steve Woz', email: 'swoz@mail.com', password: 'passwordsw')
#event21 = Event.create!(name: 'Yoga workshop for beginners', location: 'Hare Krishna Temple Berkeley, CA', 
    #longitude: -122.26015173618387, latitude: 37.8591269052156, event_type: 'Class, Training, or Workshop',
    #description: 'Berkeley Krishna Temple will offer a free yoga workshop for beginners.', 
    #organizer_id: user2.id, category_id: category3.id, 
    #start_date: DateTime.new(2020, 11, 13, 11, 30, 0), end_date: DateTime.new(2020, 11, 13, 1, 0, 0), 
    #timezone: 'PDT', capacity: 50, status: 'Free')
#event21.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_5.jpg"),
                           #filename: "event_image_5.jpg")
#event22 = Event.create!(name: 'Halloween Party 2020 Monster Mash', location: '230 2nd St, Fall River, MA 02721', 
    #longitude: 41.69882675023279, latitude: -71.15641606136671, event_type: 'Party or Social Gathering',
    #description: 'Lizzy Bordon will be throwing a Halloween Party to die for!', organizer_id: user2.id, category_id: category19.id, 
    #start_date: DateTime.new(2020, 10, 31, 20, 00, 0), end_date: DateTime.new(2020, 11, 1, 2, 0, 0), 
    #timezone: 'EDT', capacity: 200, status: 'On Sale', is_sold_out: false, 
    #start_sales_date: DateTime.new(2020, 10, 5, 12, 0, 0))
#event22.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_6.jpg"),
                           #filename: "event_image_6.jpg")
#event23 = Event.create!(name: 'Wine Tasting Event for Syrah Lovers', location: '525 Zinfandel Ln St Helena, CA 94574', 
    #longitude: -122.4358398541205, latitude: 38.48755599354239, event_type: 'Party or Social Gathering',
    #description: 'We will be serving an incredible variety of Syrahs for you to enjoy.', organizer_id: user2.id, category_id: category2.id, 
    #start_date: DateTime.new(2020, 11, 15, 12, 30, 0), end_date: DateTime.new(2020, 11, 15, 17, 30, 0), 
    #timezone: 'PDT', capacity: 50, status: 'On Sale', is_sold_out: false, 
    #start_sales_date: DateTime.new(2020, 10, 20, 0, 0, 0))
#event23.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_7.jpg"),
                           #filename: "event_image_7.jpg")
#event24 = Event.create!(name: 'Grand Opening of Uncle Ray\'s Pizza', location: '20 W 34th St, New York, NY 10001', 
    #longitude: -73.98553565397498, latitude: 40.74835922014053, event_type: 'Party or Social Gathering',
    #description: 'Come to the grand opening of Uncle Ray\'s for some delicious pizza.', organizer_id: user2.id, category_id: category2.id, 
    #start_date: DateTime.new(2020, 12, 1, 12, 30, 0), end_date: DateTime.new(2020, 12, 1, 17, 30, 0), 
    #timezone: 'EDT', capacity: 100, status: 'Free')
#event24.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_8.jpg"),
                           #filename: "event_image_8.jpg")
#user3 = User.create!(username: 'Sarah Connor', email: 'sconner@mail.com', password: 'passwordsc')
#event31 = Event.create!(name: 'San Diego Comic-Con', location: 'San Diego Convention Center', 
    #longitude: -117.16260190092468, latitude: 32.70737930413964, event_type: 'Convention',
    #description: 'The annual San Diego Comic-Con comic book convention will be held this summer.', 
    #organizer_id: user3.id, category_id: category12.id, 
    #start_date: DateTime.new(2021, 7, 17, 8, 00, 0), end_date: DateTime.new(2021, 7, 18, 20, 0, 0), 
    #timezone: 'PDT', capacity: 5000, status: 'On Sale', is_sold_out: false,
    #start_sales_date: DateTime.new(2021, 3, 1, 12, 0, 0))
#event31.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_9.jpg"),
                           #filename: "event_image_9.jpg")
#event32 = Event.create!(name: '100 Mile Marathon in Death Valley', location: 'Death Valley, CA', 
    #longitude: -117.05804814503013, latitude: 36.63146972584565, event_type: 'Race or Endurance Event',
    #description: '100 eligable runners will be entered into the 24 hour 100 Mile Death Valley Marathon', organizer_id: user3.id, category_id: category20.id, 
    #start_date: DateTime.new(2020, 12, 1, 6, 00, 0), end_date: DateTime.new(2020, 12, 2, 6, 0, 0), 
    #timezone: 'PDT', capacity: 100, status: 'Free')
#event32.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_10.jpg"),
                           #filename: "event_image_10.jpg")
#event33 = Event.create!(name: 'Guns N Roses Reunion concert', location: 'Wiskey A Go Go', 
    #longitude: -118.38580531534498, latitude: 34.09088354032888, event_type: 'Concert or Performance',
    #description: 'Guns N Roses reunites at the Wiskey A Go Go', organizer_id: user3.id, category_id: category4.id, 
    #start_date: DateTime.new(2021, 2, 14, 22, 30, 0), end_date: DateTime.new(2021, 2, 15, 0, 0, 0), 
    #timezone: 'PDT', capacity: 50, status: 'Sold Out', is_sold_out: true, 
    #start_sales_date: DateTime.new(2021, 1, 1, 12, 0, 0))
#event33.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_11.jpg"),
                           #filename: "event_image_11.jpg")
#event34 = Event.create!(name: 'Billy Boy\'s Bar Mitzvah Bash', location: 'Billy Boy\'s house', 
    #longitude: -122.45869579966192, latitude: 37.77450172572943, event_type: 'Party or Social Gathering',
    #description: 'Billy Boy will be throwing his Bar Mitzvah with special guest Bozo the Clown.', organizer_id: user3.id, category_id: category14.id, 
    #start_date: DateTime.new(2020, 11, 1, 11, 30, 0), end_date: DateTime.new(2020, 11, 1, 3, 30, 0), 
    #timezone: 'PDT', capacity: 100, status: 'Free')
#event34.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_12.jpg"),
                           #filename: "event_image_12.jpg")
#user4 = User.create!(username: 'Michael Jordan', email: 'mjordan@mail.com', password: 'passwordmj')
#event41 = Event.create!(name: 'JavaScript Tech Conference', location: 'Moscone Center', 
    #longitude: -122.40070140852366, latitude: 37.784308741928044, event_type: 'Conference',
    #description: 'The annual JavaScript tech conference will be held at the Moscone Center.', 
    #organizer_id: user4.id, category_id: category18.id, 
    #start_date: DateTime.new(2021, 2, 1, 11, 30, 0), end_date: DateTime.new(2020, 2, 1, 18, 0, 0), 
    #timezone: 'PDT', capacity: 500, status: 'On Sale', is_sold_out: false,
    #start_sales_date: DateTime.new(2020, 12, 1, 12, 0, 0))
#event41.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_13.jpg"),
                           #filename: "event_image_13.jpg")
#event42 = Event.create!(name: 'Michael Jordan Book Signing', location: 'United Center, Chicago Illinois', 
    #longitude: -87.67434756137992, latitude: 41.88053103958748, event_type: 'Appearance or Signing',
    #description: 'Michael Jordan will be at the United Center for a book signing.', organizer_id: user4.id, category_id: category20.id, 
    #start_date: DateTime.new(2020, 11, 30, 12, 00, 0), end_date: DateTime.new(2020, 11, 30, 15, 0, 0), 
    #timezone: 'CDT', capacity: 1000, status: 'On Sale', is_sold_out: false, 
    #start_sales_date: DateTime.new(2020, 10, 15, 12, 0, 0))
#event42.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_14.jpg"),
                           #filename: "event_image_14.jpg")
#event43 = Event.create!(name: 'San Francisco Jazz Festival', location: 'San Franciso, CA', 
    #longitude: -122.416667, latitude: 37.783333, event_type: 'Festival or Fair',
    #description: 'Come enjoy 3 weeks of Jazz at San Francisco\'s annual Jazz Festival', organizer_id: user4.id, category_id: category4.id, 
    #start_date: DateTime.new(2021, 7, 9, 8, 30, 0), end_date: DateTime.new(2021, 7, 30, 23, 0, 0), 
    #timezone: 'PDT', capacity: 2000, status: 'On Sale', is_sold_out: false, 
    #start_sales_date: DateTime.new(2020, 11, 1, 12, 0, 0))
#event43.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_15.jpg"),
                           #filename: "event_image_15.jpg")
#event44 = Event.create!(name: 'The Slipnutz Comedy Reunion', location: 'Madison Square Garden', 
    #longitude: -73.99354599028146, latitude: 40.750073708311426, event_type: 'Concert or Performance',
    #description: 'They\'re the Slipnutz, slippin\' on nuts, clownin\' around ... and slippin\' on nuts!', organizer_id: user4.id, category_id: category14.id, 
    #start_date: DateTime.new(2021, 9, 11, 12, 30, 0), end_date: DateTime.new(2021, 9, 11, 17, 30, 0), 
    #timezone: 'EDT', capacity: 5000, status: 'On Sale', is_sold_out: false,
    #start_sales_date: DateTime.new(2020, 11, 1, 12, 0, 0))
#event44.event_image.attach(io: File.open("/Users/michaelcastanieto/Documents/AA/Full_Stack_Project/images/event_image_16.jpg"),
                           #filename: "event_image_16.jpg")
