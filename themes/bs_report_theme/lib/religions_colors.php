<?php

function getReligionsColors() {

  //blues
  $seagul_light = "#7F95A0";
  $seagul_medium = "#4F6470";
  $seagul_dark = "#31414B";
  $midnight_darker = "#1A252C";

  $outer_space = "#2B3740";
  $rollig_stone = "#747E86";
  $elephant = "#293640";

  $dark_electric_blue = "#536D7F";
  $gumbo = '#7699B2';
  $dark_jungle_green = "#1A2127";

  //greys
  $armadillo = "#4A4A4A";
  $chicago = "#5D5D5D";
  $aluminum = "#9B9B9B";
  $desert_storm = "#F8F8F8";
  $zumthor = "#CBD5DA";

  //reds
  $carnation_light = "#F6575F";
  $deep_carmine_pink = "#EE3934";
  $lava_medium = "#CC0B25";
  $fire_engine = "#CC2027";
  $tamarillo = "#9F121F";
  $geraldine = "#F6898F";
  $falu_red = "#7A1120";

  //yellow
  $saffron = "#FDBC2C";
  $cream_can = '#F9C968';
  $fuel_yellow = '#F3A82D';

  //second
  $buttercup = "#D88E27";
  $red_orange = "#FC3938";
  $dull_red = "#C03B3B";
  $cello  = "#7699B2";

    return array(
      "Agnostic" => $gumbo,
      "Atheist" => $seagul_dark,
      "Baha’i" => $outer_space,
      "Caodaists" => $cello,
      "No religion" => $rollig_stone,
      "Christian" => $midnight_darker,

      "Muslim" => $seagul_medium,
      "Spiritists" => $cello,
      "Spiritualists" => $cello,
      "Shintoists" => $gumbo,

      "Taoists" => $aluminum,
      "Chinese Universalist" => $aluminum,
      "Chinese Local Religions" => $desert_storm,
      "Sikhs"=> $fuel_yellow,
      "Neoreligionist" => $armadillo,
      "Ethnoreligionist" => $zumthor,

      "Confucianist" => $red_orange,
      "Hindu" =>  $lava_medium,
      "Jewish" => $carnation_light,
      "Buddhists" => $falu_red,

      "Other"  => $buttercup,
    );
}

 ?>
