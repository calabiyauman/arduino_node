const mongoose = require('mongoose');

main().catch(err => console.log(err));

const DataModel = new mongoose.Schema({
        _id: String, 
        location: String,
        sensordata: Number

});