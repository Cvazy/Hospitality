const emailInputsList = document.querySelectorAll('input[type="email"]')

function email_validate(input) {
    let has_error = false;
    const emailInputError = input.nextElementSibling

    const email = input.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email === '') {
        input.classList.add('error')
        emailInputError.textContent = 'Поле email не может быть пустым'
        emailInputError.classList.remove('m-0-imp')
        has_error = true;
    } else if (!emailRegex.test(email)) {
        input.classList.add('error')
        emailInputError.textContent = 'Пожалуйста, введите корректный email адрес';
        emailInputError.classList.remove('m-0-imp')
        has_error = true;
    } else {
        input.classList.remove('error')
        emailInputError.textContent = ''
        emailInputError.classList.add('m-0-imp')
    }

    return has_error;
}

emailInputsList.forEach((input) => {
    input.addEventListener('input', function() {
        email_validate(input)
    })
})
