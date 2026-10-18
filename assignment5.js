// ```javascript
// Assignment 5: Function Architecture and Scope

// Part 1: Standard function with default parameters

function calculateArea(length = 5, width = 4) {
    return length * width;
}

// Call the function without arguments
const defaultArea = calculateArea();

console.log(`Standard Function Area (Default 5x4): ${defaultArea}`);


// Part 2: Arrow function with default parameters

const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

// Call the arrow function with custom arguments
const customArea = calculateAreaArrow(10, 3);

console.log(`Arrow Function Area (Custom 10x3): ${customArea}`);


// Part 3: Demonstrate block scope

{
    let blockVar = "I exist inside this block";
    console.log(blockVar);
}

// Accessing blockVar outside the block causes a ReferenceError.
// try...catch allows us to demonstrate the error without stopping the program.

try {
    console.log(blockVar);
} catch (error) {
    console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}

