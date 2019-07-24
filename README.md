# Recode Racer - API Sinatra Back End - Javascript Front End

## Learning Competencies

* Map the flow of data through a web application
* Build a pure JavaScript Front-End that interacts with the Sinatra back-end
* Change the DOM based on events
* Use AJAX actions to change views based on asynchronous data

## Summary

Let's take our Recode Racer and make it a little bit more interesting by building an API server using Sinatra and then using the API in Javascript to register the games we play and store the results.

The game will still runs in a single browser instance, i.e., two players don't play each other across different browsers, but rather on a single browser.

More is up and coming - including real time racing. Later in Rails!

The flow of your application will be like this:

1. Two people get on a computer and visit the application
2. When the page loads, ask the API to create a new Game Session
3. Once the Game Session is created, your page will display a button `Start New Game!`
4. When clicked, the button disappears and is replaced by a form where you can type Player1 and Player2 names
5. The players fill out the form. On form submission you will ask the API to create a new Game based on the players' names.
6. When you get a response, hide the form, display the board (what you did in the last exercise). Create a 3 second countdown timer in the middle of the scren, and once the countdown expires, listen for users' input. 
7. Allow each player to smashes their respective key until one of them wins
8. When the game ends, send a request to the API to _finish_ the game, provide the winner and show the time taken to win. This information is also sent to the API and the server records the game as being "done"
9. When you get the API response, display the information on a score board and provide a "Play Again!" button. There will also be a unique URL at which they can view the results of that particular game
10. The players can choose to start another game using their same initials

*** Note: Start by reading the API documentation! ***
* We have provided an [API documentation](API.md) for you to refer for your endpoints.

### Setup

In case you have forgotten, go to the exercise folder

```bash
bundle install
```

### Release 0: Models

You should start by creating the two core models: `Player` and `Game`.  A player can be in many
games and a game can have multiple players.  For now it's "just two," which can 
be hard-coded into the game creation form.

Player names should be unique.  If someone chooses the game initials/name/etc.
as someone else they'll be playing the same "player."  This means there should
be a uniqueness constraint at both the database level by using a `UNIQUE INDEX`
and a [uniqueness constraint][] on the `Player` model.

You can make a UNIQUE INDEX by adding `:unique => true` to your `add_index`
call.  See the [add\_index documentation][].

It's important to enforce this at both the ActiveRecord and database level.
Your database is the only thing that can truly, 100% guarantee uniqueness, but
an error at the database level is both very expensive and hard for user-land to
interactive with.

You should use a [custom ActiveRecord validation][] to ensure that every game
has exactly two players.  This constraint is hard to model on the database
level, so we leave it to ActiveRecord.

*** Hint: The other model you should have is Session. What is the relationship that Session should have? ***

### Release 1: Controllers

Most if not all the routes have been provided to you. The ones provided correspond to:

1. Starting / creating a new game
2. Playing a new game
3. Viewing the results of an old game

Feel free to add more routes if you feel necessary

### Release 2: Views and Flow

Your goal is to create a working application which uses the JavaScript application, where appropriate to run the game.

* Put your JS code in `public/js/game.js` and reference them appropriately from your HTML file
* Put your CSS in `public/css/main.css` and reference them appropriately from your HTML file
* Put your HTML in the views folder as per before.

*** Note *** You would not be able to use `yarn install` for this exercise. If you wish to use Stimulus for this exercise, you may. Follow the instructions (here for using without a build system)[https://stimulusjs.org/handbook/installing#using-without-a-build-system]


## Resources

* [Constraining by uniqueness][uniqueness constraint]
* [DB index constraints][add\_index documentation]
* [Custom validations][custom ActiveRecord validation]

[uniqueness constraint]: http://guides.rubyonrails.org/active_record_validations.html#uniqueness
[add\_index documentation]: http://apidock.com/rails/v3.2.8/ActiveRecord/ConnectionAdapters/SchemaStatements/add_index
[custom ActiveRecord validation]: http://guides.rubyonrails.org/active_record_validations.html#custom-methods