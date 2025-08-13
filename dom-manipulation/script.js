// Array of quote objects
const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
    { text: "It's not whether you get knocked down, it's whether you get up.", category: "Perseverance" },
    { text: "If you are working on something exciting, it will keep you motivated.", category: "Work" },
    { text: "Success is not in what you have, but who you are.", category: "Life" }
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").textContent = randomQuote.text;
    document.getElementById("category").textContent = `Category: ${randomQuote.category}`;
}

// Function to add a new quote
function addQuote() {
    const quoteText = document.getElementById("new-quote-text").value.trim();
    const quoteCategory = document.getElementById("new-quote-category").value.trim();

    if (quoteText && quoteCategory) {
        quotes.push({ text: quoteText, category: quoteCategory });

        document.getElementById("new-quote-text").value = "";
        document.getElementById("new-quote-category").value = "";

        alert("Quote added successfully!");
    } else {
        alert("Please fill in both the quote and the category.");
    }
}

// Event listeners
document.getElementById("new-quote").addEventListener("click", displayRandomQuote);
document.getElementById("add-quote").addEventListener("click", addQuote);


