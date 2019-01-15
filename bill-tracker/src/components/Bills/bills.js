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
        .then(data => this.setState({ bills: data.bills }, () => console.log(this.state.bills)));
    }

    render() {
        return (
            <div>
                <h1 id="bills-title">View Bills!</h1>
                {
                    this.state.bills.map((bill) => {
                    return <li key={bill._id}>{bill.title}</li>;
                })
                }
            </div>
        );
    }
}

export default Bills;