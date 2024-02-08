const underPopup = document.querySelector('.under_popup')
const underPopupForm = underPopup.querySelector('.search_form')
const mobileForm = document.querySelector('.mobile_form')
const underPopUpClose = document.getElementById('underPopUpClose')

const catalogMobileHeader = document.querySelector('.catalog_mobile_header')
const catalogWrapper = document.querySelector('.catalog__wrapper')

mobileForm.addEventListener('click', () => {
    underPopup.classList.add('max-h-75vh')
    catalogMobileHeader.style.filter = 'brightness(80%)'
    catalogWrapper.style.filter = 'brightness(80%)'

})

underPopUpClose.addEventListener('click', () => {
    underPopup.classList.remove('max-h-75vh')
    catalogMobileHeader.style.filter = 'brightness(100%)'
    catalogWrapper.style.filter = 'brightness(100%)'
})

underPopupForm.addEventListener('submit', (event) => {
    event.preventDefault()
    underPopup.classList.remove('max-h-75vh')
    catalogMobileHeader.style.filter = 'brightness(100%)'
    catalogWrapper.style.filter = 'brightness(100%)'
})