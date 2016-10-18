'use strict';
import Vue from 'vue';
import $ from 'jquery';

export default function() {
  Vue.component('countryselect', {
    template: '#country-select-template',
    props: ['countries'],

    data() {
      return {
        current: 0
      }
    },

    ready()  {
      $(document).on('keyup', function(e) {
        if(e.keyCode === 27 && $('.select_country').hasClass('select_country-show')) {
          $('.select_country').removeClass('select_country-show');
        }
      });

      $('.open-select-countries').on('click', function(e) {
        e.preventDefault();
        $('.select_country').addClass('select_country-show');
      });

      $('.select_country__close').on('click', function(e) {
        e.preventDefault();
        $('.select_country').removeClass('select_country-show');
      });
    },

    methods: {
      up() {
        console.log('up');
      },

      down() {
        console.log('down');
      },

      enter() {

      }
    }
  });
}
