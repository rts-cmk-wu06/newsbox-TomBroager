const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
const section = document.querySelector("#section");
const categoryArray = ["europa"];
let bool = true;

axios.get(url).then((response) => {
   const article = response.data.results;
   article.forEach((article) => {
      if (!categoryArray.includes(article.section)) {
         categoryArray.push(article.section);
      }
   });

   categoryArray.forEach((cat) => {
    
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
   });
});

// toggle class on/off toggle button element - CSS for switch to move
section.addEventListener("click", (e) => {
   const target = e.target;
   const targetParent = target.parentElement;
   if (e.target.classList.contains("ToggleButton__circle")) {
      target.classList.toggle("ToggleButton__circle_active");
      targetParent.classList.toggle("ToggleButton_active");
      bool = !bool;
      console.log(target.parentElement);
   }
});

