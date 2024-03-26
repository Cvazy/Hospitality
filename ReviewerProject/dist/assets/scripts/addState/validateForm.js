const addStateForm = document.querySelector('.add_state')

const requiredInputs = document.querySelectorAll('[data-input-required="required"]')

let inputCounter = 0

addStateForm.addEventListener('submit', (event) => {
    requiredInputs.forEach((el) => {
        if (el.value) {
            inputCounter++
        } else {
            inputCounter = 0
            el.classList.add('error')
        }
    })

    if (!counter || !inputCounter) {
        event.preventDefault()
        scrollTo(0, 0)
    }
})