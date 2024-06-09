const chooseRowsQntBtn = document.querySelector(".page_qnt__wrapper");
const chooseRowsQnt = chooseRowsQntBtn.querySelector("p");
const chooseRowsQntArrow = chooseRowsQntBtn.querySelector("img");
const chooseRowsQntList = document.querySelector(".page_qnt__list");
const rowsQnt = chooseRowsQntList.querySelectorAll(".page_qnt__list-item");

chooseRowsQntBtn.addEventListener("click", () => {
  chooseRowsQntArrow.classList.toggle("rotate-0");
  chooseRowsQntList.classList.toggle("max-h-list");
  chooseRowsQntBtn.parentNode.classList.toggle("br-b-none");
});

rowsQnt.forEach((btn) => {
  btn.addEventListener("click", () => {
    chooseRowsQnt.textContent = btn.textContent.trim();
    chooseRowsQntArrow.classList.remove("rotate-0");
    chooseRowsQntList.classList.remove("max-h-list");
    chooseRowsQntBtn.parentNode.classList.remove("br-b-none");
  });
});

window.addEventListener("click", (event) => {
  if (!chooseRowsQntBtn.contains(event.target)) {
    chooseRowsQntList.classList.remove("max-h-list");
    chooseRowsQntArrow.classList.remove("rotate-0");
    chooseRowsQntBtn.parentNode.classList.remove("br-b-none");
  }
});
