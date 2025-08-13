// Sample quotes array
const quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Motivation" },
  { text: "Believe you can and you're halfway there.", category: "Inspiration" },
  { text: "Happiness is not something ready made. It comes from your own actions.", category: "Life" }
];

// Populate categories dropdown
function populateCategories() {
  const categorySelect = document.getElementById("categorySelect");
  
  // Extract unique categories
  const categories = [...new Set(quotes.map(q => q.category))];

  // Clear existing options
  categorySelect.innerHTML = '<option value="all">All</option>';

  // Populate dropdown
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  // Restore last selected category if exists in localStorage
  const savedCategory = localStorage.getItem("selectedCategory");
  if (savedCategory && categories.includes(savedCategory)) {
    categorySelect.value = savedCategory;
    filterQuote(); // Show filtered quotes immediately
  }
}

// Filter quotes based on selected category
function filterQuote() {
  const selectedCategory = document.getElementById("categorySelect").value;
  
  // Save selected category to localStorage
  localStorage.setItem("selectedCategory", selectedCategory);

  const quoteContainer = document.getElementById("quoteContainer");
  quoteContainer.innerHTML = "";

  const filteredQuotes = selectedCategory === "all" 
    ? quotes 
    : quotes.filter(q => q.category === selectedCategory);

  filteredQuotes.forEach(q => {
    const quoteElem = document.createElement("p");
    quoteElem.textContent = q.text;
    quoteContainer.appendChild(quoteElem);
  });
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
  populateCategories();
  document.getElementById("categorySelect").addEventListener("change", filterQuote);
});






