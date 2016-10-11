<div class="select_country">
  <a href="#" class="select_country__close">X <?php echo pll_current_language(); ?></a>
  <ul>
    <?php foreach(trans_list(getCountries()) as $country): ?>
      <li>
        <a href=" /report/<?php echo  strtolower( str_replace(' ', '-', remove_accents($country)) )?>"><?php echo $country ?></a>
      </li>
    <?php endforeach; ?>
  </ul>
</div>

<script>
  var $ = jQuery;

  $(function() {

    $(document).on('keyup', function(e) {
      if(e.keyCode === 27 && $('.select_country').hasClass('select_country-show')) {
        $('.select_country').removeClass('select_country-show');
      }
    });

    $('.open-select-countries').on('click', function(e) {
      e.preventDefault();
      $('.select_country').addClass('select_country-show');
    });

    $('.select_country__close').on('click', function(e) {
      e.preventDefault();
      $('.select_country').removeClass('select_country-show');
    });
  })

</script>
