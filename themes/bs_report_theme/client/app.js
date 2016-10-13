'use strict';
import Vue from 'vue';
import map from './components/map';
import religionsChart from './components/religions_chart';
import countrySelect from './components/country_select';
import downloadFormReport from './components/download_report';

map();
religionsChart();
countrySelect();
downloadFormReport();

new Vue({
  el: '#acn_reports'
});
