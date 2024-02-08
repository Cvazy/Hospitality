const burger = document.getElementById('burger')
const searching = document.getElementById('searching')
const visitors = document.getElementById('visitors')
const calendar = document.getElementById('calendar')
const filter = document.getElementById('filter')

window.addEventListener('resize', () => {
    if (document.body.offsetWidth < 980) {
        burger.setAttribute('onclick', "headerOpenMobile('navigation')")
        searching.setAttribute('onclick', "headerOpenMobile('searching')")
        visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
        calendar.setAttribute('onclick', "headerOpenMobile('calendar')")

        if (filter) {
            filter.setAttribute('onclick', "headerOpenMobile('filter')")
        }

    } else {
        burger.removeAttribute('onclick')
        searching.removeAttribute('onclick')
        visitors.removeAttribute('onclick')
        calendar.removeAttribute('onclick')

        if (filter) {
            filter.removeAttribute('filter')
        }
    }
})

if (window.innerWidth < 980) {
    burger.setAttribute('onclick', "headerOpenMobile('navigation')")
    searching.setAttribute('onclick', "headerOpenMobile('searching')")
    visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
    calendar.setAttribute('onclick', "headerOpenMobile('calendar')")

    if (filter) {
        filter.setAttribute('onclick', "headerOpenMobile('filter')")
    }
}