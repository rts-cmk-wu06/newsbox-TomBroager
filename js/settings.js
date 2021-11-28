const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
const section = document.querySelector("#section");
const categoryList = ["europa"];   // array contains fetched categories from NewYorkTimes API
let selectedSection = [];  // array contains selected/toggled categories


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

// toggle button switch on/off and save section name to localStorage
section.addEventListener("click", (e) => {
   
   const toggleButtonSwitch = e.target;
   const toggleButton = toggleButtonSwitch.closest('.ToggleButton');
   const toggleButtonSectionName = toggleButton.closest('.CategoryList').textContent;

   // if target contains className x then toggle/add on className y - if not toggled remove className y
   if (toggleButtonSwitch.classList.contains("ToggleButton__circle")) {
      toggleButtonSwitch.classList.toggle("ToggleButton__circle_active");
      toggleButton.classList.toggle("ToggleButton_active");
      
      // object with categorysection name and togglemode enable: true or false
      const sectionName = {
         section: toggleButtonSectionName,
         enable: toggleButtonSwitch.toggleAttribute('enable'),
      };

      // if category name not allready exist in Array then add it - else remove category name from Array
      selectedSection = selectedSection.filter((obj) => sectionName.section !== obj.section);
      
      // if enable = true push target object to Array
      if(sectionName.enable === true) {
         selectedSection.push(sectionName);
         console.log('pushed', sectionName);
      };

      console.log('selectedCategory: ', selectedSection);

      localStorage.setItem("selectedCategories", JSON.stringify(selectedSection));
      
   };
});