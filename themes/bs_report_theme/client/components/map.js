'use strict';
import Vue from 'vue';
import * as d3 from 'd3';
import mousePosition from '../lib/get_mouse_position';

function showInfo(info) {
  mousePosition(null)
    .then(p => {
      info.style.opacity = 1;
      info.style.top = (p.top - 120) + 'px';
      info.style.left = (p.left - 300) + 'px';
    });
}

function setStyle(el) {
  el
  .style("transition", "all 300ms ease")
  .style("fill", "#536D7F");

  el.classed("animate-path", true);
}

function setStyleOut(el) {
  el
  .style("transition", "all 300ms ease")
  .style("fill", "#FFF");
   el.classed("animate-path", false); 
}

function appendMap(mapUrl,container, cb) {
  d3.xml(mapUrl).mimeType("image/svg+xml").get((error, xml) => {
    if (error) throw error;
    container.appendChild(xml.documentElement);
    if(typeof cb == 'function') cb();
  });
}

export default function () {

  Vue.component('map', {
    template: '#map-template',
    props: [
      'posts', 
      'countriesTranslation', 
      'mapUrl',
      'lang'
    ],

    data() {
      return {

      }
    },
 
    ready() {
      let info = document.querySelector('.map__info');
      let mapContainer = document.querySelector('#map-container');
      let reports = JSON.parse(this.posts);
      let lang = this.lang;
      
      appendMap(this.mapUrl, mapContainer, () => {
        let polygons = d3.select(mapContainer).selectAll("polygon");

        let paths = d3.select(mapContainer).selectAll("path");

        polygons.each(function(pol) {
          let el = d3.select(this);
          console.log(el.attr("id"));

          d3.select( this.parentNode ).append("a",() => this )
          .attr("href", `/${lang}/report/${el.attr("id")}`)
          .append(() => this );

          el.on('mousemove', evt => {
            showInfo(info);
            setStyle(el);
          });

          el.on('mouseleave', evt => {
            setStyleOut(el);
            info.style.opacity = 0;
          });
        });

        paths.each(function(pol) {
          let el = d3.select(this);
          el.on('mousemove', evt => {
            showInfo(info);
            setStyle(el);
          });

           el.on('mouseleave', evt => {
             setStyleOut(el);
            info.style.opacity = 0;
          });
        });
        
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