'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('subscribe-form', {
    template: "#subscribe-form-template",
    methods: {
      onSubmit(e) {
        if(e) e.preventDefault();
        
      }
    }
  });

}