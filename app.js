let cart = [];
let allProducts = [];

// ======================
// FETCH PRODUCTS FROM BACKEND
// ======================
fetch("http://localhost:5000/products")
  .then(response => response.json())
  .then(data => {
    allProducts = data;
    displayProducts(allProducts);
  })
  .catch(error => console.error("Error:", error));

// ======================
// DISPLAY PRODUCTS
// ======================
function displayProducts(products) {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  products.forEach(product => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ======================
// ADD TO CART
// ======================
function addToCart(id) {
  const product = allProducts.find(p => p.id === id);

  if (product) {
    cart.push(product);
    updateCart();
    alert(product.name + " added to cart!");
  }
}

// ======================
// REMOVE FROM CART
// ======================
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// ======================
// UPDATE CART UI + TOTAL
// ======================
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";

  let totalPrice = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
  }

  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    totalPrice += item.price;
  });

  total.innerHTML = "Total: ₹" + totalPrice;
}

// ======================
// SEARCH PRODUCTS
// ======================
const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
  });
}

// ======================
// CLIENT SIDE ROUTING (IMPORTANT)
// ======================
function showPage(page) {

  const home = document.getElementById("home");
  const products = document.getElementById("productsSection");
  const cartSection = document.getElementById("cartSection");

  home.style.display = "none";
  products.style.display = "none";
  cartSection.style.display = "none";

  if (page === "home") {
    home.style.display = "block";
  }

  if (page === "products") {
    products.style.display = "block";
  }

  if (page === "cart") {
    cartSection.style.display = "block";
  }
}
function toggleTheme() {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// ======================
// DEFAULT PAGE LOAD
// ======================
window.onload = function () {
  showPage("home");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
  }
};