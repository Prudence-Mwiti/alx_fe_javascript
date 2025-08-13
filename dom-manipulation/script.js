// Quotes array with objects containing text and category
let quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
    { text: "It's not whether you get knocked down, it's whether you get up.", category: "Resilience" }
];

// Function to display a random quote
function displayRandomQuote() {
    if (quotes.length === 0) return;

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    document.getElementById("quoteDisplay").innerText = `"${quote.text}" — ${quote.category}`;
}

// Function to add a new quote
function addQuote(text, category) {
    if (!text || !category) return;

    quotes.push({ text: text, category: category });
    displayRandomQuote();
}

// Event listener for "Show New Quote" button
document.getElementById("newQuoteBtn").addEventListener("click", displayRandomQuote);




