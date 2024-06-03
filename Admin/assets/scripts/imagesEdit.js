const imagesEditBtn = document.querySelector(".images_edit");
const cancelImagesEdit = document.querySelector(".images_back");
const editBlock = imagesEditBtn.nextElementSibling;
const photosWrap = document.querySelectorAll(".obj_pictures__item");
const deletePhotos = document.querySelectorAll(".obj_pictures__delete");
const addPhoto = document.querySelectorAll(".add_photo");

imagesEditBtn.addEventListener("click", () => {
  editBlock.classList.remove("d-none-imp");
  imagesEditBtn.classList.add("d-none-imp");

  addPhoto.forEach((btn) => {
    btn.classList.remove("d-none-imp");
  });

  deletePhotos.forEach((btn) => {
    btn.classList.remove("d-none-imp");
  });
});

cancelImagesEdit.addEventListener("click", () => {
  editBlock.classList.add("d-none-imp");
  imagesEditBtn.classList.remove("d-none-imp");

  addPhoto.forEach((btn) => {
    btn.classList.add("d-none-imp");
  });

  deletePhotos.forEach((btn) => {
    btn.classList.add("d-none-imp");
  });
});

addPhoto.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.previousElementSibling.appendChild(createObjPicturesItem());
  });
});

function deleteImage(btn) {
  btn.parentNode.parentNode.remove();
}

function createObjPicturesItem() {
  let objPicturesItem = document.createElement("div");
  let objPicturesImage = document.createElement("div");
  let button = document.createElement("button");
  let imgDelete = document.createElement("img");
  let loadImage = document.createElement("div");
  let input = document.createElement("input");
  let loadImageWrapper = document.createElement("div");
  let imgIcon = document.createElement("img");
  let imgLoading = document.createElement("img");

  objPicturesItem.className = "obj_pictures__item min-h-loading";
  objPicturesItem.setAttribute("onclick", "loadImage(this, event)");
  objPicturesImage.className = "obj_pictures__image";
  imgLoading.setAttribute("alt", "Image");
  imgLoading.setAttribute("loading", "lazy");
  imgLoading.className = "d-none-imp";
  button.type = "button";
  button.className = "obj_pictures__delete";
  button.setAttribute("onclick", "deleteImage(this)");
  imgDelete.src = "assets/images/trash.svg";
  imgDelete.alt = "Delete";
  imgDelete.loading = "lazy";
  loadImage.className = "load_image";
  input.type = "hidden";
  input.name = "new_image";
  loadImageWrapper.className = "load_image__wrapper";
  imgIcon.className = "load_image__icon";
  imgIcon.src =
    "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.52832%2010C10.6329%2010%2011.5283%209.10457%2011.5283%208C11.5283%206.89543%2010.6329%206%209.52832%206C8.42375%206%207.52832%206.89543%207.52832%208C7.52832%209.10457%208.42375%2010%209.52832%2010Z'%20stroke='%23101E29'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.5283%202H9.52832C4.52832%202%202.52832%204%202.52832%209V15C2.52832%2020%204.52832%2022%209.52832%2022H15.5283C20.5283%2022%2022.5283%2020%2022.5283%2015V10'%20stroke='%23101E29'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.5283%202H15.5283C20.5283%202%2022.5283%204%2022.5283%209V15C22.5283%2020%2020.5283%2022%2015.5283%2022H9.52832C4.52832%2022%202.52832%2020%202.52832%2015V10'%20stroke='%23101E29'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.19824%2018.9501L8.12824%2015.6401C8.91824%2015.1101%2010.0582%2015.1701%2010.7682%2015.7801L11.0982%2016.0701C11.8782%2016.7401%2013.1382%2016.7401%2013.9182%2016.0701L18.0782%2012.5001C18.8582%2011.8301%2020.1182%2011.8301%2020.8982%2012.5001L22.5282%2013.9001'%20stroke='%23101E29'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  imgIcon.alt = "Icon";
  imgIcon.loading = "lazy";

  button.appendChild(imgDelete);
  loadImageWrapper.appendChild(imgIcon);
  loadImage.appendChild(input);
  loadImage.appendChild(loadImageWrapper);
  objPicturesImage.appendChild(button);
  objPicturesImage.appendChild(imgLoading);
  objPicturesImage.appendChild(loadImage);
  objPicturesItem.appendChild(objPicturesImage);

  return objPicturesItem;
}

const loadImage = (element, event) => {
  if (event.target.closest(".obj_pictures__delete")) {
    return;
  }

  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        let img = element.querySelector(".d-none-imp");
        img.src = e.target.result;

        img.classList.remove("d-none-imp");

        element.querySelector(".load_image").classList.add("d-none-imp");
      };

      reader.readAsDataURL(this.files[0]);
    }
  });

  input.click();
};
