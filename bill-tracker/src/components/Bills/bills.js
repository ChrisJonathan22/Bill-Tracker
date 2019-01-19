import React, { Component } from 'react';
import { Chart } from 'chart.js';
import './bills.css';

class Bills extends Component {
    constructor() {
        super();
        this.state = {
            bills: [],
            thisYear: [],
            lastYear: [],
        }
        // this.getDate = this.getDate.bind(this);
    }

    // Create a method.
    // getDate() {
        
    //     setTimeout(() => {
    //         this.state.bills.map((bill) => {
    //             console.log(bill.date);
    //             console.log('It works.');
    //         });
    //     }, 5000);
    // }

    componentDidMount() {
        let date = new Date();
        let year = date.getFullYear();
        let thisYearReg = new RegExp(`${year}`, "g");
        let lastYearReg = new RegExp(`${year - 1}`, "g");
        let currentYear;
        let lastYear;
        let currentYearList = [];
        let lastYearList = [];
        
        
        // Fetch all the bills.
        fetch('http://localhost:5000/bills')
        .then(res => res.json())
        // Give the state some new data (bills objects) and store it within an array called bills & log the array.
        .then(data => this.setState({ bills: data.bills }, () => console.log(this.state.bills)));

        // When the component mounts create the chart.
        setTimeout(() => {
            let ctx = document.getElementById("myChart").getContext('2d');
            let myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ["Last year", "This year"],
                            datasets: [{
                                label: 'Bills',
                                data: [this.state.lastYear.length, this.state.thisYear.length],
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
                            }
                        }
                    });
        }, 2000);
       
        setTimeout(() => {
                    this.state.bills.map((bill) => {
                        if(bill.date.match(thisYearReg) == year) {
                            currentYear = bill.date.match(thisYearReg);
                            currentYearList.push(currentYear);
                            console.log("Current year found!");
                        }
                        else if (bill.date.match(lastYearReg) == year - 1) {
                            lastYear = bill.date.match(lastYearReg);
                            lastYearList.push(lastYear);
                            console.log("Current year not found");
                        }

                        else {
                            console.log('Not working!');
                            
                        }
                    });
                    this.setState({thisYear: currentYearList, lastYear: lastYearList});
                    console.log(this.state.thisYear.length);
                    
                }, 1000);
                
        
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
                            <th scope="col">Date <i className="fas fa-calendar-alt"></i></th>
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
                        <canvas id="myChart" width="400" height="400" aria-label = "temperature chart" role = "chart"></canvas>
                    </div>
                </section>
            </div>
        );
    }
}

export default Bills;