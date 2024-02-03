const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the 'dist' directory
app.use(express.static('/home/st111/web/frontend/front/dist'));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
    res.sendFile('/home/st111/web/frontend/front/dist/index.html');
});

// Start the server
const options2 = {
    key: fs.readFileSync('../vite-key.pem'),
    cert: fs.readFileSync('../vite-cert.pem')
};
https.createServer(options2, app).listen(process.env.PORT);