"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
var section = document.querySelector("#section");
var categoryList = ["europa"]; // array contains fetched categories from NewYorkTimes API

var selectedSection = []; // array contains selected/toggled categories

axios.get(url).then(function (response) {
  var article = response.data.results; // create NewYorkTimes categoryArray
  // loops through categoryArray and check if a category allready exists
  // if not, the category is pushed to categoryArray

  article.forEach(function (article) {
    if (!categoryList.includes(article.section)) {
      categoryList.push(article.section);
    }
  }); // create a category card element and toggle button for each category in categoryArray

  categoryList.forEach(function (item) {
    if (item === 'europa' || item === 'well' || item === 'sports' || item === 'business' || item === 'arts') {
      var wrapper = document.createElement("div");
      wrapper.classList.add("CategoryList", "display-f", "align-items-c");
      section.appendChild(wrapper);
      var heading = document.createElement("h2");
      heading.classList.add('CategoryList__heading');
      heading.textContent = item;
      wrapper.appendChild(heading);
      var toggleButton = document.createElement("button");
      toggleButton.classList.add("ToggleButton");
      wrapper.appendChild(toggleButton);
      var toggleButtonCircle = document.createElement("div");
      toggleButtonCircle.classList.add("ToggleButton__circle");
      toggleButton.appendChild(toggleButtonCircle);
    }
  });
}); // toggle Section button switch on/off and save section name to selectedSection Array

section.addEventListener("click", function (e) {
  var toggleButtonSwitch = e.target;
  var toggleButton = toggleButtonSwitch.closest('.ToggleButton');
  var toggleButtonSectionName = toggleButton.closest('.CategoryList').textContent; // if target contains className ToggleButton__circle - toggle on/off classes

  if (toggleButtonSwitch.classList.contains("ToggleButton__circle")) {
    toggleButtonSwitch.classList.toggle("ToggleButton__circle_active");
    toggleButton.classList.toggle("ToggleButton_active"); // 1: check for duplicated item

    selectedSection = selectedSection.filter(function (array) {
      return toggleButtonSectionName !== array;
    }); // 2: if togglemode is true the add toggleButtonSectionName

    if (toggleButtonSwitch.toggleAttribute('enable') === true) {
      selectedSection.push(toggleButtonSectionName);
      console.log('pushed', toggleButtonSectionName);
    }

    ;
    console.log('selectedCategory: ', selectedSection);
    localStorage.setItem("selectedCategories", JSON.stringify(selectedSection));
  }

  ;
});