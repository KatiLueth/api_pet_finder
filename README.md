Weekend Challenge #5

Git Repo
https://github.com/kdszafranski/iota-angular-basics/tree/factories
Description
Overview
This weekend you will revisit the PetFinder API to create an application that flexes your knowledge of Angular, 
Angular routes, Angular factories, server-side logic, and SQL!

Features
In this application, your users will be able to

select an animal type to view a random animal of that type
save their favorite animals
view a list of their favorite animals
Reference this folder of application views as you read more about each feature below.

Home Page
When users first visit your web app, they will see

a drop-down list of animal types -- this list is populated via an array of animal types. Animal types supported by 
the PetFinder API can be found in their API documentation.
a link that takes them to a list of any favorited animals
a count of the number of favorited animals
Animal View
Once an animal is selected from the drop-down list, the application will display a random pet of the selected animal 
type. This will require a call to the PetFinder API. The pet details should include, at least

an image of the pet
the name of the pet
the complete description of the pet
Favorites Button

In addition, the user will have access to a button that adds the current pet to a list of favorites. The list of 
favorites will be saved to a database. The data needed includes

pet ID
pet name
pet image URL
the first 100 characters of the pet's description
Your Faves View
When users navigate to this page, they will see a list of all of the animals they have favorited. This list will be
pulled from the database.

Advanced Modes
So you're looking to do more?

Hard Mode
Get fancy! Use your own CSS styles to make this amazing!

Pro Mode
Modify the Favorites view to display animals grouped by animal type.


------------------------------------------------------------------------------------------------------------
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