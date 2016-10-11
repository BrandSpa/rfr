'use strict';
import Vue from 'vue';
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

function appendMap(mapUrl) {
  d3.xml(mapUrl).mimeType("image/svg+xml").get((error, xml) => {
    if (error) throw error;
    mapContainer.appendChild(xml.documentElement);
  });
}

export default function () {

  Vue.component('map', {
    template: '#map-template',
    props: ['posts', 'items', 'countriesTranslation', 'mapUrl'],
    data() {
      return {

      }
    },

    ready() {
      let info = document.querySelector('.map__info');
      let mapContainer = document.querySelector('#map-container');
      let reports = JSON.parse(instance.posts);
      let polygons = d3.select(mapContainer).selectAll("polygon");
      console.log(polygons);
      appendMap(this.mapUrl);
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