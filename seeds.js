// 39. Stretch: make a seed file and seed it:
// 39b. captains_log touch seeds.js file
// 39c. start by requiring mongoose.

const mongoose = require("mongoose");   // 39c
const Log = require("./models/logs");

mongoose.connect(process.env.MONGO_URI, {                                   // 31i
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
// .then(() => {
//     console.log("MONGO CONNECTION OPEN")
// })
// .catch((err) => {
//     console.log(err)
// });

mongoose.connection.once("open", () => {                                    // 31j
    console.log("connected to mongo");
});

const seedLog = [
    {
        title: "Captain Phillips",
        entry: "Somali pirates climb aboard U.S. containership Maersk Alabama and take everyone hostage"
    },
    {
        title: "Avenue 5",
        entry: "The passengers living in the opposite sides are up to give the other the doom with the ship being divided."
    }
]

const seedDB = async () => {
    await Log.insertMany({ seedLog })
}

seedDB().then(() => {
    mongoose.connection.close();
})

module.exports= seedLog