// Load quotes from localStorage or use defaults
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
    { text: "It's not whether you get knocked down, it's whether you get up.", category: "Resilience" }
];

// Save quotes to localStorage
function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Display a random quote
function displayRandomQuote() {
    if (quotes.length === 0) return;

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    document.getElementById("quoteDisplay").innerText = `"${quote.text}" — ${quote.category}`;

    // Save last viewed quote in sessionStorage
    sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

// Add a new quote
function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();

    if (!text || !category) {
        alert("Please enter both text and category.");
        return;
    }

    quotes.push({ text, category });
    saveQuotes();
    displayRandomQuote();

    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

// Export quotes to JSON file
function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "quotes.json";
    link.click();
    URL.revokeObjectURL(url);
}

// Import quotes from JSON file
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(e) {
        try {
            const importedQuotes = JSON.parse(e.target.result);
            if (Array.isArray(importedQuotes)) {
                quotes.push(...importedQuotes);
                saveQuotes();
                alert('Quotes imported successfully!');
            } else {
                alert('Invalid JSON format.');
            }
        } catch (err) {
            alert('Error reading JSON file.');
        }
    };
    fileReader.readAsText(event.target.files[0]);
}

// Event listeners
document.getElementById("newQuoteBtn").addEventListener("click", displayRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
document.getElementById("exportBtn").addEventListener("click", exportToJsonFile);
document.getElementById("importFile").addEventListener("change", importFromJsonFile);

// Show last viewed quote if exists in sessionStorage
window.onload = function() {
    const lastQuote = sessionStorage.getItem("lastQuote");
    if (lastQuote) {
        const quote = JSON.parse(lastQuote);
        document.getElementById("quoteDisplay").innerText = `"${quote.text}" — ${quote.category}`;
    } else {
        displayRandomQuote();
    }
};




