const addNewDocument = document.querySelector(".add_file");
const addFileWrap = document.querySelector(".info_file");

function loadDocument(btn) {
  const input = document.createElement("input");
  input.type = "file";
  input.onchange = (e) => {
    const file = e.target.files[0];
    btn.nextElementSibling.innerText = file.name;
  };
  input.click();
}

function createLoadFileBlock() {
  let infoBlock = document.createElement("div");
  let userInfo = document.createElement("div");
  let title = document.createElement("p");
  let loadFile = document.createElement("div");
  let loadFileBlock = document.createElement("div");
  let input = document.createElement("input");
  let img = document.createElement("img");
  let loadFileName = document.createElement("div");

  infoBlock.className = "info_blocks__item";
  userInfo.className = "user_info";
  title.className = "user_info__title";
  loadFile.className = "load_file";
  loadFileBlock.className = "load_file__block";
  loadFileBlock.setAttribute("onclick", "loadDocument(this)");
  input.type = "hidden";
  input.name = "load_file";
  img.className = "load_file__icon";
  img.src = "assets/images/file.svg";
  img.alt = "Load File";
  img.loading = "lazy";
  loadFileName.className = "load_file__name";

  title.textContent = "Документы";
  loadFileName.textContent = "Ничего не загружено";

  loadFileBlock.appendChild(input);
  loadFileBlock.appendChild(img);
  loadFile.appendChild(loadFileBlock);
  loadFile.appendChild(loadFileName);
  userInfo.appendChild(title);
  userInfo.appendChild(loadFile);
  infoBlock.appendChild(userInfo);

  return infoBlock;
}

addNewDocument.addEventListener("click", () => {
  addFileWrap.appendChild(createLoadFileBlock());
});
