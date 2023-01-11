let btn = document.querySelector('.header__burger');
let nav = document.querySelector('.header__navigation');
btn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});