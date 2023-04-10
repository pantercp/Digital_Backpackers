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
