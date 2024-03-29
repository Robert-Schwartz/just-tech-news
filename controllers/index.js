/*
File to collect the packaged API routes:
Much like the API folder's index.js file that collects the endpoints and prefixes them, here we are collecting the packaged group of API endpoints and prefixing them with the path /api.

Also, note that second use of router.use(). This is so if we make a request to any endpoint that doesn't exist, we'll receive a 404 error indicating we have requested an incorrect resource, another RESTful API practice.

Now when we import the routes to server.js, they'll already be packaged and ready to go with this one file! Let's get server.js set up now.

Make sure that the server.js file you created is at the root of the entire project.
*/

const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;


