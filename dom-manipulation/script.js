// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form, input, and list
    const form = document.getElementById('item-form');
    const input = document.getElementById('item-input');
    const list = document.getElementById('item-list');

    // Listen for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent page refresh

        const newItem = input.value.trim();

        if (newItem === '') {
            alert('Please enter an item');
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = newItem;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Append remove button to the list item
        li.appendChild(removeBtn);

        // Append list item to the list
        list.appendChild(li);

        // Clear input field
        input.value = '';
    });

    // Listen for clicks on remove buttons
    list.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-btn')) {
            e.target.parentElement.remove();
        }
    });
});

