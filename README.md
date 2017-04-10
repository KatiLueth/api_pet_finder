# Angular API Pet Page

### Description
SPA with Angular and the PetFinder API. When user clicks on animal type tab a random animal's photo and description of the type is displayed. Data comes from the PetFinder API. Home screen displays goats random animal information and photo, because goats are amusing.

#### Routes
* 3 separate routes in Angular app, for dogs, hedgehogs and parakeets available in PetFinder API.

* Each route has its own controller. When the view is changed, a new JSONP request is made to 
PetFinder to get a random pet of that kind.

#### Display
* Information about the pet is displayed on the DOM, formatted with Bootstrap.
* Included are images of the pet in the display. 
