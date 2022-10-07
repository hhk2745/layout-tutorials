const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".icon");


hamburger.addEventListener("click", ()=>{
  nav.classList.toggle("active");
  menu.classList.toggle("active");
  icon.classList.toggle("active");
  // menu.toggle
});