const humburger = document.querySelector('.hamburger-perent');
humburger.addEventListener('click', () => {
    humburger.classList.toggle('open')
});
const hideMenu = document.querySelector('.hide-menu');
const menu = document.querySelector('.menu')
const bodyCheck = document.querySelector('.menu-body');
const showMenu = document.querySelector('.menu-show')

function addMenu(){
    hideMenu.classList.toggle('active');
    menu.classList.toggle('blur-menu');
    hideMenu.classList.toggle('blur-menu');
    bodyCheck.classList.toggle('body-bg');
    
if(hideMenu.classList.contains('active') === true){
    showMenu.style.border='none'
}
else{
    showMenu.style.borderBottom = '1px solid'
}
}
const uzL =document.querySelector("#uz")
const ruL = document.querySelector("#ru")
function uz(){
    uzL.classList.add('on-lng')
    ruL.classList.remove('on-lng')
}
function ru(){
    uzL.classList.remove('on-lng')
    ruL.classList.add('on-lng')
}