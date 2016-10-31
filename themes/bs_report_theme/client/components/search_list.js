'use strict';
import Vue from 'vue';
import $ from 'jquery';

export default function() {
  Vue.component('search-list', {
    template: '#search-list-template',
    props: ['reports', 'continents', 'dir'],

    ready() {
      var reports = JSON.parse(this.reports);
      var continents = JSON.parse(this.continents);
      continents['Afrika'].map(coun => console.log(coun));
    }

  })

}