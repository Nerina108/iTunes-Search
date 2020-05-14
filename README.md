#Capstone Project - iTunes Search App

## Table of contents
* [About the App](#about-the-app)
* [Installation](#installation)
* [Testing the App](#test-the-app)
* [Security](#security)
* [API-Key Handling](#API-key-handling)
* [Link to App](#link-to-app)


### About the App

This iTunes Search Application allows you to enter in a search item within four different media types, Music, Music Videos, Movies and AudioBooks.

Once the type of media is selected, you can enter in your search item and the results will be displayed.  To preview an item, the label must be clicked and this will redirect you to Apple's website so you can listen/watch/read the preview.

You can add an item to your Favorites by clicking on "Add to Favorites" on the item that you want to add.  You can view your Favorites at the bottom of the page.
	
### Installation

Extract all files, open up your terminal and follow these instructions:

-cd into the backend folder
-run command "npm install" to install all necessary node modules
-open a new terminal and cd into the frontend folder
-run command "npm install" 
-now type in "npm start" - this will launch both the backend server on port 8080 as well as the frontend on port 3000 concurrently and you should be able to view and use the App to search for media items.

### Testing the App

To test the App, open the terminal and cd into the frontend folder, run command "npm start" and then "npm test".

### Security

Helmet is installed and used in the server.js file so that the express file can be secured.

### API-key Handling

There were no API-Keys to be handled. ALl API's were fetched directly from the iTunes API using the node-fetch module

### Link to App


