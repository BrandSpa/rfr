'use strict';
import mousePosition from '../lib/get_mouse_position';

import * as d3 from 'd3';

function showInfo(info, el) {

  mousePosition(null)
    .then(p => {
      info.style.opacity = 1;
      info.style.top = (p.top - 60) + 'px';
      info.style.left = (p.left - 300) + 'px';
    });
}

export default function () {

  Vue.component('map', {
    template: '#map-template',
    props: ['posts', 'items', 'countriesTranslation', 'mapUrl'],
    data: {
      country: ''
    },

    ready() {
      let info = document.querySelector('.map__info');
      var instance = this;
      let reports = JSON.parse(instance.posts);

      d3.xml(this.mapUrl).mimeType("image/svg+xml").get(function(error, xml) {
        if (error) throw error;
        document.querySelector('#map').appendChild(xml.documentElement);
      });
    },

    methods: {
      search() {

        if (this.country.length > 2) {
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