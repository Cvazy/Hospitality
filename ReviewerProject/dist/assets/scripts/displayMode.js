const cardsWrapper = document.querySelector('.cards__wrapper')
const cardItems = document.querySelectorAll('.card_with_bg__wrapper')
const cardDescriptions = document.querySelectorAll('.card_description')
const cardImages = document.querySelectorAll('.card_image')

function changeMode(btn, anotherId) {
    if (!btn.classList.contains('active_state')) {
        const images = btn.querySelectorAll('img')
        const anotherImages = document.getElementById(`${anotherId}`).querySelectorAll('img')
        const activeMode = document.querySelector('.active_state')

        activeMode.classList.remove('active_state')
        btn.classList.add('active_state')

        images.forEach(img => img.classList.toggle('d-none'))

        anotherImages.forEach(img => img.classList.toggle('d-none'))

        if (anotherId === 'tableMode') {
            cardsWrapper.classList.add('flex-col')

            cardItems.forEach((item) => {
                if (!item.classList.contains('not-row')) {
                    item.classList.add('flex-row')
                }
            })

            cardImages.forEach((block) => {
                if (!block.classList.contains('not-image-resize')) {
                    block.classList.add('w-full')
                    block.querySelector('img').classList.add('h-auto-imp')
                    block.style.maxWidth = '40%'
                }
            })

            cardDescriptions.forEach((desc) => {
                if (!desc.classList.contains('not-p')) {
                    desc.classList.add('description_paddings')
                    desc.classList.add('w-full')
                }
            })
        } else {
            cardsWrapper.classList.remove('flex-col')

            cardItems.forEach((item) => {
                item.classList.remove('flex-row')
            })

            cardImages.forEach((block) => {
                if (!block.classList.contains('not-image-resize')) {
                    block.classList.remove('w-full')
                    block.querySelector('img').classList.remove('h-auto-imp')
                    block.style.maxWidth = '100%'
                }
            })

            cardDescriptions.forEach((desc) => {
                if (!desc.classList.contains('not-p')) {
                    desc.classList.remove('description_paddings')
                    desc.classList.remove('w-full')
                }
            })
        }
    }
}