const addCompanionBtn = document.querySelector('.companions__add')
const addCompanionBlock = document.querySelector('.companion_add_form')
const addCompanionForm = document.getElementById('addCompanion')

addCompanionBtn.addEventListener('click', () => {
    addCompanionBlock.classList.add('max-h-three-screen-imp')
})

addCompanionForm.addEventListener('submit', (event) => {
    const allInputs = addCompanionForm.querySelectorAll('.lk_input input')

    allInputs.forEach((input) => {
        if (input.value === '') {
            event.preventDefault()
            input.classList.add('error')
        }
    })
})