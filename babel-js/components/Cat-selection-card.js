"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
var section = document.querySelector("#section");
var categoryArray = ["europa"];
var bool = true;
axios.get(url).then(function (response) {
  var article = response.data.results;
  article.forEach(function (article) {
    if (!categoryArray.includes(article.section)) {
      categoryArray.push(article.section);
    }
  });
  categoryArray.forEach(function (cat) {
    var wrapper = document.createElement("div");
    wrapper.classList.add("Cat-selection-card", "display-f", "align-items-c");
    section.appendChild(wrapper);
    var heading = document.createElement("h2");
    heading.classList.add('Cat-selection-card__heading');
    heading.textContent = cat;
    wrapper.appendChild(heading);
    var toggleButton = document.createElement("button");
    toggleButton.classList.add("ToggleButton");
    wrapper.appendChild(toggleButton);
    var toggleButtonCircle = document.createElement("div");
    toggleButtonCircle.classList.add("ToggleButton__circle");
    toggleButton.appendChild(toggleButtonCircle);
  });
});
section.addEventListener("click", function (e) {
  var target = e.target;

  if (e.target.classList.contains("ToggleButton__circle")) {
    target.classList.toggle("ToggleButton__circle_active");
    section.querySelector(".ToggleButton").classList.toggle("ToggleButton_active");
    bool = !bool;
    console.log(target);
  }
});