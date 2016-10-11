'use strict';
import mousePosition from '../lib/get_mouse_position';

import Snap from 'snapsvg';

export default function() {

  Vue.component('map', {
    template: '#map-template',
    props: ['posts', 'items', 'countriesTranslation', 'mapUrl'],
    data: {
      country: ''
    },

    ready() {
      let info = document.querySelector('.map__info');
      var instance = this;
      let reports = JSON.parse( instance.posts );
      var s = Snap("#svg");

      Snap.load(this.mapUrl, function (f) {
        f.selectAll("polygon").mousemove((e) => {
          console.log(e);
        });
        f.selectAll("path").attr({fill: "#7A1120"});
        var g = f.select("g");
        s.append(g);
      });
    },

    methods: {
      search() {

        if(this.country.length > 2) {
          this.items = this.posts.filter(
            pst => pst.meta_country.toLowerCase().indexOf(this.country.toLowerCase()) != -1
          );
        } else {
          this.items = [];
        }

      }
    }
  });

}
