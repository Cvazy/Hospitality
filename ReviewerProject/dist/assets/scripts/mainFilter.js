const popUpFilters = document.querySelectorAll('.filters_full')
const openFilterBtns = document.querySelectorAll('.watch_filter')
const closeFilterBtns = document.querySelectorAll('.filter_close_window')
const seeAllBtns = document.querySelectorAll('.btn__see_all')

const filterClose = document.getElementById('filterClose')

const resetFilterBtns = document.querySelectorAll('.reset_filter')
const allCheckbox = document.querySelectorAll('input[type="checkbox"]')

const allFilters = document.querySelectorAll('form')

allFilters.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        popUpFilters.forEach((block) => {
            block.classList.remove('max-h-screen-imp')
        })
    })
})

filterClose.addEventListener('click', () => {
    popUpFilters.forEach((block) => {
        block.classList.remove('max-h-screen-imp')
    })
})

openFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        popUpFilters.forEach((block) => {
            block.classList.toggle('max-h-screen-imp')
        })
    })
})

closeFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        popUpFilters.forEach((block) => {
            block.classList.remove('max-h-screen-imp')
        })
    })
})

seeAllBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        popUpFilters.forEach((block) => {
            const fullParams = block.querySelectorAll('.filter_item')

            fullParams.forEach((el) => el.classList.remove('d-none-imp'))

            btn.classList.add('d-none')
        })
    })
})

resetFilterBtns.forEach((el) => {
    el.addEventListener('click', () => {
        allCheckbox.forEach((checkbox) => {
            checkbox.checked = false
        })
    })
})