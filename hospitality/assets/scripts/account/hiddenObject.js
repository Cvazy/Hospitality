const hiddenObjectBtns = document.querySelectorAll('.object_visible')

hiddenObjectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const objId = btn.getAttribute('data-obj-id')
        const hiddenObject = document.querySelector(`[data-item-id='${objId}']`)
        const eye = hiddenObject.querySelector('.object_hidden')

        if (btn.textContent.trim() === 'Скрыть с сайта') {
            eye.classList.remove('d-none-imp')
            btn.textContent = 'Показать на сайте'
        } else {
            eye.classList.add('d-none-imp')
            btn.textContent = 'Скрыть с сайта'
        }
    })
})