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

      newContinents['afrika'] = continents['Afrika'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

      newContinents['asia'] =  continents['Asia'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

      newContinents['easterEurope'] = continents['Easter Europe'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

       newContinents['latinAmerica'] = continents['Latin America'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

      newContinents['middleEast'] = continents['Middle East'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });
      
      newContinents['northAmerica'] =  continents['North America'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });
    
      newContinents['ocenia'] =  continents['Ocenia'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

      newContinents['russiaCentralAsia'] =  continents['Russia & Central Asia'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

     newContinents['westernEurope'] =  continents['Western Europe'].map(coun => {
        return reports.filter(r => r.meta_country == coun)[0];
      });

      this.continents = newContinents;
    },

    methods: {
        close(e) {
        if(e) e.preventDefault();
        $('.map__search_list').removeClass('map__search_list--show');
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

        showContinent(continent) {
          let each = fn => arr => Array.prototype.forEach.call(arr, fn);

          let all = document.querySelectorAll('ul[data-country]');

          each((el) => {
            el.style.display = 'none';
          })(all);

           document.querySelector(`ul[data-country="${continent}"]`).style.display = 'block';
        }
    }

  })

}
