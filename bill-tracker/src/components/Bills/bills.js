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
        this.getDate = this.getDate.bind(this);
    }

    getDate() {
        this.state.bills.map((bill) => {
            console.log(bill.date);
        });
    }

    componentDidMount() {
        fetch('http://localhost:5000/bills')
        .then(res => res.json())
        .then(data => this.setState({ bills: data.bills }, () => console.log(this.state.bills)));
    }



    render() {
        window.onload = () => {
            let ctx = document.getElementById("myChart").getContext('2d');
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["Last year", "This year"],
                        datasets: [{
                            label: 'Bills',
                            data: [12, 19],
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
        }
        
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