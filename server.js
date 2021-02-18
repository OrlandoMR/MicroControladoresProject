const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/MicroControladoresProject'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/MicroControladoresProject/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
