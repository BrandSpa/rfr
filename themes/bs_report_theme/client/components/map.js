'use strict';
import Vue from 'vue';
import * as d3 from 'd3';
import mousePosition from '../lib/get_mouse_position';
import $ from 'jquery';
import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);

const colors = {
  'Persecution': '#FC3938',
  'Discrimination': '#FFC849',
  'Stable': '#E4E7EA',
};

function showInfo(info, report, bg = '#fff', name) {
  let {meta_country, meta_situation} = report;
  let $el = d3.select(info);
  name = name ? name : meta_country.replace(/-/g, ' ');
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

function showMapInfo(el, report, fill, name) {
  let info = document.querySelector('.map__info');
  
  el.on('mousemove', evt => {
    showInfo(info, report, fill, name);
    setStyle(el, fill);
  });

  el.on('mouseleave', evt => {
    setStyleOut(el, fill);
    info.style.opacity = 0;
  });
}

const getReport = (fn) => reports => reports.filter(fn)[0];

export default function () {

  Vue.component('map', {
    template: '#map-template',
    props: [
      'posts', 
      'countriesTranslation', 
      'mapUrl',
      'lang',
      'url',
      'langTrans'
    ],

    ready() {
      let mapContainer = document.querySelector('#map-container');
      let reports = JSON.parse(this.posts);
      let lang = this.lang;
      let countriesTrans = JSON.stringify(this.countriesTranslation);
      countriesTrans = JSON.parse(countriesTrans);
      countriesTrans = JSON.parse(countriesTrans);

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
            let name = countriesTrans[countryName];
            console.log('name', name);
            showMapInfo($el, report, fill, name);
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
            let name = countriesTrans[countryName];
            console.log('name', name);
            showMapInfo($el, report, fill, name);
          }
        });
        
        let windowH;
        //set map height
        if(md.phone() == null) {
          windowH = window.innerHeight;
        } else {
          windowH = window.innerHeight / 2;
        }

        d3.select("#map-container svg").attr('height', windowH);
        
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