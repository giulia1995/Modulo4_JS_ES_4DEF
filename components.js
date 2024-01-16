export {createCard, cartElement}

function createCard(book) {
  const product = book;
  return `
    <div class="card m-3" style="width: 18rem;">
      <img src="${product.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.category}</p>
        <p class="card-text">${product.price}€</p>
        <a href="#" class="btn btn-primary add-button" data-book='${JSON.stringify(product)}'>Add to Cart</a>
        <a href="#" class="btn btn-primary discard-button">Discard</a>
        <a href="./details.html?q=${book.id}" class="btn btn-warning details-button text-white my-1">Details</a>
      </div>
    </div>`;
}
function cartElement(book) {
  const product = book;
  return `
    <li>
      <h5 class="cart-title">${product.title}</h5>
      <p class="cart-text">${product.price}€</p>
    </li>`;
}