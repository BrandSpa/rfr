'use strict';
import $ from 'jquery';

export default function nav() {
   var nav = $('.nav');
  var bod = $('body');
  var open = true;
  var navLeft = '0'; 
  var bodyMarginLeft = '200px'; 

  document.getElementById('open-nav').addEventListener('click', openNav);

  function openNav(evt) {
    evt.preventDefault();
    var $nav = $(this);

    if(!open) {
      $nav.removeClass('active');
      navLeft = '-200px';
      zIndex = '0';
    } else {
      $nav.addClass('active');
       navLeft = '0'; 
       zIndex = '1001';
    }

    nav.css({'left': navLeft, 'z-index': zIndex});

    open = !open;
  }
}