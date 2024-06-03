const authInputs = document.querySelectorAll(".auth_input");
const authSubmit = document.querySelector(".auth_submit");

let checkPhone = false;
let checkPassword = false;

authInputs[0].addEventListener("input", (event) => {
  if (event.target.value !== "") {
    checkPhone = true;

    if (checkPassword) {
      authSubmit.disabled = false;
    }
  } else {
    checkPhone = false;
    authSubmit.disabled = true;
  }
});

authInputs[1].addEventListener("input", (event) => {
  if (event.target.value !== "") {
    checkPassword = true;

    if (checkPhone) {
      authSubmit.disabled = false;
    }
  } else {
    checkPassword = false;
    authSubmit.disabled = true;
  }
});
