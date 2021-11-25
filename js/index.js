const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=uZRSzVe9ulL9BEMO9EaG0pGFLxHHHulT";
const main = document.querySelector("main");

// localStorage Array contains selected sections/categories
const sectionList = JSON.parse(localStorage.getItem("selectedCategories"));

// svg badge
const badge = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18.914" height="18.914" viewBox="0 0 18.914 18.914">
      <defs>
        <clipPath id="clip-path">
          <rect width="18.914" height="18.914" fill="none"/>
        </clipPath>
      </defs>
      <g id="icn_surfing" clip-path="url(#clip-path)">
        <g id="Group_65" data-name="Group 65" transform="translate(0.707 0.707)">
          <rect id="Rectangle_102" data-name="Rectangle 102" width="12.379" height="12.379" transform="matrix(0.724, -0.69, 0.69, 0.724, 0, 8.536)" fill="none" stroke="#d97d54" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
          <path id="Path_106" data-name="Path 106" d="M1.7,11.441a7.685,7.685,0,0,0,4.984-.85c1.4-.8,2.525-2.3,5.383-1.65a2.6,2.6,0,0,0-1.263,1.1c-.465,1.05,1.13,1.5,2.193,1.6a39.289,39.289,0,0,0,4.851-.1" transform="translate(-1.225 -3.248)" fill="none" stroke="#d97d54" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
      </g>
    </svg> 
    `;

// loops thrue sectionList and create component for each value
sectionList.forEach((obj) => {
   const sectionName = obj.category;

   // creates selected categories components
   const section = document.createElement("section");
   section.classList.add("SelectedCategoryList");
   main.appendChild(section);

   const div = document.createElement("div");
   div.classList.add("SelectedCategoryList__category");
   section.appendChild(div);

   const divBadge = document.createElement("div");
   divBadge.innerHTML = badge;
   divBadge.classList.add("SelectedCategoryList__badge-bg");
   div.appendChild(divBadge);

   const h2 = document.createElement("h2");
   h2.textContent = sectionName;
   h2.classList.add("SelectedCategoryList__heading");
   div.appendChild(h2);

   const button = document.createElement("button");
   button.classList.add("SelectedCategoryList__button");
   div.appendChild(button);

   const arrowIcon = document.createElement("i");
   arrowIcon.classList.add("fas", "fa-chevron-right", "SelectedCategoryList__i");
   button.appendChild(arrowIcon);

   const articleContainer = document.createElement('div');
   articleContainer.classList.add('SelectedCategoryList__article-container');
   section.appendChild(articleContainer);

   axios.get(url).then((response) => {
      const articleArray = response.data.results;
      // loops through Arrar
      articleArray.forEach((obj) => {
        const sectionItem = obj.section;
        const titleItem = obj.title;
        const articleItem = obj.abstract;
        
          // add article component to section if sectionItem = sectionName
          if (sectionItem === sectionName) {
            // creates categories article components
            const link = document.createElement('a');
            link.setAttribute('href', '#');
            link.setAttribute('target', '_blank');
            articleContainer.appendChild(link);

            const sectionArticle = document.createElement("section");
            sectionArticle.classList.add("SelectedCategoryList__article");
            link.appendChild(sectionArticle);
            
            const img = document.createElement("img");
            img.src = "./assets/category-logo.png";
            sectionArticle.appendChild(img);
            
            const divArticle = document.createElement("div");
            sectionArticle.appendChild(divArticle);
            
            const h2Article = document.createElement("h2");
            h2Article.textContent = titleItem;
            divArticle.appendChild(h2Article);
            
            const article = document.createElement("article");
            article.textContent = articleItem;
            divArticle.appendChild(article);
          }
      });
   });
});

// rotate arrow icon when toggled
document.querySelector("main").addEventListener("click", (e) => {
   const target = e.target;

   x = target.parentElement;
   xx = x.parentElement;
   xxx = xx.parentElement;
   xxxx = xxx.lastChild;
   console.log(xxx.lastChild);
   xxxx.classList.toggle('display-block');

   if (target.classList.contains("SelectedCategoryList__i")) {
      target.classList.toggle("rotate");
    }
});
