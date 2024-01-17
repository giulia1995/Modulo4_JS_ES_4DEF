import {createCard, cartElement } from "./components.js"
import { fetchData } from "./fetch.js";
export {updateBooksDisplay}

const container = document.querySelector(".container");
const cartList = document.querySelector(".cartList");
const searchInput = document.querySelector(".search");
const clearCartButton = document.getElementById("clearCartButton");

let allBooks = [];
let filteredBooks = [];
const cartItems = [];

function updateBooksDisplay(books) {
  const row = document.createElement("div");
  row.className = "row";
  container.innerHTML = "";
  container.appendChild(row);
  books.forEach((book) => {
    const cardHTML = createCard(book);
    row.innerHTML += cardHTML;
  });
  const discardButton = document.querySelectorAll(".discard-button");
  discardButton.forEach((discard) => {
    discard.addEventListener("click", function () {
      const card = discard.closest(".card");
      card.classList.add("d-none");
    });
  });
  const addButton = document.querySelectorAll(".add-button");
  addButton.forEach((add) => {
    add.addEventListener("click", function () {
      const card = add.closest(".card");
      card.classList.add("d-none"); 
      const bookData = JSON.parse(add.getAttribute("data-book"));
      // Add the book to the cartItems array
      cartItems.push(bookData);
      updateCartDisplay();
    });
  });
}
function updateCartDisplay() {
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    const cartHTML = cartElement(item);
    cartList.innerHTML += cartHTML;
  });
}
function searchBooks(query) {
  const searchTerm = query.toLowerCase();
  filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );
  updateBooksDisplay(filteredBooks);
}
function clearCart() {
  cartItems.length = 0;
  updateCartDisplay();
}
document.addEventListener("DOMContentLoaded", function () {
  fetchData().then((books) => {
    allBooks = books;
    updateBooksDisplay(allBooks);
  });
  

  searchInput.addEventListener("change", function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm.length > 2) {
      searchBooks(searchTerm);
    } else {
      updateBooksDisplay(allBooks);
    }
  });
  clearCartButton.addEventListener("click", clearCart);
});
