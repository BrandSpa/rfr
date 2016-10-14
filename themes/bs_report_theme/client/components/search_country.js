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
          let $listItems = $('.map__search_results li');

          if(key == 40) {
            $current = $listItems.eq(0);
            $current.css({'background': '#333'});
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