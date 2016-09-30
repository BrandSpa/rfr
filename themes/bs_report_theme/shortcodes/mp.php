<?php
  $map_svg_url = get_template_directory_uri() . '/public/img/map.svg';
?>

<map posts="<?php echo json_encode($posts); ?>"></map>

<template id="map-template">
  <div class="map" style="background: #2B3740; padding: 100px;position: relative">
  <?php echo file_get_contents($map_svg_url); ?>
  </div>
</template>
