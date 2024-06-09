const inputTag = document.getElementById('search_tag')
const tagsList = document.querySelector('.search_tag')
const tagsWrapper = document.querySelector('.tags')

inputTag.addEventListener('input', (event) => {
    if (event.target.value) {
        tagsList.classList.add('max-h-popup')
    } else {
        tagsList.classList.remove('max-h-popup')
    }

    const nothingSearchItem = tagsList.querySelector('.nothing_search')

    const searchItems = tagsList.querySelectorAll('.finding_item')

    searchItems.forEach((item) => {
        if (!item.textContent.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())) {
            item.classList.add('d-none')
        } else {
            item.classList.remove('d-none')
        }

        if (!item.dataset.clickEventAdded) {
            item.addEventListener('click', () => {
                if (!item.classList.contains('nothing_search')) {
                    tagsWrapper.appendChild(createTag(item.textContent.trim()))
                    counter++
                    item.remove()

                    inputTag.value = ''

                    tagsList.classList.remove('max-h-popup')

                    const checkResult = tagsList.querySelectorAll('.finding_item:not(.nothing_search)')

                    if (!checkResult.length) {
                        inputTag.parentElement.remove()
                    }
                }
            })

            item.dataset.clickEventAdded = 'true'
        }
    })

    const checkNothing = Array.from(searchItems).filter((item) => !item.classList.contains('d-none'))

    if (!checkNothing.length) {
        if (nothingSearchItem) {
            nothingSearchItem.classList.remove('d-none')
        }
    } else {
        if (nothingSearchItem) {
            nothingSearchItem.classList.add('d-none')
        }
    }
})