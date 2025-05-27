// Toggle search bar visibility
const searchIcon = document.getElementById("search-icon");
const searchForm = document.getElementById("search-form");

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    searchForm.classList.toggle("show");
    cartItemsContainer.classList.remove("active"); // Close cart if open
});

// Toggle cart visibility
const cartIcon = document.getElementById("cart-icon");
const cartItemsContainer = document.getElementById("cart-items-container");

cartIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    cartItemsContainer.classList.toggle("active");
    searchForm.classList.remove("show"); // Close search if open
});

// Close cart when clicking outside
document.addEventListener("click", (e) => {
    if (!cartItemsContainer.contains(e.target)) {
        cartItemsContainer.classList.remove("active");
    }
    if (!searchForm.contains(e.target)) {
        searchForm.classList.remove("show");
    }
});
