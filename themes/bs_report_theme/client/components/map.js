'use strict';
import Vue from 'vue';
import * as d3 from 'd3';
import mousePosition from '../lib/get_mouse_position';
import $ from 'jquery';

const colors = {
  'Persecution': '#FC3938',
  'Discrimination': '#FFC849',
  'Stable': '#E4E7EA',
};

function showInfo(info, txt) {
  d3.select(info).select('.map__info_country').text(txt.replace(/-/g, ' '));

  mousePosition(null)
    .then(p => {
      info.style.opacity = 1;
      info.style.top = (p.top - 80) + 'px';
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

function showMapInfo(el, report) {
  let info = document.querySelector('.map__info');
  
  el.on('mousemove', evt => {
    let countryInfo = report.meta_country;
    showInfo(info, countryInfo);
    setStyle(el);
  });

  el.on('mouseleave', evt => {
    setStyleOut(el);
    info.style.opacity = 0;
  });
}

 function SetLink(reportGuid) {
  d3
    .select( this.parentNode )
    .append("a", () => this )
    .attr("href", reportGuid)
    .append(() => this );
}


const getReport = (fn) => reports => reports.filter(fn)[0];

function setReport(reports) {
  let el = d3.select(this);
  let countryName = el.attr("id").replace('-', ' ');
  let report = getReport(report => report.meta_country == countryName)(reports);

  if(report && report.guid) {
    console.log(colors[report.meta_nature_persecution]);
    el.attr('fill', colors[report.meta_nature_persecution]); 
    SetLink.call(this, report.guid);
    showMapInfo(el, report)
  }
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

    ready() {
      let mapContainer = document.querySelector('#map-container');
      let reports = JSON.parse(this.posts);
      let lang = this.lang;

      let zoomed = d3.zoom()
      .scaleExtent([1, 5])
      .filter(function() {
        return d3.event.type !== 'wheel';
      })
      .on('zoom', function() {

        let transform = d3.event.transform;

        d3.select('.map__controllers').classed('map__controllers--show', true);
        d3.select(this).select('g').attr("transform", "translate(" + [transform.x, transform.y] + ") scale("+ transform.k +") ");
      });

      appendMap(this.mapUrl, mapContainer, () => {
        let polygons = d3.select(mapContainer).selectAll("polygon");
        let paths = d3.select(mapContainer).selectAll("path");
        
        d3.select("#map-container svg").call(zoomed);

        polygons.each(function() {
          setReport.call(this, reports);
        });

        paths.each(function() {
          setReport.call(this, reports);
        });

        d3.select("#map-container svg").attr('height', 'auto');

        d3.select('.map__controllers__more').on('click', function() {
          d3.select("#map-container svg").transition()
          .duration(750)
          .call(zoomed.transform, d3.zoomIdentity);
        });
        
      });
    }
  });

}