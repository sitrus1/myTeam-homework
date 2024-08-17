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

// 

let dirctionsPlusInfo1 = document.querySelector('.direction__plus1')
let dirctionsPlusInfo2 = document.querySelector('.direction__plus2')
let dirctionsPlusInfo3 = document.querySelector('.direction__plus3')
let dirctionsPlusInfo4 = document.querySelector('.direction__plus4')
let dirctionsPlusInfo5 = document.querySelector('.direction__plus5')
let dirctionsPlusInfo6 = document.querySelector('.direction__plus6')

let userPic1 = document.querySelector('.direction__user-pic1')
let userPic2 = document.querySelector('.direction__user-pic2')
let userPic3 = document.querySelector('.direction__user-pic3')
let userPic4 = document.querySelector('.direction__user-pic4')
let userPic5 = document.querySelector('.direction__user-pic5')
let userPic6 = document.querySelector('.direction__user-pic6')

let directionJob1 = document.querySelector('.direction__job1')
let directionJob2 = document.querySelector('.direction__job2')
let directionJob3 = document.querySelector('.direction__job3')
let directionJob4 = document.querySelector('.direction__job4')
let directionJob5 = document.querySelector('.direction__job5')
let directionJob6 = document.querySelector('.direction__job6')

let directionName1 = document.querySelector('.direction__name1')
let directionName2 = document.querySelector('.direction__name2')
let directionName3 = document.querySelector('.direction__name3')
let directionName4 = document.querySelector('.direction__name4')
let directionName5 = document.querySelector('.direction__name5')
let directionName6 = document.querySelector('.direction__name6')

dirctionsPlusInfo1.addEventListener("click", () => {
    userPic1.classList.toggle('to-top')
    directionName1.classList.toggle('translate')
    directionJob1.classList.toggle('translate')
    directionJob1.classList.toggle('content')
    dirctionsPlusInfo1.classList.toggle('active')
})
dirctionsPlusInfo2.addEventListener("click", () => {
    userPic2.classList.toggle('to-top')
    directionName2.classList.toggle('translate')
    directionJob2.classList.toggle('translate')
    directionJob2.classList.toggle('content')
    dirctionsPlusInfo2.classList.toggle('active')
})
dirctionsPlusInfo3.addEventListener("click", () => {
    userPic3.classList.toggle('to-top')
    directionName3.classList.toggle('translate')
    directionJob3.classList.toggle('translate')
    directionJob3.classList.toggle('content')
    dirctionsPlusInfo3.classList.toggle('active')
})
dirctionsPlusInfo4.addEventListener("click", () => {
    userPic4.classList.toggle('to-top')
    directionName4.classList.toggle('translate')
    directionJob4.classList.toggle('translate')
    directionJob4.classList.toggle('content')
    dirctionsPlusInfo4.classList.toggle('active')
})
dirctionsPlusInfo5.addEventListener("click", () => {
    userPic5.classList.toggle('to-top')
    directionName5.classList.toggle('translate')
    directionJob5.classList.toggle('translate')
    directionJob5.classList.toggle('content')
    dirctionsPlusInfo5.classList.toggle('active')
})
dirctionsPlusInfo6.addEventListener("click", () => {
    userPic6.classList.toggle('to-top')
    directionName6.classList.toggle('translate')
    directionJob6.classList.toggle('translate')
    directionJob6.classList.toggle('content')
    dirctionsPlusInfo6.classList.toggle('active')
})