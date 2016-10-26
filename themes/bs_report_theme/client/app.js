'use strict';
import $ from 'jquery';
import Vue from 'vue';
import map from './components/map';
import religionsChart from './components/religions_chart';
import countrySelect from './components/country_select';
import searchCountry from './components/search_country';
import downloadFormReport from './components/download_report';
import subscribeForm from './components/subscribe_form';
import modalLang from './components/modal_lang';


$(() => {
  map();
  religionsChart();
  countrySelect();
  downloadFormReport();
  searchCountry();
  subscribeForm();
  modalLang();

  new Vue({
    el: '#acn_reports'
  });

  //home slider
   let $contents = document.querySelectorAll('.home_header__contents li');
  
  $('.home_header__paginate a').on('click', function(e) {
    e.preventDefault();
   let ind = $(this).data('index');
   let left = ind * 100;
   console.log(`-${left}%`);
  });

})
