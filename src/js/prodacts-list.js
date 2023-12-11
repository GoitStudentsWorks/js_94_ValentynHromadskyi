import { getFilteredProduct } from "./api";




// функція для отримання продуктів з сервера
async function getProductsList(keyword, category, page = 1, limit = 6) {
  const url = `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const products = await response.json();
    return products.results;
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
  return `
    <div class="productlist-card" data-productlist-id="${data._id}">
      <div class="productlist-background">
        <img src="${data.img}" alt="${data.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${data.name}</h2>
          <div class="pl-det">
          
          <div class="category-cont">
          <p class="productlist-category">Category:
          <span class="word">${data.category}</span></p>

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
          <div class="price-icon-cont">
          <svg class="productlist-icon" width="18" height="18">
            <use href="../icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
  
const refs = {
  filterCatList: document.querySelector('.filters-categories'),
  form: document.getElementById('fiters-form'),
  filtersInput: document.querySelector('.filters-input'),
  filtersCategories: document.querySelector('.filters-categories'),
};

refs.filterCatList.addEventListener("change", changeFilter)


async function changeFilter(event) {
  let category = event.target.value;
  const filters = {
    category: category,
    byABC: true,
    byPrice: false,
    byPopularity: false,
    page: 1,
    limit: 6,
  };

  try {
    const result = await getFilteredProduct(filters);
    const data = result.results

    console.log(data);

    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    data.forEach(product => {
      productList.innerHTML += renderProductCard(product);
    });

    const totalPages = Math.ceil(result.total / filters.limit);
    renderPagination(totalPages, filters.page);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}
  
async function fetchAndRenderProducts(page = 1) {
  const keyword = '';
  const category = '';
  const limit = getLimit();

  try {
    const response = await getProductsList(keyword, category, page, limit);
    const products = response;

    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
      productList.innerHTML += renderProductCard(product);
    });

    const totalPages = Math.ceil(response.total / limit);
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
};

window.addEventListener('resize', fetchAndRenderProducts);

// подключение файла пагинации
var script = document.createElement('script');
script.src = '/js/pagination.js';
document.head.appendChild(script);

