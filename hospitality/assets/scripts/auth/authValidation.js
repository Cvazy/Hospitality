const modalAuthForms = document.querySelectorAll('.modal_auth_form')

function authFormValid(forms) {
    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            let has_error = false;

            const allInput = form.querySelectorAll('input.js-required')
            const emailInput = form.querySelector('input[type="email"]');
            const emailError = form.querySelector('.errorHold')

            if (emailInput.value === '') {
                emailInput.classList.add('error')
                emailError.textContent = 'Поле email не может быть пустым'
                emailError.classList.add('m-0-imp')
                has_error = true;
            } else {
                let email_error; 
                email_error = email_validate(emailInput);
                if (email_error) {
                    has_error = true;
                }
            }

            allInput.forEach((input) => {
                if (input.value === '') {
                    input.classList.add('error')
                    has_error = true;
                }
            })

            event.preventDefault()

            if (!has_error) {
                var formData = $(form).serialize();
                $.ajax({
                    url: form["action"],
                    method: form["method"],
                    data: formData,
                    dataType: 'json',
                    success: function(data){
                        if(data.status == 'success'){
                            location.reload();
                        } else if(data.status == 'error') {
                            $(form).find(".js-error").html(data.message);
                        }
                    },
                    error: function(data){
                        $(form).find(".js-error").html('Ошибка регистрации');
                    },
                });
            }
        });
    })
}

authFormValid(modalAuthForms)
