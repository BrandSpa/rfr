<modal-lang 
  :info='<?php echo json_encode(get_post_meta($post->ID, 'multiregional_key', true)) ?>'
  polylang='<?php if(function_exists('pll_the_languages')) { echo json_encode(pll_the_languages(array( 'raw' => 1 ))); } ?>'
>

</modal-lang>
<template id="modal-lang-template">
  <div class="bs-modal">
    <div class="bs-modal__content">
    <a href="#" class="bs-modal__close"><i class="ion-android-close color-red"></i></a> 
    <h4>Choose language</h4>
      <ul>
          <li v-for="lng in info.lang">
            <a href="/{{lng}}/report/canada">{{lng}}</a>
          </li>
      </ul>
    </div>
  </div>

  <div class="bs-modal__overlay"></div>
</template>