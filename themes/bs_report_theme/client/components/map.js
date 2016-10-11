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
      console.log(this.mapURL);
      Snap.load(this.mapURL, function (f) {
          // Note that we traversre and change attr before SVG
          // is even added to the page
          f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
          var g = f.select("g");
          s.append(g);
          // Making croc draggable. Go ahead drag it around!
          g.drag();
          // Obviously drag could take event handlers too
          // That’s better! selectAll for the rescue.
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
