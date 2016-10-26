'use strict';

export default function homeHeader() {

  function changeImage(count = 2) {
     let bg = document.querySelector(`.home_header__background:nth-child(${count})`);
     $('.home_header__background').removeClass('home_header__background--active');
     bg.classList.add('home_header__background--active');
  }

  function changeSlide(count = 0) {
      let leftAuto = count * 100;

      $('a[data-index]').removeClass('active');

      document.querySelector(`a[data-index='${count}']`).classList.add('active');
  
      document.querySelector('.home_header__contents ul').style.left = `-${leftAuto}%`;

  }

  let count = 1;

  let autoplay = setInterval(() => {
    let slides = document.querySelectorAll('.home_header__contents li');
    changeImage(count + 1);
    changeSlide(count);
      if(count == slides.length - 1) {
        count = 0;
      } else {
        count++;
      }

  }, 1000);


  $('.home_header__paginate a').on('click', function(e) {
    e.preventDefault();
    clearInterval(autoplay);
    let ind = $(this).data('index');
    changeSlide(ind); 
  });

}