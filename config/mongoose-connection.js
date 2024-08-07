const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://xyz742406:xyz742406@cluster0.s4py0nu.mongodb.net/")
    .then(function () {
        console.log("connected..");
    })
    .catch(function (err) { 
        console.log(err);
    })

module.exports = mongoose.connection;