export function selectNavItem(e) {
    var el = document.querySelector('.active');
  
    // Check if the element exists to avoid a null syntax error on the removal
    if(el) {
      el.classList.remove('active');
    }
    
    e.target.classList.add('active');
}