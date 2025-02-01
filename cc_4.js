// Task 1: If Statements

let purchaseAmount= 114.99; // Declare a variable purchaseAmount with a value.
let finalAmount = purchaseAmount; // Amount after discoumt
let discount = .25; //25% Discount
if (purchaseAmount > 100) { // Use an if statement to apply a discount if the amount is greater than $100.
    finalAmount = purchaseAmount * discount;
}

console.log(`Final Amount: $${finalAmount}`); // Log the final amount to the console using a template literal, e.g.

// Task 2: For Loop
let sales = [100, 200, 300, 400, 500];// Declare an array sales with at least five sales figures
let totalSales = 0;

for (let i=0; i < sales.length; i++) { // Use a for loop to calculate the total sales.
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`); // Log the total sales to the console using a template literal.

// Task 3: While Loop
let stock = 10; //Declare a variable stock with an initial value of 10.

while (stock > 0) { // Use a while loop to decrease stock until it reaches zero.
    stock--;
    console.log(`Stock Decrement by $1: $${stock}`); // Log each decrement to the console using a template literal.
}

console.log("Stock Decreased to Zero."); // Final log to console using a template literal 

// FROM NOW ON USE ` INSTEAD OF ' FOR TEMPLATE LITERALS 
// DO NOT FUCK IT UP OR YOU WILL FAIL . . .

// Task 4: Do...While Loop 
let responses = 0; // Declare a variable responses with an initial value of zero.

do {
    responses++; // Use a do...while loop to collect responses
    console.log(`Collected Responses: ${responses}`); // Log each response count to the console using a template literal.
} while (responses < 3); // Simulate user input with responses++ until it reaches 3

// Task 5: For...In Loop 
let employee = {   // Declare an object employee with properties {name, position, and salary}.
    name: "Bethany",
    position: "Product Manager",
    salary: 85000
};

for (let key in employee) { // Use a for...in loop to iterate through the object properties.
    console.log(`${key}: ${employee[key]}`); // Log each property and value to the console using a template literal.
};


