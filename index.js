// Variables are used to store data.
let message = "Hello, World!";
let number = 42;
const pi = 3.14; // 'const' creates a constant (unchangeable) variable.

// Access the HTML elements by their IDs and update their content
document.getElementById("message").textContent += ` ${message}`;
document.getElementById("number").textContent += ` ${number}`;
document.getElementById("pi").textContent += ` ${pi}`;
