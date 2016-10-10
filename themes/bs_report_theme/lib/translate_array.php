<?php
  include_once __DIR__ . '/get_translation.php';
  include_once __DIR__ . '/religions_colors.php';

  function tArray($arr) {
    $newSub = [];
    $arr['color'] = getReligionsColors()[$arr['name']];
    $arr['name'] = gett($arr['name']);


    if( is_array($arr['sub']) ) {

      foreach ($arr['sub'] as $sub) {
        array_push($newSub, array(
          'color' => getReligionsColors()[$sub['name']],
          'name' => gett($sub['name']),
          'percent' =>  $sub['percent']
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
