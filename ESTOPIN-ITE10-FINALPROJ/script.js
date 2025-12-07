// LOGIN VALIDATION
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from refreshing the page

    const username = document.getElementById("username").value; // Get input value
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    // Hard-coded temporary valid credentials
    const validUser = "angelo";
    const validPass = "54321";

    // Check if input matches valid credentials
    if (username === validUser && password === validPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        errorMsg.textContent = "Incorrect username or password!";
    }
});

// LOGOUT FUNCTIONALITY
document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully!");
    window.location.href = "login.html";
});

// PAGE PROTECTION: Prevent user from accessing home without login
if (!localStorage.getItem("loggedIn") && window.location.pathname.includes("home.html")) {
    window.location.href = "login.html";
}

// NAVBAR ACTIVE LINK HIGHLIGHTER
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-left a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});