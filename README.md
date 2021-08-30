# Coding Challenge


## To get started locally:

### Requirements

- NodeJS NPM 

In the terminal, cd to your desired project directory and run:

### Run `git clone https://github.com/frivolousvision/coding-challenge.git`

To clone the repository.
<p>&nbsp;</p>

### `cd coding-challenge`

To navigate to the new directory.
<p>&nbsp;</p>

### `npm install`

To install the dependencies locally.
<p>&nbsp;</p>

### `npm start`

To begin the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
<p>&nbsp;</p>

## Project Overview

The goal of this project was to design a tool to track and analyze a list of potential target firms for a client that is looking to achieve growth through aqusistions.

In this application, a view of the list of targets are presented in the style of a feed from the home page. From this view, you may make quick edits to the target's information, current status in the acqusistion cycle, delete the target entirely or create a new target. 

Clicking on the target's image, name, or "Learn more about..." will navigate you to that target's main page, where you will see all of the information available about the target with the functionalioty to can make edits to the information, change the current status, or delete the target. In this view, there are "Previous Target" and "Next Target" buttons that allow you quickly cycle between the targets in the feed. 

In the header of the application, clicking on the 3 bars opens a menu of categories to view the targets by status, navigate to that target's information page, or quickly jump to the create new target form. 

The mock information was provided from a JSON object in /src/lib/data.js 
