<?php
  include_once 'religions.php';
  include_once 'countries.php';
  include_once 'political_system.php';
  include_once 'languages.php';

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
      registerStr('NATURE OF PERSECUTION');
      registerStr('SITUATION');
      registerStr('Area');
      registerStr('Population');
      registerStr('Political');
      registerStr('Major Languages');

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

  }
 ?>
