import '../less/style.scss'


import {readJson} from '../blocks/body/catalog_card/readJson.js';
/*import {categoryLodad} from './category_animate.js';*/
import {showMenu} from '../blocks/header/header_menu.js';;
import products from '../blocks/body/products/products.js';
import basket from '../blocks/body/basket/basket.js';
import products_rendering from '../blocks/body/products/products_rendering.js';
import {storiesScroll} from '../blocks/body/stories/stories-scroll.js';
import {toggleMenu} from '../blocks/body/menu/show_menu.js';
import {toggleMobileMenu} from '../blocks/body/menu/show_mobile_menu';
import {showCart} from '../blocks/header/show_cart.js';
import {selectNavItem} from '../blocks/header/topnav_select.js';
readJson()
products_rendering();
storiesScroll();

//topnavSelect();

basket._getCartData();



let topnavButtons = document.querySelectorAll('.topnav').forEach(item => {
  item.addEventListener('click', function (e) {
    selectNavItem(e);
  })
});

function addActive(el){
  document.querySelector(el).classList.add("active");
}

let basketAddButton = document.querySelectorAll('.catalog_grid_card_cost-button').forEach(item => {
    item.addEventListener('click', function (e) {
        basket.add(e.target.getAttribute('product_id'));
    })
});

let basketClearButton = document.querySelectorAll('.header_cart_clear_button').forEach(item => {
  item.addEventListener('click', function (e) {
      basket._deleteCartData();
  })
});

var menuBtn = document.getElementById("menuButton");
menuBtn.addEventListener("click", function () {
  toggleMenu()
}, false);   

var cartBtn = document.getElementById("cart-label");
cartBtn.addEventListener("click", function () {
  showCart()
}, false); 

var btn = document.getElementById("mobile_menu_button");
btn.addEventListener("click", function() {
    toggleMobileMenu() 
}, false);
   
