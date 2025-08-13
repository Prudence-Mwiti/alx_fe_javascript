// REQUIRED: quotes array of OBJECTS with text and category
const quotes = [
  { text: "The best way to predict the future is to create it.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "You miss 100% of the shots you don’t take.", category: "Inspiration" }
];

// REQUIRED: displayRandomQuote function
function displayRandomQuote() {
  const display = document.getElementById("quoteDisplay");
  if (!quotes.length) {
    display.innerText = "No quotes available. Add one below!";
    return;
  }
  // REQUIRED: logic to select a random quote and update the DOM
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const q = quotes[randomIndex];
  display.innerText = `"${q.text}" — ${q.category}`;
}

// REQUIRED: addQuote function
function addQuote() {
  const textEl = document.getElementById("newQuoteText");
  const catEl = document.getElementById("newQuoteCategory");

  const text = textEl.value.trim();
  const category = catEl.value.trim();

  if (!text || !category) {
    alert("Please fill in both the quote and the category.");
    return;
  }

  // REQUIRED: logic to add a new quote to the quotes array
  quotes.push({ text, category });

  // REQUIRED: update the DOM after adding
  document.getElementById("quoteDisplay").innerText = `"${text}" — ${category}`;

  // Clear inputs
  textEl.value = "";
  catEl.value = "";
}

// REQUIRED: event listener on the “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Optional: event listener for Add Quote button
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Show one quote on load
displayRandomQuote();




