
![Logo](https://www.natours.dev/img/logo-green.png)


## Deployed Version

https://forkify-aleksandar-milosheski.netlify.app/

## Screenshots
* Home Page :
![App Screenshot](https://user-images.githubusercontent.com/58518192/72606801-7ebe0680-3949-11ea-8e88-613f022a64e5.gif)
* Tour Details :
![App Screenshot](https://user-images.githubusercontent.com/58518192/72606859-a0b78900-3949-11ea-8f0d-ef44c789957b.gif)
* Payment Process :
![App Screenshot](https://user-images.githubusercontent.com/58518192/72606973-d9eff900-3949-11ea-9a2e-f84a6581bef3.gif)
* Booked Tours :
![App Screenshot](https://user-images.githubusercontent.com/58518192/72607747-6a7b0900-394b-11ea-8b9f-5330531ca2eb.png)
* User Profile :
![App Screenshot](https://user-images.githubusercontent.com/58518192/72607635-44edff80-394b-11ea-8943-64c48f6f19aa.png)
* Admin Profile :
![App Screenshot](https://user-images.githubusercontent.com/58518192/72607648-4d463a80-394b-11ea-972f-a73160cfaa5b.png)

# Key Features

* Authentication and Authorization - Login and logout
* Tour - Manage booking, check tours map, check users' reviews and rating
* User profile - Update username, photo, email, and password
* Credit card Payment


# How to use

## Book a tour

- Login to the site
- Search for tours that you want to book
- Book a tour
- Proceed to the payment checkout page
- Enter the card details (Test Mood):

```bash
- Card No. : 4242 4242 4242 4242
- Expiry date: 02 / 26
- CVV: 222
```
- Finished!

## Manage your booking
- Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this page after you have completed the booking.

## Update your profile

- You can update your own username, profile photo, email and password.
## API Usage

Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:

```bash
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
- {{password}} with your user password as value.
```
Check Natours API Documentation for more info.

### API Features:

Tours List - https://natours-ecommerce.herokuapp.com/api/v1/tours

Tours State - https://natours-ecommerce.herokuapp.com/api/v1/tours/tour-stats

Get Top 5 Cheap Tours - https://natours-ecommerce.herokuapp.com/api/v1/tours/top-5-cheap

Get Tours Within Radius - https://natours-ecommerce.herokuapp.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi


## Deployment

The website is deployed with git into heroku. Below are the steps taken:
```bash
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
heroku config:set CONFIG_KEY=CONFIG_VALUE
parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js
git push heroku master
heroku open
```
You can also changed your website url by running this command:
```bash
heroku apps:rename natours-users
```

## Build With

* NodeJS - JS runtime environment
* Express - The web framework used
* Mongoose - Object Data Modelling (ODM) library
* MongoDB Atlas - Cloud database service
* Pug - High performance template engine
* JSON Web Token - Security token
* ParcelJS - Blazing fast, zero configuration web application bundler
* Stripe - Online payment API
* Postman - API testing
* Mailtrap & Sendgrid - Email delivery platform
* Heroku - Cloud platform
## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the dependencies by running

```bash
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```


    
## Known Bugs

Feel free to email me at ace.ki@hotmail.com if you run into any issues or have questions, ideas or concerns. Please enjoy and feel free to share your opinion, constructive criticism, or comments about my work. Thank you!
## Future Updates

* Enable PWA
* Improve overall UX/UI and fix bugs
* Featured Tours
* Recently Viewed Tours
* And More ! There's always room for improvement!
## 🚀 About Me
I'm a full stack developer...
https://www.linkedin.com/in/aleksandarmilosheski/
