"use strict";

// check for saved 'darkMode' in localStorage
var darkMode = localStorage.getItem('darkMode');
console.log('darkmode: ', darkMode);
var darkModeToggle = document.querySelector('#Toggle-dark-mode');

var enableDarkMode = function enableDarkMode() {
  // 1. Add the class to the body
  document.body.classList.add('dark-mode'); // 2. Update darkMode in localStorage

  localStorage.setItem('darkMode', 'enabled');
};

var disableDarkMode = function disableDarkMode() {
  // 1. Remove the class from the body
  document.body.classList.remove('dark-mode'); // 2. Update darkMode in localStorage 

  localStorage.setItem('darkMode', null);
}; // If the user already visited and enabled darkMode
// start things off with it on


if (darkMode === 'enabled') {
  enableDarkMode();
}

; // if toggle button exists then add click event

if (darkModeToggle) {
  // When someone clicks the button
  darkModeToggle.addEventListener('click', function () {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); // if it not current enabled, enable it

    if (darkMode !== 'enabled') {
      enableDarkMode(); // if it has been enabled, turn it off  
    } else {
      disableDarkMode();
    }
  });
}

;