'use strict';
import Vue from 'vue';
import $ from 'jquery';

export default function() {
  Vue.component('search-list', {
    template: '#search-list-template',
    props: ['reports', 'continents', 'dir'],

    ready() {
      console.log( JSON.parse(this.continents) )
    }
    
  })

}