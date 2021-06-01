/*  ===============================================================
the User model inherits functionality from the Sequelize Model class. .findAll() is one of the Model class's methods. The .findAll() method lets us query all of the users from the user table in the database, and is the JavaScript equivalent of the following SQL query:

Sequelize is a JavaScript Promise-based library, meaning we get to use .then() with all of the model methods!

REST-ful API notes:
There are a number of guidelines that go into creating a RESTful API,
there are three guidelines we can put to use:

1.  Name your endpoints in a way that describes the data you're interfacing with, such as /api/users.

2.  Use HTTP methods like GET, POST, PUT, and DELETE to describe the action you're performing to interface with that endpoint; for example, GET /api/users means you should expect to receive user data.

3.  Use the proper HTTP status codes like 400, 404, and 500 to indicate errors in a request.
===================================================================== */

/* require router and User object:
const router = require('express').Router();
const { User } = require('../../models');
*/

// API END POINTS accessible at the /api/users URL

// GET/api/users
// =====================================
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    //select all users from the user table in the database and send it back as JSON
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
// =====================================
// Uses Sequelizere's findOne() method to filter to one piece of data using params
// equal to:  SELECT * FROM users WHERE id = 1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
// =====================================
// Uses Sequelizere's .create() method.
// Pass in key/value pairs where the keys are what we defined in the User model and the values are what we get from req.body
/* similar to SQL:
INSERT INTO users
    (username, email, password)
VALUES
    ("Lernantino", "lernantino@gmail.com", "password1234"); */
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/users/1
// =====================================
//To update existing data, use both req.body and req.params
/* This .update() method combines the parameters for creating data and looking up data. We pass in req.body to provide the new data we want to use in the update and req.params.id to indicate where exactly we want that new data to be used.
*************
The associated SQL syntax would look like the following code:
UPDATE users
SET username = "Lernantino", email = "lernantino@gmail.com", password = "newPassword1234"
WHERE id = 1;
*/
router.put('/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
// =====================================
// the .destroy() method and provide some type of identifier to indicate where exactly we would like to delete data from the user database table.
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Export Router!
// module.exports = router;