'use strict';
import changeSlide from './change_slide';

export default function homeHeader() {
  let count = 1;
  let $homeHeader = $('.home_header');
  let interval = $homeHeader.data('interval') ? $('.home_header').data('interval') : 4000;
  let startAutoplay = $homeHeader.data('autoplay') ? true : false;
  let slide = changeSlide();

  if(startAutoplay) {
    
    let autoplay = setInterval(() => {
      slide.changeIndex();
      slide.changeBg();
      slide.transform();
    }, interval);
    
  }

  $('.home_header__paginate a').on('click', function(e) {
    e.preventDefault();
    clearInterval(autoplay);
    let ind = $(this).data('index');
    let slide = changeSlide(ind);
    slide.changeBg();
    slide.transform();
  });

}