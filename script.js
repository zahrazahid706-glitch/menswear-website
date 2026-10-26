
let bag = [];

// Add product to shopping bag
function addToBag(productName, price) {
    bag.push({
        name: productName,
        price: price
    });

    document.querySelector(".bag").innerText =
        "BAG (" + bag.length + ")";

    alert(productName + " added to your bag!");
}

// Show shopping bag
function showBag() {
    if (bag.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }

    let message = "YOUR SHOPPING BAG\n\n";
    let total = 0;

    bag.forEach(function(item, index) {
        message += `${index + 1}. ${item.name} - PKR ${item.price.toLocaleString()}\n`;
        total += item.price;
    });

    message += `\nTotal: PKR ${total.toLocaleString()}`;

    alert(message);
}

// WhatsApp checkout
function checkoutWhatsApp() {
    if (bag.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }

    let message = "Hello MEN'S WEAR! I want to place an order:\n\n";
    let total = 0;

    bag.forEach(function(item, index) {
        message += `${index + 1}. ${item.name} - PKR ${item.price.toLocaleString()}\n`;
        total += item.price;
    });

    message += `\nTotal: PKR ${total.toLocaleString()}`;
    message += "\n\nPlease confirm my order.";

    // Replace with your full WhatsApp number
    // Country code + number, without +, spaces, or leading 0
    const phone = "9254105132";

    const url =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

// View order summary
function demoCheckout() {
    if (bag.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }

    let message = "MEN'S WEAR - ORDER SUMMARY\n\n";
    let total = 0;

    bag.forEach(function(item, index) {
        message += `${index + 1}. ${item.name} - PKR ${item.price.toLocaleString()}\n`;
        total += item.price;
    });

    message += `\nTotal Amount: PKR ${total.toLocaleString()}`;
    message += "\n\nDemo checkout only. Your order has not been placed.";

    alert(message);
}

// Search products by name
function searchProducts() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const input = searchInput.value.toLowerCase().trim();
    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        const heading = product.querySelector("h3");

        if (!heading) return;

        const name = heading.textContent.toLowerCase();

        product.style.display = name.includes(input) ? "" : "none";
    });
}

// Allow Enter key to search
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchProducts();
            }
        });
    }
});
