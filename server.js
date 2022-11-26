// ====================== SET UP ======================
// 1. mkdir captains_log
// 2. cd captains_log
// 3. touch server.js
// 4. Initialize npm directory/Set up pacakge.json npm init -y
// 5. touch .gitignore
// 6. add node_modules to .gitignore file
// 7. create new express app:
//  7a. install express module: npm i express
//  7b. require modules/Load express: const express = require("express")
//  7c. create express app:  const app = express();
// 8. set port to server 5000 (can also use 3000, 8080)
// 9. tell the app to listen on port 5000 for HTTP requests from clients
// 10. define a root route to test
// 11. run the app: node server or nodemon
//  11b. if nodemon not installed: sudo npm i -g nodemon 
// ============================ NEW ============================
//      Action   URL        HTTP Verb	jsx view filename	mongoose method     what it does
//      New	    /logs/new	GET	        New.jsx	            none                returns a new form to create a new resource
// 12. create a new route in server.js
// 13. have it res.send('new') as the response for now
// 14. test in browser: http://localhost:5000/logs/new
// 15. create a views directory inside our app directory: mkdir views
// 16 install express-react-views react react-dom: 
// npm install express-react-views react react-dom --save
// 17. cd views
// 18. touch New.jsx
// 19. create the New view - this will be the html for our New route
// 21. configure the app/ specify the views directory
// 21b. set the app to register the view engine
// 21c. create the view engine to render dynamic templates
// 22. change your res.send to res.render the New view
// 22b. push to github
// ============================ CREATE ============================
//      Action   URL                HTTP Verb	jsx view filename	mongoose method     what it does
//      Create	 /logs/ or /logs	POST	    	                Log.create(req.body)    saves a new resource to the database
// 23. create a Create route in your server.js
// 24. have it res.send('received') as the response for now
// 25. use and configure body-parser in your server.js express.urlencoded
//     Tell express to use the middleware/ use built-in middleware function to view the body of a post request
// 26. change the res.send from a string to sending the req.body- it should send the data you inputted to your newform
// 27. upgrade your data ?
// 28. change the input of your checkbox to be true/false rather than on
// 29. now when you check the borwser, you should see true/ false rather than on
// 30. push to github
// ============================ MONGO ============================
// 31. install mongoose and configure it in your server.js:
// 31b. install dotenv node package/ module : npm i dotenv --save
// 31c. create a .env file: touch .env
// 31d. add connection string into the .env: MONGO_URI = mongodb+srv://slyjo:<password>@w8d2cluster1.l6tqre4.mongodb.net/logs?retryWrites=true&w=majority
// 313. add .env to .gitignore file
// 31f. import and configure dotenv at the start of your application: require('dotenv').config()
// 31g. install mongoose: npm i mongoose
// 31h. require modules/Load mongoose:
// 31i. connect with mongoose
// 31j. connect express to mongoose
// 31k. run nodemon to verify connection is working

require('dotenv').config()                                              // 31f
const express = require('express');                                     // 7b  
const app = express();                                                  // 7c
const PORT = 5000                                                       // 8
const mongoose = require("mongoose")                                    // 31h


//=================================CONNECTION TO DATABASE WITH MONGOOSE =================================

mongoose.connect(process.env.MONGO_URI, {       // 31i
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });

mongoose.connection.once("open",() => {         // 31j
    console.log("connected to mongo")
})


// app.set('views', __dirname + '/views'); 
app.set('views', './views')                                             // 21
app.set('view engine', 'jsx');                                          // 21b
app.engine('jsx', require('express-react-views').createEngine());       // 21c


// ============================ MIDDLEWARE  ============================
app.use(express.urlencoded({ extended: false }));                       // 25

// Define/Mount middleware to process HTTP requests:
app.use((req, res, next) => {
    // console.log('I run for all routes');
    next();
});


// Mount/Define routes
// ============================ ROOT ===================================
// Define a "root" route directly on app
app.get('/', function (req, res) {                                      // 10
    res.send("<h1>Captain's Log!</h1>");
});


// ============================ NEW ====================================
app.get("/logs/new", (req, res) => {                                    // 12
    // res.send("new")                                                  // 13
    res.render("New")                                                   // 22
})


// ============================ CREATE =================================
app.post("/logs", (req, res) => {                                       // 23
    // res.send("received")                                             // 24
    if (req.body.shipIsBroken === "on") {                               // 28
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    res.send(req.body)                                                  // 26
})


app.listen(PORT, () => {                                                // 9
    console.log('listening on port', PORT);
});