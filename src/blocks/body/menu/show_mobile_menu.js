 export function toggleMobileMenu() {

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
   