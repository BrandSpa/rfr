'use strict';
import $ from 'jquery';

export default function() {
  Vue.component('search-list', {
    template: '#search-list-template',
    props: ['continents', 'dir', 'lang'],
    data() {
      return {
        reports: [],
        countriesTrans: []
      }
    },

    ready() {
      getCountriesTranslations()
      .then(() => getReports());
    },

    methods: {
      getCountriesTranslations() {
        return $.ajax({
          type: 'post',
          url: '/wp-admin/admin-ajax.php',
          data: {action: 'countries_translations', data: {lang: this.lang}}
        }).done(res => this.$set('countriesTrans', res));

      },
      
      getReports() {
        $.ajax({
          type: 'post',
          url: '/wp-admin/admin-ajax.php',
          data: {action: 'reports', data: {lang: this.lang}}
        })
        .done(res => {
          this.$set('reports', res);
          this.setReports();
        });
      },

      setReports() {
        let reports = this.reports;
        let continents = JSON.parse(this.continents);
        let newContinents = {};
        
        let filterByCountry = country => {
          if(reports.filter(r => r.meta_country == country)[0]) {
            return reports.filter(r => r.meta_country == country)[0];
          } else {
            return '';
          }
        };

        let cleanEmpty = report => typeof report == 'object';

        let continentsList = {
          'afrika': 'Afrika',
          'asia': 'Asia',
          'easterEurope': 'Easter Europe',
          'latinAmerica': 'Latin America',
          'middleEast': 'Middle East',
          'northAmerica': 'North America',
          'ocenia': 'Ocenia',
          'russiaCentralAsia': 'Russia & Central Asia',
          'westernEurope': 'Western Europe'
        };

        Object.keys(continentsList).forEach(continentKey => {
          newContinents[continentKey] = continents[continentsList[continentKey]]
          .map(filterByCountry)
          .filter(cleanEmpty);
        });

        this.continents = newContinents;
      },

      close(e) {
        if(e) e.preventDefault();
        $('body').removeClass('model-open');
        $('.map__search_list').removeClass('map__search_list--show');
      },

        getIcon(name) {
         return `${this.dir}/public/img/icons/${name}.svg`
        },

        isSelected(index) {
          return index === this.current;
        },

        isDiscrimination(n) {
          if(n) {
            return n == 'Discrimination';
          }
          
        },  

        isPersecution(n) {
          if(n) {
            return n == 'Persecution';
          }
        },

        showContinent(continent) {
          let each = fn => arr => Array.prototype.forEach.call(arr, fn);
          let parent = this.$el;
          let $all = parent.querySelectorAll('ul[data-country]');
          let $ul = parent.querySelector(`ul[data-country="${continent}"]`);
          let display = $ul.style.display == 'block' ? 'none' : 'block';
          each(($el) => { $el.style.display = 'none'; })($all);
           $ul.style.display = display;
        }
    }

  })

}
