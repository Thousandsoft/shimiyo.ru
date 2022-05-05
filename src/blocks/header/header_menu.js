export const showMenu = () => {
    // Menu header fullscreen
    let popup = document.querySelector('.popup');
    let header = document.querySelector('.top');
    let hamburger = document.querySelector('.main-left__hamburger-image');
    let cross = document.querySelector('.main-left__hamburger-imagecross');
    let btn = document.querySelector('.main-left__logo-hamburger');
    btn.addEventListener('click', function (event) {
        popup.classList.toggle('popup_enable');
        header.classList.toggle('popup-white');
        hamburger.classList.toggle('popup_disable');
        cross.classList.toggle('popup_enable');
    });
}