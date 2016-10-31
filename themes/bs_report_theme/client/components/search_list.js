'use strict';
import Vue from 'vue';
import $ from 'jquery';

export default function() {
  Vue.component('search-list', {
    template: '#search-list-template',
    props: ['reports', 'continents', 'dir'],
    data() {
      return {
        continents: []
      }
    },

    ready() {
      let reports = JSON.parse(this.reports);
      let continents = JSON.parse(this.continents);
      let newContinents = {};

      newContinents['Afrika'] = continents['Afrika'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

      newContinents['Latin America'] = continents['LATIN AMERICA'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

      console.log(newContinents);
    }

  })

}
