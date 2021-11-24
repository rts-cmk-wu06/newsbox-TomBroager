const main = document.querySelector('main');
// localStorage Array contains selected categories
const categoryList = JSON.parse(localStorage.getItem("selectedCategories"));
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
// loops thrue categoryList Array and create component for each value
categoryList.forEach(element => {
    console.log(element);
    const categoryItem = element.category;

    const section = document.createElement('section');
    section.classList.add('SelectedCategoryList');
    main.appendChild(section)

    const div = document.createElement('div');
    div.innerHTML = badge;
    div.classList.add('SelectedCategoryList__div');
    section.appendChild(div);

    const h2 = document.createElement('h2');
    h2.textContent = categoryItem;
    h2.classList.add('SelectedCategoryList__heading');
    section.appendChild(h2);

    const button = document.createElement('button');
    button.classList.add('SelectedCategoryList__button');
    section.appendChild(button);

    const arrowIcon = document.createElement('i');
    arrowIcon.classList.add('fas', 'fa-chevron-right', 'SelectedCategoryList__i');
    button.appendChild(arrowIcon);
});

// rotate arrow icon when toggled
document.querySelector('main').addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('SelectedCategoryList__i')) {
      target.classList.toggle('rotate');
    }
});