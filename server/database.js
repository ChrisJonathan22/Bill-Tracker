// Import all the needed modules.
const mongoose = require('mongoose');

// Initiating a conncection to the database.
mongoose.connect('mongodb://chris:chris123@ds149744.mlab.com:49744/bills', { useNewUrlParser: true });

// Connecting to the database.
const connect = mongoose.connection;

// Create a Schema or db structure.
const billSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    date: String
});

// Create a model / collection.
const bills = mongoose.model('bills', billSchema);

// Export the connection and the model.
module.exports.connect = connect;
module.exports.bills = bills;