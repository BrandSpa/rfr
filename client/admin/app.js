'use strict';
import multipleRender from 'react-multiple-render'; 
import uploader from './uploader';
// import religionsChart from '../components/religions_chart';
import ReligionsChart from '../components-react/religionsChart';

$(() => {
  uploader();
  // religionsChart();
multipleRender(ReligionsChart, '.bs-religions-charts');

  new Vue({
    el: '#metaboxes-report'
  });

});

