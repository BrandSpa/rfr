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
  let slides = document.querySelectorAll('.home_header__contents li');
  let count = 1;

  let autoplay = setInterval(() => {
    let leftAuto = count * 100;
    console.log(count);

    if(count == slides.length - 1) {
      count = 0;
    } else {
      count++;
    }

    document.querySelectorAll('a[data-index]').each((el) => {
      if(el.classList) el.classList.remove('active');
    });
    
    document.querySelector(`a[data-index='${count}']`).classList.add('active');
  
    document.querySelector('.home_header__contents ul').style.left = `-${leftAuto}%`;
  }, 1000);


  $('.home_header__paginate a').on('click', function(e) {
    e.preventDefault();
    clearInterval(autoplay);
    let ind = $(this).data('index');
    let left = ind * 100;

    document.querySelector('.home_header__contents ul').style.left = `-${left}%`;
  });

})
