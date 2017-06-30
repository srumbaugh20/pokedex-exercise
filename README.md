# React Pokedex
Welcome to the React Pokedex, a fun way to learn React!

## Installation instructions

First clone this repository:
`git clone <url>`

Next install the dependencies (I assume that you already have Node.js and NPM installed):
`cd pokeapi && npm install`

Finally, start the development server:
`npm start`

Now if you visit [locahost:3000](localhost:3000) you should see a simple pokedex screen with a Pikachu,
and if you visit [localhost:3004/pokemon](localhost:3004/pokemon) you should see some raw json pokemon data.  You are ready to start!


## Exercise

I've got some exercises for you to do, good luck!

1. Look at that poor Pikachu, he's all alone!  Let's fetch some of his friends!
Remove the hard-coded Pikachu card and make a data request to the API endpoint [localhost:3004/pokemon](localhost:3004/pokemon) to load and display pokemon cards dynamically.

2. Loading all 150 Pokemon all at once is terribly inefficient.  What will happen
when we add the next 800 or so Pokemon to our database?!?  Instead use pagination
to only load 10 Pokemon at a time. You could add a 'next' button to load each
subsequent page, or automatically load the next page as the user scrolls. Check out the
[json-server docs on pagination](https://github.com/typicode/json-server#paginate) to see how to complete this step.

3. With all these Pokemon, it sure would be nice if our Pokedex could search for
them by name for us! Who has time to scroll through all these pages anyway?  Make
the search bar with the "Who's that Pokemon?" placeholder text functional.
Instead of searching through the Pokemon client side, you should send the search
to the API so that it can return the search results for us. Check out the [json-server docs on searching](https://github.com/typicode/json-server#full-text-search)
to see how to complete this step.

4. We all know that an ambitious Pokemon trainer like yourself is using this Pokedex for
one reason only; to catch 'em all! Add something like a checkbox to each Pokemon
so that you can mark which ones you've caught.  Maybe keep track of the total number
of captured Pokemon and show that somewhere too?  You should be able to save a 'captured' true/false flag
to the API for each Pokemon when you check it. According to the json-server docs,
"If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved".

## Acknowledgements
This project is powered by [Create React App](https://github.com/facebookincubator/create-react-app) and [json-server](https://github.com/typicode/json-server).

