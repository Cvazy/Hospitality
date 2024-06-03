const sortedBlock = document.querySelector(".sort_by_list");
const sortedInput = sortedBlock.querySelector("input");
const sortedList = sortedBlock.querySelector(".sorted_select");
const sortedListItems = sortedList.querySelectorAll(".sorted_select__item");

sortedBlock.addEventListener("click", () => {
  sortedList.classList.toggle("max-h-list");
});

sortedListItems.forEach((item) => {
  item.addEventListener("click", () => {
    sortedInput.value = item.textContent.trim();
  });
});

window.addEventListener("click", (event) => {
  if (!sortedBlock.contains(event.target)) {
    sortedList.classList.remove("max-h-list");
  }
});
