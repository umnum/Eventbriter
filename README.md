# Welcome to Eventbriter!
<p align="center">
    <a href="https://eventbriter-app.herokuapp.com/#/" target="_blank">
        <img width="50%" src="img/eventbriter-logo.png" alt="Eventbrite logo">
    </a>
</p>

## Table of Contents

  * [About Eventbriter](#about-eventbriter)
  * [Technologies Used](#technologies-used)
  * [Features](#features)
    * [All Users](#all-users)
        * [Viewing All Events](#viewing-all-events)
        * [Viewing a Single Event](#viewing-a-single-event)
    * [Logged Out Users](#logged-out-users)
        * [User Authentication](#user-authentication)
        * [Logging In as Demo User](#logging-in-as-demo-user)
    * [Logged In Users](#logged-in-users)
        * [Creating an Event](#creating-an-event)
        * [Updating an Event](#updating-an-event)
        * [Deleting an Event](#deleting-an-event)
        * [Creating a Ticket](#creating-a-ticket)
        * [Removing a Ticket](#removing-a-ticket)
        * [Purchasing a Ticket](#purchasing-a-ticket)
        * [Requesting a Ticket Refund](#requesting-a-ticket-refund)

## About Eventbriter

Eventbriter is a full stack web application that is inspired by the Eventbrite website. When users visit the site, they are allowed to view all the events that were created by Eventbriter members. A user can become an Eventbriter member by creating an account and signing in. Once a member is signed in, they have the ability to create their own events, update their events, and delete their events. They can also create tickets to their events so that other members can purchase tickets and attend your events. Any event that is listed as "On Sale" has tickets available to be purchased by an Eventbriter member. If a user does not want to sign up for an account, they can log in as the Demo User which will allow them to explore the same features as a logged in user.

What separates Eventbriter from Eventbrite is that it is built as a single-page web application, which provides users with a dynamic and smooth navigation across the entire site. This was made possible by utilizing React and Redux on the frontend. The backend was built on a Ruby on Rails framework, while PostgreSQL was used for database storage along with Amazon AWS S3 to store the events' images.

## Technologies Used

* Ruby on Rails
* React.js
* Redux.js
* PostgreSQL
* Webpack
* Amazon AWS S3

## Features

The following is a list of all of the features available on Eventbriter. The availability of these features will vary depending on whether a user is logged in or logged out. Some features will be available to all users of the website.

### All Users

All users of Eventbriter will be able to view a list of all events posted to the website as well as view detailed information on a single event.

#### Viewing All Events
All users have access to the website's homepage, where they can view all events that a logged in user has created. 

#### Viewing a Single Event
Clicking on one of the events listed on the website's homepage will take that user to the event's show page, where they are given details about the event.
<p align="center">
    <img src="./img/view_event_page.gif" alt="View Event Page">
</p>

### Logged Out Users

Logged out users will have access to the `Sign In` feature, which will direct them to sign up for an account, log in to their own account, or log in as the Demo User. They will also have access to the `About` feature, which is a dropdown menu that provides links to Eventbriter's GitHub Wiki page, as well as the author's LinkedIn and AngelList profile page, respectively.

#### User Authentication

User credentials are stored and accessed securely on the backend using BCrypt. When a user first signs up, their password is hashed and stored in the database as a `password_digest`. When a user logs in with their credentials, their password is hashed and compared with the `password_digest`. Upon a successful login, the user's `session_token` is set using Rails' `SecureRandom::urlsafe_base64` method, so that a user's session will persist until they decide to log out.

Frontend authentication is also provided by using Redux to store a user's session information (primary id, name, email) on the Redux store so that they can retain their session status on the client side. This session information is also used to protect certain frontend routes from being accessed. For example, if a user is logged in, they will no longer be allowed to visit the login/signup page. Conversely, non-authenticated users cannot access protected routes that are only available to authenticated users, such as the event or ticket creation pages.

#### Logging in as Demo User

A demo login is provided in the Sign In page for anyone who does not wish to sign up for an account, but would like try out the features that a logged in user is provided. In order to sign in as the Demo User, navigate to the Sign In page and click on the `Demo Log In` button:
<p align="center">
    <img src="./img/demo_login.gif" alt="Demo Log In">
</p>

### Logged In Users

Logged in users have the ability to create their own events, which can be viewed by all users of the website, update information on an event they have previously created, and delete one of their events. They also have the ability to create tickets to these events so that any Eventbriter member may purchase tickets and attend these events.

#### Creating an Event

Logged in users are able to create events that are available for all users to view and for other logged in users to attend (via purchasing tickets to the event). In order to create an event, the user must navigate to the `Create Event` icon located in the navigation bar at the very top of the page. From there, the user must provide information about the event, including the name of the event, its type and category, location, start date and time, end date and time, description, and an image. When this information is provided, the user can then click on the `Create Event` button which will create the event and guide them to create a ticket for the event. Creating a ticket for the event is not absolutely necessary for an event to exist. In this case, the status of the event will be set to "Announced" as apposed to being "On Sale" if tickets are provided. The organizer of the event can always have the option of providing tickets later, which is discussed further in [Creating a Ticket](#creating-a-ticket).
<p align="center">
    <img src="./img/create_event_page.gif" alt="Create Event Page">
</p>

#### Updating an Event
If the event organizer needs to update any details about their event, they can do so by navigating to the `Manage Event` icon located in the navigation bar at the very top of the page. Clicking on this icon will take them to a list of all of their organized events. From there they can choose an event to update.
<p align="center">
    <img src="./img/update_event.gif" alt="Update Event">
</p>

#### Deleting an Event
Navigating to `Manage Event` as described above, will also give the user the option of deleting one of their organized events. Doing so will also remove any tickets created for the event as well as removing any purchased tickets and refunding attendees, if tickets were purchased but the event was not attended.

#### Creating a Ticket

#### Removing a Ticket

#### Purchasing a Ticket

#### Requesting a Ticket Refund