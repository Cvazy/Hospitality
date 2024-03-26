const searchingBlock = document.querySelector('.search_name')
const searchTownInput = document.querySelector('.search_town')
const townInputs = document.querySelectorAll('.search_town')

const searchEmojiInput = document.querySelector('.search_emoji')
const searchEmojiList = document.querySelector('.search_emoji_list')
const emojiInputs = document.querySelectorAll('.search_emoji')

const formsSearching = document.querySelectorAll('.search_form')

function processingForm(form) {
    townInputs.forEach((el) => {
        if (el.value === '') {
            el.classList.add('error')
        } else {
            el.classList.remove('error')
        }
    })

    emojiInputs.forEach((el) => {
        if (el.value === '') {
            el.classList.add('error')
        } else {
            el.classList.remove('error')
        }
    })

    const popupBlocks = document.querySelectorAll('.popup_block')
    popupBlocks.forEach((el) => {
        el.classList.remove('max-h-popup')
    })

    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
}

formsSearching.forEach((form) => {
    form.addEventListener('submit', (event) => {
        processingForm(form)
        event.preventDefault()
    })
})

//Поиск по городу
if (searchTownInput) {
    searchingInput(searchTownInput, searchingBlock)
}

//Поиск по впечатлениям
if (searchEmojiInput) {
    searchingInput(searchEmojiInput, searchEmojiList)
}
