'use strict';
import Vue from 'vue';
import * as d3 from 'd3';
import mousePosition from '../lib/get_mouse_position';
import $ from 'jquery';

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

      let zoomed = d3.zoom()
      .scaleExtent([1, 1])
      .on('zoom', function() {
        let transform = d3.event.transform;
        console.log(d3.event);
        d3.select(this).select('g').attr("transform", "translate(" + [transform.x, transform.y] + ")");
      });


      d3.select('.map__controllers__more').on('click', function() {
        let trans = d3.select("#map-container svg g").attr('transform');
        console.log(trans);
      }); 

      appendMap(this.mapUrl, mapContainer, () => {
        let polygons = d3.select(mapContainer).selectAll("polygon");

        d3.select("#map-container svg").call(zoomed);

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
    }
  });

}