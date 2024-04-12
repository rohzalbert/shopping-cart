import cart from "./script.js";
import products from "./products.js";
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
  let listProducts = document.querySelector('.listProduct');
  listProducts.innerHTML = null;
  products.forEach(product => {
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