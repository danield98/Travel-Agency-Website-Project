// Main Page Swiper 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

let swiper = new Swiper(".home-slider", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});



// Load More Button
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

function loadMore() {
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (let i = currentItem; i < currentItem + 3; i++) {
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
   }
}
loadMoreBtn.addEventListener(`click`, loadMore);




//Pop Up
let popUpbtn = document.getElementById(`popbtn`);

function popUp() {
   window.location = "../home.html";
   alert("The request is send!");
}

popUpbtn.addEventListener(`click`, popUp);


