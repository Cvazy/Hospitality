const categoryList = document.querySelector('.categories_list')
const categoryWrap = document.getElementById('categoryList')
const categoryItems = categoryWrap.querySelectorAll('li')
const addCategoryInput = document.getElementById('stateCategory')
const addCategoryBtn = document.querySelector('.add_categories-btn')

addCategoryBtn.addEventListener('click', () => {
    let categoryName = addCategoryInput.value

    if (categoryName) {
        categoryList.appendChild(createCategoryItem(categoryName))
        counter++

        categoryItems.forEach((el) => {
            if (el.textContent.trim() === categoryName) {
                el.remove()

                addCategoryInput.value = ''
            }
        })
    }
})

function createCategoryItem(text) {
    let divItem = document.createElement('div');
    let p = document.createElement('p');
    let divTag = document.createElement('div');
    let img = document.createElement('img');

    divItem.className = 'categories_list__item';
    divTag.className = 'delete_category';
    img.src = '../assets/images/icons/close-square.svg';

    p.textContent = text;

    divTag.setAttribute('onclick', 'deleteCategory(this)')
    divTag.appendChild(img);
    divItem.appendChild(p);
    divItem.appendChild(divTag);

    return divItem;
}

function deleteCategory(btn) {
    const tag = btn.parentElement
    tag.remove()
    counter--
}