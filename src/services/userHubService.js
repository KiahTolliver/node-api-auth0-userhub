require('dotenv').config();
const { AdminApi } = require('@userhub/sdk'); // Ensure this matches the actual SDK import

class UserHubService {
    constructor() {
        this.userHubClient = new AdminApi({
            adminKey: process.env.USERHUB_API_KEY, // Ensure you have this in your .env file
        });
    }

    async getUserList() {
        return this.userHubClient.users.list();
    }

   
    async createPortalSession(userId, portalUrl) {
        const connectionId = process.env.USERHUB_USER_CONNECTION_ID;
        return this.userHubClient.users.createPortalSession({
            user_id: `${userId}@${connectionId}`,
            portal_url: portalUrl,
        });
    }
}

module.exports = UserHubService;