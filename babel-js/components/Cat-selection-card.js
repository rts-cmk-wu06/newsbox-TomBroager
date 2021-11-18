"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
var section = document.querySelector("#section");
var categoryArray = ["europa"];
var bool = true;
axios.get(url).then(function (response) {
  var article = response.data.results;
  console.log(article); // loops through NewYorkTimes array
  // check if category allready exists in categoryArray
  // if not, the category is pushed to categoryArray

  article.forEach(function (article) {
    if (!categoryArray.includes(article.section)) {
      categoryArray.push(article.section);
    }
  }); // create a category card element for each category in categoryArray

  categoryArray.forEach(function (cat) {
    console.log(cat);

    if (cat === 'well' || cat === 'sports' || cat === 'business' || cat === 'arts') {
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
    }
  });
}); // toggle class on/off toggle button element - CSS for switch to move

section.addEventListener("click", function (e) {
  var target = e.target;
  var targetParent = target.parentElement;

  if (e.target.classList.contains("ToggleButton__circle")) {
    target.classList.toggle("ToggleButton__circle_active");
    targetParent.classList.toggle("ToggleButton_active");
    bool = !bool;
    console.log(target.parentElement);
  }
});