const reviewTypeHotel = document.getElementById('review_hotel')
const reviewTypeExcursion = document.getElementById('review_excursion')

const reviewMarksHotel = document.getElementById('reviewMarksHotel')
const reviewMarksExc = document.getElementById('reviewMarksExc')

const reviewObj = document.getElementById('reviewObj')
const reviewVisitDate = document.getElementById('reviewVisitDate')

const reviewMarksRows = document.querySelectorAll('.review_marks__row')

function reviewType(el, listActive, listInactive) {
    el.addEventListener('click', () => {
        listActive.classList.remove('d-none-imp')
        listInactive.classList.add('d-none-imp')
        reviewObj.classList.remove('d-none-imp')
        reviewVisitDate.classList.remove('d-none-imp')
    })
}

reviewType(reviewTypeHotel, reviewMarksHotel, reviewMarksExc)
reviewType(reviewTypeExcursion, reviewMarksExc, reviewMarksHotel)

reviewMarksRows.forEach((row) => {
    const reviewBtns = row.querySelectorAll('.review_marks__item')
    const reviewMarkInput = row.querySelector('input')

    reviewBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const mark = btn.textContent.trim()

            reviewBtns.forEach((el) => {
                el.classList.remove('review_marks__active')
            })

            btn.classList.add('review_marks__active')

            reviewMarkInput.value = mark
        })
    })
})