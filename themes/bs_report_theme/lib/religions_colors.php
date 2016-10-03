<?php

function getReligionsColors() {
  $red_orange = "#FC3938a";
  $dull_red = "#C03B3B";
  $dark_jungle_green = "#1A2127";
  $outer_space  = "#2B3740";
  $cello  = "#3C515F";
  $dark_electric_blue = "#536D7F";
  $rollig_stone = "#747E86";
  $armadillo = "#4A4A4A";
  $chicago = "#5D5D5D";
  $aluminum = "#9B9B9B";
  $desert_storm = "#F8F8F8";

    return array(
      "Agnostic" => $red_orange,
      "Atheist" => $dull_red,
      "Buddhists " => $dark_jungle_green,
      "Baha’i" => $outer_space,
      "Caodaists" => $cello,
      "Ethnoreligionist" => $dark_electric_blue,
      "No religion" => $rollig_stone,
      "Christian" => $dark_electric_blue,
      "Chinese Universalist" => $aluminum,
      "Chinese Local Religions" => $desert_storm,
      "Confucianist" => $red_orange,
      "Hindu" => $dull_red,
      "Jewish" => $dark_jungle_green,
      "Muslim" => $red_orange,
      "Spiritists" => $cello,
      "Other"  => $outer_space,
      "Sikhs"=> $rollig_stone,
      "Neoreligionist" => $armadillo,
      "Taoists" => $aluminum
    );
}

 ?>
