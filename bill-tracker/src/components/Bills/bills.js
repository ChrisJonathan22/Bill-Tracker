import React, { Component } from 'react';
import { Chart } from 'chart.js';
import Axios from 'axios';
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
        this.createGraph = this.createGraph.bind(this);
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

    createGraph () {
        let { lastYear, thisYear } = this.state;
        let ctx = document.getElementById("myGraph").getContext('2d');
        let myGraph = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["Last year", "This year"],
                        datasets: [{
                            label: 'Bills',
                            data: [lastYear.length, thisYear.length], // Use the lastYear and thisYear array length to represent how many bills fit in each year.
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        },
                        title: {
                            display: true,
                            text: "Bills graph overview",
                            fontColor: "green",
                            fontSize: 20
                        }
                    }
        });
    }

    addDataToGraph () {
        let date = new Date(); // Create a new date object.
        let year = date.getFullYear(); // Get the year.
        let thisYearReg = new RegExp(`${year}`, "g"); // Create a regex with the current year.
        let lastYearReg = new RegExp(`${year - 1}`, "g"); // Create a regex with the previous year.
        let currentYear; // Create a variable where each current year will be initially saved.
        let lastYear; // Create a variable where each previous year will be initially saved.
        let currentYearList = []; // Create an empty array where all the current year will be stored.
        let lastYearList = []; // Create an empty array where all the previous year will be stored.
        let { bills } = this.state;
        console.log('Bills!', this.state.bills);
        bills.map((bill) => { // Map through the array of bills.
            if(bill.date.match(thisYearReg) == year) { // Find out if there's a match for the current year with the list of bills. 
                currentYear = bill.date.match(thisYearReg); // If there's a match, store it.
                currentYearList.push(currentYear); // Push all the matched currentYear into the currentYearList array.
                console.log("Current year found!", currentYearList);
            }
            else if (bill.date.match(lastYearReg) == year - 1) { // Find out if there's a match for the previous year within the list of bills.
                lastYear = bill.date.match(lastYearReg); // If there's a match, store it.
                lastYearList.push(lastYear); // Push all the matched lastYear into the lastYearList array.
                console.log("Last year found!", lastYearList);
            }

            else { // If there aren't any matches for either, log this.
                console.log('A bill matching the current or the previous year wasn\'t found');
            }
        });
        this.setState({ thisYear: currentYearList, lastYear: lastYearList}, () => {
            // After the graph's data has been stored, create the graph.
            this.createGraph();
        } );
    }

    componentDidMount() { 
        this.fetchBills('http://localhost:5000/bills');
    }



    render() {
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
                        this.state.bills.map((bill) => {
                            return <tr className="success"><td>{bill.title}</td><td>{bill.amount}</td><td>{bill.date}</td></tr>;
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