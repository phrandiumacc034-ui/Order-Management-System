# ProfitTrack — Sales and Business Management Dashboard

## 1. Project Overview

ProfitTrack is a sales and business management dashboard built using three core web development languages:

1. **HTML (HyperText Markup Language)** — creates the structure and content of the website.
2. **CSS (Cascading Style Sheets)** — controls the appearance, layout, colours, spacing and responsiveness of the website.
3. **JavaScript** — handles the order records, calculations, table generation and charts.

The project is designed to display important business information in one place. It provides an overview of sales, profit, orders, customers and order statuses.

The dashboard contains:

- A sidebar navigation menu.
- A top navigation bar.
- Four business overview cards.
- A monthly sales bar chart.
- An order statistics doughnut chart.
- A table displaying customer orders.
- A footer.

The project also uses **Chart.js**, a JavaScript library that makes it possible to create charts without manually drawing them.

### Project Objectives

The main objectives of ProfitTrack are:

- Display business information in an organised dashboard.
- Store order information in JavaScript objects.
- Automatically display order records in an HTML table.
- Calculate sales and profit using the order records.
- Count the total number of orders and unique customers.
- Display sales performance using a bar chart.
- Display order statuses using a doughnut chart.
- Make the dashboard responsive across different screen sizes.

---

# 2. Project Folder Structure

The project contains three main files:

```text
OMS/
│
├── order.html
│
├── order.css
│
└── order.js
```

### order.html

This is the HTML file. It contains the structure of the dashboard, including the sidebar, dashboard cards, charts and orders table.

### order.css

This is the CSS file. It controls the visual appearance of the dashboard.

### order.js

This is the JavaScript file. It contains the order records, calculations, table generation and chart configurations.

### How the Three Files Work Together

The three files have different responsibilities, but they work together to produce one website.

- HTML provides the elements that appear on the page.
- CSS styles those elements.
- JavaScript supplies information and makes the dashboard interactive and data-driven.

For example, HTML creates an empty table, JavaScript fills that table with order records, and CSS makes the table look professional.

---

# 3. HTML DOCUMENTATION

## 3.1 Understanding the HTML Document Structure

The HTML file begins with:

```html
<!DOCTYPE html>
<html lang="en">
```

### `<!DOCTYPE html>`

This declaration tells the browser that the document uses HTML5.

HTML5 is the modern standard for writing HTML documents.

### `<html lang="en">`

The `<html>` element is the root element of the entire HTML document.

Everything on the webpage is placed inside this element.

The `lang="en"` attribute specifies that the document's language is English.

This information helps browsers, search engines and accessibility tools understand the language of the page.

## 3.2 The Head Section

```html
<head>
    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>ProfitTrack | Sales Dashboard</title>

    <link rel="stylesheet" href="order.css">

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
```

The `<head>` element contains information about the webpage and links to external resources.

### Character Encoding

```html
<meta charset="UTF-8">
```

This tells the browser to use UTF-8 character encoding.

UTF-8 supports a wide range of characters, symbols and languages.

### Viewport

```html
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">
```

This is important for responsive web design.

- `width=device-width` makes the webpage use the actual width of the device.
- `initial-scale=1.0` sets the initial zoom level to normal.

Without this setting, mobile browsers may display a desktop-sized webpage scaled down to fit the screen.

### Page Title

```html
<title>ProfitTrack | Sales Dashboard</title>
```

This specifies the title displayed in the browser tab.

### Linking the CSS File

```html
<link rel="stylesheet" href="order.css">
```

This connects the HTML document to the external CSS file.

The `rel="stylesheet"` attribute tells the browser that the linked file contains stylesheets.

The `href="order.css"` attribute specifies the location of the CSS file.

The filename must match the actual CSS filename.

### Connecting Chart.js

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

This loads Chart.js from an external CDN.

A CDN (Content Delivery Network) distributes files through online servers.

Chart.js provides the tools used to create the sales bar chart and order doughnut chart.

Without this script, the `Chart` object used in JavaScript would not be available.

---

## 3.3 The Body Element

```html
<body>

    <div class="dashboard">

        <!-- Website content -->

    </div>

    <script src="order.js"></script>

</body>
```

The `<body>` element contains the visible content of the webpage.

The main dashboard is placed inside:

```html
<div class="dashboard">
```

This is the main container for the entire dashboard.

The JavaScript file is connected near the end of the body:

```html
<script src="order.js"></script>
```

Placing the script here means the browser first encounters the HTML elements before executing the JavaScript.

This is important because the JavaScript needs to find elements such as `orderList`, `salesChart` and `orderChart`.

---

## 3.4 Sidebar

The sidebar is created using:

```html
<aside class="sidebar">
```

The `<aside>` element represents content that is separate from the main content of the webpage.

In this project, it contains the dashboard's navigation menu.

### Logo

```html
<div class="logo">
    <span class="logo-icon">P</span>
    <h2>ProfitTrack</h2>
</div>
```

This section displays the ProfitTrack logo.

- `<div class="logo">` groups the logo elements.
- `<span class="logo-icon">P</span>` displays the letter P inside the logo box.
- `<h2>ProfitTrack</h2>` displays the project name.

### Menu Titles

```html
<p class="menu-title">MAIN MENU</p>
```

This displays a heading above the navigation links.

### Navigation

```html
<nav>
    <a href="#" class="active">
        <span>▦</span> Dashboard
    </a>

    <a href="#">
        <span>▤</span> Orders
    </a>
</nav>
```

The `<nav>` element groups navigation links.

Each `<a>` element represents a link.

The `href="#"` attribute is currently a placeholder. It does not navigate to a separate page.

The `active` class identifies the currently selected navigation item.

The `<span>` elements contain decorative symbols used as icons.

### Sidebar Profile

```html
<div class="sidebar-bottom">

    <div class="profile">

        <div class="profile-icon">ED</div>

        <div>
            <h4>Admin User</h4>
            <p>Administrator</p>
        </div>

    </div>

</div>
```

This section displays the administrator's profile information.

The `ED` text is used as a profile placeholder.

---

## 3.5 Main Content

```html
<main class="main-content">
```

The `<main>` element contains the primary content of the webpage.

In ProfitTrack, it holds:

- The top navigation bar.
- The sales overview heading.
- The overview cards.
- The charts.
- The orders table.
- The footer.

Using `<main>` gives the page a meaningful semantic structure.

---

## 3.6 Top Navigation Bar

```html
<header class="topbar">

    <div>
        <h2>Dashboard Overview</h2>

        <p>
            Welcome back! Here's what's happening with your store.
        </p>
    </div>

</header>
```

The `<header>` element represents introductory content for a page or section.

Here, it contains the dashboard heading and welcome message.

The `topbar` class is used to style the header.

The header also contains the notification button and administrator profile.

---

## 3.7 Sales Overview Heading

```html
<div class="page-heading">

    <div>
        <h1>Sales Overview</h1>

        <p>
            Monitor your business performance and earnings.
        </p>
    </div>

    <button class="date-button">
        November 2026
    </button>

</div>
```

This section introduces the main dashboard information.

The `<h1>` element represents the main heading of the page.

The date button currently displays a fixed month. It is a visual element and does not yet control the data shown on the dashboard.

---

## 3.8 Overview Cards

The four overview cards display the dashboard's most important figures.

They are placed inside:

```html
<div class="overview">
```

Each card uses:

```html
<div class="overview-card">
```

The cards display:

1. Today's Sales.
2. Today's Profit.
3. Total Orders.
4. Registered Users.

### Today's Sales

```html
<h2 id="todaySales">$0</h2>
```

The `id="todaySales"` attribute gives JavaScript a way to locate this element.

JavaScript calculates today's sales and inserts the result into this element.

### Today's Profit

```html
<h2 id="todayProfit">$0</h2>
```

This element displays the profit calculated from successful orders placed today.

### Total Orders

```html
<h2 id="totalOrders">0</h2>
```

This element displays the number of order records in the JavaScript array.

### Registered Users

```html
<h2 id="registeredUsers">0</h2>
```

This element displays the number of unique customer names found in the order records.

The initial values are placeholders. JavaScript replaces them when the page loads.

---

## 3.9 Chart Section

The chart section contains two charts.

```html
<div class="chart-section">
```

### Sales Performance Chart

```html
<canvas id="salesChart"></canvas>
```

The `<canvas>` element provides a drawing area.

Chart.js uses this element to display the sales bar chart.

The `id="salesChart"` attribute allows JavaScript to locate the canvas.

### Order Statistics Chart

```html
<canvas id="orderChart"></canvas>
```

This canvas is used to display the doughnut chart.

The chart shows the distribution of:

- Successful orders.
- Pending orders.
- Cancelled orders.

### Chart Legend

```html
<div class="chart-legend">

    <span>
        <i class="successful"></i> Successful
    </span>

    <span>
        <i class="pending"></i> Pending
    </span>

    <span>
        <i class="cancelled"></i> Cancelled
    </span>

</div>
```

This section explains the colours used in the doughnut chart.

The `<i>` elements are used as small coloured markers.

CSS gives each marker its corresponding background colour.

---

## 3.10 Orders Table

The orders table displays the individual customer transactions.

```html
<table>
```

The `<table>` element creates a table.

### Table Header

```html
<thead>
    <tr>
        <th>ORDER ID</th>
        <th>PRODUCT</th>
        <th>CUSTOMER NAME</th>
        <th>DATE</th>
        <th>PRICE</th>
        <th>STATUS</th>
    </tr>
</thead>
```

The `<thead>` element groups the table headings.

The `<tr>` element creates a table row.

Each `<th>` element creates a heading cell.

### Table Body

```html
<tbody id="orderList">
    <!-- JavaScript will insert orders here -->
</tbody>
```

The `<tbody>` element contains the actual order records.

The `id="orderList"` attribute allows JavaScript to locate this section.

JavaScript generates the rows and inserts them into this element.

The table does not need to contain manually written order rows because the JavaScript file generates them automatically.

---

## 3.11 Footer

```html
<footer>
    <p>© 2026 ProfitTrack. All rights reserved.</p>

    <p>Sales and Business Management Dashboard</p>
</footer>
```

The `<footer>` element represents the footer section of the webpage.

It displays the copyright notice and a short project description.

---

# 4. CSS DOCUMENTATION

CSS controls the appearance and layout of ProfitTrack.

The CSS file is divided into sections to make the code easier to read and maintain.

## 4.1 General Settings

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

The `*` selector is called the universal selector.

It targets every HTML element.

### margin

```css
margin: 0;
```

Removes the default outside spacing around elements.

### padding

```css
padding: 0;
```

Removes the default inside spacing of elements.

### box-sizing

```css
box-sizing: border-box;
```

Changes how the browser calculates the dimensions of elements.

With `border-box`, the declared width and height include the content, padding and border.

This makes it easier to control element sizes.

### Body Styling

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f7fb;
    color: #252b42;
}
```

- `font-family` determines the text font.
- `background-color` sets the page background.
- `color` sets the default text colour.

The browser uses Arial first. If Arial is unavailable, it tries Helvetica and then a generic sans-serif font.

---

## 4.2 Dashboard Layout

```css
.dashboard {
    display: flex;
    min-height: 100vh;
}
```

### display: flex

Turns the dashboard container into a Flexbox layout.

This allows its direct children, the sidebar and main content, to sit beside each other.

### min-height: 100vh

Makes the dashboard at least as tall as the browser window.

`vh` means viewport height.

`100vh` represents 100% of the visible browser height.

---

## 4.3 Sidebar Styling

```css
.sidebar {
    width: 245px;
    background-color: #17233c;
    color: white;
    padding: 25px 18px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}
```

This section controls the sidebar's appearance.

- `width: 245px` gives the sidebar a fixed width.
- `background-color` gives it a dark navy background.
- `color: white` sets the default text colour.
- `padding` adds internal spacing.
- `display: flex` enables Flexbox.
- `flex-direction: column` stacks the sidebar elements vertically.
- `flex-shrink: 0` prevents the sidebar from shrinking when space becomes limited.

### Logo

```css
.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 45px;
    padding-left: 8px;
}
```

- `display: flex` places the logo icon and text beside each other.
- `align-items: center` vertically aligns them.
- `gap` creates space between them.
- `margin-bottom` creates space below the logo.
- `padding-left` moves the logo slightly inward.

### Logo Icon

```css
.logo-icon {
    background-color: #5575f8;
    width: 35px;
    height: 35px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
}
```

The logo icon is a 35-by-35-pixel box.

`border-radius: 9px` rounds its corners.

Flexbox centres the letter P horizontally and vertically.

### Navigation

```css
.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
```

This stacks navigation links vertically and creates 8 pixels of space between them.

```css
.sidebar nav a {
    color: #aeb9ce;
    text-decoration: none;
    padding: 13px 12px;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 13px;
    transition: 0.3s;
}
```

This styles the navigation links.

- `text-decoration: none` removes the default underline.
- `border-radius` rounds the link backgrounds.
- `transition: 0.3s` makes visual changes happen smoothly.
- Flexbox aligns the icons and text.

### Hover Effect

```css
.sidebar nav a:hover {
    background-color: #263754;
    color: white;
}
```

The `:hover` pseudo-class applies styles when the user moves the mouse over a link.

### Active Link

```css
.sidebar nav a.active {
    background-color: #5575f8;
    color: white;
}
```

This gives the selected navigation link a blue background.

### Sidebar Profile

```css
.sidebar-bottom {
    margin-top: auto;
    padding-top: 30px;
}
```

`margin-top: auto` uses the available vertical space to push the profile section toward the bottom of the sidebar.

---

## 4.4 Main Content

```css
.main-content {
    flex: 1;
    min-width: 0;
}
```

`flex: 1` allows the main content to occupy the remaining horizontal space beside the sidebar.

`min-width: 0` allows the flex item to shrink below its automatic minimum width when necessary.

This helps prevent wide content from forcing the entire layout to overflow.

---

## 4.5 Top Bar

```css
.topbar {
    background-color: white;
    padding: 22px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e9edf4;
}
```

This styles the top navigation area.

- White background separates it from the main page.
- Padding creates internal spacing.
- Flexbox places the heading and profile area on one horizontal line.
- `justify-content: space-between` pushes them toward opposite sides.
- `border-bottom` creates a thin dividing line.

The `.top-right` class also uses Flexbox to arrange the notification and profile.

---

## 4.6 Dashboard Content

```css
.dashboard-content {
    padding: 30px 35px;
}
```

Adds space around the main dashboard sections.

### Page Heading

```css
.page-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}
```

Places the sales overview heading and date button on opposite sides.

The `margin-bottom` separates this section from the overview cards.

---

## 4.7 Overview Cards

```css
.overview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}
```

This is one of the most important CSS sections.

It uses CSS Grid to arrange the four overview cards.

### Understanding grid-template-columns

```css
grid-template-columns: repeat(4, 1fr);
```

This creates four equal-width columns.

`repeat(4, 1fr)` is a shorter way of writing four equal fractions:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

`1fr` means one fraction of the available space.

### Card Styling

```css
.overview-card {
    background-color: white;
    border: 1px solid #e9edf4;
    border-radius: 11px;
    padding: 20px;
    box-shadow: 0 3px 12px rgba(30, 50, 90, 0.03);
    transition: 0.3s;
}
```

This gives each card its white background, border, rounded corners, spacing and subtle shadow.

### Card Hover Effect

```css
.overview-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 18px rgba(30, 50, 90, 0.08);
}
```

When the mouse moves over a card:

- `transform: translateY(-4px)` moves the card upward by 4 pixels.
- `box-shadow` makes its shadow more visible.

This creates a small lifting effect.

### Card Icons

```css
.card-icon {
    width: 35px;
    height: 35px;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

This creates a standard size and layout for the card icons.

The additional classes `.blue`, `.green`, `.orange` and `.purple` give each icon its own background and text colour.

---

## 4.8 Chart Section

```css
.chart-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-top: 25px;
}
```

This creates two chart columns.

The first column receives twice as much available space as the second.

For example, if the available width is divided into three equal parts:

- Sales chart receives two parts.
- Order statistics chart receives one part.

### Chart Boxes

```css
.chart-box {
    background-color: white;
    border: 1px solid #e9edf4;
    border-radius: 11px;
    padding: 22px;
    min-width: 0;
    box-shadow: 0 3px 12px rgba(30, 50, 90, 0.03);
}
```

This gives both charts a consistent container.

### Chart Area

```css
.chart-area {
    height: 270px;
    position: relative;
}
```

This creates a 270-pixel-high area for the sales chart.

```css
.pie-area {
    height: 230px;
    position: relative;
}
```

This creates a 230-pixel-high area for the doughnut chart.

The `position: relative` property helps Chart.js position the canvas correctly within its container.

### Chart Legend

The `.chart-legend` class arranges the status labels in a horizontal layout.

The `.successful`, `.pending` and `.cancelled` classes assign their respective colours.

---

## 4.9 Orders Table

```css
.table-container {
    width: 100%;
    overflow-x: auto;
}
```

The table container takes up the available width.

`overflow-x: auto` allows horizontal scrolling when the table is wider than the screen.

### Table

```css
table {
    width: 100%;
    border-collapse: collapse;
    min-width: 750px;
}
```

- `width: 100%` makes the table fill its container.
- `border-collapse: collapse` combines adjacent table borders.
- `min-width: 750px` prevents the table columns from becoming too narrow.

### Table Header

```css
thead {
    background-color: #f7f9fc;
}
```

Gives the table heading row a light background.

### Table Cells

```css
th {
    padding: 15px 12px;
    text-align: left;
    font-size: 10px;
}
```

Controls the appearance of heading cells.

```css
td {
    padding: 16px 12px;
    font-size: 12px;
    border-bottom: 1px solid #edf0f5;
}
```

Controls the appearance of ordinary table cells.

### Table Hover

```css
tbody tr:hover {
    background-color: #f9faff;
}
```

Highlights a table row when the mouse moves over it.

### Order Status Labels

```css
.status {
    display: inline-block;
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: bold;
}
```

This creates rounded status labels.

The additional status classes assign the correct colours:

- `.status-successful` — green.
- `.status-pending` — yellow/orange.
- `.status-cancelled` — red.

JavaScript chooses which class to use based on the order's status.

---

## 4.10 Footer

```css
footer {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-top: 30px;
    padding: 20px 0;
    border-top: 1px solid #e5e9f0;
    color: #98a1b1;
    font-size: 11px;
}
```

This creates a horizontal footer.

The two paragraphs are positioned on opposite sides.

The border at the top separates the footer from the dashboard content.

---

## 4.11 Responsive Design

Responsive design makes a website adapt to different screen sizes.

ProfitTrack uses three main CSS breakpoints.

### First Breakpoint: 1150px

```css
@media screen and (max-width: 1150px) {

    .overview {
        grid-template-columns: repeat(2, 1fr);
    }

    .chart-section {
        grid-template-columns: 1fr;
    }

}
```

This rule applies when the screen width is 1150 pixels or less.

Changes:

- The four overview cards become two columns.
- The two charts become one column.

This prevents the dashboard from becoming too crowded on smaller screens.

### Second Breakpoint: 750px

```css
@media screen and (max-width: 750px) {

    .sidebar {
        width: 75px;
        padding: 25px 10px;
    }

}
```

When the screen becomes 750 pixels wide or less:

- The sidebar becomes narrower.
- The logo text disappears.
- Navigation text is hidden.
- Navigation icons remain visible.
- The administrator's name and role disappear.
- The profile icon remains visible.
- The top profile is hidden.
- Dashboard padding is reduced.

This gives the dashboard more room on smaller devices.

### Third Breakpoint: 500px

```css
@media screen and (max-width: 500px) {

    .overview {
        grid-template-columns: 1fr;
    }

    .page-heading {
        align-items: flex-start;
        flex-direction: column;
    }

}
```

This breakpoint is designed for small mobile screens.

Changes:

- Overview cards become one column.
- The page heading and date button stack vertically.
- The orders heading and button stack vertically.
- Chart padding is reduced.
- Footer content stacks vertically.

---

# 5. JAVASCRIPT DOCUMENTATION

JavaScript controls the actual data and calculations in ProfitTrack.

It is responsible for:

- Storing order records.
- Adding new orders to the array.
- Displaying orders in the table.
- Counting order statuses.
- Calculating today's sales.
- Calculating today's profit.
- Counting unique customers.
- Generating the monthly sales chart.
- Generating the order statistics chart.

## 5.1 The Orders Array

```javascript
let orders = [

    {
        product: "Tote bag",
        customerName: "Kanu Emerie",
        date: "2026-11-02",
        price: 5000,
        cost: 0,
        status: "successful"
    }

];
```

The `orders` variable stores the order records.

### Understanding let

```javascript
let orders
```

`let` declares a JavaScript variable.

A variable is a named location used to store information.

The variable is named `orders` because it stores multiple order records.

### Understanding Arrays

An array is a collection of values stored under one variable name.

Square brackets `[]` are used to create an array.

In this project, the array contains multiple order objects.

### Understanding Objects

Each order is represented by an object.

An object stores related information using properties and values.

For example:

```javascript
{
    product: "Tote bag",
    customerName: "Kanu Emerie",
    date: "2026-11-02",
    price: 5000,
    cost: 0,
    status: "successful"
}
```

This object contains six properties.

| Property | Purpose |
|---|---|
| product | Name of the product |
| customerName | Name of the customer |
| date | Date the order was placed |
| price | Selling price |
| cost | Cost of the product to the business |
| status | Current order status |

### Accessing Object Properties

JavaScript uses dot notation to access an object's properties.

```javascript
orders[0].product
```

This accesses the product property of the first order.

```javascript
orders[0].price
```

This accesses the price of the first order.

### Understanding Array Indexes

JavaScript arrays start counting from zero.

For example:

```javascript
orders[0]
```

Accesses the first order.

```javascript
orders[1]
```

Accesses the second order.

```javascript
orders[2]
```

Accesses the third order.

This is called zero-based indexing.

---

## 5.2 Adding New Orders

```javascript
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
```

This creates another array containing two new order objects.

### The unshift() Method

```javascript
orders.unshift(newOrder[0], newOrder[1]);
```

`unshift()` is a JavaScript array method.

It adds one or more elements to the beginning of an array.

Here:

- `newOrder[0]` accesses the first new order.
- `newOrder[1]` accesses the second new order.

Both orders are inserted at the beginning of the original `orders` array.

The original array is modified.

This means the new orders appear before the older orders when the table is generated.

---

## 5.3 The formatMoney() Function

```javascript
function formatMoney(amount) {

    return "$" + amount.toLocaleString("en-US");

}
```

This function formats numbers into readable currency-style values.

### Understanding Functions

A function is a reusable block of JavaScript code designed to perform a particular task.

Functions help prevent the same code from being written repeatedly.

### Function Name

```javascript
formatMoney
```

This is the name of the function.

### Parameter

```javascript
amount
```

A parameter is a variable that receives information when the function is called.

For example:

```javascript
formatMoney(5000);
```

The value `5000` is passed into the function as `amount`.

### toLocaleString()

```javascript
amount.toLocaleString("en-US")
```

This method formats a number using the specified locale.

For example:

```javascript
5000
```

Becomes:

```text
5,000
```

### return

```javascript
return "$" + amount.toLocaleString("en-US");
```

`return` sends the finished value back to the part of the program that called the function.

The result of:

```javascript
formatMoney(5000)
```

Is:

```text
$5,000
```

The dollar sign is currently a display choice inherited from the project. It does not perform currency conversion.

---

## 5.4 Getting Today's Date

```javascript
let today = new Date();
```

`new Date()` creates a JavaScript Date object representing the current date and time on the user's device.

The result is stored in the `today` variable.

### Getting the Year

```javascript
today.getFullYear()
```

Returns the current year.

### Getting the Month

```javascript
today.getMonth()
```

Returns the month as a number from 0 to 11.

January is 0, February is 1, and December is 11.

This is why the project adds 1:

```javascript
today.getMonth() + 1
```

### Getting the Day

```javascript
today.getDate()
```

Returns the day of the month.

### Understanding String()

```javascript
String(today.getMonth() + 1)
```

Converts the month number into a string.

### Understanding padStart()

```javascript
String(today.getMonth() + 1).padStart(2, "0")
```

Makes sure the month always contains two characters.

For example:

```text
3
```

Becomes:

```text
03
```

This is important because the order dates use the `YYYY-MM-DD` format.

### Building the Date

```javascript
let todayDate =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");
```

This combines the year, month and day into a single date string.

For example:

```text
2026-11-17
```

This format makes it possible to compare today's date with the dates stored in the order records.

---

## 5.5 Displaying Orders in the Table

```javascript
let orderDisplay = "";
```

This creates an empty string.

The string will gradually receive the HTML code needed to display all the orders.

### Understanding the for Loop

```javascript
for (let x = 0; x < orders.length; x++) {

}
```

A `for` loop repeats a block of code a specified number of times.

It contains three main parts.

**1. Starting value**

```javascript
let x = 0
```

Creates a counter starting at zero.

**2. Condition**

```javascript
x < orders.length
```

The loop continues as long as `x` is less than the number of orders.

**3. Increment**

```javascript
x++
```

Increases `x` by one after each repetition.

The loop therefore visits every order in the array.

### Determining the Status Colour

```javascript
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
```

This section uses conditional statements.

An `if` statement checks whether a condition is true.

- If the order status is successful, the successful CSS class is selected.
- If the order status is pending, the pending CSS class is selected.
- Otherwise, the cancelled CSS class is selected.

The selected class is later inserted into the HTML.

### Building the Table Row

```javascript
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
```

This is a JavaScript template literal.

Template literals use backticks instead of ordinary quotation marks.

They allow HTML and JavaScript expressions to be combined inside one string.

### Understanding +=

```javascript
orderDisplay +=
```

The `+=` operator adds the new HTML string to the existing `orderDisplay` string.

This is important because the loop must build all the table rows together.

### Understanding ${}

Inside a template literal, `${}` allows JavaScript expressions to be inserted.

For example:

```javascript
${orders[x].product}
```

Inserts the product name from the current order.

```javascript
${orders[x].customerName}
```

Inserts the customer's name.

```javascript
${formatMoney(orders[x].price)}
```

Calls the currency formatting function and inserts the result.

### Generating Order IDs

```javascript
ORD-${1001 + x}
```

Creates an order ID using the loop counter.

For example:

- First row: ORD-1001.
- Second row: ORD-1002.
- Third row: ORD-1003.

These IDs are generated for display. They are not permanent database identifiers.

### Inserting the Rows into HTML

```javascript
document.getElementById("orderList").innerHTML = orderDisplay;
```

This is DOM manipulation.

DOM stands for Document Object Model.

The DOM represents the HTML page as a structure that JavaScript can access and modify.

### Understanding getElementById()

```javascript
document.getElementById("orderList")
```

Finds the HTML element whose ID is `orderList`.

### Understanding innerHTML

```javascript
.innerHTML
```

Gets or changes the HTML content inside an element.

In this case, JavaScript inserts all the generated table rows into the table body.

This is how the order records become visible on the webpage.

---

## 5.6 Dashboard Calculations

This section calculates the information displayed in the overview cards and order chart.

### Creating the Variables

```javascript
let todaySales = 0;
let todayProfit = 0;

let totalOrders = orders.length;

let customers = [];

let successful = 0;
let pending = 0;
let cancelled = 0;
```

Each variable has a different responsibility.

| Variable | Purpose |
|---|---|
| todaySales | Stores today's successful sales |
| todayProfit | Stores today's profit |
| totalOrders | Stores the total number of orders |
| customers | Stores unique customer names |
| successful | Counts successful orders |
| pending | Counts pending orders |
| cancelled | Counts cancelled orders |

### Understanding orders.length

```javascript
let totalOrders = orders.length;
```

The `length` property returns the number of elements in an array.

If the array contains 14 order objects, `orders.length` returns 14.

### The Customers Array

```javascript
let customers = [];
```

This creates an empty array.

It will be used to store customer names without duplicates.

### Looping Through the Orders

```javascript
for (let x = 0; x < orders.length; x++) {

}
```

This loop examines every order.

The same loop performs three main tasks.

### A. Counting Unique Customers

```javascript
if (!customers.includes(orders[x].customerName)) {

    customers.push(orders[x].customerName);

}
```

This section ensures that the same customer is not counted more than once.

#### Understanding includes()

```javascript
customers.includes(orders[x].customerName)
```

Checks whether the customer's name already exists inside the customers array.

It returns:

- `true` if the name exists.
- `false` if the name does not exist.

#### Understanding the Exclamation Mark

```javascript
!
```

The exclamation mark is the logical NOT operator.

It reverses a Boolean value.

For example:

```javascript
!true
```

Becomes:

```javascript
false
```

And:

```javascript
!false
```

Becomes:

```javascript
true
```

Therefore:

```javascript
!customers.includes(orders[x].customerName)
```

Means:

"Only continue if this customer's name is not already in the customers array."

#### Understanding push()

```javascript
customers.push(orders[x].customerName);
```

The `push()` method adds an item to the end of an array.

The customer is added only if their name is not already present.

This prevents repeated customers from being counted multiple times.

### B. Counting Order Statuses

```javascript
if (orders[x].status == "successful") {

    successful++;

}

else if (orders[x].status == "pending") {

    pending++;

}

else if (orders[x].status == "cancelled") {

    cancelled++;

}
```

This section counts how many orders belong to each status.

The `++` operator increases a variable by one.

For example:

```javascript
successful++;
```

Is equivalent to:

```javascript
successful = successful + 1;
```

Every time the loop finds a successful order, the successful counter increases.

The same applies to pending and cancelled orders.

### C. Calculating Today's Sales

```javascript
if (
    orders[x].date == todayDate &&
    orders[x].status == "successful"
) {

    todaySales += orders[x].price;

    todayProfit += orders[x].price - orders[x].cost;

}
```

This section checks two conditions.

**First condition:**

```javascript
orders[x].date == todayDate
```

Checks whether the order date matches today's date.

**Second condition:**

```javascript
orders[x].status == "successful"
```

Checks whether the order was successful.

### Understanding the && Operator

```javascript
&&
```

This is the logical AND operator.

It means both conditions must be true before the code inside the `if` statement runs.

Therefore, only successful orders placed today contribute to today's sales and profit.

### Calculating Sales

```javascript
todaySales += orders[x].price;
```

Adds the selling price of the current order to the total sales.

### Calculating Profit

```javascript
todayProfit += orders[x].price - orders[x].cost;
```

Subtracts the product cost from the selling price.

The result is the profit for that order.

For example:

```text
Selling price: 80,000
Product cost: 50,000
Profit: 30,000
```

The calculated profit is then added to today's total profit.

**Important:** Orders with a `cost` of zero will make their entire selling price appear as profit. Actual product costs must be entered for accurate profit calculations.

---

## 5.7 Displaying the Dashboard Figures

```javascript
document.getElementById("todaySales").innerHTML =
    formatMoney(todaySales);
```

This finds the HTML element with the ID `todaySales` and inserts the calculated sales figure.

The same process is used for the other dashboard figures.

```javascript
document.getElementById("todayProfit").innerHTML =
    formatMoney(todayProfit);
```

Displays today's calculated profit.

```javascript
document.getElementById("totalOrders").innerHTML =
    totalOrders.toLocaleString("en-US");
```

Displays the total number of orders with thousands separators.

```javascript
document.getElementById("registeredUsers").innerHTML =
    customers.length.toLocaleString("en-US");
```

Displays the number of unique customers.

The dashboard cards are therefore no longer dependent on manually typed figures.

Their values come from the JavaScript order records.

---

## 5.8 Sales Performance Bar Chart

The sales chart uses Chart.js.

Its purpose is to display successful sales grouped by month.

### Creating the Chart Data Arrays

```javascript
let monthLabels = [];
let monthValues = [];
let monthKeys = [];
```

These three arrays store different information.

| Array | Information stored |
|---|---|
| monthLabels | Names of the months displayed on the chart |
| monthValues | Total sales for each month |
| monthKeys | Year and month identifiers used to match orders |

### Generating the Last Six Months

```javascript
for (let x = 5; x >= 0; x--) {

}
```

This loop starts at 5 and counts backwards to 0.

It runs six times.

Each repetition creates a date representing one of the last six months, including the current month.

### Creating the Month Date

```javascript
let monthDate = new Date(
    today.getFullYear(),
    today.getMonth() - x,
    1
);
```

Creates a date using the current year, a month offset and the first day of that month.

Subtracting `x` moves backwards through the months.

JavaScript automatically handles situations where the month number goes below zero or above eleven by adjusting the year.

### Getting the Month Name

```javascript
let monthName = monthDate.toLocaleString("en-US", {
    month: "long"
});
```

Converts the date into a readable month name.

For example:

```text
November
```

### Creating the Month Key

```javascript
let monthKey =
    monthDate.getFullYear() + "-" +
    String(monthDate.getMonth() + 1).padStart(2, "0");
```

Creates a year-month identifier.

For example:

```text
2026-11
```

This is used to match the month of each order.

### Storing the Chart Information

```javascript
monthLabels.push(monthName);

monthKeys.push(monthKey);

monthValues.push(0);
```

These statements add information to the three arrays.

Each month starts with a sales value of zero.

### Adding Sales to the Correct Month

```javascript
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
```

This section uses a nested loop.

A nested loop is a loop placed inside another loop.

The outer loop examines every order.

The inner loop checks the six available months.

### Understanding substring()

```javascript
orders[x].date.substring(0, 7)
```

Extracts part of the order date.

For example:

```text
2026-11-08
```

Becomes:

```text
2026-11
```

This allows JavaScript to compare the order's month with the month keys.

### Matching the Month

```javascript
if (orderMonth == monthKeys[y]) {

    monthValues[y] += orders[x].price;

}
```

When the order's month matches the chart month, the order's selling price is added to that month's sales total.

Only successful orders are included.

Pending and cancelled orders are excluded.

### Drawing the Chart

```javascript
const mycanvas = document.getElementById("salesChart");

const mycontext = mycanvas.getContext("2d");
```

The first statement locates the sales chart canvas.

The second obtains its 2D drawing context.

A drawing context is the interface used to draw on a canvas.

Chart.js uses this context to render the chart.

### Creating a Chart

```javascript
new Chart(mycontext, {

    type: "bar",

});
```

Creates a new Chart.js chart.

The `type: "bar"` setting specifies a bar chart.

### Chart Data

```javascript
data: {

    labels: monthLabels,

    datasets: [{

        label: "Monthly Sales",

        data: monthValues,

        backgroundColor: "#5575f8",

        borderRadius: 6,

        barThickness: 28

    }]

}
```

- `labels` supplies the month names.
- `datasets` contains the actual chart data.
- `label` identifies the dataset.
- `data` supplies the calculated monthly sales.
- `backgroundColor` sets the bar colour.
- `borderRadius` rounds the bar corners.
- `barThickness` controls the bar width.

### Chart Options

```javascript
options: {

    responsive: true,

    maintainAspectRatio: false

}
```

`responsive: true` makes the chart adapt to its container.

`maintainAspectRatio: false` allows the chart to use the height defined by its CSS container.

### Removing the Legend

```javascript
plugins: {

    legend: {
        display: false
    }

}
```

Hides the default Chart.js legend.

### Chart Scales

```javascript
scales: {

    y: {
        beginAtZero: true
    },

    x: {
        grid: {
            display: false
        }
    }

}
```

The `y` scale controls the vertical axis.

`beginAtZero: true` makes the vertical axis start at zero.

The `x` scale controls the horizontal axis.

`grid: { display: false }` hides the horizontal-axis grid lines.

The vertical axis also uses a callback to format its labels with dollar signs and thousands separators.

---

## 5.9 Order Statistics Doughnut Chart

The second chart displays the number of successful, pending and cancelled orders.

### Getting the Canvas

```javascript
const orderCanvas = document.getElementById("orderChart");

const orderContext = orderCanvas.getContext("2d");
```

This locates the second canvas and obtains its drawing context.

### Creating the Doughnut Chart

```javascript
new Chart(orderContext, {

    type: "doughnut",

});
```

The `type: "doughnut"` setting tells Chart.js to create a doughnut chart.

### Chart Labels

```javascript
labels: [
    "Successful",
    "Pending",
    "Cancelled"
]
```

These are the three categories represented by the chart.

### Chart Data

```javascript
data: [
    successful,
    pending,
    cancelled
]
```

The chart uses the counters calculated earlier.

For example, if the order records contain:

```text
Successful: 8
Pending: 4
Cancelled: 2
```

The chart receives:

```javascript
data: [8, 4, 2]
```

This means the chart automatically changes when the order records change.

### Chart Colours

```javascript
backgroundColor: [
    "#5575f8",
    "#f5b544",
    "#ed6b75"
]
```

The colours represent:

- Blue: Successful.
- Yellow: Pending.
- Red: Cancelled.

### Cutout

```javascript
cutout: "65%"
```

Controls the size of the empty centre of the doughnut chart.

A larger percentage produces a larger hole.

### Hover Offset

```javascript
hoverOffset: 7
```

Moves a chart segment slightly outward when the user hovers over it.

---

# 6. HOW THE THREE LANGUAGES WORK TOGETHER

This is one of the most important parts of the project.

HTML, CSS and JavaScript are not working independently. They communicate through the webpage.

Consider what happens when ProfitTrack loads.

### Step 1: HTML Creates the Structure

The browser reads `order.html`.

It creates the sidebar, dashboard cards, chart canvases and empty table body.

At this stage, the dashboard has its structure but does not yet contain the dynamically generated order records.

### Step 2: CSS Styles the Structure

The browser loads `order.css`.

It applies the colours, spacing, fonts, layouts, card designs, table styling and responsive rules.

The webpage now has its visual appearance.

### Step 3: Chart.js Loads

The Chart.js library is loaded through the external CDN script.

This makes the `Chart` constructor available to the JavaScript file.

### Step 4: JavaScript Loads the Order Records

The browser executes `order.js`.

JavaScript creates the `orders` array and stores the order objects.

It also adds the two new orders using `unshift()`.

### Step 5: JavaScript Generates the Table

The `for` loop visits each order.

It builds an HTML table row for every object.

The finished HTML is inserted into the `orderList` element using `innerHTML`.

### Step 6: JavaScript Calculates the Figures

JavaScript examines the order records.

It calculates:

- Today's sales.
- Today's profit.
- Total orders.
- Unique customers.
- Successful orders.
- Pending orders.
- Cancelled orders.

It then updates the four overview cards.

### Step 7: JavaScript Generates the Charts

The monthly sales data is calculated from successful orders.

The order status counts are passed into the doughnut chart.

Chart.js uses the canvas elements in the HTML to display both charts.

### The Complete Data Flow

```text
             order.js
                 |
                 |
          Orders Array
                 |
        -------------------
        |        |        |
        |        |        |
      Table   Figures   Charts
        |        |        |
        -------------------
                 |
                 |
              HTML
                 |
                 |
              CSS
                 |
                 |
          Finished Dashboard
```

The order array is the main source of the dashboard's information.

The table, figures and charts all use information from that array.

---

# 7. HOW TO ADD NEW ORDERS

New orders are entered directly into the `orders` array or through the `newOrder` array.

Each order must follow the same object structure.

### Example

```javascript
{
    product: "Gaming Chair",
    customerName: "Michael James",
    date: "2026-11-17",
    price: 80000,
    cost: 50000,
    status: "successful"
}
```

### Understanding the Properties

**product**

The name of the product being sold.

**customerName**

The name of the customer.

**date**

The date the order was placed.

Use the format:

```text
YYYY-MM-DD
```

**price**

The amount the customer pays.

**cost**

The amount the business spends to obtain or produce the product.

**status**

The current order status.

The accepted values used by this project are:

```text
successful
pending
cancelled
```

### Important Rules

1. Every order should contain all six properties.
2. Property names must remain consistent.
3. The date should follow the correct format.
4. The status should use the expected lowercase spelling.
5. Enter the actual product cost to calculate meaningful profit.
6. Save the JavaScript file and refresh the browser after making changes.

---

# 8. HOW TO MODIFY OR REMOVE ORDERS

### Editing an Order

Find the order inside the `orders` array and change its values.

For example:

```javascript
price: 80000
```

Can be changed to:

```javascript
price: 90000
```

After saving and refreshing the browser, the calculations and charts will use the updated price.

### Removing an Order

Find the order object and remove it from the array.

Be careful to maintain the commas separating the remaining objects.

You can also use JavaScript's `splice()` method to remove an array item by its index.

For example:

```javascript
orders.splice(0, 1);
```

This removes one item starting at index zero.

The current project does not have a website interface for editing or deleting orders.

---

# 9. IMPORTANT PROJECT LIMITATIONS

ProfitTrack is currently a frontend demonstration project.

It has a working dashboard calculation system, but it is not yet a complete business management application.

### 1. No Database

The orders are stored in a JavaScript array.

They are not saved to a database.

The order records are recreated whenever the page loads.

### 2. No Permanent Storage

Changes made directly to the JavaScript source file remain in that file after saving.

However, the website itself does not save new records entered by visitors.

### 3. No Backend

The project does not currently use a backend server.

All calculations happen inside the browser.

### 4. No User Authentication

The administrator profile is currently a visual placeholder.

There is no login system or account authentication.

### 5. No Functional Navigation

The sidebar links currently use `href="#"`.

They do not open separate dashboard pages.

### 6. No Functional Date Filter

The date button and chart dropdown are currently visual elements.

They do not yet filter the dashboard information.

### 7. Customer Counting

Registered Users currently represents unique customer names found in the order array.

It does not represent customers registered through a separate registration system.

### 8. Profit Calculation

Profit is calculated using:

```javascript
price - cost
```

This represents the difference between selling price and product cost.

It does not yet account for other business expenses such as delivery, advertising, salaries, rent or taxes.

### 9. Currency

The project currently displays dollar signs.

The dollar sign is only a formatting choice. The code does not convert between currencies.

### 10. Order IDs

Order IDs are generated using the position of each order in the array.

They are not permanent unique identifiers.

---

# 10. FUTURE IMPROVEMENTS

ProfitTrack can be developed further as the project grows.

Possible improvements include:

| Feature | Purpose |
|---|---|
| Add Order Form | Enter orders through the website |
| Database | Store orders permanently |
| Backend | Process and manage business data |
| Search Orders | Find orders by customer or product |
| Filter Orders | Filter by status and date |
| Edit Orders | Modify existing records |
| Delete Orders | Remove unwanted records |
| Customer Management | Maintain a separate customer database |
| Expense Management | Record additional business expenses |
| Profit Reports | Generate detailed business reports |
| Date Filtering | View sales over selected periods |
| User Authentication | Secure the administrator dashboard |
| Export Reports | Download business reports as CSV or PDF |

These improvements would turn the current frontend project into a more complete business management system.

---

# 11. HOW TO RUN THE PROJECT

### Requirements

You need:

- A computer.
- Visual Studio Code or another code editor.
- A modern web browser.
- An internet connection to load Chart.js from its CDN.

### Running the Project

1. Open the OMS folder in Visual Studio Code.
2. Make sure `order.html`, `order.css` and `order.js` are in the same folder.
3. Open `order.html` in your browser.
4. Wait for the page to load.
5. Check that the dashboard cards, charts and order table are displayed.

### Making Changes

1. Open `order.js`.
2. Add, edit or remove order objects.
3. Save the file using `Ctrl + S`.
4. Return to the browser.
5. Refresh the page using `Ctrl + R`.

The dashboard will recalculate its figures using the updated order records.

---

# 12. CONCLUSION

ProfitTrack demonstrates how HTML, CSS and JavaScript can be combined to create a professional-looking business dashboard.

HTML provides the structure.

CSS controls the appearance and responsive layout.

JavaScript handles the business records, calculations and chart data.

The most important concept demonstrated in this project is the use of one main data source.

Instead of manually entering figures into dashboard cards and charts, JavaScript reads the order records and calculates the information automatically.

This makes the dashboard easier to maintain and provides a foundation for more advanced features.

**Project Name:** ProfitTrack

**Project Type:** Sales and Business Management Dashboard

**Technologies:** HTML5, CSS3, JavaScript and Chart.js

**Development Environment:** Visual Studio Code

**Current Architecture:** Frontend-only application

**Main Learning Areas:** HTML structure, CSS layouts, Flexbox, CSS Grid, responsive design, JavaScript arrays, objects, loops, conditions, functions, DOM manipulation, date handling, calculations and Chart.js.
