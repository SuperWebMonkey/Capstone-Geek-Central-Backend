# Geek Central Backend

Backend portion of the website that stores the product information in mongodb using mongoose.

# requirements

1. an ide to run it (vscode highly recommended)
2. Install node
3. Install express (npm i express)
4. Install Mongoose (npm i mongoose)
5. postman or vscode postman (highly recommended)
6. install nodemon in your local environment (npm i --save-dev nodemon

## Installation

1. git clone https://github.com/SuperWebMonkey/Capstone-Geek-Central-Backend.git
2. cd Capstone-Geek-Central-Backend
3. npm install
4. npm start dev

## Features

- Api routes to different pages
- Navigate the different requests using the browser
- Use postman to get the collection or to make an HTTP request

## how to use

- Go to the api route
- Use the postman app or vscode extension
- Select the http request GET, PUT, POST, DELETE
- For post and put requests, put in the header Content-Type for the key and
  application/json for the data.
- Also for post and put, create an object and add all key value pairs that
  are necessary for the request.
- Delete just needs the api at the end

## api endpionts

- localhost:3000 | home
- localhost:3000/products | shows the entire product collection
- localhost:3000/products/:id | Shows a specific product based on the id

- GET localhost:3000/products | Retrieve all products
- GET localhost:3000/products:id | Retrieve a specific product

## Tech Stack Used

- JS
- Mongoose
- MongoDB
- Express
