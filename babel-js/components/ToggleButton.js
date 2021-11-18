"use strict";

var section = document.querySelector('#section');
var circle = document.querySelector('.ToggleButton__circle');
var bool = true;
console.log('bool is ', bool);
section.addEventListener('click', function (e) {
  console.log(e);
  var target = e.target;

  if (e.target.classList.contains('ToggleButton__circle')) {
    target.classList.toggle('ToggleButton__active');
    bool = !bool;
    console.log('bool is ', bool);
  }
});