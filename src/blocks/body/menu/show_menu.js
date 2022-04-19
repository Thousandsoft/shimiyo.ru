function toggleMenu() {
    // get the clock
    var menu = document.getElementById('menu');

    // get the current value of the clock's display property
    var displaySetting = menu.style.display;

    // also get the clock button, so we can change what it says
    var cmenuButton = document.getElementById('menuButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'flex') {
      // clock is visible. hide it
      menu.style.display = 'none';
      // change button text
     // clockButton.innerHTML = 'Show clock';
    }
    else {
      // clock is hidden. show it
      menu.style.display = 'flex';
      // change button text
      //clockButton.innerHTML = 'Hide clock';
    }
  }