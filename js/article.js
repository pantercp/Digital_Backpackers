const ToCbtn = document.querySelector(".drop-table");
const ToClist = document.querySelector('.toc-list');

ToCbtn.addEventListener('click', () => {
  ToCbtn.classList.toggle('open');
  ToClist.classList.toggle('open');
});

const Tipsbtns = document.querySelectorAll(".accordion-header");

for(let Tipsbtn of Tipsbtns){
  Tipsbtn.addEventListener('click', () => {
  Tipsbtn.parentElement.classList.toggle('open');
});
};