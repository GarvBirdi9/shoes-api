import { apiCall } from "./api-client.js";

function loadShoe() {
  const URL =
    "https://raw.githubusercontent.com/ggsbv/testable-shoe-catalogue-api/master/test-db-data.js";
  const promise = apiCall(URL);
  promise
    .then(function (response) {
      const pr = response.json();
      pr.then(function (data) {
        printShoes(data);
        console.log("Data is ", data);
      }).catch(function (err) {
        console.log("Error is ", err);
      });
    })
    .catch(function (err) {
      console.log("API Cannot be loaded");
    });
}

loadShoe();

function printShoes(shoes) {
  for (var i = 0; i < shoes.length; i++) {
    printShoe(shoes[i]);
  }
}

function printShoe(shoe) {
  const card = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${shoe.brand}</h5>
    <p class="card-text">${shoe.color} ${shoe.size} &#8377; ${shoe.price} ${shoe['in_stock']}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  const div = document.getElementById("output");
  div.innerHTML = div.innerHTML + card;
}
