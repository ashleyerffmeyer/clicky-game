# Sanrio Clicky Memory Game

[Link to Heroku Site!](https://sanrio-clicky-game.herokuapp.com) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Eli Vargas (TA)
* Seth Willis (TA)

## Tools Used
* ReactJS
* JavaScript
* CSS
* ES6
* JSX

## Prerequisites & Installations
In order to run this command line node app, first install node.js and npm. To install the app, clone this repository and use 'npm install' to gather dependencies specified in the package.json file (react, react-dom, react-scripts).

## Application Overview
This web application is a memory game powered by React. The UI is broken up into components; the app manages component state and responds to user events.

## Instructions
The application renders different Sanrio characters to the screen. Each image listens for click events.

The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once.

Every time an image is clicked, the images shuffle themselves in a random order.

Once the user's score is reset after an incorrect guess, the game restarts.