import React, { Component } from 'react';
import './add.css';

class Add extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            amount: null,
            date: ""
        };
        this.setData = this.setData.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    setData () {
         // Give the state some new data depending on what the user has entered.
         this.setState({
            title: document.getElementById('title').value,
            amount: document.getElementById('amount').value,
            date: document.getElementById('date').value
        });
    }

    sendData() {
        // Send the data
            fetch('http://localhost:5000/add', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // Turn the object to json
            body: JSON.stringify({
                title: this.state.title,
                amount: this.state.amount,
                date: this.state.date
            })
        })
        .then((res) => {
            // A message to let me know that the data has been successfully sent.
            console.log('Data sent!');
        })
        .then((res) => {
            console.log("This is isn't needed but I thought I'd try something.");
        });
    }



    render() {
        return (
            <div>
                <section id="add">
                    <h1>Add Bills!</h1>
                </section>
                <form>
                    <fieldset>
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" className="form-control col-sm-4" id="title" aria-describedby="title" autoComplete="off" placeholder="Enter title..." required/>

                            <label for="amount">Amount</label>
                            <input type="number" className="form-control col-sm-4" id="amount" aria-describedby="amount" placeholder="Enter amount..." required/>
            
                            <label for="date">Date</label>
                            <input type="date" className="form-control col-sm-4" id="date" aria-describedby="date" placeholder="Pick date..." required/>
                        </div>
                        <input type="submit" className="btn btn-success" value="Submit" onMouseEnter={this.setData} onClick={this.sendData}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Add;