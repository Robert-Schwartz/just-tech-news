// call the Sequelize connection constructor function
// ==================================================
// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

//require dotenv to hide password in an environment file
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password from the .env file
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}


/*
All we're doing here is importing the base Sequelize class and using it to create a new connection to the database. The new Sequelize() function accepts the database name, MySQL username, and MySQL password (respectively) as parameters, then we also pass configuration settings. Once we're done, we simply export the connection
*/