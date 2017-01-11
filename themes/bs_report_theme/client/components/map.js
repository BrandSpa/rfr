'use strict';
import * as d3 from 'd3';
import $ from 'jquery';
import Promise from 'promise';
import MobileDetect from 'mobile-detect';
import mousePosition from '../lib/get_mouse_position';
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
      'countriesTranslation', 
      'mapUrl',
      'lang',
      'url',
      'langTrans',
      'reportLang'
    ],
    
    data() {
      return {
        posts: []
      }
    },

    ready() {
      
      let data = {lang: this.reportLang};
      let reports = [];

       $.ajax({
        type: 'post',
        url: '/wp-admin/admin-ajax.php',
        data: {action: 'reports', data}
      }).done(res => {
          this.$set('posts', res);
          this.setMap(res);
      });

    },

    methods: {
      setMap(reports) {
      let mapContainer = document.querySelector('#map-container');
      let lang = this.lang;
      let countriesTrans = JSON.stringify(this.countriesTranslation);
      countriesTrans = JSON.parse(countriesTrans);
      countriesTrans = JSON.parse(countriesTrans);


      // let zoomed = d3.zoom()
      // .scaleExtent([1, 5])
      // .filter(function() {
      //   return d3.event.type !== 'wheel';
      // })
      // .on('zoom', function() {

      //   let transform = d3.event.transform;

      //   d3.select('.map__controllers').classed('map__controllers--show', true);
      //   d3.select(this).select('g').attr("transform", "translate(" + [transform.x, transform.y] + ") scale("+ transform.k +") ");
      // });

      let map = appendMap(this.mapUrl, mapContainer);

      map.then(() => {
        let polygons = d3.select(mapContainer).selectAll("polygon");
        let paths = d3.select(mapContainer).selectAll("path");
        
        // d3.select("#map-container svg").call(zoomed);

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
        
        //default transform params
        let transformX = 0;
        let transformY = 0;
        let transformScale = 1;

        d3.select('.zoom_reset').on('click', function() {
          d3.select("#map-container svg")
          .transition()
          .duration(750)
          .call(zoomed.transform, d3.zoomIdentity);
        });

        d3.select('.zoom_more').on('click', function() {
          let mapSVG = d3.select("#map-container svg g");
          transformScale = transformScale + 1;
          let box = d3.select("#map-container svg g").node().getBBox();
          let transform = mapSVG.attr("transform") ? mapSVG.attr("transform").replace(/scale\((.*?)\)/g, `scale(${transformScale})`) : `translate(0,0) scale(${transformScale})`;
          mapSVG.attr("transform", transform);
        });

        d3.select('.zoom_less').on('click', function() {
          let mapSVG = d3.select("#map-container svg g");
          transformScale = transformScale > 1 ? transformScale - 1 : 1;
          let box = d3.select("#map-container svg g").node().getBBox();
          let transform = mapSVG.attr("transform") ? mapSVG.attr("transform").replace(/scale\((.*?)\)/g, `scale(${transformScale})`) : `translate(0,0) scale(${transformScale})`;
          mapSVG.attr("transform", transform);
        });

        d3.select("#map-container svg").on("mousedown", function() {           
          let startX = d3.event.pageX - $('#map-container svg ').offset().left;
          let startY = d3.event.pageY - $('#map-container svg').offset().top;

          d3.event.preventDefault();
          
          d3.select(this)
          .on("mousemove", (e) => {
            console.log('transform', , transformY, transform ); 
            let w = box.width / 2;
            transformX = (d3.event.pageX - $('#map-container svg').offset().left) - transformX;
            transformY = (d3.event.pageY - $('#map-container svg').offset().top) - transformY;
             d3.select(this).select('g').attr("transform", `translate(${transformX},${transformY}) scale(${transformScale})`);
          })

          d3.select(window).on('mouseup', () => d3.select(this).on("mousemove", null));
        });

        })
      },

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