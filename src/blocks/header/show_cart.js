export function showCart() {
    let cart = document.getElementById('cart');


    let displaySetting = cart.style.display;
  
    if (displaySetting == 'block') {
      
      cart.style.display = 'none';
    
    }
    else {
      cart.style.display = 'block';
  
    }
}
