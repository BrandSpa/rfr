'use strict';
import Vue from 'vue';
import map from './components/map';
import religionsChart from './components/religions_chart';
import countrySelect from './components/country_select';

map();
religionsChart();
countrySelect();

new Vue({
  el: '#acn_reports'
});
