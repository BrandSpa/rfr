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

function showInfo(info, report, bg = '#fff') {
  let $el = d3.select(info);
  let {meta_country, meta_situation} = report;
  let name = meta_country.replace(/-/g, ' ');
  let src = `/wp-content/themes/bs_report_theme/public/img/icons/${meta_situation}.svg`;
  $el.style('background', bg);
  $el.select('.map__info_country').text(name);
  $el.select('.map__info_situation img').attr('src', src);

  mousePosition(null)
    .then(p => {
      info.style.opacity = 1;
      info.style.top = (p.top - 80) + 'px';
      info.style.left = (p.left - 300) + 'px';
    });
}

function setStyle(el, fill) {
  el
  .style("transition", "all 300ms ease")
  .style("fill", fill);

  el.classed("animate-path", true);
}

function setStyleOut(el, fill) {
  el
  .style("transition", "all 300ms ease")
  .style("fill", fill);
   el.classed("animate-path", false); 
}

function appendMap(mapUrl, container) {
  return new Promise(function(resolve, reject) {
    d3.xml(mapUrl).mimeType("image/svg+xml").get((error, xml) => {
      if (error) return reject(error);
      container.appendChild(xml.documentElement);
      return resolve();
    });
  }); 
}

function showMapInfo(el, report, fill) {
  let info = document.querySelector('.map__info');
  
  el.on('mousemove', evt => {
    showInfo(info, report, fill);
    setStyle(el, fill);
  });

  el.on('mouseleave', evt => {
    setStyleOut(el, fill);
    info.style.opacity = 0;
  });
}

 function SetLink(reportGuid) {
   const self = this;
   return new Promise(function(resolve, reject) {
      d3
        .select( self.parentNode )
        .append("a", () => self )
        .attr("href", reportGuid)
        .append(() => self );

    return resolve();
   });
}

const getReport = (fn) => reports => reports.filter(fn)[0];

function setReport(reports) {
  let el = d3.select(this);
  let parent = d3.select(this.parentNode);
  let countryName = el.attr("id").replace(/-/g, ' ');
  let report = getReport(report => report.meta_country == countryName)(reports);

  if(report && report.guid) {
    let fill = colors[report.meta_nature_persecution];
    el.style("fill", fill);

    SetLink
    .call(this, report.guid)
    .then(() => console.log('hi setlink'));
    showMapInfo(parent, report, fill)
  }
}

export default function () {

  Vue.component('map', {
    template: '#map-template',
    props: [
      'posts', 
      'countriesTranslation', 
      'mapUrl',
      'lang',
      'url'
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

      let map = appendMap(this.mapUrl, mapContainer);

      map.then(() => {
        let polygons = d3.select(mapContainer).selectAll("polygon");
        let paths = d3.select(mapContainer).selectAll("path");
        
        d3.select("#map-container svg").call(zoomed);

        paths.each(function() {
          let $el = d3.select(this);
          let countryName = $el.attr("id").replace(/-/g, ' ');
          let report = getReport(report => report.meta_country == countryName)(reports);
          if(report && report.meta_nature_persecution) {
             let fill = colors[report.meta_nature_persecution];
            $el.style("fill", fill);
          }
        });

        polygons.each(function() {
          let $el = d3.select(this);
          let countryName = $el.attr("id").replace(/-/g, ' ');
          let report = getReport(report => report.meta_country == countryName)(reports);
          if(report && report.meta_nature_persecution) {
             let fill = colors[report.meta_nature_persecution];
            $el.style("fill", fill);
          }
        });

        paths.on('mousemove', function(e) {
          let $el = d3.select(this);
          let countryName = $el.attr("id").replace(/-/g, ' ');
          let report = getReport(report => report.meta_country == countryName)(reports);
          if(report && report.meta_nature_persecution) {
            let fill = colors[report.meta_nature_persecution];
            $el.style("cursor", "pointer");
            $el.style("fill", fill);
            showMapInfo($el, report, fill);
          }
        });

        paths.on('click', function() {
          let $el = d3.select(this);
          let countryName = $el.attr("id").replace(/-/g, ' ');
          let report = getReport(report => report.meta_country == countryName)(reports);
          if(report && report.guid) {
            window.location = report.guid;
          }
        });

        polygons.on('click', function() {
          let $el = d3.select(this);
          let countryName = $el.attr("id").replace(/-/g, ' ');
          let report = getReport(report => report.meta_country == countryName)(reports);
          if(report && report.guid) {
            window.location = report.guid;
          }
        });

        polygons.on('mousemove', function(e) {
          let $el = d3.select(this);
          let countryName = $el.attr("id").replace(/-/g, ' ');
          let report = getReport(report => report.meta_country == countryName)(reports);
          if(report && report.meta_nature_persecution) {
            let fill = colors[report.meta_nature_persecution];
            $el.style("cursor", "pointer");
            $el.style("fill", fill);
            showMapInfo($el, report, fill);
          }
        });

        d3.select("#map-container svg").attr('height', window.innerHeight);

        d3.select('.map__controllers__more').on('click', function() {
          d3.select("#map-container svg").transition()
          .duration(750)
          .call(zoomed.transform, d3.zoomIdentity);
        });
        
      })
    },

    methods: {
      showSearch(e) {
        e.preventDefault();
        $('.map__search').addClass('map__search--show');
        $('body').addClass('model-open');
        $('.map__search_input').focus();
      },

      showSearchList(e) {
        e.preventDefault();
        $('.map__search_list').addClass('map__search_list--show');
        $('body').addClass('model-open');
      }
    }
  });

}