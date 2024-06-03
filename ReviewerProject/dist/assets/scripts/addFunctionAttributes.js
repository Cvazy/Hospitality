const burger = document.getElementById('burger')
const booking = document.getElementById('bookingMobile')
const searching = document.getElementById('searching')
const emoji = document.getElementById('emoji')
const filter = document.getElementById('filter')
const account = document.getElementById('account')

window.addEventListener('resize', () => {
    if (document.body.offsetWidth < 1280) {
        burger.setAttribute('onclick', "headerOpenMobile('navigation')")
        if (searching) {
            searching.setAttribute('onclick', "headerOpenMobile('searching')")
        }

        if (emoji) {
            emoji.setAttribute('onclick', "headerOpenMobile('emoji')")
        }

        if (filter) {
            filter.setAttribute('onclick', "headerOpenMobile('filter')")
        }

        if (booking) {
            booking.setAttribute('onclick', "headerOpenMobile('booking')")
        }

        if (account) {
            account.setAttribute('onclick', "headerOpenMobile('account')")
        }
    } else {
        burger.removeAttribute('onclick')

        if (searching) {
            searching.removeAttribute('onclick')
        }

        if (emoji) {
            emoji.removeAttribute('onclick')
        }

        if (filter) {
            filter.removeAttribute('onclick')
        }

        if (booking) {
            booking.removeAttribute('onclick')
        }

        if (account) {
            account.removeAttribute('onclick')
        }
    }
})

if (window.innerWidth < 1280) {
    burger.setAttribute('onclick', "headerOpenMobile('navigation')")
    
    if (searching) {
        searching.setAttribute('onclick', "headerOpenMobile('searching')")
    }

    if (emoji) {
        emoji.setAttribute('onclick', "headerOpenMobile('emoji')")
    }

    if (filter) {
        filter.setAttribute('onclick', "headerOpenMobile('filter')")
    }

    if (booking) {
        booking.setAttribute('onclick', "headerOpenMobile('booking')")
    }

    if (account) {
        account.setAttribute('onclick', "headerOpenMobile('account')")
    }
}