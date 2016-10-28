'use strict';
import Vue from 'vue';
import $ from 'jquery';

export default function() {
  Vue.component('search-country', {
    template: '#search-country-template',
    props: ['reports', 'dir'],

    data() {
      return {
        country: '',
        items: [],
        current: 0,
      }
    },

    ready() {
      this.items = JSON.parse(this.reports);
      $('.map__search_input').focus();
    },

    methods: {

      close(e) {
        if(e) e.preventDefault();
        $('.map__search').removeClass('map__search--show');
      },

        getIcon(name) {
         return `${this.dir}/public/img/icons/${name}.svg`
        },

        isSelected(index) {
          return index === this.current;
        },

        isDiscrimination(n) {
          return n == 'Discrimination';
        },  

        isPersecution(n) {
          return n == 'Persecution';
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
        
          if (arrowKeys.indexOf(key) == -1)  this.current = 0;
          
          if (query.length > 0) {

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