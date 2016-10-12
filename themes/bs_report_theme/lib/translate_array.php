<?php
  include_once __DIR__ . '/get_translation.php';
  include_once __DIR__ . '/religions_colors.php';

  function changeCommaForDot($str) {
    str_replace($str, ',', '.');
  }

  function tArray($arr) {
    $newSub = [];
    $arr['color'] = getReligionsColors()[$arr['name']];
    $arr['name'] = gett($arr['name']);
    $arr['percent'] = changeCommaForDot($arr['percent']);

    if( is_array($arr['sub']) ) {

      foreach ($arr['sub'] as $sub) {
        array_push($newSub, array(
          'color' => getReligionsColors()[$sub['name']],
          'name' => gett($sub['name']),
          'percent' =>  changeCommaForDot($sub['percent'])
          )
        );
      }

    }

    $arr['sub'] = $newSub;

    return $arr;
  }

  function getArrayTranslated($arr) {
    return array_map('tArray', $arr);
  }

 ?>
