<!-- Source: https://github.com/othneildrew/Best-README-Template/blob/main/BLANK_README.md -->
<a id="readme-top"></a>

# Geek Central Backend

Backend portion of the website that stores the product information in mongodb using mongoose.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

# requirements

1. an ide to run it (vscode highly recommended)
2. Install node
3. Install express (npm i express)
4. Install Mongoose (npm i mongoose)
5. postman or vscode postman (highly recommended)
6. install nodemon in your local environment (npm i --save-dev nodemon

## Installation

1. Clone the repo 
   ```git
    git clone https://github.com/SuperWebMonkey/Capstone-Geek-Central-Backend.git
   ```
2. Go to the directory
   ```sh
   cd Capstone-Geek-Central-Backend
   ```
3. Install all packages
   ```npm
   npm install
   ```
4. Start the server
   ```npm 
   npm start dev
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

### Built With

* [![React][React.js]][React-url]
* [![JavaScript][javascript]]
* [![MongoDB][mongodb]]
* [![Mongoose][mongoose]]
* [![Express][express]]


<p align="right">(<a href="#readme-top">back to top</a>)</p>
