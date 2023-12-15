import{a as f}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();const L="https://food-boutique.b.goit.study/api";async function T(){try{return await f.get(`${L}/products/categories`)}catch(t){console.log(t.message)}}async function y(t){try{return(await f.get(`${L}/products/${t}`)).data}catch(e){console.log(e.message)}}async function D(){try{return await f.get(`${L}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function N(){try{return await f.get(`${L}/products/discount`)}catch(t){console.log(t.message)}}async function _(t){return(await f.post(`${L}/subscription`,t)).data}const M=document.querySelector(".form-footer"),p=document.querySelector(".modal-subscription"),d=document.querySelector(".modal-unsubscription"),l=document.querySelector(".modal-backdrop-subscription"),z=document.querySelector(".container-modal");p.classList.add("is-hidden");d.classList.add("is-hidden");const w=t=>{const e=t.target;(e===p||e.closest(".close"))&&(p.classList.add("is-hidden"),l.classList.add("is-hidden")),(e===d||e.closest(".close"))&&(d.classList.add("is-hidden"),l.classList.add("is-hidden")),(e===z||e.closest(".close"))&&(d.classList.add("is-hidden"),l.classList.add("is-hidden"))};function P(t){(t.key==="Escape"||t.target===l)&&(p.classList.add("is-hidden"),d.classList.add("is-hidden"),l.classList.add("is-hidden"),document.body.style.overflow="auto")}const j=()=>{p.classList.remove("is-hidden"),l.classList.remove("is-hidden"),document.body.style.overflow="hidden"},J=()=>{d.classList.remove("is-hidden"),l.classList.remove("is-hidden"),document.body.style.overflow="hidden"},R=async t=>{const e={email:t};try{const o=await _(e);j()}catch(o){o.response.data.message==="Subscription already exists"?J():showError()}};function U(t){t.preventDefault();const o=document.querySelector(".input-label").value.trim();R(o),M.reset()}M.addEventListener("submit",U);p.addEventListener("click",w);d.addEventListener("click",w);l.addEventListener("click",w);document.addEventListener("keydown",P);document.addEventListener("click",P);const a={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};a.form&&a.form.addEventListener("input",x);a.form&&a.form.addEventListener("submit",x);W();async function W(){try{const e=(await T()).data;for(let o=0;o<e.length;o++)a.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${e[o]}">${e[o]}</option>`)}catch{console.log("err")}}const m={keyword:null,category:null,page:1,limit:6};async function x(){const t=a.filtersInput.value;console.log(t),m.keyword=t,t===""&&(m.keyword=null);const e=a.filtersCategories.value;m.category=e,e===""&&(m.category=null),localStorage.setItem("filters",JSON.stringify(m))}Y();function Y(){const t=JSON.parse(localStorage.getItem("filters"));a.filtersInput&&(a.filtersInput.value=t.keyword||""),a.filtersCategories&&(a.filtersCategories.value=t.category||"")}function B(t){return t.replace(/_/g," ")}var I=document.createElement("script");I.src="../js/pagination.js";document.head.appendChild(I);async function G(t,e,o=1,r=6){const s=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${r}`;try{const i=await(await fetch(s)).json(),u=i.totalPages;return i.results}catch(c){return console.error("Error fetching products:",c),[]}}async function K(t,e,o=1,r=6){const s=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${r}`;try{const i=await(await fetch(s)).json(),u=i.totalPages;return i}catch(c){return console.error("Error fetching products:",c),[]}}function V(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function Q(t){let e=B(t.category);return`
    <div class="productlist-card modalOn" data-productlist-id="${t._id}">
      <div class="productlist-background">
        <img src="${t.img}" alt="${t.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${t.name}</h2>
          <div class="pl-det">
          
          <div class="cat-cont">
          <p class="productlist-category">Category:
          <span class="word">${e}</span></p>

          <p class="productlist-size">Size:
          <span class="word">${t.size}</span></p>
          </div>

          <div class="popularity-cont">
          <p class="productlist-popularity">Popularity:
          <span class="word">${t.popularity}</span></p>
          </div>

          </div>
          <div class="price-icon">
          <p class="productlist-price">$${t.price.toFixed(2)}</p>
          <div id="${t._id}" class="price-icon-cont inBascet">
          <svg class="productlist-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2.70005 0.900024C2.46135 0.900024 2.23244 0.994846 2.06365 1.16363C1.89487 1.33241 1.80005 1.56133 1.80005 1.80002C1.80005 2.03872 1.89487 2.26764 2.06365 2.43642C2.23244 2.6052 2.46135 2.70002 2.70005 2.70002H3.79805L4.07255 3.79982C4.07528 3.81249 4.07828 3.82509 4.08155 3.83762L5.30375 8.72462L4.50005 9.52742C3.36605 10.6614 4.16885 12.6 5.77265 12.6H13.5C13.7387 12.6 13.9677 12.5052 14.1364 12.3364C14.3052 12.1676 14.4 11.9387 14.4 11.7C14.4 11.4613 14.3052 11.2324 14.1364 11.0636C13.9677 10.8948 13.7387 10.8 13.5 10.8H5.77265L6.67265 9.90002H12.6C12.7671 9.89993 12.9309 9.85333 13.073 9.76543C13.2151 9.67752 13.33 9.5518 13.4046 9.40232L16.1046 4.00232C16.1732 3.86515 16.2056 3.71273 16.1987 3.55953C16.1918 3.40633 16.1458 3.25744 16.0652 3.12698C15.9846 2.99652 15.872 2.88882 15.7381 2.81409C15.6042 2.73937 15.4534 2.70011 15.3 2.70002H5.65205L5.37305 1.58132C5.32429 1.3867 5.21191 1.21395 5.05374 1.09051C4.89557 0.967076 4.70068 0.90003 4.50005 0.900024H2.70005ZM14.4 14.85C14.4 15.2081 14.2578 15.5514 14.0046 15.8046C13.7515 16.0578 13.4081 16.2 13.05 16.2C12.692 16.2 12.3486 16.0578 12.0955 15.8046C11.8423 15.5514 11.7 15.2081 11.7 14.85C11.7 14.492 11.8423 14.1486 12.0955 13.8954C12.3486 13.6423 12.692 13.5 13.05 13.5C13.4081 13.5 13.7515 13.6423 14.0046 13.8954C14.2578 14.1486 14.4 14.492 14.4 14.85ZM5.85005 16.2C6.20809 16.2 6.55147 16.0578 6.80464 15.8046C7.05782 15.5514 7.20005 15.2081 7.20005 14.85C7.20005 14.492 7.05782 14.1486 6.80464 13.8954C6.55147 13.6423 6.20809 13.5 5.85005 13.5C5.49201 13.5 5.14863 13.6423 4.89545 13.8954C4.64228 14.1486 4.50005 14.492 4.50005 14.85C4.50005 15.2081 4.64228 15.5514 4.89545 15.8046C5.14863 16.0578 5.49201 16.2 5.85005 16.2Z" fill="#E8E8E2"/>
</svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `}const X=localStorage.getItem("filters"),h=JSON.parse(X);async function A(t=1){let e=h.keyword;h.keyword===null&&(e="");let o=h.category;h.category===null&&(o="");const r=V();try{const s=await G(e,o,t,r),c=await K(e,o,t,r),i=s,u=document.getElementById("productList");u.innerHTML="",i.forEach(H=>{u.innerHTML+=Q(H)});const Z=c.totalPages;renderPagination(Z,t)}catch(s){console.error("Помилка:",s)}}document.addEventListener("DOMContentLoaded",()=>{A()});window.changePage=function(t){A(t),console.log(t)};window.addEventListener("resize",A);function t1(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function e1(t){let e=B(t.category);return`
      <div class="popular-card modalOpopul" data-productlist-id="${t._id}">
       <div class="popular-background">
        <img src="${t.img}" alt="${t.name}" class="popular-img">
      </div>
      <div class="popular-descript">
        <div class="popular-descript-text">
          <p class="popular-name">${t.name}</p>
          <div class="pop-frame">

          <div class="category-cont">
          <p class="popular-text">Category:
          <span class="word">${e}</span></p>
<ul class="pop-text-two-cat">
<li class="pop-text-size-pop">
          <p class="popular-text">Size:
          <span class="word">${t.size}</span></p></li>
          <li>
          <p class="popular-text">Popularity:
          <span class="word">${t.popularity}</span></p></li></ul>
          </div>

           <div class="popularname-price">
           </div>
           <div id="${t._id}" class="popular-icon-cont inBascet">
           <svg class="popular-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M1.79995 0.6C1.64082 0.6 1.48821 0.663214 1.37569 0.775736C1.26317 0.888258 1.19995 1.04087 1.19995 1.2C1.19995 1.35913 1.26317 1.51174 1.37569 1.62426C1.48821 1.73679 1.64082 1.8 1.79995 1.8H2.53195L2.71495 2.5332C2.71677 2.54164 2.71877 2.55004 2.72095 2.5584L3.53575 5.8164L2.99995 6.3516C2.24395 7.1076 2.77915 8.4 3.84835 8.4H8.99995C9.15908 8.4 9.31169 8.33678 9.42421 8.22426C9.53674 8.11174 9.59995 7.95913 9.59995 7.8C9.59995 7.64087 9.53674 7.48826 9.42421 7.37574C9.31169 7.26321 9.15908 7.2 8.99995 7.2H3.84835L4.44835 6.6H8.39995C8.51135 6.59994 8.62053 6.56887 8.71527 6.51027C8.81 6.45167 8.88656 6.36785 8.93635 6.2682L10.7363 2.6682C10.782 2.57675 10.8036 2.47513 10.799 2.373C10.7944 2.27087 10.7638 2.17161 10.7101 2.08464C10.6563 1.99766 10.5813 1.92586 10.492 1.87605C10.4027 1.82623 10.3022 1.80005 10.1999 1.8H3.76795L3.58195 1.0542C3.54945 0.924452 3.47452 0.809286 3.36908 0.726994C3.26363 0.644702 3.13371 0.600004 2.99995 0.6H1.79995ZM9.59995 9.9C9.59995 10.1387 9.50513 10.3676 9.33635 10.5364C9.16756 10.7052 8.93864 10.8 8.69995 10.8C8.46126 10.8 8.23234 10.7052 8.06355 10.5364C7.89477 10.3676 7.79995 10.1387 7.79995 9.9C7.79995 9.6613 7.89477 9.43239 8.06355 9.2636C8.23234 9.09482 8.46126 9 8.69995 9C8.93864 9 9.16756 9.09482 9.33635 9.2636C9.50513 9.43239 9.59995 9.6613 9.59995 9.9ZM3.89995 10.8C4.13865 10.8 4.36756 10.7052 4.53635 10.5364C4.70513 10.3676 4.79995 10.1387 4.79995 9.9C4.79995 9.6613 4.70513 9.43239 4.53635 9.2636C4.36756 9.09482 4.13865 9 3.89995 9C3.66126 9 3.43234 9.09482 3.26355 9.2636C3.09477 9.43239 2.99995 9.6613 2.99995 9.9C2.99995 10.1387 3.09477 10.3676 3.26355 10.5364C3.43234 10.7052 3.66126 10.8 3.89995 10.8Z" fill="#6D8434"/>
</svg> 
          </div>
        </div>
      </div>
    </div>
    </div>
  `}D().then(t=>t.data).then(t=>{const e=t1(t,5),o=document.getElementById("popularContainer");e.forEach(r=>{o.innerHTML+=e1(r)})}).catch(t=>{console.error(t.message)});function o1(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function r1(t){return`
      <div class="product-card modalOndisc" data-productlist-id="${t._id}">
        <div class="product-background">

        <div class="discount-label">
      <svg class="dicount-label-icon" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#6D8434"/>
<path d="M50.5248 39.1172L50.0883 40.2992L42.0374 37.3327L42.474 36.1507L43.1383 36.3955L43.1466 36.373C42.8648 35.9239 42.6335 35.1992 42.9619 34.3099C43.5065 32.8353 45.0583 32.1665 46.95 32.8636C48.8416 33.5606 49.5869 35.0757 49.0423 36.5503C48.7139 37.4396 48.0894 37.849 47.538 37.9911L47.5297 38.0136L50.5248 39.1172ZM43.8554 34.8694C43.4979 35.8374 44.077 36.7286 45.3494 37.1975C46.633 37.6704 47.6416 37.3642 47.9991 36.3962C48.3816 35.3605 47.6394 34.4604 46.5134 34.0455C45.3874 33.6306 44.2379 33.8337 43.8554 34.8694Z" fill="#FAFAFA"/>
<path d="M47.049 42.2422C47.2548 41.9615 47.6615 41.8128 48.0103 42.0677C48.359 42.3226 48.3302 42.7475 48.1245 43.0281C47.9045 43.3281 47.5146 43.4742 47.1658 43.2193C46.817 42.9644 46.8291 42.5421 47.049 42.2422ZM46.5848 41.13L45.8397 42.1461L40.889 38.5279L41.6341 37.5118L46.5848 41.13Z" fill="#FAFAFA"/>
<path d="M40.928 43.6924C39.889 44.2058 38.7834 44.7895 37.8508 43.6611C37.1016 42.7546 37.4135 41.5497 38.5623 40.604C40.091 39.3456 41.3374 39.5163 42.2094 40.4772L41.2644 41.2551C40.7976 40.7845 40.2159 40.5328 39.2153 41.3565C38.539 41.9132 38.527 42.4826 38.7717 42.7786C39.2609 43.3706 39.8643 42.9516 40.6968 42.5461C41.5924 42.1041 42.7339 41.4132 43.6207 42.4861C44.2628 43.2631 44.0895 44.4472 42.9036 45.4234C41.6158 46.4835 40.431 46.2932 39.6857 45.5233L40.6307 44.7454C41.0014 45.062 41.5001 45.2887 42.2598 44.6633C42.8435 44.1828 42.975 43.7015 42.6998 43.3686C42.3022 42.8876 41.7436 43.2853 40.928 43.6924Z" fill="#FAFAFA"/>
<path d="M34.4065 47.1788C34.6536 47.7539 35.2728 48.342 36.2955 47.9947C37.4658 47.5972 37.6245 46.428 37.2523 45.3378C36.8801 44.2476 36.0502 43.4142 34.8685 43.8155C33.8459 44.1628 33.7113 44.9943 33.8869 45.657L32.6938 46.0622C32.3272 44.6913 33.0238 43.3521 34.5351 42.8389C36.2735 42.2485 37.825 43.1157 38.4454 44.9327C39.0658 46.7497 38.3674 48.3809 36.6403 48.9674C35.1291 49.4807 33.8109 48.8511 33.2134 47.5839L34.4065 47.1788Z" fill="#FAFAFA"/>
<path d="M29.262 43.5846C31.1784 43.7018 32.2595 45.1023 32.1438 47.0068C32.0281 48.9113 30.7855 50.1698 28.8691 50.0527C26.9527 49.9355 25.8716 48.535 25.9873 46.6305C26.103 44.726 27.3455 43.4675 29.262 43.5846ZM29.1994 44.6147C28.0016 44.5415 27.3213 45.4497 27.2449 46.7073C27.1678 47.977 27.7339 48.9494 28.9317 49.0226C30.1294 49.0958 30.809 48.1996 30.8861 46.9299C30.9625 45.6723 30.3972 44.6879 29.1994 44.6147Z" fill="#FAFAFA"/>
<path d="M20.1946 47.3901L19.0609 46.8401L21.7436 41.3261L22.8772 41.8761L22.5308 42.5883L22.5523 42.5987C23.0538 42.3085 23.836 42.1545 24.7861 42.6155C25.8118 43.1131 26.3328 44.0995 25.7185 45.362L23.8653 49.1711L22.7209 48.6158L24.4166 45.1304C24.7789 44.3859 24.6968 43.7592 23.9194 43.382C23.0449 42.9578 22.2263 43.2141 21.8273 44.0342L20.1946 47.3901Z" fill="#FAFAFA"/>
<path d="M14.6871 43.0438C13.9262 42.1948 13.8179 41.0851 14.8653 40.1501L18.0253 37.3291L18.8742 38.2763L15.9828 40.8576C15.3651 41.409 15.2035 42.0198 15.7801 42.6632C16.4288 43.3871 17.2839 43.4602 17.9642 42.8528L20.7483 40.3675L21.5892 41.3058L17.0148 45.3894L16.1739 44.4511L16.7647 43.9237L16.7487 43.9058C16.1744 43.9842 15.3918 43.8302 14.6871 43.0438Z" fill="#FAFAFA"/>
<path d="M12.0886 36.3297L12.5634 37.3793L15.5945 36.0149C16.2291 35.7292 16.1672 35.3886 15.7872 34.6648L16.7282 34.2412C16.8868 34.4462 17.0334 34.6829 17.1718 34.989C17.5873 35.9074 17.399 36.5975 16.2172 37.1295L13.0876 38.5383L13.4536 39.3474L12.5126 39.771L12.1466 38.9619L10.3849 39.7549L9.86062 38.596L11.6224 37.803L11.1476 36.7533L12.0886 36.3297Z" fill="#FAFAFA"/>
<path d="M8.42611 23.7142L8.69997 22.4843L17.0753 24.3473L16.8014 25.5771L16.1103 25.4234L16.1051 25.4468C16.4446 25.8543 16.7711 26.5416 16.565 27.4669C16.2234 29.0013 14.7756 29.8717 12.8077 29.434C10.8397 28.9963 9.89794 27.5943 10.2396 26.0599C10.4457 25.1346 11.0095 24.6453 11.5367 24.4307L11.542 24.4073L8.42611 23.7142ZM15.6046 27.032C15.8289 26.0247 15.1355 25.2189 13.8118 24.9244C12.4764 24.6274 11.5183 25.0658 11.2939 26.0732C11.054 27.1508 11.9101 27.9436 13.0815 28.2041C14.2529 28.4647 15.3646 28.1096 15.6046 27.032Z" fill="#FAFAFA"/>
<path d="M11.4424 20.1526C11.2761 20.4583 10.8931 20.6601 10.5134 20.4542C10.1336 20.2482 10.1052 19.8233 10.2715 19.5176C10.4492 19.1908 10.8159 18.9938 11.1957 19.1997C11.5754 19.4057 11.6201 19.8258 11.4424 20.1526ZM12.0514 21.1927L12.6535 20.0858L18.0439 23.0091L17.4418 24.1159L12.0514 21.1927Z" fill="#FAFAFA"/>
<path d="M17.3269 17.8758C18.2897 17.2308 19.3092 16.5073 20.3816 17.504C21.243 18.3046 21.0915 19.54 20.0765 20.6281C18.7259 22.0759 17.4679 22.0699 16.4777 21.2314L17.3126 20.3364C17.837 20.7419 18.4466 20.9152 19.3306 19.9676C19.9282 19.327 19.8655 18.7609 19.5842 18.4995C19.0217 17.9766 18.4784 18.471 17.7063 18.9821C16.8762 19.5376 15.8352 20.3721 14.8156 19.4244C14.0773 18.7382 14.0941 17.5415 15.1418 16.4183C16.2796 15.1986 17.4791 15.2322 18.3187 15.8979L17.4838 16.7929C17.0749 16.5276 16.5508 16.3681 15.8796 17.0876C15.3639 17.6404 15.2965 18.1348 15.6129 18.4289C16.07 18.8538 16.5717 18.3863 17.3269 17.8758Z" fill="#FAFAFA"/>
<path d="M23.243 13.5934C22.9202 13.0571 22.2269 12.5583 21.2607 13.0409C20.1549 13.5931 20.1561 14.7729 20.6728 15.8025C21.1895 16.8322 22.1247 17.5455 23.2412 16.9878C24.2074 16.5053 24.228 15.6634 23.9642 15.0306L25.0914 14.4676C25.6406 15.7761 25.1318 17.1971 23.704 17.9102C22.0615 18.7306 20.4067 18.0816 19.5456 16.3655C18.6845 14.6494 19.1553 12.9388 20.7871 12.1238C22.2149 11.4107 23.6064 11.8559 24.3702 13.0304L23.243 13.5934Z" fill="#FAFAFA"/>
<path d="M28.8224 16.4354C26.9074 16.5748 25.6486 15.3309 25.5083 13.4281C25.3681 11.5253 26.4311 10.1123 28.346 9.97288C30.2609 9.83344 31.5198 11.0773 31.66 12.9801C31.8003 14.883 30.7373 16.2959 28.8224 16.4354ZM28.7465 15.4061C29.9433 15.319 30.496 14.3282 30.4034 13.0716C30.3099 11.8031 29.6187 10.9149 28.4219 11.0021C27.225 11.0892 26.6715 12.068 26.765 13.3366C26.8576 14.5932 27.5497 15.4933 28.7465 15.4061Z" fill="#FAFAFA"/>
<path d="M37.349 11.4476L38.5456 11.8424L36.6209 17.6645L35.4243 17.2697L35.6729 16.5178L35.6501 16.5102C35.1918 16.8645 34.4371 17.121 33.4343 16.7901C32.3517 16.433 31.7041 15.5244 32.1448 14.1913L33.4744 10.1694L34.6823 10.5679L33.4658 14.248C33.2059 15.0342 33.3706 15.6445 34.1912 15.9152C35.1142 16.2197 35.8914 15.8569 36.1776 14.991L37.349 11.4476Z" fill="#FAFAFA"/>
<path d="M43.3935 15.008C44.2592 15.7498 44.5122 16.8358 43.5967 17.9003L40.8346 21.112L39.8688 20.2842L42.3961 17.3456C42.936 16.7178 43.0161 16.091 42.36 15.5288C41.6219 14.8963 40.7647 14.9361 40.17 15.6275L37.7366 18.457L36.7799 17.6371L40.7782 12.988L41.735 13.8079L41.2185 14.4084L41.2368 14.424C41.7958 14.2709 42.5917 14.3208 43.3935 15.008Z" fill="#FAFAFA"/>
<path d="M46.8445 21.2669L46.2328 20.2907L43.4128 22.0505C42.8223 22.4189 42.9295 22.7481 43.4035 23.4141L42.528 23.9604C42.3433 23.7787 42.1662 23.5639 41.9877 23.2792C41.4524 22.4251 41.5461 21.7159 42.6456 21.0298L45.5572 19.2129L45.0857 18.4605L45.9612 17.9142L46.4328 18.6666L48.0718 17.6438L48.7473 18.7216L47.1083 19.7444L47.7201 20.7205L46.8445 21.2669Z" fill="#FAFAFA"/>
<path d="M32.9166 27.6667C27.6666 28.8333 26.4416 32.4325 25.2283 35.4483L26.3308 35.8333L26.885 34.4917C27.165 34.5908 27.4566 34.6667 27.6666 34.6667C34.0833 34.6667 35.8333 24.75 35.8333 24.75C35.25 25.9167 31.1666 26.0625 28.25 26.6458C25.3333 27.2292 24.1666 29.7083 24.1666 30.875C24.1666 32.0417 25.1875 33.0625 25.1875 33.0625C27.0833 27.6667 32.9166 27.6667 32.9166 27.6667Z" fill="#FAFAFA"/>
</svg>
      </div>

          <img src="${t.img}" alt="${t.name}" class="product-image">
        </div>
        <div class="product-details">
          <div class="details-text">

          <div class="name-price">
          <h2 class="product-name">${t.name}</h2>
          <p class="product-price">$${t.price.toFixed(2)}</p>
          </div>
          
          <div id="${t._id}" class="discount-icon-cont inBascet">
          <svg class="discount-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2.70005 0.899994C2.46135 0.899994 2.23244 0.994815 2.06365 1.1636C1.89487 1.33238 1.80005 1.5613 1.80005 1.79999C1.80005 2.03869 1.89487 2.26761 2.06365 2.43639C2.23244 2.60517 2.46135 2.69999 2.70005 2.69999H3.79805L4.07255 3.79979C4.07528 3.81246 4.07828 3.82506 4.08155 3.83759L5.30375 8.72459L4.50005 9.52739C3.36605 10.6614 4.16885 12.6 5.77265 12.6H13.5C13.7387 12.6 13.9677 12.5052 14.1364 12.3364C14.3052 12.1676 14.4 11.9387 14.4 11.7C14.4 11.4613 14.3052 11.2324 14.1364 11.0636C13.9677 10.8948 13.7387 10.8 13.5 10.8H5.77265L6.67265 9.89999H12.6C12.7671 9.8999 12.9309 9.8533 13.073 9.7654C13.2151 9.67749 13.33 9.55177 13.4046 9.40229L16.1046 4.00229C16.1732 3.86512 16.2056 3.7127 16.1987 3.5595C16.1918 3.4063 16.1458 3.25741 16.0652 3.12695C15.9846 2.99649 15.872 2.88879 15.7381 2.81406C15.6042 2.73934 15.4534 2.70008 15.3 2.69999H5.65205L5.37305 1.58129C5.32429 1.38667 5.21191 1.21392 5.05374 1.09048C4.89557 0.967046 4.70068 0.899999 4.50005 0.899994H2.70005ZM14.4 14.85C14.4 15.208 14.2578 15.5514 14.0046 15.8046C13.7515 16.0578 13.4081 16.2 13.05 16.2C12.692 16.2 12.3486 16.0578 12.0955 15.8046C11.8423 15.5514 11.7 15.208 11.7 14.85C11.7 14.492 11.8423 14.1486 12.0955 13.8954C12.3486 13.6422 12.692 13.5 13.05 13.5C13.4081 13.5 13.7515 13.6422 14.0046 13.8954C14.2578 14.1486 14.4 14.492 14.4 14.85ZM5.85005 16.2C6.20809 16.2 6.55147 16.0578 6.80464 15.8046C7.05782 15.5514 7.20005 15.208 7.20005 14.85C7.20005 14.492 7.05782 14.1486 6.80464 13.8954C6.55147 13.6422 6.20809 13.5 5.85005 13.5C5.49201 13.5 5.14863 13.6422 4.89545 13.8954C4.64228 14.1486 4.50005 14.492 4.50005 14.85C4.50005 15.208 4.64228 15.5514 4.89545 15.8046C5.14863 16.0578 5.49201 16.2 5.85005 16.2Z" fill="#E8E8E2"/>
</svg>
          </div>

        </div>
      </div>
    `}N().then(t=>t.data).then(t=>{const e=o1(t,2),o=document.getElementById("discountContainer");e.forEach(r=>{o.innerHTML+=r1(r)})}).catch(t=>{console.error(t.message)});document.querySelector(".productlist-card");function s1(t){try{console.log(t);let e=JSON.parse(localStorage.getItem("cart"))||[];console.log(e);const o={id:t,pieces:"1"};e.push(o),localStorage.setItem("cart",JSON.stringify(e))}catch(e){console.log(e)}}async function C(t,e){const o=document.querySelector(".modal-content");o.innerHTML="";const r=await y(t);o.innerHTML=c1(r,e)}function c1(t,e){return`
    <div class="modal-product-img">
      <img src="${t.img}" alt="${t.name}" />
    </div>
    <div class="modal-product-info">
        <h4 class="modal-product-title">${t.name}</h4>
      <div class="modal-product-characteristics">
        <div>Category: <span>${t.category}</span></div>
        <div>Size: <span>${t.size}</span></div>
        <div>Popularity: <span>${t.popularity}</span></div>
      </div>
      <p class="modal-product-description">
      ${t.desc}
      </p>
    </div>
    <div class="modal-product-price">$${t.price.toFixed(2)}</div>
    <button class="modal-product-button" data-productlist-id="${t._id}"> ${e}<svg class="modal-product-button-icon">
    <use class="modal-product-button-icon" href="./icons.svg#icon-heroicons-solid_shopping-cart"></use>
  </svg></button>
    `}const b=document.querySelector(".modal"),n1=document.querySelector(".close-button");function S(){b.classList.add("show-modal"),document.body.style.overflow="hidden"}function v(){b.classList.remove("show-modal"),document.body.style.overflow="auto"}function i1(t){t.target===b&&v()}n1.addEventListener("click",v);window.addEventListener("click",i1);document.addEventListener("keydown",function(t){t.keyCode===27&&v()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",s1(e)),t.target.addEventListener("click",v())});function $(t){return new Promise((e,o)=>{const r=document.querySelectorAll(t);if(r.length>0)e(r);else{const s=new MutationObserver(()=>{const c=document.querySelectorAll(t);c.length>0&&(s.disconnect(),e(c))});s.observe(document.documentElement,{childList:!0,subtree:!0})}})}$(".modalOn").then(t=>{t.forEach(e=>{e.addEventListener("click",o=>{const r=o.currentTarget.dataset.productlistId;localStorage.getItem(r)?C(r,"Remove from"):C(r,"Add to"),S()})})}).catch(t=>{console.error(t.message)});$(".modalOndisc").then(t=>{t.forEach(e=>{e.addEventListener("click",o=>{const r=o.currentTarget.dataset.productlistId;localStorage.getItem(r)?C(r,"Remove from"):C(r,"Add to"),S()})})}).catch(t=>{console.error(t.message)});$(".modalOpopul").then(t=>{t.forEach(e=>{e.addEventListener("click",o=>{const r=o.currentTarget.dataset.productlistId;localStorage.getItem(r)?C(r,"Remove from"):C(r,"Add to"),S()})})}).catch(t=>{console.error(t.message)});const g="cart";function a1(t,e){localStorage.setItem(e,JSON.stringify(t))}const n={cartBlock:document.querySelector(".js-cart-block"),cartCounter:document.querySelector("span#cart-counter"),deleteAllBtn:document.querySelector(".delete-all-btn"),cartDeleteAllBlock:document.querySelector(".cart-delete-all-section"),cartListBlock:document.querySelector(".cart-list-block"),cartEmptyCart:document.querySelector(".cart-empty-cart"),yourOrderPrice:document.querySelector(".cart-total-price"),spanYourOrderPrice:document.querySelector("span#your-order-total-price"),cardDeleteOneBtn:document.querySelector(".carg-delete-all-btn")};E();function E(){n.cartDeleteAllBlock&&n.cartDeleteAllBlock.setAttribute("hidden",""),n.yourOrderPrice&&n.yourOrderPrice.setAttribute("hidden",""),n.cartEmptyCart&&n.cartEmptyCart.removeAttribute("hidden","")}function l1(){n.cartDeleteAllBlock.removeAttribute("hidden",""),n.yourOrderPrice.removeAttribute("hidden",""),n.cartEmptyCart.setAttribute("hidden","")}d1();async function d1(){let t=await F(g);if(n.cartCounter.textContent=t.length,t.length===0){n.cartBlock.innerHTML=k(),E();return}l1(),q(),n.deleteAllBtn.addEventListener("click",u1)}async function q(){n.cartListBlock.innerHTML="";let t=await F(g);for(const e of t){let o=e.id;try{const r=await y(o),s=C1(r,o);n.cartListBlock.innerHTML+=s,document.querySelector(`.js-cart-block .cart-card[data-productlist-id="${o}"] .card-delete-all-btn`).addEventListener("click",()=>{p1(o);const i=document.querySelector(".js-cart-block .cart-list"),u=i.querySelector(`.cart-card[data-productlist-id="${o}"]`);i.removeChild(u)})}catch(r){console.error(r.message)}}O(t),n.cartCounter.textContent=t.length}function F(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function u1(){localStorage.removeItem(g),n.cartBlock.innerHTML=k(),n.cartCounter.textContent=0}async function p1(t){let e=F(g),o=e.findIndex(r=>r.id===t);o!==-1&&(e.splice(o,1),a1(e,g),n.cartListBlock.innerHTML="",await q(),O(e),n.cartCounter.textContent=e.length,e.length===0&&(n.cartBlock.innerHTML=k(),E()))}async function O(t){try{let e=0;const o=t.map(s=>y(s.id));(await Promise.all(o)).forEach(s=>{let c=s.price;e+=c}),n.spanYourOrderPrice.textContent=`$${Number(e.toFixed(2))}`}catch(e){console.error(e.message)}}function k(){return`
    <div class="js-cart-block">
      <div class="cart-empty-cart">
        <div class="cart-img-empty-cart">
          <img
            class="img-shopping-cart"
            src="/img/cart/yellow-shopping-basket.png"
            width="132"
            height="114"
          />
          
        </div>
        <div class="cart-text">
            <p class="cart-text-empty">
              Your basket is <span class="cart-text-span">empty...</span>
            </p>
            <p class="cart-all-text">
              Go to the main page to select your favorite <br />
              products and add them to the cart.
            </p>
          </div>
      </div>
    </div>`}function C1(t){let e=m1(t.category);return`
    <div class="cart-card" data-productlist-id="${t._id}">
      <div class="cart-background">
        <img src="${t.img}" alt="${t.name}" class="cart-image">
      </div>
      <div class="cart-details">
        <div class="cart-details-text">
        <div class="cart-close-icon">
          <h2 class="cart-name">${t.name}</h2>
          <button type="button" class="card-delete-all-btn">
          <svg class="card-delete-close-icon">
            <use href="./icons.svg#icon-close-mini"></use>
          </svg>
        </button>
          </div>
          <div class="cart-pl-det">
            <div class="cart-category-cont">
             <p class="cart-category">Category:
                <span class="cart-word">${e}</span></p></div>
              <div>  
             <p class="cart-size">Size:
                <span class="cart-word">${t.size}</span></p></div>
            </div>
          </div>
          <div class="cart-price">
          <p class="cart-price">$${t.price.toFixed(2)}</p> 
          </div>
        </div>
      </div>
    </div>
  `}function m1(t){return t.replace(/_/g," ")}function g1(t){return new Promise((e,o)=>{const r=document.querySelectorAll(t);if(r.length>0)e(r);else{const s=new MutationObserver(()=>{const c=document.querySelectorAll(t);c.length>0&&(s.disconnect(),e(c))});s.observe(document.documentElement,{childList:!0,subtree:!0})}})}g1(".inBascet").then(t=>{t.forEach(e=>{e.addEventListener("click",o=>{o.currentTarget.id;let r=JSON.parse(localStorage.getItem("cart"))||[];console.log(r);const s={id:o.currentTarget.id,pieces:"1"};r.push(s),localStorage.setItem("cart",JSON.stringify(r))})})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=main-59f184fb.js.map
