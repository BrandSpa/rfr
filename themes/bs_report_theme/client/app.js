'use strict';
import $ from 'jquery';
import Vue from 'vue';
import map from './components/map';
import religionsChart from './components/religions_chart';
import countrySelect from './components/country_select';
import searchCountry from './components/search_country';
import downloadFormReport from './components/download_report';
import subscribeForm from './components/subscribe_form';

$(() => {
  map();
  religionsChart();
  countrySelect();
  downloadFormReport();
  searchCountry();
  subscribeForm();

  new Vue({
    el: '#acn_reports'
  });

})
