<?php
  function getYears() {
    $currentYear = date("Y");
    $untilYear = $currentYear + 10;
    $years = array();

    for ($i=2000; $i < $untilYear; $i++) {
      array_push($years, $i);
    }
    rsort($years);
    return $years;
  }

 ?>
