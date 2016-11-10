'use strict';
import $ from 'jquery';

export default function nav() {
  let nav = $('.nav');
  let bod = $('body');
  let open = true; 
  let style = {'left': '0', 'z-index': '0'};

  document.getElementById('open-nav').addEventListener('click', openNav);

  function openNav(evt) {
    evt.preventDefault();
    let $nav = $(this);

    if(!open) {
      $nav.removeClass('active');
      style = {...style, 'left': '-80%', 'z-index': '0'};
    } else {
      $nav.addClass('active');
      style = {...style, 'left': '0', 'z-index': '10010'};
    }

    nav.css(style);

    open = !open;
  }

  $('.nav .menu-item-has-children > a').on('click', openSubMenu);

  function openSubMenu(e) {
    e.preventDefault();
    $(this).parent().find('.sub-menu').addClass('sub-menu--open');
  }


}