function createNavItem() {
    let li = document.createElement('li');
    li.insertAdjacentHTML('afterbegin', `<div class="arrow_contain"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33334 15L12.161 10.8838C12.613 10.3977 12.613 9.60227 12.161 9.11616L8.33334 5" stroke="#AEAEB5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span></span>`)
    li.className = "blog_nav__item"
    return li;
}
