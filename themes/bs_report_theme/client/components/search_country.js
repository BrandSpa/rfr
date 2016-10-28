'use strict';
import Vue from 'vue';

export default function() {
  Vue.component('search-country', {
    template: '#search-country-template',
    props: ['reports'],

    data() {
      return {
        country: '',
        items: [],
        current: 0,
      }
    },

    ready() {
      this.items = JSON.parse(this.reports);
    },

    methods: {
        isSelected(index) {
          return index === this.current;
        },

        enter() {
          window.location = this.items[this.current].guid;
        },

        up(e) {
          if(this.current > 0) {
            this.current--;
          }
          return false;
        },

        down(e) {
           e.preventDefault();
          if(this.current < this.items.length - 1) {
            this.current++;
          }
          return false;
        },

        search(evt) {
          let reports = JSON.parse(this.reports);
          let query = this.country;
          let results = [];
          let key = evt.keyCode;
          let arrowKeys = [37, 38, 39, 40];
          
          console.log(arrowKeys.indexOf(key) == -1);

          if (arrowKeys.indexOf(key) == -1 ) {
            console.log('enter');

            this.current = 0;

            results = reports.filter( pst => {
              return pst.meta_country.toLowerCase().indexOf(query.toLowerCase()) != -1 
            });

          } else {
            results = JSON.parse(this.reports);
          }

          this.$set('items', results);
        }
      }
  });
};