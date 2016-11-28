'use strict';
import $ from 'jquery';
import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);

export default function() {
  Vue.component('search-country', {
    template: '#search-country-template',
    props: ['dir', 'reportLang'],

    data() {
      return {
        country: '',
        items: [],
        reports: [],
        countriesTrans: [],
        current: 0,
      }
    },

    ready() {
      this.getCountriesTranslations()
      .then(() => this.getReports());
     
  
      if(md.phone() == null) $('.map__search_input').focus();
      
      $('.open-select-countries').on('click', this.open);
      $('.open-search-countries').on('click', this.open);
    },

    methods: {
      getCountriesTranslations() {
        return $.ajax({
          type: 'post',
          url: '/wp-admin/admin-ajax.php',
          data: {action: 'countries_translations', data: {lang: this.lang}}
        })
        .done(res => this.$set('countriesTrans', res));
      },

      getReports() {
        let data = {lang: this.reportLang};
        $.ajax({
          type: 'post',
          url: '/wp-admin/admin-ajax.php',
          data: {action: 'reports', data}
        })
        .done(res => {
          this.$set('reports', res);
          this.$set('items', res);
        });
      },

      close(e) {
        if(e) e.preventDefault();
        $('body').removeClass('model-open');
        $('.map__search').removeClass('map__search--show');
      },

      open(e) {
        if(e) e.preventDefault();
        $('body').addClass('model-open');
        $('.map__search').addClass('map__search--show');
        $('.map__search_input').focus();
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
          let reports = this.reports;
          let query = this.country;
          let results = [];
          let key = evt.keyCode;
          let arrowKeys = [37, 38, 39, 40];
        
          if (arrowKeys.indexOf(key) == -1)  this.current = 0;
          
          if (query.length > 0) {

            results = reports.filter( pst => {
              let translation = this.countriesTrans[pst.meta_country];
              return translation.toLowerCase().indexOf(query.toLowerCase()) != -1 
            });

          } else {
            results = this.reports;
          }

          this.$set('items', results);
        }
      }
  });
};