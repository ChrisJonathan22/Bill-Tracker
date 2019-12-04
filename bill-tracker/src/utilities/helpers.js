import { Chart } from 'chart.js';

export const getTotal = (total, num) => {
    return total + num;
};

const filterBillAmounts = (bills, billAmounts) => {
    bills.forEach((bill) => {
        return billAmounts.push(bill.amount);
    });
}

export const createGraph = (lastYear, thisYear) => {
    let lastYearAmount = [];
    let thisYearAmount = [];

    filterBillAmounts(lastYear, lastYearAmount);
    filterBillAmounts(thisYear, thisYearAmount);

    lastYearAmount = lastYearAmount.reduce(getTotal);
    thisYearAmount = thisYearAmount.reduce(getTotal);
    
    let ctx = document.getElementById("myGraph").getContext('2d');
    let myGraph = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Last year", "This year"],
                    datasets: [{
                        label: 'Bills',
                        data: [lastYearAmount, thisYearAmount], // Use the lastYear and thisYear array amount total to represent how much the user has spent.
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