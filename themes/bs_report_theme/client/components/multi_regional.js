'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('multi-regional', {
    template: '#mr-lang-template',
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
