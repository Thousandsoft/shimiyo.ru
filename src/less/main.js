import '../less/style.scss'


import {readJson} from '../blocks/body/catalog_card/readJson.js';
/*import {categoryLodad} from './category_animate.js';*/
import {showMenu} from '../blocks/header/header_menu.js';;
import products from '../blocks/body/products/products.js';
import basket from '../blocks/body/basket/basket.js';
import products_rendering from '../blocks/body/products/products_rendering.js';

readJson()
//showMenu();
products_rendering();


let basketAddButton = document.querySelectorAll('.catalog_grid_card_cost-button').forEach(item => {
    item.addEventListener('click', function (e) {
        basket.add(e.target.getAttribute('product_id'));
        
    })
});



/*const baseUrl = "https://raw.githubusercontent.com/centerwebpro/sunweb_projects_1/main/accepts/data.json";
            
            let categoryList = fetch(baseUrl)
                .then(response => response.json())
                .then(data => {
                    setNavLinks(data);
                });
                
                function setNavLinks(data) {
                    let navBlock = document.getElementsByClassName('topnav');
                    if(navBlock) {
                        Object.entries(data).forEach(item => {
                            if (item[1].status == true) {
                                let navElemet =  `<a href='#'> ${item[1].name} </a>`;
                                navBlock.innerHTML += navElemet;
                            }
                        })
                    }
                }

                

*/
var btn = document.getElementById("mobile_menu_button");
btn.addEventListener("click", function() {
    toggleMobileMenu() 
}, false);

function toggleMobileMenu() {

    var mobileButtonImage = document.getElementById('mobile-button-image');
    var mobileButtonText = document.getElementById('mobile-button-text');
   
    if (document.getElementById('toggle').checked) {
        mobileButtonText.style.color = "#A0A0A0";
        mobileButtonImage.src="./images/arrow-deactive.svg";
    } else {
        mobileButtonText.style.color = "#274646";
        mobileButtonImage.src="./images/arrow-active.svg";
    }
}
   


             var btn = document.getElementById("menuButton");
                btn.addEventListener("click", function() {
                    toggleMenu()
                }, false);

                function toggleMenu() {
                    
                    var menu = document.getElementById('menu');
                
                    
                    var displaySetting = menu.style.display;
                
                   // var container = document.getElementById('container');

                    var menuButtonImage = document.getElementById('menuButtonImage');
                    var bigLogoImage = document.getElementById('bigLogo');
                    var mobileLogoImage = document.getElementById('mobileLogo');
                    var headerStripe = document.getElementById('header_stripe');

                    var telephoneNumber = document.getElementById('telephone');

                    var geolocationImage = document.getElementById('geo-image');
                    var geolocationLabel = document.getElementById('geo-label');

                    var shimingsImage = document.getElementById('shim-image');
                    var shimingsLabel = document.getElementById('shim-label');

                    var shopBagImage = document.getElementById('shop-bag-image');
                    var costLabel = document.getElementById('cost-label');
                    
                    
                
                
                    
                    if (displaySetting == 'block') {
                      // clock is visible. hide it
                        headerStripe.style.backgroundColor = "#274646";
                        /*if (container.clientWidth < 720){
                            telephoneNumber.style.display = 'none';
                        }*/
                        bigLogoImage.src="./images/logo.svg";
                        mobileLogoImage.src="./images/mobile-logo.svg";

                        geolocationImage.src="./images/location-add.svg";
                        geolocationLabel.style.color = "#FFE091";

                        shimingsImage.src="./images/shimings-image.svg";
                        shimingsLabel.style.color = "#FFBDC8";
                        
                        shopBagImage.src="./images/shopping-bag.svg";
                        costLabel.style.color = 'white';

                        menu.style.display = 'none';
                        menuButtonImage.src="./images/menu-logo.svg";

                        
                      
                      
                     
            
                    }
                    else {
                      // clock is hidden. show it
                      headerStripe.style.backgroundColor = 'white';
                      menu.style.display = 'block';


                   // telephoneNumber.style.display = 'block';
                      bigLogoImage.src="./images/green-logo-big.svg";
                      mobileLogoImage.src="./images/mobile-logo-green.svg";

                      geolocationImage.src="./images/location-add-green.svg";
                      geolocationLabel.style.color = "#006666";

                      shimingsImage.src="./images/shimings-logo-green.svg";
                      shimingsLabel.style.color = "#006666";

                      shopBagImage.src="./images/shopping-bag-green.svg";
                      costLabel.style.color = "#274646";  
                        
                      menuButtonImage.src="./images/cross.svg";
                      
                      
                      
                    }
                  }