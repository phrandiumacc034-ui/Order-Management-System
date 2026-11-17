
// ALL ORDERS

let orders = [

    {
        product: "Tote bag",
        customerName: "Kanu Emerie",
        date: "2026-11-02",
        price: 5000,
        cost: 0,
        status: "successful"
    },

    {
        product: "Wireless Headphones",
        customerName: "David Okafor",
        date: "2026-11-01",
        price: 45000,
        cost: 0,
        status: "successful"
    },

    {
        product: "Smart Watch",
        customerName: "Amara Eze",
        date: "2026-11-01",
        price: 68000,
        cost: 0,
        status: "pending"
    },

    {
        product: "Laptop Stand",
        customerName: "Daniel Musa",
        date: "2026-11-02",
        price: 18000,
        cost: 0,
        status: "successful"
    },

    {
        product: "Bluetooth Speaker",
        customerName: "Chisom Nwankwo",
        date: "2026-11-02",
        price: 32000,
        cost: 0,
        status: "pending"
    },

    {
        product: "Mechanical Keyboard",
        customerName: "Samuel Ade",
        date: "2026-11-03",
        price: 55000,
        cost: 0,
        status: "successful"
    },

    {
        product: "USB-C Hub",
        customerName: "Grace Bello",
        date: "2026-11-03",
        price: 22000,
        cost: 0,
        status: "successful"
    },

    {
        product: "Gaming Mouse",
        customerName: "Emeka Obi",
        date: "2026-11-04",
        price: 27000,
        cost: 0,
        status: "pending"
    },

    {
        product: "Power Bank",
        customerName: "Precious James",
        date: "2026-11-04",
        price: 35000,
        cost: 0,
        status: "successful"
    },

    {
        product: "Laptop Backpack",
        customerName: "Ibrahim Sani",
        date: "2026-11-05",
        price: 42000,
        cost: 0,
        status: "pending"
    },

    {
        product: "Wireless Mouse",
        customerName: "Favour Okoro",
        date: "2026-11-05",
        price: 15000,
        cost: 0,
        status: "successful"
    },

    {
        product: "Laptop",
        customerName: "Divine Emehelu",
        date: "2026-11-06",
        price: 150000,
        cost: 0,
        status: "successful"
    },
    {
        product: "Bicycle",
        customerName: "Rowan Atkinson",
        date: "2026-10-29",
        price: "250000",
        status: "successful"
    },
    {
        product: "Plastation 5 console",
        customerName: "Bernard Arnault",
        date: "2026-11-17",              //this section illustrates how the "Today's Sales & Today's Profit tabs work"
        price: 650000,
        cost: 400000,
        status: "successful"
    }


];


// ADD NEW ORDERS

let newOrder = [

    {
        product: "Food",
        customerName: "David Jesse",
        date: "2026-11-08",
        price: 10000,
        cost: 0,
        status: "successful"
    },

    {
        product: "Food",
        customerName: "Brian Brobbey",
        date: "2026-11-08",
        price: 10000,
        cost: 0,
        status: "pending"
    }

];

orders.unshift(newOrder[0], newOrder[1]);


// CURRENCY FORMAT

function formatMoney(amount) {

    return "$" + amount.toLocaleString("en-US");

}


// GET TODAY'S DATE

let today = new Date();

let todayDate =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");


// DISPLAY ORDERS IN TABLE

let orderDisplay = "";

for (let x = 0; x < orders.length; x++) {

    let color = "";

    if (orders[x].status == "successful") {
        color = "status-successful";
    }

    else if (orders[x].status == "pending") {
        color = "status-pending";
    }

    else {
        color = "status-cancelled";
    }

    orderDisplay += `
        <tr>

            <td class="order-id">ORD-${1001 + x}</td>

            <td>${orders[x].product}</td>

            <td>${orders[x].customerName}</td>

            <td>${orders[x].date}</td>

            <td>${formatMoney(orders[x].price)}</td>

            <td>
                <span class="status ${color}">
                    ${orders[x].status}
                </span>
            </td>

        </tr>
    `;

}

document.getElementById("orderList").innerHTML = orderDisplay;


// DASHBOARD CALCULATIONS

let todaySales = 0;
let todayProfit = 0;

let totalOrders = orders.length;

let customers = [];

let successful = 0;
let pending = 0;
let cancelled = 0;


for (let x = 0; x < orders.length; x++) {

    // COUNT UNIQUE CUSTOMERS

    if (!customers.includes(orders[x].customerName)) {

        customers.push(orders[x].customerName);

    }


    // COUNT ORDER STATUSES

    if (orders[x].status == "successful") {

        successful++;

    }

    else if (orders[x].status == "pending") {

        pending++;

    }

    else if (orders[x].status == "cancelled") {

        cancelled++;

    }


    // CALCULATE TODAY'S SALES AND PROFIT

    if (
        orders[x].date == todayDate &&
        orders[x].status == "successful"
    ) {

        todaySales += orders[x].price;

        todayProfit += orders[x].price - orders[x].cost;

    }

}


// DISPLAY DASHBOARD FIGURES

document.getElementById("todaySales").innerHTML =
    formatMoney(todaySales);

document.getElementById("todayProfit").innerHTML =
    formatMoney(todayProfit);

document.getElementById("totalOrders").innerHTML =
    totalOrders.toLocaleString("en-US");

document.getElementById("registeredUsers").innerHTML =
    customers.length.toLocaleString("en-US");


// SALES CHART

// CREATE THE LAST SIX MONTHS

let monthLabels = [];
let monthValues = [];
let monthKeys = [];

for (let x = 5; x >= 0; x--) {

    let monthDate = new Date(
        today.getFullYear(),
        today.getMonth() - x,
        1
    );

    let monthName = monthDate.toLocaleString("en-US", {
        month: "long"
    });

    let monthKey =
        monthDate.getFullYear() + "-" +
        String(monthDate.getMonth() + 1).padStart(2, "0");

    monthLabels.push(monthName);

    monthKeys.push(monthKey);

    monthValues.push(0);

}


// ADD SALES TO THEIR CORRECT MONTH

for (let x = 0; x < orders.length; x++) {

    if (orders[x].status == "successful") {

        let orderMonth = orders[x].date.substring(0, 7);

        for (let y = 0; y < monthKeys.length; y++) {

            if (orderMonth == monthKeys[y]) {

                monthValues[y] += orders[x].price;

            }

        }

    }

}


// DRAW SALES BAR CHART

const mycanvas = document.getElementById("salesChart");

const mycontext = mycanvas.getContext("2d");

new Chart(mycontext, {

    type: "bar",

    data: {

        labels: monthLabels,

        datasets: [{

            label: "Monthly Sales",

            data: monthValues,

            backgroundColor: "#5575f8",

            borderRadius: 6,

            barThickness: 28

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            y: {
                beginAtZero: true,
                grid: {
                    color: "#edf0f5"
                },
                ticks: {
                    callback: function(value) {
                        return "$" + value.toLocaleString("en-US");
                    }
                }
            },

            x: {
                grid: {
                    display: false
                }
            }

        }

    }

});


// ORDER CHART

const orderCanvas = document.getElementById("orderChart");

const orderContext = orderCanvas.getContext("2d");

new Chart(orderContext, {

    type: "doughnut",

    data: {

        labels: [
            "Successful",
            "Pending",
            "Cancelled"
        ],

        datasets: [{

            data: [
                successful,
                pending,
                cancelled
            ],

            backgroundColor: [
                "#5575f8",
                "#f5b544",
                "#ed6b75"
            ],

            borderWidth: 0,

            hoverOffset: 7

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "65%",

        plugins: {

            legend: {
                display: false
            }

        }

    }

});
