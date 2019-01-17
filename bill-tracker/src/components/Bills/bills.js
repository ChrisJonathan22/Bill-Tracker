import React, { Component } from 'react';
import { Chart } from 'chart.js';
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

        let ctx = document.getElementById("myChart").getContext('2d');
                let myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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