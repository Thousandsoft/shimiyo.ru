export function selectNavItem(e) {
    var el = document.querySelector('.active');
  
    if(el) {
      el.classList.remove('active');
    }
    
    e.target.classList.add('active');
}