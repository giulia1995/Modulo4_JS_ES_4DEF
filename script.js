import { fetchData } from "./fetch.js";
import { createCard } from "./components.js";

document.addEventListener("DOMContentLoaded", function() {
  fetchData().then((books) => {
    const container = document.querySelector(".container");
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    books.forEach(book => {
        const cardHTML = createCard(book);
        row.innerHTML += cardHTML;
    });
    const discardButton = document.querySelectorAll(".discard-button");
    discardButton.forEach((discard) => {
        discard.addEventListener("click", function (){
            const card = discard.closest(".card");
            card.classList.add("d-none");
        });
    });
    const addButton = document.querySelectorAll(".add-button");
    addButton.forEach((add)=>{
        add.addEventListener("click", function (){
            const card = add.closest(".card");
        })
    })

});
})
