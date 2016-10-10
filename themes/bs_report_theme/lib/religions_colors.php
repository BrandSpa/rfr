<?php

function getReligionsColors() {
  //blues
  $seagul_light = "#8197A4";
  $seagul_medium = "#384B56";
  $seagul_regular = "#1F4359";
  $midnight_darker = "#1D272C";

  //greys

  //reds
  $carnation_light = "#F6575F";
  $lava_medium = "#CC0B25";

  //main colors
  $deep_carmine_pink = "#EE3934";
  $saffron = "#FDBC2C";
  $elephant = "#293640";

  //second
  $buttercup = "#D88E27";
  $fire_engine = "#CC2027";
  $dark_electric_blue = "#536D7F";
  $gumbo = '#7699B2';
  $cream_can = '#F9C968';

  $red_orange = "#FC3938";
  $dull_red = "#C03B3B";
  $dark_jungle_green = "#1A2127";
  $outer_space  = "#2B3740";
  $cello  = "#7699B2";

  $fuel_yellow = '#F3A82D';

  $rollig_stone = "#747E86";
  $armadillo = "#4A4A4A";
  $chicago = "#5D5D5D";
  $aluminum = "#9B9B9B";
  $desert_storm = "#F8F8F8";

    return array(
      "Agnostic" => $gumbo,
      "Atheist" => $dull_red,
      "Buddhists" => $midnight_darker,
      "Baha’i" => $outer_space,
      "Caodaists" => $cello,
      "Ethnoreligionist" => $dark_electric_blue,
      "No religion" => $rollig_stone,
      "Christian" => $seagul_regular,
      "Chinese Universalist" => $aluminum,
      "Chinese Local Religions" => $desert_storm,
      "Confucianist" => $red_orange,
      "Hindu" =>  $lava_medium,
      "Jewish" => $carnation_light,
      "Muslim" => $seagul_medium,
      "Spiritists" => $cello,
      "Spiritualists" => $cello,
      "Shintoists" => $gumbo,
      "Other"  => $buttercup,
      "Sikhs"=> $chicago,
      "Neoreligionist" => $armadillo,
      "Taoists" => $aluminum
    );
}

 ?>
