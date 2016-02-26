Angular API Pet Page Challenge
Git Repo
https://github.com/kdszafranski/api_lecture_master.git
Description
Angular API Pet Page Challenge
You're going to making a single page web application with Angular and the PetFinder data API.

PetFinder API
You'll need to sign up for a developer key in order to have access to the API URLs.

Routes
Create 3 separate routes in your Angular app, one each for 3 different kinds of pets available to search with the 
PetFinder API. Example: One for dogs, another for cats, and one for fish.

Each route should have its own controller. When the view is changed your app should make a new JSONP request to 
PetFinder to get a random pet of that kind.

Consult the PetFinder API documentation to see all the options available for the pet.Random call.

Display
Display information about the pet on the DOM, formatted nicely with Bootstrap, Skeleton, or your own styles.

HARD MODE
Include images of the pet in the display. Note that images are available in three sizes. Only one of any image need 
be displayed. You'll need to use the ng-src directive in your  element to get this to display.

PRO MODE
Make a new route/view for listing Shelters. Use the API Documentation to see what information is available on 
shelters and make use of them.