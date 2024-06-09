function addClass() {
    const hiddenAuthors = document.querySelectorAll('.people_hidden')

    hiddenAuthors.forEach((block) => {
        if (window.innerWidth < 767) {
            block.classList.add('d-none-imp')
        } else {
            block.classList.remove('d-none-imp')
        }
    })
}

document.addEventListener('DOMContentLoaded', addClass)
window.addEventListener('resize', addClass)