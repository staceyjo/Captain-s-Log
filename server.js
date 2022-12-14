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
// 11b. if nodemon not installed: sudo npm i -g nodemon 
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
// 21d. for readability change :app.engine('jsx', require('express-react-views').createEngine());
// to: app.engine("jsx", reactViews.createEngine())
// 21e. set reactViews dependency: const reactViews = require('express-react-views')
// 22. change your res.send to res.render the New view
// 22b. push to github
// ============================ CREATE ============================
//      Action   URL                HTTP Verb	jsx view filename	mongoose method     what it does
//      Create	 /logs/ or /logs	POST	    New.jsx	            Log.create(req.body)    saves a new resource to the database
// 23. create a Create route in your server.js
// 24. have it res.send('received') as the response for now
// 25. use and configure body-parser in your server.js express.urlencoded (npm install body parser)
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
// ============================ LOGS MODEL ============================
// 32. mkdir models
// 33. cd models
// 34. touch logs.js
// 35. Create the logs.js schema
// 35b. title: string
// 35c. entry: string
// 35d. shipIsBroken: Boolean
// 35e. bonus: shipIsBroken: Boolean- set a default to true
// 35f. super bonus:as a second argument to mongoose.Schema(), add { timestamps: true }
// ============================ UPGRADE CREATE ROUTE ============================
// 36. upgrade your code to create your log in MongoDB
//     / Have create route create data in MongoDB
// 36b. require Log schema
// 37. have your route redirect to the show page after create
// 38. don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
// 39. Stretch: make a seed file and seed it:
// 39b. in captains_log, touch seeds.js file
// ============================ INDEX ROUTE ============================
// 40. in server.js make an index route
// 41. test it by res.send("index")
// 42. fill out you restful table:
//      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
//      1	Index	    /logs/ or /logs	GET	        Index.jsx	        Log.find()              returns a collection of resources
// 43. create Index.jsx
// 44. change res.send to res.render Index.jsx
// 45. in Index.jsc add link to create new log
// ============================ SHOW ROUTE ============================
// 46. fill out restful table:
//      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
//      2	Show        /logs/:id       GET         Show.jsx            Log.findById()          returns an existing resource
// 47. in server.js make a show route
// 48. create a mongo query and res.send your data as a string
// 49. upgrade Index.jsx so that each title links to its show page
// 50. cd views, touch Show.jsx and add HTML:
// 51. show the title
// 52. show the entry
// 53. show whether the ship is broken or not
// 54. add a link back to the index page
// 55. if you had added time stamps to your model, display the date the entry was created
// 56. upgrade your res.send to a res.render of your Show.jsx
// 57. git add and git commit
// ============================ DELETE ROUTE ============================
// 58. fill out the restful table
//      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
//      7	Destroy     /logs/:id       DELETE         Index.jsx        Log.findByIdAndDelete() deletes an existing resource in the database
// 59. in Index.jsx, add a delete form
// 60. install and configure method-override
// 60b. npm i method-override
// 60c. include the method-override package: const methodOverride = require('method-override');
// 60d. after app has been defined, use methodOverride.  We'll be adding a query parameter to our delete form named _method
// 61. upgrade your delete form to have the appropriate action and method
// 62. make your delete route in your server.js
// 63. make your delete route delete your log and redirect back to your index route
// 64. git add and git commit
// ============================ EDIT ROUTE ============================
// 65. Fill out your Restful table
//      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
//      6	Update      /logs/:id       PUT/PATCH       Index.jsx           Log.findByIdAndUpdate() updated an existing resource 
// 66. in your Index.jsx, add a link to your edit route
// 67. create your edit route in your server.js
// 68. cd views
// 69. touch Edit.jsx
// 70. create your Edit.jsx
// 71. Test it to make sure it works:
// ============================ UPDATE ROUTE ============================
// 72. Fill out your Restful table
//      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
//      6	Update      /logs/:id       PUT/PATCH   Index.jsx           Log.findByIdAndUpdate() updated an existing resource 
// 73. upgrade your Edit.jsx form to have the appropriate action and method
// 74. create your update/PUT route
// 75. First, just have it res.send the updated log and check it is as expected
// 75, when you go back to /logs and refresh, you'll see the updates
// 76. change the res.send to a res.redirect to your index page
// ============================ ROUTER/CONTROLLERS ============================
// 77. mkdir controllers
// 78. cd controllers
// 79. touch logs.js
// 80. work on refactoring your code so your logs routes are in your controller file, rather than in server.js
// 81. require controller and add to dependencies: const logsController = require("./controllers/logs")

// Create a Layout Folder
// Make Default.jsx
// Use The Default.jsx on our pages


//=================================DEPENDENCIES =================================

require('dotenv').config();                                                 // 31f
const express = require('express');                                         // 7b  
const app = express();                                                      // 7c
const PORT = 5000;                                                          // 8
const reactViews = require('express-react-views')                           // 21e
const mongoose = require("mongoose");                                       // 31h
const Log = require("./models/logs");                                       // 36b
const methodOverride = require('method-override');                          // 60c
const logsController = require("./controllers/logs")                        // 81

//=================================CONNECTION TO DATABASE WITH MONGOOSE =================================

mongoose.connect(process.env.MONGO_URI, {                                   // 31i
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

mongoose.connection.once("open", () => {                                    // 31j
    console.log("connected to mongo");
});


//=================================SET APP & VIEW ENGINE =================================
// app.set('views', __dirname + '/views'); 
app.set('views', './views');                                                // 21
app.set('view engine', 'jsx');                                              // 21b
// app.engine('jsx', require('express-react-views').createEngine());        // 21c
app.engine("jsx", reactViews.createEngine())                                // 21d

// ============================ MIDDLEWARE  ============================
app.use(express.urlencoded({ extended: false }));                           // 25
app.use(methodOverride('_method'));                                         // 60d

// Define/Mount middleware to process HTTP requests:
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


// // Mount/Define routes
app.use("/logs", logsController)

// // ============================ ROOT ===================================
// // Define a "root" route directly on app

// app.get('/', function (req, res) {                                          // 10
//     res.send("<h1>Captain's Log!</h1>");
// });

// ============================ INDEX ===================================
//      #	Action	    URL	                HTTP Verb	jsx view filename	mongoose method         what it does
//      1	Index	    /logs/ or /logs	    GET	        Index.jsx	        Log.find()              returns a collection of resources

// app.get("/logs", (req, res) => {                                            // 40
//     // res.send("index")                                                    // 41
//     // res.render("Index")
//     Log.find({}, (error, allLogs) => {
//         if (!error) {
//             res.status(200).render("Index", {                               // 44
//                 logs: allLogs
//             })
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })


// // ============================ NEW ====================================
// //      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
// //      3	New	        /logs/new	    GET	        New.jsx	            none                    returns a new form to create a new resource

// app.get("/logs/new", (req, res) => {                                        // 12
//     // res.send("new")                                                      // 13
//     res.render("New");                                                      // 22
// });

// // ============================ DELETE ===================================
// //      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
// //      7	Destroy     /logs/:id       DELETE       Index.jsx          Log.findByIdAndDelete() deletes an existing resource in the database
// app.delete("/logs/:id", (req, res) => {                                     // 62
//     Log.findByIdAndDelete(req.params.id, (error, data) => {
//         // res.send("deleting");
//         res.redirect("/logs")                                               // 63
//     })
// });


// // ============================ UPDATE ===================================
// //      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
// //      6	Update      /logs/:id       PUT/PATCH                       Log.findByIdAndUpdate() updates an existing resource 

// app.put("/logs/:id", (req, res) => {                                            // 74
//     if(req.body.shipIsBroken === "on"){
//         req.body.shipIsBroken = true;
//     } else {
//         req.body.shipIsBroken = false;
//     }
//     Log.findByIdAndUpdate(req.params.id, req.body, (error, editedLog)=> {
//         // res.send(editedLog)                                                     // 75
//         console.log(editedLog)
//         res.redirect(`/logs/${req.params.id}`)                                     // 76
//     })
// })

// // ============================ CREATE =================================
// //      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
// //      4	Create	    /logs/ or /logs	POST	    	                Log.create(req.body)    saves a new resource to the database

// app.post("/logs", (req, res) => {                                           // 23
//     // res.send("received")                                                 // 24
//     if (req.body.shipIsBroken === "on") {                                   // 28
//         req.body.shipIsBroken = true;
//     } else {
//         req.body.shipIsBroken = false;
//     }
//     // res.send(req.body)                                                   // 26
//     Log.create(req.body, (error, createdLog) => {                           // 36
//         // res.send(createdLog)                         
//         if(!error) {
//             res.status(200).redirect("/logs");                              // 37
//         } else {
//             res.status(400).send(error);
//         }
//     });
// });


// // ============================ EDIT ===================================
// //      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
// //      5	Edit        /logs/:id/edit  GET         Edit.jsx            Log.findById()          returns a form to edit an existing resource

// app.get("/logs/:id/edit", (req, res) => {
//     Log.findById(req.params.id, (error, foundLog) => {
//         if(!error) {
//             res.status(200).render("Edit", {log:foundLog})
//         } else {
//             res.status(400).send({msg:error.message})
//         }
//     })
// })



// // ============================ SHOW ===================================
// //      #	Action	    URL	            HTTP Verb	jsx view filename	mongoose method         what it does
// //      2	Show        /logs/:id       GET         Show.jsx            Log.findById()          returns an existing resource

// app.get("/logs/:id", (req, res) => {                                        // 47
//     Log.findById(req.params.id, (error, foundLog) => {
//         // res.send(foundLog)                                                // 48 
//         if(!error) {
//             res.status(200).render("Show", {                                // 56
//                 log:foundLog
//             })
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })



app.listen(PORT, () => {                                                    // 9
    console.log('listening on port', PORT);
});