<?php
  include_once 'religions.php';
  include_once 'countries.php';
  include_once 'political_system.php';
  include_once 'languages.php';
  include_once 'situation.php';
  include_once 'persecution.php';

  function registerStr($str, $group = 'acn', $multiline = false) {
    if(function_exists('pll_register_string')) {
      return pll_register_string($str, $str, $group, $multiline);
    } else {
      return $str;
    }
  }

  function setTranslations() {
      registerStr('RELIGIOUS FREEDOM<br> IN THE WORLD');
      registerStr('BACK TO MAP');
      registerStr('DOWNLOAD REPORT');
      registerStr('ABOUT US');
      registerStr('PRESS');
      registerStr('NATURE OF PERSECUTION');
      registerStr('SITUATION');
      registerStr('Religions');
      registerStr('Area');
      registerStr('Population');
      registerStr('Political');
      registerStr('Improved');
      registerStr('Unchanged');
      registerStr('Worsened');
      registerStr('Major Languages');
      registerStr('"ACN es una fundación internacional dependiente del Vaticano nacida en 1.947 que desarrolla anualmente más de 6.000 proyectos pastorales en más de 140 países. Por medio de tres pilares - oración, información y soporte financiero - ACN ayuda a cristianos perseguidos, que sufren y pasan necesidad en el mundo."');
      registerStr('Click on any country to see its report.');
      registerStr('Name');
      registerStr('Email');
      registerStr('Language');
      registerStr('Download');
      registerStr('Subscribe');
      registerStr('Executive Summary');
      registerStr('Full Report');
      registerStr('PRIVACY POLICY');
      registerStr('TERMS & CONDITIONS');
      registerStr('Contact');
      registerStr('SEARCH BY LIST');
      registerStr('http://religious-freedom-report.org/privacy-policy/');
      registerStr('http://religious-freedom-report.org/terms-and-conditions/');
      registerStr('http://religious-freedom-report.org/thank-you/');
      registerStr('http://religious-freedom-report.org/thank-you-download/');
      registerStr('Conozca más sobre Ayuda a la Iglesia Necesitada');
      registerStr('RELIGIOUS <span class="color-red">FREEDOM</span><br>REPORT');
      registerStr('LIST');
      registerStr('BY COUNTRY');
      registerStr('Country');
      registerStr('SEARCH BY COUNTRY');
      registerStr('Download Executive Summary');
      registerStr('Africa');
      registerStr('Asia');
      registerStr('Eastern Europe');
      registerStr('Latin America');
      registerStr('Middle East');
      registerStr('North America');
      registerStr('Oceania');
      registerStr('Russia & Central Asia');
      registerStr('Western Europe');
      
      foreach (getReligions() as $religion) {
        registerStr($religion, $group. '-religions', false);
      }

      foreach (getCountries() as $country) {
        registerStr($country, $group. '-countries', false);
      }

      foreach (getPoliticalSystem() as $political) {
        registerStr($political, $group. '-political_system', false);
      }

      foreach (getLanguages() as $language) {
        registerStr($language, $group. '-languages', false);
      }

      foreach (getSitutations() as $situation) {
        registerStr($situation, $group. '-situation', false);
      }

      foreach (getPersecution() as $persecution) {
        registerStr($persecution, $group. '-persecution', false);
      }

  }
 ?>
