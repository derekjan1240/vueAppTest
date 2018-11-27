const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const fs = require('fs');
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

/*temp route*/
//影片封包
app.get('/video/:courseName/:coursrEp', (req, res, next) => {

	const path = 'videos/' + req.params.courseName + '/' + req.params.coursrEp +'.mp4'
	const stat = fs.statSync(path)
	const fileSize = stat.size
	const range = req.headers.range

	
	if (range) {

		const parts = range.replace(/bytes=/, "").split("-");

		const start = parseInt(parts[0], 10)
		const end = parts[1]
		  ? parseInt(parts[1], 10)
		  : fileSize-1

		//console.log('start:',start,'end:',end);  

		const chunksize = (end-start)+1
		const file = fs.createReadStream(path, {start, end})

		const head = {
		  'Content-Range': `bytes ${start}-${end}/${fileSize}`,
		  'Accept-Ranges': 'bytes',
		  'Content-Length': chunksize,
		  'Content-Type': 'video/mp4',
		}

		//console.log('head:',head);

		res.writeHead(206, head)
		file.pipe(res)
	} else {
		const head = {
		  'Content-Length': fileSize,
		  'Content-Type': 'video/mp4',
		}
		res.writeHead(200, head)
		fs.createReadStream(path).pipe(res)
	}

});


app.get('*', function(req, res) {
    res.sendfile('./dist/index.html');
});


// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});