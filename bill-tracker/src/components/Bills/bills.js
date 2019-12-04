import React, { Component } from 'react';
import Axios from 'axios';
import {getTotal, createGraph} from '../../utilities/helpers';
import './bills.scss';

class Bills extends Component {
    constructor() {
        super();
        this.state = {
            bills: [],
            thisYear: [],
            lastYear: [],
        }
        this.fetchBills = this.fetchBills.bind(this);
        this.addDataToGraph = this.addDataToGraph.bind(this);
    }



    async fetchBills (endpoint) {
         // Fetch all the bills.
        let result = await Axios.get(endpoint);
        let data = result.data;
        console.log('Bills successfully fetched!', result);
        this.setState({ bills: data.bills }, () => {
            // After the data has been saved, extract the needed information and add it to the graph.
            this.addDataToGraph();
        });
    }

    

    addDataToGraph () {
        let date = new Date();
        let year = date.getFullYear();
        let thisYearReg = new RegExp(`${year}`, "g"); // Create a regex with the current year.
        let lastYearReg = new RegExp(`${year - 1}`, "g"); // Create a regex with the previous year.
        let currentYear, lastYear;
        let currentYearList = []; // Create an empty array where all the current year will be stored.
        let lastYearList = []; // Create an empty array where all the previous year will be stored.
        let { bills } = this.state;
        console.log('Bills!', this.state.bills);
        bills.map((bill) => { // Map through the array of bills.
            if(bill.date.match(thisYearReg) == year) { // Find out if there's a match for the current year with the list of bills. 
                currentYear = bill.date.match(thisYearReg); // If there's a match, store it.
                currentYearList.push(bill); // Push all the matched currentYear into the currentYearList array.
                console.log("Current year found!", currentYearList);
            }
            else if (bill.date.match(lastYearReg) == year - 1) { // Find out if there's a match for the previous year within the list of bills.
                lastYear = bill.date.match(lastYearReg); // If there's a match, store it.
                lastYearList.push(bill); // Push all the matched lastYear into the lastYearList array.
                console.log("Last year found!", lastYearList);
            }

            else { // If there aren't any matches for either, log this.
                console.log('A bill matching the current or the previous year wasn\'t found');
            }
        });
        this.setState({ thisYear: currentYearList, lastYear: lastYearList}, () => {
            // After the graph's data has been stored, create the graph.
            let { lastYear, thisYear } = this.state;
            createGraph(lastYear, thisYear);
        } );
    }

    componentDidMount() { 
        this.fetchBills('http://localhost:5000/bills');
    }



    render() {
        let { bills } = this.state;
        return (
            <div>
                <h1 id="bills-title">View Bills!</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Amount <span className="green">&#163;</span></th>
                            <th scope="col">Date <i className="fas fa-calendar-alt green"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((bill) => {
                                return <tr className="success" key={bill.id}><td>{bill.title}</td><td>{bill.amount}</td><td>{bill.date}</td></tr>;
                            })
                        }
                    </tbody>
                </table>
                <section id="section">
                    <div id = "canvas-container">
                        <canvas id="myGraph" width="400" height="400" aria-label = "bills graph" role = "graph"></canvas>
                    </div>
                </section>
            </div>
        );
    }
}

export default Bills;