const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
const section = document.querySelector("#section");
const categoryArray = ["europa"];   // array contains fetched categories from NewYorkTimes API
let selectedCategory = [];  // array contains value of selected/toggled categories



axios.get(url).then((response) => {
   const article = response.data.results;
   
   // loops through NewYorkTimes array
   // check if category allready exists in categoryArray
   // if not, the category is pushed to categoryArray
   article.forEach((article) => {
      if (!categoryArray.includes(article.section)) {
         categoryArray.push(article.section);
      }
   });
   
   // create a category card element for each category in categoryArray
   categoryArray.forEach((cat) => {
      
      if(cat === 'well' || cat === 'sports' || cat === 'business' || cat === 'arts') {
         
         const wrapper = document.createElement("div");
         wrapper.classList.add("Cat-selection-card", "display-f", "align-items-c");
         section.appendChild(wrapper);
         
         const heading = document.createElement("h2");
         heading.classList.add('Cat-selection-card__heading');
         heading.textContent = cat;
         wrapper.appendChild(heading);
         
         const toggleButton = document.createElement("button");
         toggleButton.classList.add("ToggleButton");
         wrapper.appendChild(toggleButton);
         
         const toggleButtonCircle = document.createElement("div");
         toggleButtonCircle.classList.add("ToggleButton__circle");
         toggleButton.appendChild(toggleButtonCircle);
      }
      
   });
});

// toggle class on/off - for CSS for switch to move
section.addEventListener("click", (e) => {
   
   const target = e.target;
   const targetParent = target.parentElement;
   const targetCat = targetParent.parentElement;
   
   // if target contains className x then toggle/add on className y - if not toggle/remove className y off
   if (target.classList.contains("ToggleButton__circle")) {
      target.classList.toggle("ToggleButton__circle_active");  // måske kun en class?????????
      targetParent.classList.toggle("ToggleButton_active");
      
      // object with category name and togglemode enable(true)/disable(false)
      const catObject = {
         category: targetCat.textContent,
         enable: target.toggleAttribute('enable'),
      };
      console.log(catObject);
      console.log(catObject.enable);
      
      // selectedCategory = selectedCategory.filter((item) => catObject.category !== item.category);

      selectedCategory = selectedCategory.filter(function (category) {  // category is the value of selectedCategory Array = {category: 'sport', enable: true}
         return catObject.category !== category.category; // returned in filtered Array
      });

      
      if(catObject.enable === true) {
         // push selected category to selectedArray
         selectedCategory.push(catObject);
         console.log('pushed', catObject);
      };

      console.log('selectedCategory: ', selectedCategory);

      localStorage.setItem("selectedCategories", JSON.stringify(selectedCategory));
      
      // if(selectedCategory.includes(targetCat.textContent)) {
         //    const deleteItem = selectedCategory.indexOf(targetCat.textContent)
         //    selectedCategory.splice(deleteItem, 1);
         //    console.log('aready exists');
         // } else {
            //    // push selected category to selectedArray
            //    selectedCategory.push(targetCat.textContent);
            // }
         };
         
         // store selectedArray in localStorage key seledtedCategory

         
         
         
      });
      
      