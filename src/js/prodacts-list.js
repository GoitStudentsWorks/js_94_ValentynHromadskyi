import { getFilteredProduct } from "./api";

import { replaceUnderscoresWithSpaces } from './filters';

var script = document.createElement('script');
script.src = '../js/pagination.js';
document.head.appendChild(script);

// функція для отримання продуктів з сервера

async function getProductsList(keyword, category, page = 1, limit = 6) {
  const url = `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const products = await response.json();
    const totalPages = products.totalPages;
    return products.results;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function getProduct(keyword, category, page = 1, limit = 6) {
  const url = `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const products = await response.json();
    const totalPages = products.totalPages;
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Функція для визначення ліміту в залежності від розміру екрану

function getLimit() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth >= 1440) {
    return 9;
  } else if (screenWidth >= 768) {
    return 8;
  } else {
    return 6; // значення за замовчуванням
  }
}

//картка продукта

function renderProductCard(data) {
  let result = replaceUnderscoresWithSpaces(data.category);
  return `
    <div class="productlist-card modalOn" data-productlist-id="${data._id}">
      <div class="productlist-background">
        <img src="${data.img}" alt="${data.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${data.name}</h2>
          <div class="pl-det">
          
          <div class="cat-cont">
          <p class="productlist-category">Category:
          <span class="word">${result}</span></p>

          <p class="productlist-size">Size:
          <span class="word">${data.size}</span></p>
          </div>

          <div class="popularity-cont">
          <p class="productlist-popularity">Popularity:
          <span class="word">${data.popularity}</span></p>
          </div>

          </div>
          <div class="price-icon">
          <p class="productlist-price">$${data.price.toFixed(2)}</p>
          <div id="${data._id}" class="price-icon-cont inBascet">
          <svg class="productlist-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2.70005 0.900024C2.46135 0.900024 2.23244 0.994846 2.06365 1.16363C1.89487 1.33241 1.80005 1.56133 1.80005 1.80002C1.80005 2.03872 1.89487 2.26764 2.06365 2.43642C2.23244 2.6052 2.46135 2.70002 2.70005 2.70002H3.79805L4.07255 3.79982C4.07528 3.81249 4.07828 3.82509 4.08155 3.83762L5.30375 8.72462L4.50005 9.52742C3.36605 10.6614 4.16885 12.6 5.77265 12.6H13.5C13.7387 12.6 13.9677 12.5052 14.1364 12.3364C14.3052 12.1676 14.4 11.9387 14.4 11.7C14.4 11.4613 14.3052 11.2324 14.1364 11.0636C13.9677 10.8948 13.7387 10.8 13.5 10.8H5.77265L6.67265 9.90002H12.6C12.7671 9.89993 12.9309 9.85333 13.073 9.76543C13.2151 9.67752 13.33 9.5518 13.4046 9.40232L16.1046 4.00232C16.1732 3.86515 16.2056 3.71273 16.1987 3.55953C16.1918 3.40633 16.1458 3.25744 16.0652 3.12698C15.9846 2.99652 15.872 2.88882 15.7381 2.81409C15.6042 2.73937 15.4534 2.70011 15.3 2.70002H5.65205L5.37305 1.58132C5.32429 1.3867 5.21191 1.21395 5.05374 1.09051C4.89557 0.967076 4.70068 0.90003 4.50005 0.900024H2.70005ZM14.4 14.85C14.4 15.2081 14.2578 15.5514 14.0046 15.8046C13.7515 16.0578 13.4081 16.2 13.05 16.2C12.692 16.2 12.3486 16.0578 12.0955 15.8046C11.8423 15.5514 11.7 15.2081 11.7 14.85C11.7 14.492 11.8423 14.1486 12.0955 13.8954C12.3486 13.6423 12.692 13.5 13.05 13.5C13.4081 13.5 13.7515 13.6423 14.0046 13.8954C14.2578 14.1486 14.4 14.492 14.4 14.85ZM5.85005 16.2C6.20809 16.2 6.55147 16.0578 6.80464 15.8046C7.05782 15.5514 7.20005 15.2081 7.20005 14.85C7.20005 14.492 7.05782 14.1486 6.80464 13.8954C6.55147 13.6423 6.20809 13.5 5.85005 13.5C5.49201 13.5 5.14863 13.6423 4.89545 13.8954C4.64228 14.1486 4.50005 14.492 4.50005 14.85C4.50005 15.2081 4.64228 15.5514 4.89545 15.8046C5.14863 16.0578 5.49201 16.2 5.85005 16.2Z" fill="#E8E8E2"/>
</svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
  
const storage = localStorage.getItem("filters")
const parstedStorage = JSON.parse(storage)

async function fetchAndRenderProducts(page = 1) {
  let keyword = parstedStorage.keyword;
  if (parstedStorage.keyword === null) {
    keyword=''
  }

  // let category = parstedStorage.category;
  let category = parstedStorage.category;
//   let category = underline(categoryLine)
// console.log(category);

  if (parstedStorage.category === null) {
    category=''
  }
  const limit = getLimit();

  try {
    const response = await getProductsList(keyword, category, page, limit);
    const responsed = await getProduct(keyword, category, page, limit);
    const products = response;

    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
      productList.innerHTML += renderProductCard(product);
    });

    const totalPages = responsed.totalPages 

    // console.log(page);
    renderPagination(totalPages, page);
  } catch (error) {
    console.error('Помилка:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderProducts();
});

// функция для смены страницы
window.changePage = function(page) {
  fetchAndRenderProducts(page);
  console.log(page)
};

window.addEventListener('resize', fetchAndRenderProducts);



// подключение файла пагинации
// var script = document.createElement('script');
// script.src = '../js/pagination.js';
// document.head.appendChild(script);


// function underline(inputString) {
//   let outputString = inputString.replace(/ /g, '_');
//   return outputString;}