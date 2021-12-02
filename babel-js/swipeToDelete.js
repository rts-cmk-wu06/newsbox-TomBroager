"use strict";

// variables
// let deleteButtonWidth = window.screen.width * 0.3;
var touchCoordinateStart;
var touchCoordinateMove;
var touchCoordinateEnd;
var touchElement;
var swipeItem;
var savedArticles = JSON.parse(localStorage.getItem('savedArticles'));
var delArticles = savedArticles || [];
console.log(delArticles); // touch event

main.addEventListener("touchstart", function (e) {
  touchElement = e.target; // item to swipe

  swipeItem = touchElement.closest(".SelectedCategoryList__article-link"); // get touchCoordinateStart X coordinate

  touchCoordinateStart = e.touches[0].clientX;
  touchElement.addEventListener("touchmove", function (e) {
    touchCoordinateMove = e.touches[0].clientX;

    if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - 80) {
      swipeItem.style.transform = "translateX(".concat(touchCoordinateMove - touchCoordinateStart, "px)");
    }
  });
  touchElement.addEventListener("touchend", function (e) {
    touchCoordinateEnd = e.changedTouches[0].clientX;

    if (swipeItem) {
      if (touchCoordinateEnd < touchCoordinateStart - 40) {
        swipeItem.style.transform = "translateX(-".concat(80, "px)");
      } else {
        swipeItem.style.transform = "translateX(".concat(0, "px)");
      }
    }
  });
}); // when delete button is clicked then delete article object from localStorage

main.addEventListener("click", function (e) {
  var target = e.target; // target element to remove on click

  var parentElement = target.closest('.SelectedCategoryList__article'); // target article heading textContent
  // then filter trough delArticle Array to check for duplicated text/value
  // If duplicated text/value found, then don't add object to filtered delArticle Array

  if (parentElement) {
    var heading = parentElement.querySelector('h2').textContent;
    delArticles = delArticles.filter(function (item) {
      return heading !== item.title;
    });
    localStorage.setItem('savedArticles', JSON.stringify(delArticles));
  } // target section name for use in articleArray


  if (parentElement) {
    parentElement.classList.add('animate__zoomOutUp');
    setTimeout(function () {
      parentElement.remove();
    }, 1000);
  }
});