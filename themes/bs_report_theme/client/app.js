'use strict';
import $ from 'jquery';
import Vue from 'vue';
import nav from './lib/nav';
import map from './components/map';
import religionsChart from './components/religions_chart';

import searchCountry from './components/search_country';
import searchList from './components/search_list';
import downloadFormReport from './components/download_report';
import subscribeForm from './components/subscribe_form';
import homeHeader from './lib/home_header';
import footerNav from './lib/footer_nav';
import countries from './lib/country_lang';
import scrollTop from './lib/scroll_top';

$(() => {
  nav();
  map();
  religionsChart();
  downloadFormReport();
  searchCountry();
  searchList();
  subscribeForm();
  footerNav();
  homeHeader();
  scrollTop();
  // countries();

  new Vue({
    el: '#acn_reports'
  });

  const windowHeight = window.innerHeight;

  if( windowHeight  > 700 && document.querySelector('.home_header')) {
    document.querySelector('.home_header').style.height = `${windowHeight}px`;
  }
  
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    console.log(this.hash);
    
    // // Make sure this.hash has a value before overriding default behavior
    // if (this.hash !== "") {
    //   // Prevent default anchor click behavior
    //   event.preventDefault();

    //   // Store hash
    //   var hash = this.hash;

    //   // Using jQuery's animate() method to add smooth page scroll
    //   // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //   $('html, body').animate({
    //     scrollTop: $(hash).offset().top
    //   }, 800, function(){
   
    //     // Add hash (#) to URL when done scrolling (default click behavior)
    //     window.location.hash = hash;
    //   });
    // } // End if
  });

})
