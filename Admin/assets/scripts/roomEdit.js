const roomEdit = document.querySelector(".room_edit");
const stopRoomEdit = document.querySelector(".room_back");
const roomEditForm = roomEdit.nextElementSibling;
const removeRoomBonus = document.querySelectorAll(".room_row__remove");

roomEdit.addEventListener("click", () => {
  roomEdit.classList.add("d-none-imp");
  roomEditForm.classList.remove("d-none-imp");

  removeRoomBonus.forEach((btn) => {
    btn.classList.remove("d-none-imp");
  });
});

stopRoomEdit.addEventListener("click", () => {
  roomEditForm.classList.add("d-none-imp");
  roomEdit.classList.remove("d-none-imp");

  removeRoomBonus.forEach((btn) => {
    btn.classList.add("d-none-imp");
  });
});

removeRoomBonus.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.remove();
  });
});
