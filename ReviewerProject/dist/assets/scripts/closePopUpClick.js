function closeOutsideClickBlock(inputID, popupID) {
    document.addEventListener('click', function(event) {
        const inputItem = document.getElementById(`${inputID}`)
        const isClickInsideInputItem = inputItem.contains(event.target)
        const popupBlock = document.getElementById(`${popupID}`)
        const isClickInsidePopup = popupBlock.contains(event.target)

        if (!isClickInsideInputItem && !isClickInsidePopup) {
            popupBlock.classList.remove('max-h-popup')

            if (inputID === 'chooseSorted') {
                inputItem.classList.remove('br-bottom-0')
                const itemArrow = inputItem.querySelector('img')
                itemArrow.classList.remove('rotate-180')
                popupBlock.classList.remove('open_filter_type')
            }
        }

        if (dropExcursionsArrow) {
            if (!dropExcursionsMenu.classList.contains('max-h-popup')) {
                dropExcursionsArrow.classList.remove('rotate-180')
            }
        }

        if (dropEmojiArrow) {
            if (!dropEmojiMenu.classList.contains('max-h-popup')) {
                dropEmojiArrow.classList.remove('rotate-180')
            }
        }
    })
}

const testSearchTown = document.getElementById('search_town')
const testSearchEmoji = document.getElementById('search_emoji')
const testSearchReviewType = document.getElementById('review_type_input')
const testSortedList = document.getElementById('chooseSorted')
const testAccountMenu = document.getElementById('accountIcon')
const testStateCategory = document.getElementById('stateCategory')

if (testSearchTown) {
    closeOutsideClickBlock('search_town', 'select_town')
}

if (testSearchEmoji) {
    closeOutsideClickBlock('search_emoji', 'select_emoji')
}

if (testSearchReviewType) {
    closeOutsideClickBlock('review_type_input', 'review_type_list')
}

if (testSortedList) {
    closeOutsideClickBlock('chooseSorted', 'sortedList')
}

if (testAccountMenu) {
    closeOutsideClickBlock('accountIcon', 'accountNav')
}

if (testStateCategory) {
    closeOutsideClickBlock('stateCategory', 'categoryList')
}

closeOutsideClickBlock('excursions', 'dropExcursionsMenu')
