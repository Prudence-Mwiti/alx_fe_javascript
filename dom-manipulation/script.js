// Quotes array
let quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up."
];

// Function to display a random quote
function displayRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
}

// Function to add a new quote
function addQuote() {
    let newQuote = prompt("Enter your new quote:");
    if (newQuote && newQuote.trim() !== "") {
        quotes.push(newQuote.trim());
        displayRandomQuote();
    }
}

// Event listener for “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Event listener for “Add Quote” button
document.getElementById("addQuote").addEventListener("click", addQuote);

// Show a quote on page load
displayRandomQuote();



