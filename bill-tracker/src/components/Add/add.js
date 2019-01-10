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
                <section id="form-holder">
                    <form method ="POST" action="http://localhost:5000/add" enctype="multipart/form-data">
                        <label for="title" class="label">Enter a title...</label>
                        <input type="text" name="title" class="fields" placeholder="Please enter a title..." autocomplete="off" required/>
                        <br/>
                        <label for="amount" class="label">Enter an amount...</label>
                        <input type="text" name="amount" class="fields" placeholder="Please enter an amount..." autocomplete="off" required/>
                        <br/>
                        <input type="submit" value="Submit" id="button"></input>
                    </form>
                </section>
            </div>
        );
    }
}

export default Add;