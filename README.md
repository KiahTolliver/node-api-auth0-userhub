# Node API with Auth0 and UserHub

This project is a simple Node.js API that uses Auth0 for authentication and integrates with UserHub to manage billing.

## Project Structure

```
node-api-auth0-userhub
├── src
│   ├── app.js                # Entry point of the application
│   ├── auth
│   │   └── auth0.js         # Auth0 authentication configuration
│   ├── controllers
│   │   └── billingController.js # Handles billing-related requests
│   ├── routes
│   │   └── billingRoutes.js  # Sets up routes for billing operations
│   └── services
│       └── userHubService.js # Interacts with UserHub API for billing
├── package.json              # npm configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/node-api-auth0-userhub.git
   cd node-api-auth0-userhub
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Auth0 credentials and UserHub API keys:
   ```
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
AUTH0_SECRET=your-auth0-secret
BASE_URL=http://localhost:3000
SESSION_SECRET=your-session-secret
USERHUB_PORTAL_URL=your-userhub-portal-url
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

- The API provides endpoints for managing billing through UserHub.
- Use Auth0 to authenticate requests before accessing billing routes.

## Endpoints

 ###Auth0 Endpoints
- Login: /api/login
Initiates the Auth0 login process.
- Callback: /api/callback
Handles the Auth0 callback after authentication.

### Billing Endpoints
- Create Portal Session: GET /api/userhub
- Description: Creates a UserHub portal session.
- Protected: Yes

```
curl --request GET \
  --url http://localhost:3000/api/redirect-to-portal \
  --header 'authorization: Bearer YOUR_ACCESS_TOKEN'
```

## License

This project is licensed under the MIT License.