'use strict';
import 'babel-polyfill';

//jquery
import scrollTop from './lib/scroll_top';
import modalIframe from './lib/modal_iframe';
import nav from './lib/nav';

//react
import multipleRender from 'react-multiple-render';
import MapComponent from './components-react/map/index';
import SubscribeFormComponent from './components-react/subscribeForm';
import HeaderSlider from './components-react/headerSlider';
import DownloadReport from './components-react/downloadReport';
import ReligionsChart from './components-react/religionsChart';

multipleRender(MapComponent, '.bs-map');
multipleRender(SubscribeFormComponent, '.bs-subscribe');
multipleRender(HeaderSlider, '.bs-header-slider');
multipleRender(DownloadReport, '.bs-download-report');
multipleRender(ReligionsChart, '.bs-religions-charts');

$(() => {
  nav();
  scrollTop();
  modalIframe();

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
