const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleString(); // More detailed time
    console.log(method, url, time);
    next(); // Pass control to the next middleware or route handler
};

module.exports = logger;