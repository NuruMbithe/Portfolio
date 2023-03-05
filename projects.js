const menu = [
  {
    id: 1,
    title: "Multipage-Restaurant-Website",
    img: "https://i.postimg.cc/YCZJsfKN/Jiko-rest.png",
    href: "https://jiko-restaurant.netlify.app/index.html",
  },
  {
    id: 2,
    title: "React_Resume_Builder",
    img: "https://i.postimg.cc/3xSfL6fb/resumeeeeee.png",
    href: "https://nurumbithe.github.io/FCC_Markdown_Previewer/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    img: "https://i.postimg.cc/Kv62w2X9/PLP.png",
    href: "https://codepen.io/NuruMbithe/pen/WNMwrMm",
  },
  {
    id: 4,
    title: "Drinks API",
    img: "https://i.postimg.cc/VNhYG9nw/API-1.png",
    href: "https://nurumbithe.github.io/Drinks_API/",
  },
  {
    id: 5,
    title: "React-Random-Quote-Generator",
    img: "https://i.postimg.cc/4NfV0RBQ/RQG.png",
    href: "https://nurumbithe.github.io/FCC_Random_Quote_Machine/",
  },
  {
    id: 7,
    title: "To-Do App",
    img: "https://i.postimg.cc/NMVgcDSh/To-Do-app.png",
    href: "https://nurumbithe.github.io/To-Do-List/",
  },
  {
    id: 12,
    title: "Javascript Calculator",
    img: "https://i.postimg.cc/NMPqQf3D/CALC.png",
    href: "https://nurumbithe.github.io/FCC_Javascript_Calculator/",
  },
   {
      id: 6,
      title: "Restaurant-Menu-Page",
      img: "https://i.postimg.cc/Y2fXT0WR/Jiko-Menu.png",
      href: "https://nurumbithe.github.io/Jiko-Menu/",
    },
      
      {
        id: 8,
        title: "Affirmation Generator",
        img: "https://i.postimg.cc/VL9cGzfP/Affirmations-Generator.png",
        href: "https://nurumbithe.github.io/random_affirmations_generator/",
      },
      {
        id: 9,
        title: "Tech-Doc Page",
        img: "https://i.postimg.cc/CKGt9zmn/tech-doc-page.png",
        href: "https://codepen.io/essambithe/pen/ExwGOeQ",
      },
      {
        id: 10,
        title: "Survey Page",
        img: "https://i.postimg.cc/W4Wj9JsZ/SF.png",
        href: "https://codepen.io/NuruMbithe/pen/OJQVWyQ",
      },
      {
        id: 11,
        title: "Tribute Page",
        img: "https://i.postimg.cc/dVNtLQCf/wangari-maathai.png",
        href: "https://codepen.io/NuruMbithe/pen/JjrZVry",
      },
  ];
  
  const sectionCenter = document.querySelector('.projects-grid');
  
  
  //load items
  window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems (menu);
    const categories= menu.reduce(function(values,item) {
      if(!values.includes(item.category)) {
        values.push(item.category);
      }
  return values
    }, ['all']
    );
    
     });

  
  
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
      return  ` <a href=${item.href} target="_blank"id="project" class="project project-title">
      <img src=${item.img}alt=${item.title}class="project-image" >
      <p class="project-title">
          <span class="code">&lt;</span>
          ${item.title}
          <span class="code">&#47;&gt;</span>
      </p>`
    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;
  }


 
