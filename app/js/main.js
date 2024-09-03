
const btn = document.querySelector('.header__mobile');
const MobileBtn = document.querySelector('.menu__list');

btn.addEventListener('click', ()=> {
    MobileBtn.classList.toggle('menu--open')
});



function CheckPass() {
    const password = document.querySelector('.password__input').value;
    let massage  = document.querySelector('.password__input-massage');
    if (password.length < 8 || password.toLowerCase() == password ){
        massage.innerHTML = "The password must contain at least eight characters and at least one capital letter ";
    } else{
        massage.innerHTML = ''; 
    }
}
  
