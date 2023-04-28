const ToCbtn = document.querySelector(".drop-table");
const ToClist = document.querySelector('.toc-list');

ToCbtn.addEventListener('click', () => {
  ToCbtn.classList.toggle('open');
  ToClist.classList.toggle('open');
});
