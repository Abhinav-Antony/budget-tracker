// Function to show and hide pages
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');  // Hide all pages
    document.getElementById(pageId).style.display = 'block';  // Show selected page
}

// Registration Validation
function validateRegistration() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Validate email format
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Simulate successful registration
    alert("Registration successful!");
    showPage('login-page');  // Redirect to login page
    return false;
}

// Login Validation
function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert("Please fill in both fields.");
        return false;
    }

    // Simulate successful login
    showPage('tracker-page');  // Redirect to tracker page
    return false;
}

// Feedback Validation
function validateFeedback() {
    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const message = document.getElementById('feedback-message').value;
    
    if (!name || !email || !message) {
        alert("All fields must be filled.");
        return false;
    }

    // Simulate successful feedback submission
    alert("Thank you for your feedback!");
    showPage('home-page');  // Redirect to home page
    return false;
}

// Expense Tracker Logic
let totalAmount = 0;
let categoryData = {
    food: 0,
    travel: 0,
    bills: 0,
    entertainment: 0,
    others: 0
};

document.getElementById('expense-entry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('expense-date').value;
    const category = document.getElementById('expense-category').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (!date || !category || isNaN(amount) || amount <= 0) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Add expense to total and category
    totalAmount += amount;
    categoryData[category] += amount;

    // Update UI
    document.getElementById('total-amount').innerText = `$${totalAmount.toFixed(2)}`;
    document.getElementById(`${category}-expense`).innerText = `$${categoryData[category].toFixed(2)}`;
});

// Logout function
function logout() {
    showPage('home-page');  // Redirect to home page
}
