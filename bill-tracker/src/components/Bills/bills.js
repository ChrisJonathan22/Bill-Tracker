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
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Amount &#163;</th>
                            <th scope="col">Date <i class="fas fa-calendar-alt"></i></th>
                        </tr>
                    </thead>
                    <tbody>
            
                            {
                        this.state.bills.map((bill) => {
                            return <tr className="success"><td>{bill.title}</td><td>{bill.amount}</td><td>{bill.date}</td></tr>;
                        })
                            }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Bills;