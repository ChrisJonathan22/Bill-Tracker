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
        this.getData = this.getData.bind(this);
    }


    getData() {
        this.setState({
            title: document.getElementById('title').value,
            amount: document.getElementById('amount').value,
            date: document.getElementById('date').value
        });
    }

    render() {
        return (
            <div>
                <section id="add">
                    <h1>Add Bills!</h1>
                </section>
                {/* <section id="form-holder">
                    <form method ="POST" action="http://localhost:5000/add" enctype="multipart/form-data">
                        <label for="title" class="label">Enter a title...</label>
                        <input type="text" name="title" class="fields" placeholder="Please enter a title..." autocomplete="off" required/>
                        <br/>
                        <label for="amount" class="label">Enter an amount...</label>
                        <input type="text" name="amount" class="fields" placeholder="Please enter an amount..." autocomplete="off" required/>
                        <br/>
                        <label for="date" class="label">Pick a date...</label>
                        <input type="date" name="date" class="fields" placeholder="Please pick a date..."/>
                        <br/>
                        <input type="submit" value="Submit" id="button"></input>
                    </form>
                </section> */}
                <form action="localhost:5000/add" method="post">
                    <fieldset>
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" className="form-control col-sm-4" id="title" aria-describedby="title" autoComplete="off" placeholder="Enter title..."/>

                            <label for="amount">Amount</label>
                            <input type="number" className="form-control col-sm-4" id="amount" aria-describedby="amount" placeholder="Enter amount..."/>
            
                            <label for="date">Date</label>
                            <input type="date" className="form-control col-sm-4" id="date" aria-describedby="date" placeholder="Pick date..."/>
                        </div>
                        <input type="submit" className="btn btn-success" value="Submit" onClick={this.getData}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Add;