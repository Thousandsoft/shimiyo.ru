
export function storiesScroll() {
let scroll = document.querySelector('.stories');
let scrollItem = document.querySelectorAll('.story');

let left = 0;
let drag = false;
let coorX = 0;




scroll.addEventListener('mousedown', function(e) {
    drag = true;
    coorX = e.pageX - this.offsetLeft;    
});

document.addEventListener('mouseup', function(e) {
    drag = false;
    left = scroll.scrollLeft;

 });

scroll.addEventListener('mousemove', function(e) {
     if (drag) {
        this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX);
    }
});

scrollItem.forEach((item) => {
    item.addEventListener('mousedown', function(e) {
        e.preventDefault();
        })
    });
};