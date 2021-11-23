"use strict";

// array contains selected categories
var catItems = JSON.parse(localStorage.getItem("selectedCategories"));
var main = document.querySelector('main');
var section = document.querySelector('.sectionCategory');
var badge = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"18.914\" height=\"18.914\" viewBox=\"0 0 18.914 18.914\">\n      <defs>\n        <clipPath id=\"clip-path\">\n          <rect width=\"18.914\" height=\"18.914\" fill=\"none\"/>\n        </clipPath>\n      </defs>\n      <g id=\"icn_surfing\" clip-path=\"url(#clip-path)\">\n        <g id=\"Group_65\" data-name=\"Group 65\" transform=\"translate(0.707 0.707)\">\n          <rect id=\"Rectangle_102\" data-name=\"Rectangle 102\" width=\"12.379\" height=\"12.379\" transform=\"matrix(0.724, -0.69, 0.69, 0.724, 0, 8.536)\" fill=\"none\" stroke=\"#d97d54\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"/>\n          <path id=\"Path_106\" data-name=\"Path 106\" d=\"M1.7,11.441a7.685,7.685,0,0,0,4.984-.85c1.4-.8,2.525-2.3,5.383-1.65a2.6,2.6,0,0,0-1.263,1.1c-.465,1.05,1.13,1.5,2.193,1.6a39.289,39.289,0,0,0,4.851-.1\" transform=\"translate(-1.225 -3.248)\" fill=\"none\" stroke=\"#d97d54\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"/>\n        </g>\n      </g>\n    </svg> \n  ";
catItems.forEach(function (element) {
  console.log(element);
  var categoryName = element.category;
  var section = document.createElement('section');
  section.classList.add('display-f', 'align-items-c');
  main.appendChild(section);
  section.innerHTML = badge;
  var cat = document.createElement('h2');
  cat.textContent = categoryName;
  section.appendChild(cat);
});