// Import all the needed modules.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('./database');
const { bills } = require('./database');
const port = 5000;

// Create an express app.
const app = express();

// Middlewares.
// I've set the maximum size of data to be transferred.
app.use(bodyParser.urlencoded({
    limit: '15mb',
    extended: true
}));
app.use(bodyParser.json({ limit: '15mb', extended: true }));
app.use(cors());
app.use((req, res, next) => { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// Handling the database errors.
connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', () => {
    console.log('Database connection successful');
});

// Creating a route for GET requests to localhost:5000/bills.
app.get('/bills', (req, res) => {
    res.json({message: "Route working."});
    console.log("/bills route visited!");
});

// Creating a route for POST requests to localhost:5000/add.
app.post('/add', (req, res) => {
    console.log(req.body);
    const bill = new bills({title: req.body.title, amount: req.body.amount, date: req.body.date});
    bill.save((err, bills) => {
        if(err) console.log(err);
        else {
            console.log("New bill successfully added...");
        }
    });
    res.json({ message: "Data received!" });
});


app.listen(port, console.log(`The Bill Tracker App is running on port: ${port}`));