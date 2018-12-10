const Course = require('../models/course-model');
const User = require('../models/user-model');
const router = require('express').Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

router.post('/signin', (req, res)=> {

	let userName = req.body.userName,
		userPassword = req.body.password;

	if(userName && userPassword){

		// Account Check
	    User.findOne({email: userName}).then((dbUser) => {

	    	// Account Exist
	        if(dbUser){
	            //Password Check    
	            if(!bcrypt.compareSync(userPassword, dbUser.password)){    
	                // Password Wrong
	                resMsg(res, 'Wrong Password!');
	            }else{
	                // Password Correct
	                const payload = {
					  	user_id: dbUser._id,
					  	user_name: dbUser.username,
					  	user_course: dbUser.ownedCourse
					};

					const token = jwt.sign( {payload}, 'secretkey', { expiresIn: '2h' }, (err, token) => {
						// console.log('token:',token)
					    //signin success
	                	res.header("Content-Type",'application/json');
						res.status(200).send(JSON.stringify({
							message: 'success login!',
							token: token
						}, null, 4));
				  	});
	            }
	            
	        // Can Not Find The Account     
	        }else{
	        	resMsg(res, 'Can Not Find The Account!');
	        }
	    });

	}else{
		resMsg(res, 'No Input Post!')
	}

});



router.post('/signup', (req, res)=> {

	let userName = req.body.userName,
		userPassword = req.body.password;

	if(userName && userPassword){

		// Account Check
	    User.findOne({email: userName}).then((dbUser) => {

	    	// Account Exist
	        if(dbUser){
	        	resMsg(res, 'Sorry, The Account is Exist!');
	        // Account Can Be Create
	        }else{
	        	//create user in DB
	        	resMsg(res, 'Signup success!');
	        }
	    });

	}else{
		resMsg(res, 'No Input Post!')
	}
	
});


router.post('/verifyToken', verifyToken, (req, res) => {  

	console.log('req.token:', req.token);

	if(req.token){
		jwt.verify(req.token, 'secretkey', (err, authData) => {
		    if(err) {
		    	console.log(err);
		      	res.sendStatus(403);
		    } else {
		    	console.log('authData:', authData);
		    	/* authData :
		    	{ 	
		    		payload:
				   	{ 	
				   		user_id: '5bb4e3a2f4a0200bf0df90df',
				     	user_name: 'KAI - JIAN Zhan',
				     	user_course: [ 'C++_pay', 'Java_pay' ] 
				    },
				  	iat: 1544450506,
				  	exp: 1544457706 
				}
				 */

		      	res.json({
			        message: 'verifyToken',
			        authData
		      	});
		    }
	  	});
	}else{
		console.log('Without Token!');
		res.sendStatus(403);
	}
  	
});



function resMsg(res, msg){

	res.header("Content-Type",'application/json');
	res.status(200).send(JSON.stringify({
		message: msg
	}, null, 4));
}

function verifyToken(req, res, next) {
	// Get auth header value
  	const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
  	// console.log('bearerHeader:', bearerHeader);
    req.token = bearerHeader;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}


module.exports = router;
