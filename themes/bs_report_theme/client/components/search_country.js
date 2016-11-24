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
        current: 0,
      }
    },

    ready() {
         let data = {lang: this.reportLang};
      console.log(data);

      $.ajax({
        type: 'post',
        url: '/wp-admin/admin-ajax.php',
        data: {action: 'reports', data}
      }).done(res => this.reports = res);
      
      console.log(this.reports);

      this.items = this.reports;
      if(md.phone() == null) $('.map__search_input').focus();
      
      $('.open-select-countries').on('click', this.open);
      $('.open-search-countries').on('click', this.open);
    },

    methods: {

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