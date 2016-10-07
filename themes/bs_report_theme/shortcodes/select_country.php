<div class="select_country" style="display: none">
  <a href="#" class="select_country__close">Close</a>
  <ul>
  <?php foreach(getCountries() as $country): ?>
    <li>
      <a href=" /report/<?php echo strtolower(str_replace(' ', '-', $country)) ?>"><?php echo $country ?></a>
    </li>
  <?php endforeach; ?>
</ul>
</div>

<script>
  var $ = jQuery;
  $(function() {
    $('.open-select-countries').on('click', function(e) {
      e.preventDefault();

      $('.nav').css({'display': 'none'});
      $('.select_country').css({'display': 'block'});
      $('body').css({'margin-left': 0});

    });

    $('.select_country__close').on('click', function(e) {
      e.preventDefault();
      $('.nav').css({'display': 'block'});
      $('.select_country').css({'display': 'none'});
      $('body').css({'margin-left': '200px'});
    });
  })

</script>
