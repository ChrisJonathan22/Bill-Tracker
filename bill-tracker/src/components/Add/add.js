import React, { Component } from 'react';
import './add.css';

class Add extends Component {
    constructor() {
        super();
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
                <form>
                    <fieldset>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control col-sm-4" id="title" aria-describedby="title" autoComplete="off" placeholder="Enter title..."/>

                    <label for="amount">Amount</label>
                    <input type="number" class="form-control col-sm-4" id="amount" aria-describedby="amount" placeholder="Enter amount..."/>
            
                    <label for="date">Date</label>
                    <input type="date" class="form-control col-sm-4" id="date" aria-describedby="date" placeholder="Pick date..."/>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
                </fieldset>
                </form>
            </div>
        );
    }
}

export default Add;