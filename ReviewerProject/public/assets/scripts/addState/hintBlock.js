const addStateInfo = document.querySelectorAll('.add_state__info')

addStateInfo.forEach((el) => {
    el.addEventListener('click', (event) => {
        const hintBlock = el.nextElementSibling

        hintBlock.classList.toggle('opacity-100-imp')
        hintBlock.classList.toggle('z-100')

        window.addEventListener('click', (event) => {
            if (!el.contains(event.target) && !hintBlock.contains(event.target)) {
                hintBlock.classList.remove('opacity-100-imp')
            }
        })
    })
})