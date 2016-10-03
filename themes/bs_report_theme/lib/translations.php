<?php
  include_once 'religions.php';
  include_once 'countries.php';
  include_once 'political_system.php';
  include_once 'languages.php';
  include_once 'situation.php';

  function registerStr($str, $group = 'acn', $multiline = false) {
    if(function_exists('pll_register_string')) {
      return pll_register_string($str, $str, $group, $multiline);
    } else {
      return $str;
    }
  }

  function setTranslations() {
      registerStr('RELIGIOUS FREEDOM<br> IN THE WORLD');
      registerStr('DOWNLOAD REPORT');
      registerStr('ABOUT US');
      registerStr('NATURE OF PERSECUTION');
      registerStr('SITUATION');
      registerStr('Area');
      registerStr('Population');
      registerStr('Political');
      registerStr('Major Languages');
      registerStr('"ACN es una fundación internacional dependiente del Vaticano nacida en 1.947 que desarrolla anualmente más de 6.000 proyectos pastorales en más de 140 países. Por medio de tres pilares - oración, información y soporte financiero - ACN ayuda a cristianos perseguidos, que sufren y pasan necesidad en el mundo."');

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

  }
 ?>
