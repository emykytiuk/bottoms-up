# README

Thirsty? Enjoy one (or more) beverages from some of the best breweries around! Meet us at https://bottoms-up-em.herokuapp.com/ for a drink. 

Bottoms up is a React/TS app using Ruby/Rails, GraphQL styled with TailwindCSS and deployed via heroku.


## To Run Locally:

Note: In order to run locally, Rails & PostGres must be installed
1. Download code
2. In `/bottoms-up` start the server with `rails c`
3. Run `rake db:create db:migrate db:seed` in the terminal to create and seed the database (ensure postgres server running)
4. Start the app in `/bottoms-up/client` with `npm start`
5. Open http://localhost:3001/ and enjoy!
