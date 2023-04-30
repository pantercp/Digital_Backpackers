const ToCbtn = document.querySelector(".drop-table");
const ToClist = document.querySelector('.toc-list');

ToCbtn.addEventListener('click', () => {
  ToCbtn.classList.toggle('open');
  ToClist.classList.toggle('open');
});

const Tipsbtn = document.querySelector(".tip-header");
const Tipsdetail = document.querySelector(".budgeting-tips");

Tipsbtn.addEventListener('click', () => {
  Tipsdetail.classList.toggle('open');
});