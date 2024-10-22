const http = require('http');
const { readFileSync } = require('fs');

// Get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/epic_logo.png');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

// Function to send response
const sendResponse = (res, statusCode, contentType, content) => {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.write(content);
    res.end();
};

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        sendResponse(res, 200, 'text/html', homePage);
    } else if (url === '/about') {
        sendResponse(res, 200, 'text/html', '<h1>About Page</h1>');
    } else if (url === '/styles.css') {
        sendResponse(res, 200, 'text/css', homeStyles);
    } else if (url === '/epic_logo.png') { // Corrected the URL
        sendResponse(res, 200, 'image/png', homeImage); // Corrected Content-Type
    } else if (url === '/browser-app.js') {
        sendResponse(res, 200, 'text/javascript', homeLogic);
    } else {
        sendResponse(res, 404, 'text/html', '<h1>Page Not Found</h1>');
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});