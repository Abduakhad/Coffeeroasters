var elHiddenHeader = document.querySelector('.hidden-header'),
    elMenuBtn = document.querySelector('.site-header__wrapper-btn'),
    elIcon = document.querySelector('.site-header__wrapper-icon')


var ShowMenu = false;

elMenuBtn.addEventListener('click', () => {
    elHiddenHeader.classList.toggle('show-header')

    if(!ShowMenu) {
        elIcon.src = '../assets/icons/menu-close.svg';
        ShowMenu = true
    }else{
        elIcon.src = '../assets/icons/menu-open.svg';
        ShowMenu = false
    }
})

