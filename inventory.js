// Step 1: Data & Input Initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// User se prompt ke zariye naya product aur price lena
let inputName = prompt("Enter new product name:") || "Monitor";
let inputPrice = Number(prompt("Enter product price:")) || 150;

// Naye product ko inventory array me add karna
inventory.push({ name: inputName, price: inputPrice });

console.log("--- Initializing Inventory System ---");
console.log(`[Prompt executed: User adds "${inputName}" at "$${inputPrice}"]`);

// Step 2 & 5: Processing Inventory Roster (forEach aur Conditional logic)
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
    let category = "";
    
    // Price ke mutabiq category assign karna (if...else)
    if (item.price < 50) {
        category = "Budget";
    } else if (item.price <= 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

// Step 4 & 5: Financial Analytics (Functions, filter, aur map)
console.log("\n--- Financial Analytics ---");

// Total inventory value calculate karne ke liye function
const calculateTotal = (arr) => {
    return arr.reduce((sum, item) => sum + item.price, 0);
};

let totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

// Filter items under $200
let affordableItems = inventory
    .filter(item => item.price < 200)
    .map(item => item.name);
console.log(`Filtered Affordable Items (Under $200):`, JSON.stringify(affordableItems));

// Formatted Report List using map
let formattedReport = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List:`, JSON.stringify(formattedReport));