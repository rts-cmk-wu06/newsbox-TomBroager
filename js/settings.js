const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
const section = document.querySelector("#section");
const categoryList = ["europa"];   // array contains fetched categories from NewYorkTimes API
let selectedCategory = [];  // array contains selected/toggled categories


axios.get(url).then((response) => {
   const article = response.data.results;

   // create NewYorkTimes categoryArray
   // loops through categoryArray and check if a category allready exists
   // if not, the category is pushed to categoryArray
   article.forEach((article) => {
      if (!categoryList.includes(article.section)) {
         categoryList.push(article.section);
      }
   });
   
   // create a category card element and toggle button for each category in categoryArray
   categoryList.forEach((cat) => {
      
      if(cat === 'well' || cat === 'sports' || cat === 'business' || cat === 'arts') {
         
         const wrapper = document.createElement("div");
         wrapper.classList.add("CategoryList", "display-f", "align-items-c");
         section.appendChild(wrapper);
         
         const heading = document.createElement("h2");
         heading.classList.add('CategoryList__heading');
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

// toggle button switch on/off
section.addEventListener("click", (e) => {
   
   const toggleButtonSwitch = e.target;
   const toggleButtonBackground = toggleButtonSwitch.closest('.ToggleButton');
   const toggleButtonSectionName = toggleButtonBackground.closest('.CategoryList').textContent;

   // if target contains className x then toggle/add on className y - if not toggled remove className y
   if (toggleButtonSwitch.classList.contains("ToggleButton__circle")) {
      toggleButtonSwitch.classList.toggle("ToggleButton__circle_active");
      toggleButtonBackground.classList.toggle("ToggleButton_active");
      
      // object with categorysection name and togglemode enable: true or false
      const catObject = {
         category: toggleButtonSectionName,
         enable: toggleButtonSwitch.toggleAttribute('enable'),
      };

      // if category name not allready exist in Array then add it - else remove category name from Array
      selectedCategory = selectedCategory.filter((obj) => catObject.category !== obj.category);
      
      // if enable = true push target object to Array
      if(catObject.enable === true) {
         selectedCategory.push(catObject);
         console.log('pushed', catObject);
      };

      console.log('selectedCategory: ', selectedCategory);

      localStorage.setItem("selectedCategories", JSON.stringify(selectedCategory));
      
   };
});