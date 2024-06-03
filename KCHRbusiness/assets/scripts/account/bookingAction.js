const ordersActionBtn = document.querySelectorAll('.my_orders__info-btn')
const closeMobileAction = document.getElementById('closeMobileAction')
const orderActionMobile = document.querySelector('.order_action_mobile')
const mobileBookingAction = orderActionMobile.querySelector('.order_delete')

const footer = document.querySelector('footer')

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
    const orderAction = ordersActionList.querySelectorAll('.order_action__item')

    btn.addEventListener('click', () => {
        if (window.innerWidth > 980) {
            ordersActionList.classList.toggle('max-h-icons')
        } else {
            const ordId = btn.getAttribute('data-order-mobile')

            mobileBookingAction.setAttribute('data-order-id', ordId)
            orderActionMobile.classList.add('max-h-icons')
            main.style.filter = 'brightness(0.5)'
            mobileHeader.style.filter = 'brightness(0.5)'
            footer.style.filter = 'brightness(0.5)'
        }
    })

    orderAction.forEach((action) => {
        action.addEventListener('click', () => {
            const orderId = action.getAttribute('data-order-id')

            if (orderId) {
                const selectOrder = document.querySelector(`[data-item-id="${orderId}"]`)

                selectOrder.classList.add('d-none-imp')
            }

            ordersActionList.classList.remove('max-h-icons')
        })
    })
})

mobileBookingAction.addEventListener('click', () => {
    const orderId = mobileBookingAction.getAttribute('data-order-id')

    if (orderId) {
        const selectOrder = document.querySelector(`[data-item-id="${orderId}"]`)

        selectOrder.classList.add('d-none-imp')
    }

    orderActionMobile.classList.remove('max-h-icons')
    main.style.filter = 'brightness(1)'
    mobileHeader.style.filter = 'brightness(1)'
    footer.style.filter = 'brightness(1)'
})

closeMobileAction.addEventListener('click', () => {
    orderActionMobile.classList.remove('max-h-icons')
    main.style.filter = 'brightness(1)'
    mobileHeader.style.filter = 'brightness(1)'
    footer.style.filter = 'brightness(1)'
})