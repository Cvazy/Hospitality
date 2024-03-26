let counter = 0

function createTag(text) {
    let divItem = document.createElement('div');
    let p = document.createElement('p');
    let divTag = document.createElement('div');
    let img = document.createElement('img');

    divItem.className = 'add_tags__item';
    divTag.className = 'delete_tag';
    img.src = '../assets/images/icons/close-square.svg';

    p.textContent = text;

    divTag.setAttribute('onclick', 'deleteTag(this)')
    divTag.appendChild(img);
    divItem.appendChild(p);
    divItem.appendChild(divTag);

    return divItem;
}

function deleteTag(btn) {
    const tag = btn.parentElement
    tag.remove()
    counter--
}