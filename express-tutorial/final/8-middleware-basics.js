const express = require('express');
const app = express();

// Middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleString(); // More detailed time
    console.log(method, url, time);
    next(); // Pass control to the next middleware or route handler
};

// Routes
app.get('/', logger, (req, res) => {
    res.send('Home Page');
});

app.get('/about', logger, (req, res) => {
    res.send('About Page');
});

// Server
app.listen(5000, () => {
    console.log('Server is listening on port 5000....');
});
