const express = require('express');
const BillingController = require('../controllers/billingController');

const setRoutes = (app) => {
    const router = express.Router();
    const billingController = new BillingController();

    router.get('/redirect-to-portal', billingController.redirectToPortal);
        
    // Auth0 login route
        
    router.get('/login', (req, res) => {
            res.oidc.login({ returnTo: '/' });
        });
    
        // Auth0 callback route
     router.get('/callback', (req, res) => {
            res.redirect('/');
        });

    app.use('/api', router);
};

module.exports = setRoutes;