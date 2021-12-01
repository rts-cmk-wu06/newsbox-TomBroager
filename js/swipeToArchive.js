// variables
// let deleteButtonWidth = window.screen.width * 0.3;
let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;
let touchElement;
let swipeItem;

const archiveArray = [];

// touch event
main.addEventListener('touchstart', (e) => {
    touchElement = e.target;
    
    // item to swipe
    swipeItem = touchElement.closest('.SelectedCategoryList__article-link');
    
    // get touchCoordinateStart X coordinate
    touchCoordinateStart = e.touches[0].clientX;
    
    touchmove();
    touchend();
});

function touchmove() {
    touchElement.addEventListener('touchmove', (e) => {
        touchCoordinateMove = e.touches[0].clientX;
        // console.log('touchCoordinateMove: ', touchCoordinateMove);
        
        if(touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - 80) {
            swipeItem.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`;
        };
    });
};

function touchend() {
    touchElement.addEventListener('touchend', (e) => {
        touchCoordinateEnd = e.changedTouches[0].clientX;
        
        if(touchCoordinateEnd < touchCoordinateStart - 40) {
            swipeItem.style.transform = `translateX(-${80}px)`;
        } else {
            swipeItem.style.transform = `translateX(${0}px)`;
        };
    });
};

main.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    
    const parentElement = target.closest('.SelectedCategoryList__article')
    console.log(parentElement);
    
    const object = {
        url: parentElement.querySelector('.SelectedCategoryList__article-link').href,
        image: parentElement.querySelector('img').src,
        title: parentElement.querySelector('h2').textContent,
        abstract: parentElement.querySelector('article').textContent,
    }
    
    archiveArray.push(object);
    
    console.log(object);
    console.log('archiveArray: ', archiveArray);
    
    if(target.classList.contains('SelectedCategoryList__archiveButton')) {
        console.log('target er det rigtige');
    }
    
    // setTimeout( () => {
        //     parentElement.classList.add('collapsed');
        // }, 800);
        
        // setTimeout( () => {
            //     parentElement.remove();
            // }, 1000);
        })
        
        
        
        