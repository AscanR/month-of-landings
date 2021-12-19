let submitButtonRegister = document.querySelector('.popup__button')
let regButtonHeader = document.querySelector('.header__button')
let regButtonFooter = document.querySelector('.footer__button')

function openPopup() {
    document.querySelector('.popup').style.display = 'flex'
    document.querySelector('.page').style.display = 'none'
    document.querySelector('.footer').style.display = 'none'

}
function closePopup() {
    document.querySelector('.popup').style.display = 'none'
    document.querySelector('.page').style.display = 'block'
    document.querySelector('.footer').style.display = 'flex'
}

submitButtonRegister.addEventListener('click', () => closePopup())
regButtonHeader.addEventListener('click', () => openPopup())
regButtonFooter.addEventListener('click', () => openPopup())
