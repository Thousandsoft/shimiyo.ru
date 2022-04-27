

export function toggleMenu() {

  let menu = document.getElementById('menu');


  let displaySetting = menu.style.display;


  let menuButtonImage = document.getElementById('menuButtonImage');
  let bigLogoImage = document.getElementById('bigLogo');
  let mobileLogoImage = document.getElementById('mobileLogo');
  let headerStripe = document.getElementById('header_stripe');

  let telephoneNumber = document.getElementById('telephone');

  let geolocationImage = document.getElementById('geo-image');
  let geolocationLabel = document.getElementById('geo-label');

  let shimingsImage = document.getElementById('shim-image');
  let shimingsLabel = document.getElementById('shim-label');

  let shopBagImages = document.getElementsByClassName("cart-image");
  
  let rubleSymbol = document.getElementById('cart_ruble-symbol');

  let mobileCartBackGround = document.getElementById('mobile-cart');

  let cartLabels = document.getElementsByClassName("cart-cost");
  

  
  



  if (displaySetting == 'block') {
    
    headerStripe.style.backgroundColor = "#274646";
   
    bigLogoImage.src = "./images/logo.svg";
    mobileLogoImage.src = "./images/mobile-logo.svg";

    geolocationImage.src = "./images/location-add.svg";
    geolocationLabel.style.color = "#FFE091";

    shimingsImage.src = "./images/shimings-image.svg";
    shimingsLabel.style.color = "#FFBDC8";

    for(let i = 0; i < shopBagImages.length; i++) {
      shopBagImages[i].src = "./images/shopping-bag.svg";
   }
    
    for(let i = 0; i < cartLabels.length; i++) {
      cartLabels[i].style.color = 'white';
   }
    rubleSymbol.style.color = 'white';
    menu.style.animationName = "hideMenuAnim";
    menu.style.display = 'none';
    
    menuButtonImage.src = "./images/menu-logo.svg";

    mobileCartBackGround.style.backgroundColor = "#274646";
    mobileCartBackGround.style.color = 'white';

  }
  else {
    
    headerStripe.style.backgroundColor = 'white';
    menu.style.animationName = "showMenuAnim";
    menu.style.display = 'block';
    


    bigLogoImage.src = "./images/green-logo-big.svg";
    mobileLogoImage.src = "./images/mobile-logo-green.svg";

    geolocationImage.src = "./images/location-add-green.svg";
    geolocationLabel.style.color = "#006666";

    shimingsImage.src = "./images/shimings-logo-green.svg";
    shimingsLabel.style.color = "#006666";

    for(let i = 0; i < shopBagImages.length; i++) {
      shopBagImages[i].src = "./images/shopping-bag-green.svg";
   }

    for(let i = 0; i < cartLabels.length; i++) {
      cartLabels[i].style.color = "#274646";
   }
    rubleSymbol.style.color = "#274646";

    menuButtonImage.src = "./images/cross.svg";

    mobileCartBackGround.style.backgroundColor = "#FFBDC8";
    mobileCartBackGround.style.color = "#274646";
    

  }
}