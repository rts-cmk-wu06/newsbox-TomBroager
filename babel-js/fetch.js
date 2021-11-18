"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
var main = document.querySelector('main');
axios.get(url).then(function (response) {
  var article = response.data.results;
  console.log(article);
  article.forEach(function (article) {});
});