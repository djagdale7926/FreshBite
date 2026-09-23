// ================================
// FreshBite JavaScript
// ================================

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("freshBiteCart")) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem("freshBiteCart", JSON.stringify(cart));
}

// ================================
// ADD FOOD TO CART
// ================================

function addToCart(name, price) {

    let cart = getCart();

    // Check if item already exists
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart(cart);

    alert(name + " added to cart! 🛒");

    updateCartCount();
}

// ================================
// UPDATE CART COUNT
// ================================

function updateCartCount() {

    let cart = getCart();

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    let cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = totalItems;
    }
}

// ================================
// FOOD HORIZONTAL SCROLL
// ================================

function scrollFood(direction) {

    let container = document.getElementById("product");

    if (container) {

        if (direction === "left") {
            container.scrollBy({
                left: -450,
                behavior: "smooth"
            });
        } else {
            container.scrollBy({
                left: 450,
                behavior: "smooth"
            });
        }
    }
}

// ================================
// RUN WHEN PAGE LOADS
// ================================

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});