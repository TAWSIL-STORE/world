// Données simulées de produits
const products = [
    { id: 1, name: "Ordinateur Portable", price: 999, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Smartphone", price: 599, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Casque Audio", price: 199, image: "https://via.placeholder.com/200" },
    // Ajoute plus de produits ici
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Afficher les produits
function displayProducts() {
    const container = document.getElementById('products');
    container.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>${product.price}€</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        container.appendChild(card);
    });
}

// Ajouter au panier
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    document.getElementById('cart-btn').textContent = `Panier (${cart.length})`;
}

// Recherche
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayFiltered(filtered);
});

function displayFiltered(filtered) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    filtered.forEach(product => {
        // Même code que displayProducts
        const card = document.createElement('div');
        card.className = 'col-md-4 product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>${product.price}€</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        container.appendChild(card);
    });
}

// Initialisation
displayProducts();
updateCartCount();
