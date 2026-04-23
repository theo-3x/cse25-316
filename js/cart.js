let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD ITEM
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// UPDATE CART DISPLAY
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">X</button>
        `;

        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("cart", JSON.stringify(cart));
}

// REMOVE ITEM
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// CLEAR CART
function clearCart() {
    cart = [];
    updateCart();
}

// LOAD CART ON PAGE LOAD
updateCart();

