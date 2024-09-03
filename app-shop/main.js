import './style.css'
import "toastify-js/src/toastify.css"
// core version + navigation, pagination modules:
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const startBtn = document.getElementById("started-btn")
  startBtn.addEventListener("click", () => {
    window.location.href = "/singup"
  })

  const btnStep1 = document.getElementById("btn-step1")
  btnStep1.addEventListener("click" , () => {
    window.location.href = "#step2"
  })

  const btnStep2 = document.getElementById("btn-step2")
  btnStep2.addEventListener("click" , () => {
    window.location.href = "#step3"
  })