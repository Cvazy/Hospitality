function validateTextInput(event) {
    const inputValue = event.target.value

    const regex = /^[a-zA-Zа-яА-Я]*$/

    if (!regex.test(inputValue)) {
        event.target.value = inputValue.slice(0, -1)
    }
}