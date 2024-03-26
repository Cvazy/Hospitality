const visibleBlock = document.querySelector('.visible_block')
const visibleBlockImg = visibleBlock.querySelector('img')
const hotelDesc = document.querySelector('.about_wrap')

visibleBlock.addEventListener('click', () => {
    visibleBlockImg.classList.toggle('rotate-180')
    hotelDesc.classList.toggle('max-h-screen-imp')
    hotelDesc.classList.toggle('mt-about')
})