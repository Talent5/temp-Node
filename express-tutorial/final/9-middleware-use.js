const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

// Middleware
app.use([logger, authorize])

// Routes
app.get('/',  (req, res) => {
    res.send('Home Page');
});

app.get('/about',  (req, res) => {
    res.send('About Page');
});

app.get('/api/products',  (req, res) => {
    res.send('Products');
})

app.get('/api/items',  (req, res) => {
    console.log(req.user);
    res.send('Items');
})

// Server
app.listen(5000, () => {
    console.log('Server is listening on port 5000....');
});
