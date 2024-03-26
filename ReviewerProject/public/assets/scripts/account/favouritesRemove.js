const heartBtns = document.querySelectorAll('.heart_click')

heartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-btn-id')
        const itemBlocks = document.querySelectorAll(`[data-item-id="${itemId}"]`)

        itemBlocks.forEach((el) => {
            el.remove()
        })
    })
})