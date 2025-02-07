const UserHubService = require('../services/userHubService');

class BillingController {
    constructor() {
        this.userHubService = new UserHubService();
    }


    async redirectToPortal(req, res) {
        try {
            const portalUrl = process.env.USERHUB_PORTAL_URL; // Assuming the portal URL is passed as a query parameter
            return res.redirect(portalUrl);
        } catch (error) {
            console.error('Error redirecting to portal:', error);
            return res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = BillingController;