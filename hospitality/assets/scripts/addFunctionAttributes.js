const burger = document.getElementById('burger')
const searching = document.getElementById('searching')
const visitors = document.getElementById('visitors')
const calendar = document.getElementById('calendar')
const filter = document.getElementById('filter')

window.addEventListener('resize', () => {
    if (document.body.offsetWidth < 980) {
        burger.setAttribute('onclick', "headerOpenMobile('navigation')")
        if (searching) {
            searching.setAttribute('onclick', "headerOpenMobile('searching')")
        }

        if (visitors) {
            visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
        }

        if (calendar) {
            calendar.setAttribute('onclick', "headerOpenMobile('calendar')")
        }

        if (filter) {
            filter.setAttribute('onclick', "headerOpenMobile('filter')")
        }

    } else {
        burger.removeAttribute('onclick')

        if (searching) {
            searching.removeAttribute('onclick')
        }

        if (visitors) {
            visitors.removeAttribute('onclick')
        }

        if (calendar) {
            calendar.removeAttribute('onclick')
        }

        if (filter) {
            filter.removeAttribute('filter')
        }
    }
})

if (window.innerWidth < 980) {
    burger.setAttribute('onclick', "headerOpenMobile('navigation')")
    
    if (searching) {
        searching.setAttribute('onclick', "headerOpenMobile('searching')")
    }

    if (visitors) {
        visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
    }

    if (calendar) {
        calendar.setAttribute('onclick', "headerOpenMobile('calendar')")
    }

    if (filter) {
        filter.setAttribute('onclick', "headerOpenMobile('filter')")
    }
}