<?php
  include_once __DIR__ . '/get_translation.php';

  function get_trans($str) {
    return gett($str);
  }

  function trans_list($arr) {
    return array_map('get_trans', $arr);
  }


?>
