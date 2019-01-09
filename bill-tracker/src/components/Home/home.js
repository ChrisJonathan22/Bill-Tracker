import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <section id="home">
                    <h1 id="title">Welcome home!</h1>
                    <p>Log in your bills and don't forget to pay them! ;)</p>
                    <img src="/bills.jpg" alt="a calculator, a notepad and dollar bills." />
                </section>
            </div>
        );
    }
}

export default Home;