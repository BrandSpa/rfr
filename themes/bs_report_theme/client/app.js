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
  
  function changeSlide(count = 0) {
      let leftAuto = count * 100;

      $('a[data-index]').removeClass('active');

      document.querySelector(`a[data-index='${count}']`).classList.add('active');
    
      document.querySelector('.home_header__contents ul').style.left = `-${leftAuto}%`;

  }

  //home slider
  let count = 1;

  let autoplay = setInterval(() => {
    let slides = document.querySelectorAll('.home_header__contents li');
    changeSlide(count);
      if(count == slides.length - 1) {
        count = 0;
      } else {
        count++;
      }

  }, 1000);


  $('.home_header__paginate a').on('click', function(e) {
    e.preventDefault();
    clearInterval(autoplay);
    let ind = $(this).data('index');
    changeSlide(ind); 
  });

})
