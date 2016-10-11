'use strict';
import Vue from 'vue';
import map from './components/map';
import religionsChart from './components/religions_chart';

map();
religionsChart();

new Vue({
  el: '#acn_reports'
});
