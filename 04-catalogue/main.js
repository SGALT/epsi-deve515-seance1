/**
 * main.js – CP4 · Mini-catalogue en vanilla JS
 *
 * Phase 1 : faites-le marcher, en impératif, comme vous voulez.
 * Phase 2 : le formateur ajoute des exigences.
 * Phase 3 : tout passe par `state` + `render(state)` + `setState(patch)`.
 *
 * Réutilisez ce que vous avez écrit au CP3 : copiez api.js et format.js
 * (ou importez-les) plutôt que de réécrire fetch à la main.
 */

const BASE_URL = "https://dummyjson.com";
const euros = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });

// Raccourcis DOM
const $ = (selector) => document.querySelector(selector);
const listEl = $("#products");
const statusEl = $("#status");
const searchEl = $("#search");
const cartCountEl = $("#cart-count");
const cartEl = $("#cart");
const cartItemsEl = $("#cart-items");
const cartTotalEl = $("#cart-total");

/** Fabrique une carte produit. À vous d'y brancher le bouton. */
function createCard(product) {
  const li = document.createElement("li");
  li.className = "card";
  li.dataset.id = product.id;
  li.innerHTML = `
    <img src="${product.thumbnail}" alt="" loading="lazy" />
    <h3>${product.title}</h3>
    <p class="price">${euros.format(product.price)}</p>
    <button type="button">Ajouter</button>
  `;
  return li;
}

async function loadProducts() {
  const res = await fetch(`${BASE_URL}/products?limit=20`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.products;
}

// ---- Phase 1 : à vous ----
// 1. Charger les produits et les afficher dans #products (masquer #status).
// 2. Le champ #search filtre la liste (titre, insensible à la casse).
// 3. Le bouton "Ajouter" incrémente #cart-count et passe le bouton en "Ajouté".
// 4. #cart-toggle affiche / masque le panier (#cart) qui liste les produits ajoutés.

try {
  const products = await loadProducts();
  // TODO
} catch (err) {
  statusEl.textContent = `Erreur : ${err.message}`;
}
