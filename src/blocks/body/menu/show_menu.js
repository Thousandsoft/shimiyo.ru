

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

  let shopBagImage = document.getElementById('shop-bag-image');
  let costLabel = document.getElementById('cost-label');

  



  if (displaySetting == 'block') {
    
    headerStripe.style.backgroundColor = "#274646";
   
    bigLogoImage.src = "./images/logo.svg";
    mobileLogoImage.src = "./images/mobile-logo.svg";

    geolocationImage.src = "./images/location-add.svg";
    geolocationLabel.style.color = "#FFE091";

    shimingsImage.src = "./images/shimings-image.svg";
    shimingsLabel.style.color = "#FFBDC8";

    shopBagImage.src = "./images/shopping-bag.svg";
    costLabel.style.color = 'white';
    menu.style.animationName = "hideMenuAnim";
    menu.style.display = 'none';
    
    menuButtonImage.src = "./images/menu-logo.svg";

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

    shopBagImage.src = "./images/shopping-bag-green.svg";
    costLabel.style.color = "#274646";

    menuButtonImage.src = "./images/cross.svg";

  }
}