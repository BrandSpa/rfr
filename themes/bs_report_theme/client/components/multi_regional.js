'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('multi-regional-langs', {
    template: "#mr-lang-template",
    data() {
      return {
        langs: 1
      }
    },
    ready() {
      console.log(this.langs);
    }
  });
}
