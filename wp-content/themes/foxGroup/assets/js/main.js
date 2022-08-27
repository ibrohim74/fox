const humburger = document.querySelector('.hamburger-perent');
humburger.addEventListener('click', () => {
    humburger.classList.toggle('open')
});
const hideMenu = document.querySelector('.hide-menu');
const menu = document.querySelector('.menu')
const bodyCheck = document.querySelector('.menu-body');
function addMenu(){
    hideMenu.classList.toggle('active');
    menu.classList.toggle('blur-menu');
    hideMenu.classList.toggle('blur-menu')
    bodyCheck.classList.toggle('body-bg')
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
const navbar = document.querySelector('.menu');
window.onscroll = () => {
    const sliderHeight = document.querySelector('.main-slider').offsetHeight;
    if (window.scrollY >= sliderHeight) {
        navbar.classList.add('menu-glass');
        console.log(sliderHeight)

    } else {
        navbar.classList.remove('menu-glass');
    }
    
    const allSections = document.querySelector('.all-sections').offsetHeight;
    if(window.scrollY >= allSections){
        navbar.classList.add('none')
    }
    else{
        navbar.classList.remove('none')
    }
};

