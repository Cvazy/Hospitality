const blockContentBtn = document.querySelector(".user_actions__delete");
const blockContentModal = document.querySelector(".blackout");
const cancelModal = document.querySelectorAll(".hidden_modal");

blockContentBtn.addEventListener("click", () => {
  blockContentModal.classList.remove("d-none-imp");
});

cancelModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    blockContentModal.classList.add("d-none-imp");
  });
});
