const notifyHiddenBtns = document.querySelectorAll(".notify__hidden");
const notifyListEls = document.querySelectorAll(".top_list__text");

//Блок, отвечающий за скрытие уведомлений
if (notifyHiddenBtns) {
  notifyHiddenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentNode.remove();
    });
  });
}

notifyListEls.forEach((el) => {
  el.addEventListener("click", () => {
    const notifyList = el.nextElementSibling;

    notifyList.classList.toggle("max-h-list");
  });
});

window.addEventListener("click", (event) => {
  notifyListEls.forEach((el) => {
    const notifyList = el.nextElementSibling;

    if (!el.contains(event.target) && !notifyList.contains(event.target)) {
      notifyList.classList.remove("max-h-list");
    }
  });
});
