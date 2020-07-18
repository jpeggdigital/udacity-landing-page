# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Mandatory Updates](#updates)
* [Extra Code](#extras)


## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Updates

The js file is built on the premise that the data in the landing page will be loaded dynamically and each section Id that is dynamically added will follow a numbering of section1, section2, section3 ... section8, section9, etc. This will allow the navigation bar to be built dynamically upon load using the "h2" text as an unordered list on the header element.

Once loaded, the script will set section that is diplayed in the main viewing area as the "active" section, depicted by animated circles and a filled area that creates a hard border at the bottom of the section. Additionally, when the new active area is detected, the navigation bar will also change the background of the menu item to provide another visual clue that it is the active section.

Additionally, when the user clicks on an item in the navigation bar, the page will scroll smoothly to that section, rather than making a hard jump, overriding the default functionality of the click.

## Extras

A function has been added to detect the user scrolling and, upon detection, hide the navigation bar. Once the user stops scrolling, the navigation bar will reappear so that the menu items can be clicked.
