'use strict';
import $ from 'jquery';
import uploader from './uploader';
import religionsChart from '../components/religions_chart';

$(function() {
  uploader();
  religionsChart();
});

new Vue({
  el: '#metaboxes-report'
});
