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
   categoryList.forEach((item) => {
      
      if(item === 'europa' || item === 'well' || item === 'sports' || item === 'business' || item === 'arts') {
         
         const wrapper = document.createElement("div");
         wrapper.classList.add("CategoryList", "display-f", "align-items-c");
         section.appendChild(wrapper);
         
         const heading = document.createElement("h2");
         heading.classList.add('CategoryList__heading');
         heading.textContent = item;
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

// toggle Section button switch on/off and save section name to selectedSection Array
section.addEventListener("click", (e) => {
   
   const toggleButtonSwitch = e.target;
   const toggleButton = toggleButtonSwitch.closest('.ToggleButton');
   const toggleButtonSectionName = toggleButton.closest('.CategoryList').textContent;

   // if target contains className ToggleButton__circle - toggle on/off classes
   if (toggleButtonSwitch.classList.contains("ToggleButton__circle")) {
      toggleButtonSwitch.classList.toggle("ToggleButton__circle_active");
      toggleButton.classList.toggle("ToggleButton_active");

      // 1: check for duplicated item
      selectedSection = selectedSection.filter((array) => toggleButtonSectionName !== array);

      // 2: if togglemode is true the add toggleButtonSectionName
      if(toggleButtonSwitch.toggleAttribute('enable') === true) {
         selectedSection.push(toggleButtonSectionName);
         console.log('pushed', toggleButtonSectionName);
      };
      
      console.log('selectedCategory: ', selectedSection);

      localStorage.setItem("selectedCategories", JSON.stringify(selectedSection));
      
   };
});