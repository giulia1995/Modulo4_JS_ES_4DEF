export function createCard (book){
    const {title, img, price, category}=book;
    return `
    <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${category}</p>
      <p class="card-text">${price}</p>
      <a href="#" class="btn btn-primary add-button">Add to Cart</a>
      <a href="#" class="btn btn-primary discard-button">Discard</a>
    </div>
  </div>`
};