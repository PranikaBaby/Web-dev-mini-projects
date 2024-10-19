const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 39.99, image: "https://via.placeholder.com/150" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} has been added to your cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

function renderCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");
    cartItemsDiv.innerHTML = '';

    let total = 0;
    cart.forEach(product => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
        total += product.price;
    });
    
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

// Initialize
if (document.getElementById("product-list")) {
    renderProducts();
}

if (document.getElementById("cart-items")) {
    renderCart();
    updateCartCount();
}

document.getElementById("checkout")?.addEventListener("click", () => {
    alert("Checkout functionality is not implemented yet.");
});
