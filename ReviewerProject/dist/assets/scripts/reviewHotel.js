const selectNearby = document.querySelectorAll('.select_nearby')

selectNearby.forEach((block) => {
    block.addEventListener('click', () => {
        const parentBlock = block.parentNode
        const blockList = block.nextElementSibling

        parentBlock.classList.toggle('gap-16px-imp')
        blockList.classList.toggle('max-h-popup')
    })
})