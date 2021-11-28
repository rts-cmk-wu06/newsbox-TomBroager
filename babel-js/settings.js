"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
var section = document.querySelector("#section");
var categoryList = ["europa"]; // array contains fetched categories from NewYorkTimes API

var selectedCategory = []; // array contains selected/toggled categories

axios.get(url).then(function (response) {
  var article = response.data.results; // create NewYorkTimes categoryArray
  // loops through categoryArray and check if a category allready exists
  // if not, the category is pushed to categoryArray

  article.forEach(function (article) {
    if (!categoryList.includes(article.section)) {
      categoryList.push(article.section);
    }
  }); // create a category card element and toggle button for each category in categoryArray

  categoryList.forEach(function (cat) {
    if (cat === 'well' || cat === 'sports' || cat === 'business' || cat === 'arts') {
      var wrapper = document.createElement("div");
      wrapper.classList.add("CategoryList", "display-f", "align-items-c");
      section.appendChild(wrapper);
      var heading = document.createElement("h2");
      heading.classList.add('CategoryList__heading');
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
}); // toggle section button on/off

section.addEventListener("click", function (e) {
  var target = e.target;
  var targetParent = target.parentElement;
  var targetCat = targetParent.parentElement; // if target contains className x then toggle/add on className y - if not toggled remove className y

  if (target.classList.contains("ToggleButton__circle")) {
    target.classList.toggle("ToggleButton__circle_active");
    targetParent.classList.toggle("ToggleButton_active"); // object with categorysection name and togglemode enable: true or false

    var catObject = {
      category: targetCat.textContent,
      enable: target.toggleAttribute('enable')
    }; // if category name not allready exist in Array then add it - else remove category name from Array

    selectedCategory = selectedCategory.filter(function (obj) {
      return catObject.category !== obj.category;
    }); // if enable = true push target object to Array

    if (catObject.enable === true) {
      selectedCategory.push(catObject);
      console.log('pushed', catObject);
    }

    ;
    console.log('selectedCategory: ', selectedCategory);
    localStorage.setItem("selectedCategories", JSON.stringify(selectedCategory));
  }

  ;
});