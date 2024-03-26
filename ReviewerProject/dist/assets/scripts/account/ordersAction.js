const ordersActionBtn = document.querySelectorAll('.my_orders__info-btn')
const closeMobileActions = document.querySelectorAll('.closeMobileAction')
const orderActionMobile = document.querySelector('.order_action_review')

const orderAction = document.querySelectorAll('.order_action__item')

const footer = document.querySelector('footer')

const deleteReviews = document.querySelectorAll('.order_delete')
const deleteReviewMobile = document.querySelector('.cancel_order')
const typeReviewMobile = document.querySelector('.order_notes_mobile')

document.addEventListener('click', (event) => {
    ordersActionBtn.forEach((btn) => {
        const ordersActionList = btn.previousElementSibling

        if (!ordersActionList.contains(event.target) && !btn.contains(event.target)) {
            ordersActionList.classList.remove('max-h-icons')
        }
    })
})

ordersActionBtn.forEach((btn) => {
    const ordersActionList = btn.previousElementSibling

    btn.addEventListener('click', () => {
        if (window.innerWidth > 980) {
            ordersActionList.classList.toggle('max-h-icons')
        } else {
            const orderId = btn.getAttribute('data-card-id')
            const orderType = btn.getAttribute('data-obj-type')
            deleteReviewMobile.setAttribute('data-order-id', orderId)
            typeReviewMobile.setAttribute('data-obj-id', orderId)
            typeReviewMobile.setAttribute('data-obj-type', orderType)

            if (orderType === 'post') {
                typeReviewMobile.textContent = 'Переместить в черновик'
            } else {
                typeReviewMobile.textContent = 'Опубликовать'
            }

            orderActionMobile.classList.add('max-h-icons')
            main.style.filter = 'brightness(0.5)'
            mobileHeader.style.filter = 'brightness(0.5)'
            footer.style.filter = 'brightness(0.5)'
        }
    })

    orderAction.forEach((action) => {
        action.addEventListener('click', () => {
            const orderId = action.getAttribute('data-order-id')

            ordersActionList.classList.remove('max-h-icons')
            orderActionMobile.classList.remove('max-h-icons')
            main.style.filter = 'brightness(1)'
            mobileHeader.style.filter = 'brightness(1)'
            footer.style.filter = 'brightness(1)'
        })
    })
})

closeMobileActions.forEach((el) => {
    el.addEventListener('click', () => {
        orderActionMobile.classList.remove('max-h-icons')
        main.style.filter = 'brightness(1)'
        mobileHeader.style.filter = 'brightness(1)'
        footer.style.filter = 'brightness(1)'
    })
})

deleteReviews.forEach((btn) => {
    btn.addEventListener('click', () => {
        const orderId = btn.getAttribute('data-order-id')
        const orderItem = document.querySelector(`[data-item-id="${orderId}"]`)

        orderItem.remove()
    })
})