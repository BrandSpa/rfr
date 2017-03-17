'use strict';
import 'babel-polyfill';
import $ from 'jquery';
import nav from './lib/nav';
// import map from './components/map';
import religionsChart from './components/religions_chart';
import searchCountry from './components/search_country';
import searchList from './components/search_list';
import downloadFormReport from './components/download_report';
import subscribeForm from './components/subscribe_form';
import homeHeader from './lib/home_header';
import footerNav from './lib/footer_nav';
import countries from './lib/country_lang';
import scrollTop from './lib/scroll_top';
import redirect from './lib/redirect';
import modalIframe from './lib/modal_iframe';
import slider from './lib/slider';

import multipleRender from 'react-multiple-render';
import MapComponent from './components-react/map/index';
import SubscribeFormComponent from './components-react/map/index';

multipleRender(MapComponent, '.bs-map');
multipleRender(SubscribeFormComponent, '.bs-subscribe');

$(() => {
  redirect();
  nav();
  // map();
  religionsChart();
  downloadFormReport();
  searchCountry();
  searchList();
  subscribeForm();
  footerNav();
  homeHeader();
  scrollTop();
  modalIframe();
  // countries();

  new Vue({
    el: '#acn_reports'
  });

  const windowHeight = window.innerHeight;

  if( windowHeight  > 700 && document.querySelector('.home_header')) {
    document.querySelector('.home_header').style.height = `${windowHeight}px`;
  }

  //smooth scroll
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, () => window.location.hash = hash);
    }
  });

})
