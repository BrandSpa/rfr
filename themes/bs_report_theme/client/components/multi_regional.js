'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('multiregional', {
    template: '#multiregional-template',
    data() {
      return {
        country: '',
        items: [],
        current: 0
      }
    },

    ready() {
    }
  });
}
