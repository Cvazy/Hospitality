const filterBtn = document.querySelector(".filter_btn");
const filterBlock = document.querySelector(".filter_full");
const filterClose = document.querySelector(".filter_close");

filterBtn.addEventListener("click", () => {
  filterBlock.classList.toggle("max-h-85vh");
});

filterClose.addEventListener("click", () => {
  filterBlock.classList.remove("max-h-85vh");
});
