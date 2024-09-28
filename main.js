'use strict'

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const burgerOverlay = document.getElementById('burgerMenu')
const burgerOpen = document.querySelector('.header__burger-menu')
const burgerClose = document.querySelector('.mobile-overlay__button')

burgerOpen.addEventListener('click', () => {
   burgerOverlay.showModal()
})
burgerClose.addEventListener('click', () => {
   burgerOverlay.close()
})

const formFeedback = document.forms.feedback
const buttonForm = document.querySelector('.feedback__form-button')

buttonForm.addEventListener('click', (e) => {
   e.preventDefault()

   const infoUser = {
      'email': formFeedback.elements.email.value,
      'password': formFeedback.elements.password.value,
      'agree': formFeedback.elements.checkbox.checked
   }

   let errorForm = null;

   if (infoUser.email.length < 2) {
      alert('имя должно состоять минимум из 2 символов')
      errorForm = true
   } 

   if (infoUser.password.length < 8) {
      alert('пароль должен состоять минимум из 8 символов')
      errorForm = true
   }

   if (infoUser.agree === false) {
      alert('ваше согласие обязательно')
      errorForm = true
   } 

   if (!errorForm) {
      alert('успешно')
      console.log(infoUser)
   }
})

const swiper = new Swiper('.invitation__slider', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

   loop: true,
   speed: 1500,
   touchRatio: 0,

   autoplay: {
      delay: 4000,
   }
 });