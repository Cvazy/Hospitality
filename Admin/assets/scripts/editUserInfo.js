const userInfoBlock = document.querySelectorAll(".info_blocks__item");
const stars = document.querySelectorAll(".choose_star");

userInfoBlock.forEach((block) => {
  const editBtn = block.querySelector(".user_info__edit");
  const backBtn = block.querySelector(".user_info__back");

  if (editBtn) {
    editBtn.addEventListener("click", () => {
      const userInfoSave = block.querySelector(".edit_info_block");
      const blockInputs = block.querySelectorAll("input");
      const blockTextarea = block.querySelectorAll("textarea");

      editBtn.classList.add("d-none-imp");
      userInfoSave.classList.remove("d-none-imp");

      if (blockInputs) {
        blockInputs.forEach((input) => {
          input.readOnly = false;
        });
      }

      if (blockTextarea) {
        blockTextarea.forEach((textarea) => {
          textarea.readOnly = false;
        });
      }

      if (stars) {
        stars.forEach((star) => {
          star.classList.add(".choose_star_input");
        });
      }
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const userInfoSave = block.querySelector(".edit_info_block");
      const blockInputs = block.querySelectorAll("input");
      const blockTextarea = block.querySelectorAll("textarea");

      editBtn.classList.remove("d-none-imp");
      userInfoSave.classList.add("d-none-imp");

      if (blockInputs) {
        blockInputs.forEach((input) => {
          input.readOnly = true;
        });
      }

      if (blockTextarea) {
        blockTextarea.forEach((textarea) => {
          textarea.readOnly = true;
        });
      }

      if (stars) {
        stars.forEach((star) => {
          star.classList.remove(".choose_star_input");
        });
      }
    });
  }
});
