'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('search-country', {
    template: '#search-country-template',
    data() {
      return {
        country: '',
        items: []
      }
    },
      methods: {
        search(evt) {
          let reports = JSON.parse(this.$parent.posts);
          let query = this.country;
          let results = [];
          let key = evt.keyCode;
          let $current;

          if(key == 40) {
            $current = $('.map__search_results li').eq(0);
            console.log('down', $current);
            $current.addClass('selected');
          }
          
          if (query.length > 2) {
            results = reports.filter( pst => {
              return pst.meta_country.toLowerCase().indexOf(query.toLowerCase()) != -1 
            });
          } else {
            results = [];
          }

          this.$set('items', results);

        }
      }
  });
};