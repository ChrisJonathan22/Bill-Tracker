import React, { Component } from 'react';
import './bills.css';

class Bills extends Component {
    constructor() {
        super();
        this.state = {
            bills: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/bills')
        .then(res => res.json())
        .then(data => this.setState({ bills: data.message }, () => console.log(data.message)));
    }

    render() {
        return (
            <div>
                <h1 id="bills-title">View Bills!</h1>
            </div>
        );
    }
}

export default Bills;