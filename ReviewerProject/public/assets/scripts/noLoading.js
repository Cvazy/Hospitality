function noLoading() {
    const noLoadingBlocks = document.querySelectorAll('.md_no_loading')

    noLoadingBlocks.forEach((block) => {
        const loadingBlocks = block.querySelectorAll('[data-loading="true"]')
        const loadingBtn = block.querySelector('.btn__loading_more')

        loadingBlocks.forEach((el) => {
            if (window.innerWidth < 1280) {
                el.classList.remove('d-none-imp')
            } else {
                el.classList.add('d-none-imp')
            }
        })

        if (window.innerWidth < 1280) {
            loadingBtn.classList.add('d-none-imp')
        } else {
            loadingBtn.classList.remove('d-none-imp')
        }
    })
}

document.addEventListener('DOMContentLoaded', noLoading)
window.addEventListener('resize', noLoading)