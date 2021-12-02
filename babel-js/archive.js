"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
var main = document.querySelector("main");
var archiveArray = JSON.parse(localStorage.getItem("savedArticles")); // localStorage Array contains selected sections/categories

var sectionList = JSON.parse(localStorage.getItem("selectedCategories")); // svg badge

var badge = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"18.914\" height=\"18.914\" viewBox=\"0 0 18.914 18.914\">\n      <defs>\n        <clipPath id=\"clip-path\">\n          <rect width=\"18.914\" height=\"18.914\" fill=\"none\"/>\n        </clipPath>\n      </defs>\n      <g id=\"icn_surfing\" clip-path=\"url(#clip-path)\">\n        <g id=\"Group_65\" data-name=\"Group 65\" transform=\"translate(0.707 0.707)\">\n          <rect id=\"Rectangle_102\" data-name=\"Rectangle 102\" width=\"12.379\" height=\"12.379\" transform=\"matrix(0.724, -0.69, 0.69, 0.724, 0, 8.536)\" fill=\"none\" stroke=\"#d97d54\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"/>\n          <path id=\"Path_106\" data-name=\"Path 106\" d=\"M1.7,11.441a7.685,7.685,0,0,0,4.984-.85c1.4-.8,2.525-2.3,5.383-1.65a2.6,2.6,0,0,0-1.263,1.1c-.465,1.05,1.13,1.5,2.193,1.6a39.289,39.289,0,0,0,4.851-.1\" transform=\"translate(-1.225 -3.248)\" fill=\"none\" stroke=\"#d97d54\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"/>\n        </g>\n      </g>\n    </svg> \n    "; // loops thrue sectionList and create component for each value

sectionList.forEach(function (obj) {
  var sectionName = obj; // creates selected categories components

  var section = document.createElement("section");
  section.classList.add("SelectedCategoryList");
  main.appendChild(section);
  var div = document.createElement("div");
  div.classList.add("SelectedCategoryList__category");
  section.appendChild(div);
  var divBadge = document.createElement("div");
  divBadge.innerHTML = badge;
  divBadge.classList.add("SelectedCategoryList__badge-bg");
  div.appendChild(divBadge);
  var h2 = document.createElement("h2");
  h2.textContent = sectionName;
  h2.classList.add("SelectedCategoryList__heading");
  div.appendChild(h2);
  var button = document.createElement("button");
  button.classList.add("SelectedCategoryList__button");
  div.appendChild(button);
  var arrowIcon = document.createElement("i");
  arrowIcon.classList.add("fas", "fa-chevron-right", "SelectedCategoryList__i");
  button.appendChild(arrowIcon);
  var articleContainer = document.createElement("div");
  articleContainer.classList.add("SelectedCategoryList__article-container");
  section.appendChild(articleContainer); // if there is no article stored under a section

  var emptyArchiveSection = document.createElement("p");
  emptyArchiveSection.textContent = "No saved articles";
  emptyArchiveSection.classList.add("SelectedCategoryList__paragraph");
  articleContainer.appendChild(emptyArchiveSection);
  archiveArray.forEach(function (obj) {
    var imageArray = obj.multimedia; //   const imageUrl = imageArray.map(({ url }) => url);

    var imageUrl = obj.image;
    var sectionItem = obj.section;
    var titleItem = obj.title;
    var articleItem = obj["abstract"];
    var articleUrl = obj.url; // add article component to section if sectionItem = sectionName

    if (sectionItem === sectionName) {
      // remove paragraph tag with message 'No saved articles'
      emptyArchiveSection.remove(); // creates article components

      var sectionArticle = document.createElement("section");
      sectionArticle.classList.add("SelectedCategoryList__article", "animate__animated");
      articleContainer.appendChild(sectionArticle);
      var archiveButton = document.createElement("div");
      archiveButton.classList.add("SelectedCategoryList__deleteButton");
      sectionArticle.appendChild(archiveButton);
      var archiveIcon = document.createElement("i");
      archiveIcon.classList.add("fas", "fa-trash");
      archiveButton.appendChild(archiveIcon);
      var link = document.createElement("a");
      link.setAttribute("href", articleUrl);
      link.setAttribute("target", "_blank");
      link.classList.add("SelectedCategoryList__article-link");
      sectionArticle.appendChild(link);
      var img = document.createElement("img");
      img.classList.add("SelectedCategoryList__image");
      img.src = imageUrl;
      link.appendChild(img);
      var divArticle = document.createElement("div");
      divArticle.classList.add("SelectedCategoryList__wrapper");
      link.appendChild(divArticle);
      var h2Article = document.createElement("h2");
      h2Article.textContent = titleItem;
      divArticle.appendChild(h2Article);
      var article = document.createElement("article");
      article.textContent = articleItem;
      divArticle.appendChild(article);
    }
  }); //    axios.get(url).then((response) => {
  //       const articleArray = response.data.results;
  //       // loops through Arrar
  //    });
}); // rotate arrow-button and display articles expand/collapsed when toggled

document.querySelector("main").addEventListener("click", function (e) {
  var target = e.target;

  if (target.classList.contains("SelectedCategoryList__i")) {
    // rotate arrow-button when toggled
    target.classList.toggle("rotate"); // toggle articles expand/collapsed

    section = target.closest("section");
    section.querySelector(".SelectedCategoryList__article-container").classList.toggle("display-block");
  }
});