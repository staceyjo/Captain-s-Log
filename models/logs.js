// 35. Create the logs.js schema
// 35b. title: string
// 35c. entry: string
// 35d. shipIsBroken: Boolean
// 35e. bonus: shipIsBroken: Boolean- set a default to true
// 35f. super bonus:as a second argument to mongoose.Schema(), add { timestamps: true }

const mongoose = require("mongoose")

const logsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    // shipIsBroken: Boolean
    shipIsBroken: {type: Boolean, default: true}
},
{
    timestamps:true
})

const Logs = mongoose.model("Logs", logsSchema)

module.exports = Logs