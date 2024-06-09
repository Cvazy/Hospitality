const tabs = document.querySelectorAll('.service')
const cardsWrappers = document.querySelectorAll('.cards__wrapper')

tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnType = btn.getAttribute('data-tab-active')
        const activeCards = document.querySelector(`[data-favourite-block="${btnType}"]`)

        cardsWrappers.forEach((block) => {
            block.classList.add('d-none-imp')
        })

        tabs.forEach((el) => {
            el.classList.remove('service_active')
        })

        btn.classList.add('service_active')
        activeCards.classList.remove('d-none-imp')
    })
})