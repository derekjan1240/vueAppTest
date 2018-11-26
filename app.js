const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

const keys = require('./src/server/config/keys');
const courseRoutes = require('./src/server/routes/courses-routes');

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//accept CORS
app.use(cors());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/course', courseRoutes);

app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', function(req, res) {
    res.sendfile('./dist/index.html');
});


// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});