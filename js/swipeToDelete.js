// variables
// let deleteButtonWidth = window.screen.width * 0.3;
let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;
let touchElement;
let swipeItem;

const savedArticles = JSON.parse(localStorage.getItem('savedArticles'));

let delArticles = savedArticles || [];
console.log(delArticles);

// touch event
main.addEventListener("touchstart", (e) => {
    touchElement = e.target;
    
    // item to swipe
    swipeItem = touchElement.closest(".SelectedCategoryList__article-link");
    
    // get touchCoordinateStart X coordinate
    touchCoordinateStart = e.touches[0].clientX;
    
    touchElement.addEventListener("touchmove", (e) => {
        touchCoordinateMove = e.touches[0].clientX;
        
        if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - 80) {
            swipeItem.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`;
        }
    });
    touchElement.addEventListener("touchend", (e) => {
        touchCoordinateEnd = e.changedTouches[0].clientX;
        
        if(swipeItem){
            if (touchCoordinateEnd < touchCoordinateStart - 40) {
                swipeItem.style.transform = `translateX(-${80}px)`;
            } else {
                swipeItem.style.transform = `translateX(${0}px)`;
            }
        }
    });
});

// when delete button is clicked then delete article object from localStorage
main.addEventListener("click", (e) => {
    const target = e.target;

    // target element to remove on click
    const parentElement = target.closest('.SelectedCategoryList__article')

    // target article heading textContent
    // then filter trough delArticle Array to check for duplicated text/value
    // If duplicated text/value found, then don't add object to filtered delArticle Array
    if(parentElement){
        const heading = parentElement.querySelector('h2').textContent;

        delArticles = delArticles.filter(item => heading !== item.title)
        localStorage.setItem('savedArticles', JSON.stringify(delArticles));
    }
    
    // target section name for use in articleArray
    if(parentElement) {
        parentElement.classList.add('animate__zoomOutUp');
        
        setTimeout(() => {
            parentElement.remove();
        }, 1000);
    }
});