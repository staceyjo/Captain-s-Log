// 80. work on refactoring your code so your logs routes are in your controller file, rather than in server.js
// 80b. copy all routes from server.js and comment out the code in server.js
// 80c. on each route rename "app" to router
// 80d. require express module: const express = require("express");
// 80e. set router variable to use/require express: const router = express.Router()
// 80f. requre logs.js in models directroy: const Log = require("../models/logs")


const express = require("express");
const router = express.Router()
const Log = require("../models/logs")

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Mount/Define routes
// ============================ ROOT ===================================

// router.get('/', function (req, res) {                                          // 10
//     res.send("<h1>Captain's Log!</h1>");
// });

// ============================ INDEX ===================================

router.get("/", (req, res) => {                                            // 40
    Log.find({}, (error, allLogs) => {
        if (!error) {
            res.status(200).render("Index", {                               // 44
                logs: allLogs
            })
        } else {
            res.status(400).send(error)
        }
    })
})


// ============================ NEW ====================================

router.get("/new", (req, res) => {                                        // 12
    res.render("New");                                                      // 22
});


// ============================ DELETE ===================================
router.delete("/:id", (req, res) => {                                     // 62
    Log.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect("/logs")                                               // 63
    })
});


// ============================ UPDATE ===================================

router.put("/:id", (req, res) => {                                            // 74
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (error, editedLog)=> {
        console.log(editedLog)
        res.redirect(`/logs/${req.params.id}`)                                     // 76
    })
})


// ============================ CREATE =================================

router.post("/", (req, res) => {                                           // 23
    if (req.body.shipIsBroken === "on") {                                   // 28
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.create(req.body, (error, createdLog) => {                           // 36
        if(!error) {
            res.status(200).redirect("/logs");                              // 37
        } else {
            res.status(400).send(error);
        }
    });
});


// ============================ EDIT ===================================

router.get("/:id/edit", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if(!error) {
            res.status(200).render("Edit", {log:foundLog})
        } else {
            res.status(400).send({msg:error.message})
        }
    })
})


// ============================ SHOW ===================================

router.get("/:id", (req, res) => {                                        // 47
    Log.findById(req.params.id, (error, foundLog) => {
        if(!error) {
            res.status(200).render("Show", {                                // 56
                log:foundLog
            })
        } else {
            res.status(400).send(error)
        }
    })
})

module.exports = router
