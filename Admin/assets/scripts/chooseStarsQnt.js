const chooseStars = document.querySelectorAll(".choose_star");
const starsQntInput = document.getElementById("starsQntInput");

chooseStars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const starId = star.getAttribute("data-stars-qnt");

    for (let i = 1; i <= Number(starId); i++) {
      const iterStar = document.querySelector(`[data-stars-qnt="${i}"]`);
      if (iterStar.classList.contains(".choose_star_input")) {
        iterStar.classList.add("choose_star__hover");
      }
    }
  });

  star.addEventListener("mouseout", () => {
    chooseStars.forEach((el) => {
      if (el.classList.contains(".choose_star_input")) {
        el.classList.remove("choose_star__hover");
      }
    });
  });

  star.addEventListener("click", () => {
    const starId = star.getAttribute("data-stars-qnt");

    if (star.classList.contains(".choose_star_input")) {
      chooseStars.forEach((el) => {
        el.classList.remove("choose_star__active");
      });

      starsQntInput.value = starId.toString();
    }

    for (let i = 1; i <= Number(starId); i++) {
      const iterStar = document.querySelector(`[data-stars-qnt="${i}"]`);

      if (iterStar.classList.contains(".choose_star_input")) {
        iterStar.classList.add("choose_star__active");
      }
    }
  });
});
