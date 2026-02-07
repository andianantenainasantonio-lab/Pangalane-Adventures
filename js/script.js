  let menuBtn = document.querySelector(".btnm");
  let closeBtn = document.querySelector(".btnx");
  let navBar = document.querySelector(".navbar");
  let body = document.querySelector("body");

  menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
};

// fermer menu bouton X
closeBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
};

// fermer menu quand on clique un lien
let navLinks = document.querySelectorAll(".menu li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  });
});


/* fleche de navigation retour au menu js*/
let nav = document.querySelector("nav");
let val;
 window.onscroll = function() {
  if(document.documentElement.scrollTop > 10){
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");
  }
 }
