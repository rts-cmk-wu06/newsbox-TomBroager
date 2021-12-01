"use strict";

// variables
// let deleteButtonWidth = window.screen.width * 0.3;
var touchCoordinateStart;
var touchCoordinateMove;
var touchCoordinateEnd;
var touchElement;
var swipeItem; // touch event

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

    if (touchCoordinateEnd < touchCoordinateStart - 40) {
      swipeItem.style.transform = "translateX(-".concat(80, "px)");
    } else {
      swipeItem.style.transform = "translateX(".concat(0, "px)");
    }
  });
}); // when archive button are clicked then save article data as an object and push object to archiveArray

main.addEventListener("click", function (e) {
  var target = e.target;
  console.log(target); // const parentElement = target.closest('.SelectedCategoryList__article')
  // const sectionHeading = parentElement.closest('.SelectedCategoryList').getElementsByTagName('h2');
  // const sectionName = sectionHeading[0].textContent
  // console.log(sectionName);
  // const object = {
  //     section: sectionName,
  //     url: parentElement.querySelector(".SelectedCategoryList__article-link").href,
  //     image: parentElement.querySelector("img").src,
  //     title: parentElement.querySelector("h2").textContent,
  //     abstract: parentElement.querySelector("article").textContent,
  // };
  // console.log(object);
  // archiveArray.push(object);
  // localStorage.setItem('savedArticles', JSON.stringify(archiveArray));
  // console.log(object);
  // console.log("archiveArray: ", archiveArray);

  parentElement.classList.add('animate__zoomOutUp');
  setTimeout(function () {
    parentElement.remove();
  }, 1000);
});