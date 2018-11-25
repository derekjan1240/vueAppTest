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



//data for test data
app.get('/data', function(req, res) {
	
    results =	[
					  {
					    "userId": 1,
					    "id": 1,
					    "title": "拍謝少年",
					    "body": "一尾台灣土產搖滾樂隊。"
					  },
					  {
					    "userId": 1,
					    "id": 2,
					    "title": "甜梅號",
					    "body": "甜梅號（Sugar Plum Ferry）為一支台灣的後搖滾樂團。於2014年更名為微光群島（Shimmering Islands）。2015年8月18日在臉書粉絲團上宣布樂團解散。"
					  },
					  {
					    "userId": 1,
					    "id": 3,
					    "title": "透明雜誌",
					    "body": "透明雜誌（TOUMING MAGAZINE）是來自台灣台北的獨立樂團。成立於2006年一月。"
					  },
					  {
					    "userId": 1,
					    "id": 4,
					    "title": "盪在空中",
					    "body": "盪在空中，台北獨立樂團，成軍於2007年,對於日本90年代樂團fishmans以及雷鬼、Dub與70's迷幻音樂的喜愛而組成。"
					  },
					  {
					    "userId": 1,
					    "id": 5,
					    "title": "1976",
					    "body": "1976是一個台灣樂團。成立在1996年夏天，成立已超過20年的樂團1976，創作風格深受英倫80年代新浪潮與後龐克音樂影響。已發行過7張創作專輯、3張EP和1張不插電專輯。"
					  }
 			]

 	res.header("Content-Type",'application/json');
    res.send(JSON.stringify(results, null, 4));
    	
});

app.get('/data/:id', function(req, res) {

	// console.log('id', req.params.id);

    results =	[
					  {
					    "userId": 1,
					    "id": 1,
					    "title": "拍謝少年",
					    "body": "一尾台灣土產搖滾樂隊。"
					  },
					  {
					    "userId": 1,
					    "id": 2,
					    "title": "甜梅號",
					    "body": "甜梅號（Sugar Plum Ferry）為一支台灣的後搖滾樂團。於2014年更名為微光群島（Shimmering Islands）。2015年8月18日在臉書粉絲團上宣布樂團解散。"
					  },
					  {
					    "userId": 1,
					    "id": 3,
					    "title": "透明雜誌",
					    "body": "透明雜誌（TOUMING MAGAZINE）是來自台灣台北的獨立樂團。成立於2006年一月。"
					  },
					  {
					    "userId": 1,
					    "id": 4,
					    "title": "盪在空中",
					    "body": "盪在空中，台北獨立樂團，成軍於2007年,對於日本90年代樂團fishmans以及雷鬼、Dub與70's迷幻音樂的喜愛而組成。"
					  },
					  {
					    "userId": 1,
					    "id": 5,
					    "title": "1976",
					    "body": "1976是一個台灣樂團。成立在1996年夏天，成立已超過20年的樂團1976，創作風格深受英倫80年代新浪潮與後龐克音樂影響。已發行過7張創作專輯、3張EP和1張不插電專輯。"
					  }
 			]

 	res.header("Content-Type",'application/json');
    res.send(JSON.stringify(results[req.params.id-1], null, 4));
    	
});

app.get('*', function(req, res) {
    res.sendfile('./dist/index.html');
});


// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});