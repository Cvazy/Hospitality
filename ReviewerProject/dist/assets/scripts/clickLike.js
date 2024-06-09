function likesAddListener() {
    const likes = document.querySelectorAll('.like')

    likes.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault()
            const heart = btn.querySelector('.no_like')
            const heartClick = btn.querySelector('.click_like')

            const itemId = btn.getAttribute('data-btn-id')
            const clickedItem = document.querySelector(`[data-item-id="${itemId}"]`)

            if (heart.classList.contains('d-none-imp')) {
                btn.classList.add('heart')
                btn.classList.remove('heart_click')

                heart.classList.remove('d-none-imp')
                heartClick.classList.add('d-none-imp')

                if (clickedItem) {
                    clickedItem.setAttribute('data-liked', 'false')
                }
            } else {
                btn.classList.add('heart_click')
                btn.classList.remove('heart')

                heart.classList.add('d-none-imp')
                heartClick.classList.remove('d-none-imp')

                if (clickedItem) {
                    clickedItem.setAttribute('data-liked', 'true')
                }
            }
        })
    })
}

likesAddListener()