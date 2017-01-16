'use strict';

export default function changeSlide(count = 0) {
      let counter = count;
      let slides = document.querySelectorAll('.home_header__contents li');

      function changeIndex() {
        if(counter == slides.length - 1) {
            counter = 0;
        } else {
          counter++;
        }
      }

       function changeBg() {
        let bg = document.querySelector(`.home_header__background:nth-child(${counter + 1})`);
        if(bg) {
          $('.home_header__background').removeClass('home_header__background--active');
          bg.classList.add('home_header__background--active');
       };
        
      }
      
      function transform() {
        let leftAuto = counter * 100;

        $('a[data-index]').removeClass('active');
        document.querySelector(`a[data-index='${counter}']`).classList.add('active');
        document.querySelector('.home_header__contents ul').style.left = `-${leftAuto}%`;
      }

      return {
        transform,
        changeIndex,
        changeBg
      }

  }