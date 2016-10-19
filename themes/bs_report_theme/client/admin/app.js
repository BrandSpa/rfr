'use strict';
import $ from 'jquery';
import uploader from './uploader';
import religionsChart from '../components/religions_chart';
import multiRegional from '../components/multi_regional';

$(() => {
  uploader();
  religionsChart();
  multiRegional();
  new Vue({
    el: '#metaboxes-report'
  });

});

