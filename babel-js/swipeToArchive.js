"use strict";

// variables
var deleteButtonWidth = window.screen.width * 0.3;
var touchCoordinateStart;
var touchCoordinateMove;
var touchCoordinateEnd;
var touchElement;
var swipeItem; // touch event

main.addEventListener('touchstart', function (e) {
  console.log(e);
  touchElement = e.target;
  console.log('touchElement: ', touchElement); // item to swipe

  swipeItem = touchElement.closest('.SelectedCategoryList__article-link');
  console.log('swipeItem: ', swipeItem); // get touchCoordinateStart X coordinate

  touchCoordinateStart = e.touches[0].clientX;
  console.log('touchCoordinateStart: ', touchCoordinateStart);
  touchmove();
  touchend();
});

function touchmove() {
  touchElement.addEventListener('touchmove', function (e) {
    touchCoordinateMove = e.touches[0].clientX; // console.log('touchCoordinateMove: ', touchCoordinateMove);

    if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - 80) {
      swipeItem.style.transform = "translateX(".concat(touchCoordinateMove - touchCoordinateStart, "px)");
    }

    ;
  });
}

;

function touchend() {
  touchElement.addEventListener('touchend', function (e) {
    touchCoordinateEnd = e.changedTouches[0].clientX;
    console.log('touchCoordinateEnd: ', touchCoordinateEnd);

    if (touchCoordinateEnd < touchCoordinateStart - 40) {
      swipeItem.style.transform = "translateX(-".concat(80, "px)");
    } else {
      swipeItem.style.transform = "translateX(".concat(0, "px)");
    }

    ;
  });
}