let cart = [];
let wishlist = [];

function addToCart(id, name, price) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function addToWishlist(id, name) {
    if (!wishlist.find(i => i.id === id)) {
        wishlist.push({ id, name });
        updateWishlistDisplay();
    }
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function updateWishlistDisplay() {
    const wishlistItems = document.getElementById('wishlist-items');
    wishlistItems.innerHTML = '';
    wishlist.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        wishlistItems.appendChild(listItem);
    });
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// Example products - you would typically fetch these from a server
const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' }
];

document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.getElementById('product-catalog');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id}, '${product.name}')">Add to Wishlist</button>
        `;
        catalog.appendChild(productDiv);
    });
});
