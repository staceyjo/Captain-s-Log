// ====================== SET UP ======================
// 1. mkdir captains_log
// 2. cd captains_log
// 3. touch server.js
// 4. Set up pacakge.json npm init -y
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
// ====================== NEW ======================
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
// 19. create the New view
// 20. change your res.send to res.render the New view
// 21. 

// Inside /views, create a file called Show.jsx(capitalized) - this will be the html for our show route 

const express = require('express');     // 7b  
const app = express();                  // 7c
const PORT = 5000                       // 8


// // Configure the app (app.set)
// app.set('views', __dirname + '/views'); 
app.set('views', './views') // specify the views directory

// // use a view engine to render dynamic templates
app.set('view engine', 'jsx'); // register the view engine
app.engine('jsx', require('express-react-views').createEngine());



// // Mount middleware (app.use)
// process HTTP requests using middleware


// Mount/Define routes
// Define a "root" route directly on app
app.get('/', function (req, res) {              // 10
    res.send("<h1>Captain's Log!</h1>");
  });


// NEW
app.get("/logs/new", (req,res) => {             // 12
    // res.send("new")                             // 13
    res.render("New")
})


app.listen(PORT,() => {                         // 9
    console.log('listening on port' , PORT);
});