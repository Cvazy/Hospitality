const mainLkForm = document.querySelector('.main_form')
const companionLkForm = document.querySelector('.companion_form')

mainLkForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let has_errors = false;
    const allInputsBlocks = mainLkForm.querySelectorAll('.lk_input')

    allInputsBlocks.forEach((block) => {
        if (!block.classList.contains('check_in_input')) {
            const allInputs = block.querySelectorAll('input')

            allInputs.forEach((input) => {
                if (input.value === '') {
                    event.preventDefault()
                    input.classList.add('error')
                    has_errors = true;
                }
            })

        }
    })

    if (!has_errors) {
        $.ajax({
            url: mainLkForm["action"],
            method: mainLkForm["method"],
            data: new FormData(mainLkForm),
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function(data){
                if(data.status == 'success'){
                    $(mainLkForm).parent().find(".js-results-error").html("");
                    $(mainLkForm).parent().find(".js-results-success").html(data.message);
                } else if(data.status == 'error') {
                    $(mainLkForm).parent().find(".js-results-error").html(data.message);
                    $(mainLkForm).parent().find(".js-results-success").html("");
                }
                document.querySelector('.account__main-top').scrollIntoView();
            },
            error: function(data){
                $(mainLkForm).parent().find(".js-error").html('Ошибка сохранения данных');
                document.querySelector('.account__main-top').scrollIntoView();
            }
        });
    }
})

if (mainLkForm) {
    const mainLkFormInputs = mainLkForm.querySelectorAll('input')
    mainLkFormInputs.forEach((input) => {
        input.addEventListener('input', function() {
            $(mainLkForm).parent().find(".js-results-error").html("");
            $(mainLkForm).parent().find(".js-results-success").html("");
        })
    })
}
