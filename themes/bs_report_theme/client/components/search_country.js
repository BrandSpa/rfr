'use strict';

export default function() {
  Vue.component('search-country', {
     search() {
        let reports = JSON.parse(this.posts);
        let query = this.country;
        let results = [];
        
        if (query.length > 2) {
          results = reports.filter( pst => {
            return pst.meta_country.toLowerCase().indexOf(query.toLowerCase()) != -1 
          });
        } else {
          results = [];
        }

        this.$set('items', results);

      }
  });
};