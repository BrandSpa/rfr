'use strict';
import $ from 'jquery';
import Vue from 'vue';
import nav from './lib/nav';
import map from './components/map';
import religionsChart from './components/religions_chart';
import countrySelect from './components/country_select';
import searchCountry from './components/search_country';
import searchList from './components/search_list';
import downloadFormReport from './components/download_report';
import subscribeForm from './components/subscribe_form';
import homeHeader from './lib/home_header';
import footerNav from './lib/footer_nav';
import countries from './lib/country_lang';

$(() => {
  nav();
  map();
  religionsChart();
  countrySelect();
  downloadFormReport();
  searchCountry();
  searchList();
  subscribeForm();
  modalLang();
  footerNav();
  homeHeader();
  countries();

  new Vue({
    el: '#acn_reports'
  });

})
