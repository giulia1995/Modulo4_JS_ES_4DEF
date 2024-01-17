const container = document.getElementById("container");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let createDetails = async function () {
  //GIF Loader
  container.innerHTML += `
      <div class="border-cont mt-5">
          <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>`;
  await fetch(`https://striveschool-api.herokuapp.com/books/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // Remouve GIF Loader + render fetch
      container.innerHTML = "";
      container.innerHTML += `
        <div class="card mb-3 mt-5" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${data.img} class="img-fluid rounded-start" alt="book">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fw-bold">${data.title}</h5>
        <p class="card-text">${data.category}</p>
        <p class="card-text">${data.price}€</p>
      </div>
    </div>
  </div>
</div>`;
    });
};

createDetails();
