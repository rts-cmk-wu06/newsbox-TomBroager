"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
var section = document.querySelector('#section');
var categoryArray = ['europa'];
axios.get(url).then(function (response) {
  var article = response.data.results;
  article.forEach(function (article) {
    if (!categoryArray.includes(article.section)) {
      categoryArray.push(article.section);
    }

    ;
  });
  categoryArray.forEach(function (cat) {
    var wrapper = document.createElement('div');
    section.appendChild(wrapper);
    wrapper.classList.add('Category-selection', 'display-f', 'align-items-c');
    var heading = document.createElement('h2');
    heading.textContent = cat;
    wrapper.appendChild(heading);
    var toggleButton = document.createElement('div');
    toggleButton.classList.add('ToggleButton');
    wrapper.appendChild(toggleButton);
    var toggleButtonCircle = document.createElement('div');
    toggleButtonCircle.classList.add('ToggleButton__circle');
    toggleButton.appendChild(toggleButtonCircle);
  });
});