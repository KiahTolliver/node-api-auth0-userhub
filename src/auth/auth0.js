require('dotenv').config();
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
};

function setupAuth(app) {
  app.use(auth(config));
}

function checkAuth(req, res, next) {
  if (req.oidc.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = { setupAuth, checkAuth };