# moCtoDnozamA API

## TECHNOLOGIES IN USE

- JavaScript
- Express.js
- Node.js
- MongoDB
- Mongoose
- AJAX
- jQuery
- Handlebars
- CSS/Bootstrap
- HTML5

## PLANNING & DEVELOPMENT

We made initial wireframes and an ERD for our prompt. We tried several different approaches when creating our API. The first attempt, we found that we had a lot of nested data that was difficult to mentally parse, and decided to scrap the whole idea and create four models reflecting each part of our website. It taught us a lot about what /not/ to do, which in turn allowed us to learn from our mistakes and ultimately improve our skeletal design.

## ROUTE CATALOG

Outside of example routes that is kept for reference, there are four (4) defined routes: cart, order, product and user. Once a user is signed in they are then given access to an empty cart. A user can browse and select products to be added to their cart. When the user checks out their cart an order is created and stored in their history on the database.

Cart: Cart has access to post (getting an empty cart), show (displaying items in cart), patch (updating items in cart). Cart does not have access to destroy because of the nature of this e-commerce application, a user should not be able to delete their cart. They can empty it.

Order: Order has access to post, index, and show their order as a whole.

Product: Product has access to index/show, update, post.

User: User has acess to standard user actions sign-up/sign-in, change password, and sign-out via delete, post and patch.

[Link to Wireframes](https://imgur.com/a/GOmCAJ5)

[Link to ERD](https://imgur.com/a/4AMp392)

## UNSOLVED PROBLEMS

UX design should be cleaner.
Making code more DRY.


## LINKS
[Back End Repo](https://github.com/moCtoDnozamA/moCtoDnozamA.github.io-api)

[Front End Repo](https://github.com/moCtoDnozamA/moctodnozama)

[Deployed Front End](https://moctodnozama.github.io/moctodnozama/)

[Deployed Heroku](https://moctodnozama.herokuapp.com)
