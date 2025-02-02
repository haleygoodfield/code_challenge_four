// Task 1: If Statements- Scenario: Customer Dicsounts 
let purchaseAmount= 114.99; // Declare a variable purchaseAmount with a value.
let finalAmount = purchaseAmount; // Amount after discoumt
let discount = .25; //25% Discount
if (purchaseAmount > 100) { // Use an if statement to apply a discount if the amount is greater than $100.
    finalAmount = purchaseAmount * discount;
}

console.log(`Final Amount After Discount: $${finalAmount}`); // Log the final amount to the console using a template literal, e.g.



// Task 2: For Loop- Scenario: Sales Report 
let sales = [100, 200, 300, 400, 500];// Declare an array sales with at least five sales figures
let totalSales = 0;

for (let i=0; i < sales.length; i++) { // Use a for loop to calculate the total sales.
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`); // Log the total sales to the console using a template literal.



// Task 3: While Loop- Scenario: Inventory Depletion 
let stock = 10; //Declare a variable stock with an initial value of 10.

while (stock > 0) { // Use a while loop to decrease stock until it reaches zero.
    stock--; // Decrements by 1
    console.log(`Stock Decrement by $1: $${stock}`); // Log each decrement to the console using a template literal.
}

console.log("Stock Depleted to Zero."); // Final log to console using a template literal 



// Task 4: Do...While Loop- Scenario: Customer Survey 
let responses = 0; // Declare a variable responses with an initial value of zero.

do {
    responses++; // Use a do...while loop to collect responses
    console.log(`Collected Responses: ${responses}`); // Log each response count to the console using a template literal.
} while (responses < 3); // Simulate user input with responses++ until it reaches 3



// Task 5: For...In Loop- Scenario: Employee Information 
let employee = {   // Declare an object employee with properties {name, position, and salary}.
    name: "Bethany",
    position: "Product Manager",
    salary: 85000
};

for (let key in employee) { // Use a for...in loop to iterate through the object properties.
    console.log(`${key}: ${employee[key]}`); // Log each property and value to the console using a template literal.
};



// Task 6: For...Of Loop- Scenario: Product Listings
let products = ["Earings", "Necklace", "Bracelet"]; // Declare an array products with at least three product names
for (let product of products) { // Use a for...of loop to display each product.
    console.log(`Product Listing: ${product}`); // Log each product name to the console using a template literal.
};



// Task 7: forEach()Method- Scenario: Order Processing 
let orders = [222, 333, 444]; // Declare an array orders with at least three order IDs

orders.forEach(order => {
    console.log(`Order Processing by ID:' ${order}`); // Use the forEach() method to log each order ID to the console using a template literal.
});



// Task 8: Function Declaration- Scenario: Tax Calculation 
function calculateTax(amount, taxRate) { // Write a function calculateTax that takes an amount and tax rate.
    return amount * taxRate; // Return the calculated tax 
};                                  
let tax = calculateTax(15000, 0.05) // Ammount 15,000, tax rate 5%

console.log(`Amount with Tax: $${tax}`); // Log the result to the console using a template literal.
