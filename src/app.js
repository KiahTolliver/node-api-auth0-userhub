require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { setupAuth } = require('./auth/auth0');
const setRoutes = require('./routes/billingRoutes'); // Ensure this path is correct

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Configure session middleware
app.use(session({
    secret: process.env.SESSION_SECRET, // Ensure you have this in your .env file
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Use Auth0 middleware
setupAuth(app);

// Set up routes
setRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});