'use strict';
import Vue from 'vue';
import * as d3 from 'd3';
import mousePosition from '../lib/get_mouse_position';

function showInfo(info, txt) {
  d3.select(info).select('.map__info_country').text(txt);

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

      let dragged = function(d, i) {
          let g = document.querySelector('#map-container svg g');
          let w = g.getBBox().width / 2;
          let h = g.getBBox().height / 2;
          let x = d3.event.x  - w;
          let y = d3.event.y - h;

            d3.select(this).select('g').attr("transform", function(d){
              return "translate(" + [ x, y ] + ")"
            })
        };

       var drag = d3.drag();
      
      appendMap(this.mapUrl, mapContainer, () => {
        let polygons = d3.select(mapContainer).selectAll("polygon");

        d3.select("#map-container svg").call(drag);
        d3.select("#map-container svg").on("drag", dragged);
        d3.select("#map-container svg g").attr('style', 'transition: all 300ms ease');

        let paths = d3.select(mapContainer).selectAll("path");

        polygons.each(function(pol) {
          let el = d3.select(this);
          let countryName = el.attr("id").replace('-', ' ');
          let report = reports.filter(rep => rep.meta_country == countryName);

          if(report[0] && report[0].guid) {
            d3.select( this.parentNode ).append("a",() => this )
          .attr("href", report[0].guid)
          .append(() => this );
          }
          
          el.on('mousemove', evt => {
             let countryInfo = report[0] ? report[0].post_title : countryName;
            showInfo(info, countryInfo);
            setStyle(el);
          });

          el.on('mouseleave', evt => {
            setStyleOut(el);
            info.style.opacity = 0;
          });
        });

        paths.each(function(pol) {
          let el = d3.select(this);
          let countryName = el.attr("id").replace('-', ' ');
          let report = reports.filter(rep => rep.meta_country == countryName);
          
          if(report[0] && report[0].guid) {
            d3.select( this.parentNode ).append("a",() => this )
          .attr("href", report[0].guid)
          .append(() => this );
          }
          
          el.on('mousemove', evt => {
            let countryInfo = report[0] ? report[0].post_title : countryName;
            showInfo(info, countryInfo);
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