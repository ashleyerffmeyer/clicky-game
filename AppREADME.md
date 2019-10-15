# clicky-game

[Link to Site!](https://whispering-brook-22023.herokuapp.com) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Eli Vargas (TA)
* Seth Willis (TA)

## Tools Used
* JavaScript
* React.js

## Prerequisites & Installations
In order to run this command line node app, first install node.js and npm. To install the app, clone this repository and use 'npm install' to gather dependencies specified in the package.json file (Express, Express-Handlebars Mongoose, Cheerio, Axios)

## Application Overview
This web application is a memory game powered by React. The UI is broken up into components; the app manages component state and responds to user events.

## Instructions
The application renders different images (of your choice) to the screen. Each image listens for click events.

The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once.

Every time an image is clicked, the images rendered shuffle themselves in a random order.

Once the user's score is reset after an incorrect guess, the game restarts.