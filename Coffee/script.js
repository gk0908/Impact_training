// Toggle search bar visibility
const searchIcon = document.getElementById("search-icon");
const searchForm = document.getElementById("search-form");

searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("show");
});

// Toggle cart visibility
const cartIcon = document.getElementById("cart-icon");
const cartItemsContainer = document.getElementById("cart-items-container");

cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.toggle("active");
});

// Close cart when clicking outside
document.addEventListener("click", (e) => {
    if (!cartIcon.contains(e.target) && !cartItemsContainer.contains(e.target)) {
        cartItemsContainer.classList.remove("active");
    }
});

// Close search form when clicking outside
document.addEventListener("click", (e) => {
    if (!searchIcon.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("show");
    }
});
// cd D:/ImpactTraining/Coffee
// git init
// git add .
// git commit -m "Initial commit"
// git remote add origin https://github.com/username/Coffee.git
// git branch -M main
// git push -u origin main
