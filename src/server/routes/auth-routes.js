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


	            let isValidPassword = function (dbUser, userPassword) {
                    return bcrypt.compareSync(userPassword, dbUser.password)
                }

                console.log(bcrypt.compareSync(userPassword, dbUser.password));
                

	            if( !isValidPassword){  
	            	console.log('Correct password:', dbUser.password);  
	                // Password Wrong
	                resMsg(res, 'Wrong Password!');
	            }else{
	                // Password Correct
	                console.log('Correct password!'); 
	                const payload = {
					  	user_id: dbUser._id,
					  	user_name: dbUser.username,
					  	user_course: dbUser.ownedCourse
					};

					const token = jwt.sign( {payload}, 'secretkey', { expiresIn: '12h' }, (err, token) => {
						console.log('token:',token)
					    //signin success
	                	
	                	resMsg(res, token);
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



// router.post('/signup', (req, res)=> {

// 	let userName = req.body.userName,
// 		userPassword = req.body.password;

// 	if(userName && userPassword){

// 		// Account Check
// 	    User.findOne({email: userName}).then((dbUser) => {

// 	    	// Account Exist
// 	        if(dbUser){
// 	        	resMsg(res, 'Sorry, The Account is Exist!');
// 	        // Account Can Be Create
// 	        }else{
// 	        	//create user in DB
// 	        	resMsg(res, 'Signup success!');
// 	        }
// 	    });

// 	}else{
// 		resMsg(res, 'No Input Post!')
// 	}
	
// });

router.post('/signup', verifyToken, (req, res) => {  
	console.log('req.token:', req.token);
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
    	console.log(err);
      res.sendStatus(403);
    } else {
    	console.log('authData:', authData);
      	res.json({
	        message: 'verifyToken',
	        authData
      	});
    }
  });
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
  	console.log('bearerHeader:', bearerHeader);
    // Split at the space
    // const bearer = bearerHeader.split(' ');
    // Get token from array
    // const bearerToken = bearer[1];
    // Set the token
    req.token = bearerHeader;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}


module.exports = router;
