let headerMenuBtn = document.querySelector('.header__menu')
let headerMenuList = document.querySelector('.header__menu-phone')

function menuBtnClicked() {
    headerMenuBtn.classList.toggle('active')
    headerMenuList.classList.toggle('active')
}
window.addEventListener('resize',(e) => {
    headerMenuBtn.classList.remove('active')
    headerMenuList.classList.remove('active')  
})