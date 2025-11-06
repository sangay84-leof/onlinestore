const products = [
    { id: 1, name: "Smart Watch", price: 99, image: "https://via.placeholder.com/200x180?text=Smart+Watch" },
    { id: 2, name: "Wireless Headphones", price: 59, image: "https://via.placeholder.com/200x180?text=Headphones" },
    { id: 3, name: "Gaming Mouse", price: 39, image: "https://via.placeholder.com/200x180?text=Gaming+Mouse" },
    { id: 4, name: "Bluetooth Speaker", price: 49, image: "https://via.placeholder.com/200x180?text=Speaker" },
    { id: 5, name: "Smartphone", price: 499, image: "https://via.placeholder.com/200x180?text=Smartphone" }
];

let cartCount = 0;

const productList = document.getElementById("product-list");
const cartCountDisplay = document.getElementById("cart-count");

function displayProducts() {
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>s
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
        productList.appendChild(div);
    });
}

function addToCart(id) {
    cartCount++;
    cartCountDisplay.textContent = cartCount;
    alert("Item added to cart!");
}

displayProducts();
