// Task 1: If Statements

let purchaseAmount= 114.99; // Declare a variable purchaseAmount with a value.
let finalAmount = purchaseAmount; // Amount after discoumt
let discount = .25; //25% Discount
if (purchaseAmount > 100) { // Use an if statement to apply a discount if the amount is greater than $100.
    finalAmount = purchaseAmount * discount;
}

console.log('Final Amount: $ $${finalAmount}'); // Log the final amount to the console using a template literal, e.g.

// fix template literal later... 

// Task 2: For Loop
let sales = [100, 200, 300, 400, 500];// Declare an array sales with at least five sales figures
let totalSales = 0;

for (let i=0; i < sales.length; i++) { // Use a for loop to calculate the total sales.
    totalSales += sales[i];
}

console.log('Total sales: $ $${totalSales}'); // Log the total sales to the console using a template literal.

// Task 3: While Loop
let stock = 10; //Declare a variable stock with an initial value of 10.

while (stock > 0) { // Use a while loop to decrease stock until it reaches zero.
    stock--;
    console.log('Stock Decrement: ${stock}'); // Log each decrement to the console using a template literal.
}

console.log("Stock Decreased to Zero."); // Final log to console using a template literal 



      

