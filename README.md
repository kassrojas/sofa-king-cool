# Sofa King Cool

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This javascript driven application allows users to create, read, update, and delete rooms and furniture. Users must create an account to be able to add rooms and furniture to their rooms. Rooms of any kind can be added and a catalog of furniture is provided through the furniture database. If a user wishes to add a piece of furniture that does not exist in the database, they can create their own custom furniture post. This custom item can take in the piece's name, price values, user notes, and an image of the furniture piece. User can always return to their account to find their rooms still storing their chosen furniture.

## Table of Contents

* [Installation](#installation)
* [Technologies](#technologies)
* [Visuals](#visuals)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following commands:

- ```npm init -y``` is necessary to install package.json

- ```mysql -uroot``` followed by ```source db/schema.sql``` is necessary to create the furniture database

- ```npm run setup``` will install all necessary dependencies, create a copy of the environment variables, and sync the database

- ```npm run seed``` is necessary to properly seed the database

- ```npm run watch``` starts the application

## Technologies

```Node.js``` and ```Express.js``` was used to create a RESTful API.

```Handlebars.js``` was used as a templating engine for the application.

```MySQL``` and ```Sequelize ORM``` was used for creating, seeding, and syncing the database. 

```Cloudinary``` package was used for functionality of adding images.

```Bcrypt``` package was used to secure user passwords.

## Visuals

"How To Get Started" briefs users on functionality of the webpage as well as allowing them to login or signup:

![Screenshot](./public/images/app-login-page.png)

"Search" page allows users to view all furniture matching the selected furniture type. From this page, users can add furniture to their selected room:

![Screenshot](./public/images/app-homepage.png)

"Add Custom Furniture" page allows users to add their own furniture and its details. Users have the option to add custom notes as well as images attached to the furniture items created. Following creation of a custom piece, a user can add their furntiure to any room:

![Screenshot](./public/images/app-furniture-page.png)

## License

This project is licensed under the MIT. 
For license notice, please click on the license badge at the top of this readme file or here: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contributing

Listed are all members of the team and their linked GitHub accounts:

* [Daniel Bartolini](https://github.com/djbartolini)

* [Adam Queen](https://github.com/Smoke5643)

* [Sy Mont](https://github.com/Saidou25)

* [Kassandra Rojas](https://github.com/kassrojas)

## Tests

N/A

## Questions

If you have any other questions, please visit our [GitHub repository](https://github.com/kassrojas/sofa-king-cool).

