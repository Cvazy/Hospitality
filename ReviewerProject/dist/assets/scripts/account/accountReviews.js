const postsList = document.querySelector('[data-favourite-block="posts"]')
const notesList = document.querySelector('[data-favourite-block="notes"]')
const reviewsType = document.querySelectorAll('.order_notes')

reviewsType.forEach((btn) => {
    btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-obj-id')
        const itemType = btn.getAttribute('data-obj-type')
        const itemNode = document.querySelector(`[data-item-id="${itemId}"]`)
        const itemMoreAction = itemNode.querySelector('.my_orders__info-btn')

        itemMoreAction.setAttribute('data-card-id', itemId)

        if (itemType === 'post') {
            postsList.removeChild(itemNode)
            notesList.appendChild(itemNode)
            btn.textContent = 'Опубликовать'
            btn.setAttribute('data-obj-type', 'note')
            itemMoreAction.setAttribute('data-obj-type', 'note')
        } else {
            notesList.removeChild(itemNode)
            postsList.appendChild(itemNode)
            btn.textContent = 'Переместить в черновик'
            btn.setAttribute('data-obj-type', 'post')
            itemMoreAction.setAttribute('data-obj-type', 'post')
        }
    })
})
