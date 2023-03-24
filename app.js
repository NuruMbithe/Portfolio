// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});


const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// ********** fixed navbar ************
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight){
      navbar.classList.add("fixed-nav");
  } else {
      navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
      topLink.classList.add("show-link");
  } else {
      topLink.classList.remove("show-link");
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
link.addEventListener("click",function(e){
  //prevent default
  e.preventDefault();
  //navigate to specific spot
  const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  //calculate the heights
  const navHeight = navbar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const fixedNav = navbar.classList.contains("fixed-nav");
  let position = element.offsetTop-navHeight;

  if (!fixedNav){
    position = position - navHeight;
  }
  if (navHeight > 82){
    position =  position +containerHeight;
  }
  window.scrollTo({
    left:0,
    top:position,
  });
  //close links tab
  linksContainer.style.height = 0;
 });

});

//********** about-section **********
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove active from other btns
        btns.forEach(function(btn){
        btn.classList.remove("active");
        e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach(function(article){
        article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
})



function sendEmail(){
  Email.send(
    message => alert("message Sent Successfully")
  )
}


//********** projects-section **********
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
    img: "https://i.postimg.cc/TY434qhv/WT-1.png",
    href: "https://nurumbithe.github.io/Thrift-Store/",
  },
  {
    id: 4,
    title: "Drinks API",
    img: "https://i.postimg.cc/VNhYG9nw/API-1.png",
    href: "https://nurumbithe.github.io/Drinks_API/",
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

