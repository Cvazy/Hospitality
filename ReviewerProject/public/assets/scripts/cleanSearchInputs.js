const cleanInputSearch = document.getElementById('cleanInputSearch')
const cleanInputSearchEmoji = document.getElementById('cleanInputSearchEmoji')
const qntChild = document.querySelector('[name="qnt_child"]')
const qntAdults = document.querySelector('[name="qnt_adults"]')
const paragraphQntAdultsPC = document.getElementById('desktop_adults')
const paragraphQntChildPC = document.getElementById('desktop_child')
const paragraphQntAdultsMob = document.getElementById('mobile_adults')
const paragraphQntChildMob = document.getElementById('mobile_child')

cleanInputSearch.addEventListener('click', () => {
    inputTownMobile.value = ''
})

cleanInputSearchEmoji.addEventListener('click', () => {
    inputEmojiMobile.value = ''
})