'use strict';
import changeSlide from './change_slide';

export default function homeHeader() {
  let count = 1;
  let interval = $('.home_header').data('interval') ? $('.home_header').data('interval') : 4000;
  let slide = changeSlide();

  let autoplay = setInterval(() => {
    slide.changeIndex();
    slide.changeBg();
    slide.transform();
  }, interval);

  $('.home_header__paginate a').on('click', function(e) {
    e.preventDefault();
    clearInterval(autoplay);
    let ind = $(this).data('index');
    let slide = changeSlide(ind);
    slide.changeBg();
    slide.transform();
  });

}