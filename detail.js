import products from "./products.js";
import cart from "./script.js";

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');


const loadIndexPage = () => {
  fetch('./index.html')
  .then(response => response.text())
  .then(html => {
    app.innerHTML = html;
    let contentTab = document.getElementById('contentTab');
    contentTab.innerHTML = temporaryContent.innerHTML;
    temporaryContent.innerHTML = null;
    cart();
    initApp();
  })
}


loadIndexPage();
const initApp = () => {
  let idProduct = new URLSearchParams(window.location.search).get('id');
  let info = products.filter((value) => value.id == idProduct)[0];
  console.log(info);
  if (!info) {
    window.location.href='./home.html';
  }
  let detail = document.querySelector('.detail');
  detail.querySelector('.image img').src = info.image;
  detail.querySelector('.name').innerText = info.name;
  detail.querySelector('.price').innerText = '$'+info.price;
  detail.querySelector('.description').innerText = info.description;
  detail.querySelector('.addCart').dataset.id = idProduct;

  // SIMILAR PRODUCTS 
  let listProducts = document.querySelector('.listProduct');
  listProducts.innerHTML = null;
  products.filter((value) => value.id != idProduct).forEach(product => {
  let newProduct = document.createElement('div');
  newProduct.classList.add('item');  
  newProduct.innerHTML =
  `
    <a href="/GOMYCODE/DOMProject1//detail.html?id=${product.id}">
      <img src="${product.image}" alt="${product.name}" width="200px">
    </a>
      <h2>${product.name}</h2>
    <p class="price">$ ${product.price}</p>
    <button class="addCart" data-id="${product.id}">
      Add to Cart
    </button>
  `;
  listProducts.appendChild(newProduct);
  });


}

