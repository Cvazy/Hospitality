const dropExcursionBtn = document.getElementById('excursions')
const dropExcursionsMenu = document.getElementById('dropExcursionsMenu')
const dropExcursionsArrow = document.getElementById('dropExcursionsArrow')

const dropEmojiBtn = document.getElementById('emojiList')
const dropEmojiMenu = document.getElementById('dropEmojiMenu')
const dropEmojiArrow = document.getElementById('dropEmojiArrow')

const mobileNavDrop = document.querySelector('.mobile_nav__drop')
const clickItemArrow = mobileNavDrop.querySelector('.mobile_nav__item_arrow')
const mobileNavDropList = mobileNavDrop.querySelector('.mobile_nav__drop-list')

function dropMenuToggle(btn, menu, arrow) {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        arrow.classList.toggle('rotate-180')
        menu.classList.toggle('max-h-popup')
    })
}

dropMenuToggle(dropExcursionBtn, dropExcursionsMenu, dropExcursionsArrow)

function mobileReviewMenu() {
    mobileNavDrop.classList.toggle('gap-12px')
    clickItemArrow.classList.toggle('rotate-180')
    mobileNavDropList.classList.toggle('max-h-icons')
}