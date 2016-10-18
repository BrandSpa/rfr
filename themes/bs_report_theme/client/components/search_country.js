'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('search-country', {
    template: '#search-country-template',
    data() {
      return {
        country: '',
        items: [],
        current: 0
      }
    },

      methods: {
        isSelected(index) {
          return index === this.current;
        },

        up() {

          if(this.current > 0) {
            this.current--;
          }
          
        },

        down() {
          console.log(this.items[this.current].meta_country);

          if(this.current < this.items.length - 1) {
            this.current++;
          }
        },

        search(evt) {
          let reports = JSON.parse(this.$parent.posts);
          let query = this.country;
          let results = [];
          let key = evt.keyCode;

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