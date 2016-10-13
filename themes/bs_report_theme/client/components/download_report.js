'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('form-download-report', {
    template: '#form-download-template',
    data() {
      return {
        name: '',
        email: '',
        language: '',
        country: ''
      }
    },

    ready() {
      console.log('hi form');
      console.log('mmmm');
    }
  });
}