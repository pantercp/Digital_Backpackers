const burgerBtn = document.querySelector('.row-burger');
const dropMenu = document.querySelector('.drop-menu');

let menuOpen = false;
burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    burgerBtn.classList.add('open');
    dropMenu.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    dropMenu.classList.remove('open');
    menuOpen = false;
  }
});

const blogDrop = document.querySelector('.drop-btn');
const blogList = document.querySelector('.blog-list');

blogDrop.addEventListener('click', () => {
  blogList.classList.toggle('open');
  blogDrop.classList.toggle('open');
});


// About/Contact Page - profile tabs

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

var tablinks2 = document.getElementsByClassName("tab-links-2")
var tabcontents2 = document.getElementsByClassName("tab-contents-2")

function opentab2(tabname) {
  for (tablink of tablinks2) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents2) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}
