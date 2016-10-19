'use strict';
import Vue from 'vue';
import jQuery from 'jquery';

export default function() {
  Vue.component('modal-lang', {
    template: '#modal-lang-template',
    props: ['info', 'polylang'],
    ready() {
       jQuery(document).on('keyup', function(e) {
        if(e.keyCode === 27) {
          jQuery('.bs-modal__overlay').removeClass('bs-modal__overlay-open');
          jQuery('.bs-modal__overlay').addClass('bs-modal__overlay-close');
          jQuery('.bs-modal').removeClass('bs-modal-open');
          jQuery('.bs-modal').addClass('bs-modal-close');
        }
      });

      jQuery('.show-modal').on('click', function(e) {
        if(e) e.preventDefault();
        jQuery('.bs-modal__overlay').removeClass('bs-modal__overlay-close');
        jQuery('.bs-modal__overlay').addClass('bs-modal__overlay-open');
        jQuery('.bs-modal').removeClass('bs-modal-close');
        jQuery('.bs-modal').addClass('bs-modal-open');
      });

      jQuery('.bs-modal__close').on('click', function(e) {
        console.log(e);
        if(e) e.preventDefault();
        jQuery('.bs-modal__overlay').removeClass('bs-modal__overlay-open');
        jQuery('.bs-modal__overlay').addClass('bs-modal__overlay-close');
        jQuery('.bs-modal').removeClass('bs-modal-open');
        jQuery('.bs-modal').addClass('bs-modal-close');
      });

      console.log(JSON.parse(this.polylang));
    }
  });
}
