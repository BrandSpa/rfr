<?php
  include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/religions.php';
  include_once str_replace('metaboxes/report', '', __DIR__) . '/lib/religions_colors.php';

  function report_religion_subcategories($post) {
    $report_religion = get_post_meta($post->ID, 'report_religion_key', true);
    $report_religion_sup = get_post_meta($post->ID, 'report_religion_sup_key', true);
  ?>
  <style>
    div[class^="sub-"], div[class*=" sub-"] {
      margin-left: 20px;
    }

    .highcharts-credits {
      display: none;
      opacity: 0;
    }

  </style>
  <h3>Religion</h3>
  <hr>
  
  <?php if(is_array($report_religion) && count($report_religion) > 0): ?>
    <script>
      var js = JSON.parse(<?php echo json_encode($report_religion) ?>);
      console.log(js);
    </script>


    <religions-chart
      :religions='<?php echo json_encode(getArrayTranslated($report_religion))  ?>'
      :colors='<?php echo json_encode(getReligionsColors()) ?>'
    >
    </religions-chart>

    <div
      class="bs-religions-charts"
      data-props='{
        "religions":  <?php echo json_encode(getArrayTranslated(get_post_meta($post->ID, 'report_religion_key', true))) ?>,
        "colors": <?php echo json_encode(getReligionsColors()) ?>
      }'
    >
    </div>

    <input
      type="text"
      placeholder="religions sup"
      name="report_religion_sup"
      value="<?php echo $report_religion_sup ?>"
    >

  <?php foreach ($report_religion as $mainkey => $religion): ?>
    <div class="<?php echo 'main-' . $mainkey ?>">
        <p>
          <select name="report_religion[<?php echo $mainkey ?>][name]">
            <option value="<?php echo $religion['name'] ?>"><?php echo $religion['name'] ?></option>
            <?php foreach (getReligions() as $key => $value): ?>
                <option value="<?php echo $value ?>"><?php echo $value ?></option>
            <?php endforeach; ?>
          </select>

          <input type="text" name="report_religion[<?php echo $mainkey ?>][percent]" placeholder="percent" value="<?php echo $religion['percent'] ?>">
          <button class="button" onClick="removeEl(event, this, '<?php echo 'main-' . $mainkey ?>')">Remove</button>
        </p>

    <div class="<?php echo 'sub-' . $mainkey?>">

    <?php
      if(is_array($religion['sub'])):
      foreach ($religion['sub'] as $subkey => $sub):
    ?>

        <p class="<?php echo 'sub-' . $mainkey .'-'. $subkey ?>">
          <select name="report_religion[<?php echo $mainkey ?>][sub][<?php echo $subkey ?>][name]">
            <option value="<?php echo $sub['name'] ?>"><?php echo $sub['name'] ?></option>
            <?php foreach (getReligions() as $key => $value): ?>
                <option value="<?php echo $value ?>"><?php echo $value ?></option>
            <?php endforeach; ?>
          </select>

          <input
            type="text"
            name="report_religion[<?php echo $mainkey ?>][sub][<?php echo $subkey ?>][percent]"
            placeholder="percent"
            value="<?php echo $sub['percent'] ?>"
          >

          <button
            class="button btn-remove-religion"
            onClick="removeEl(event, this, '<?php echo 'sub-' . $mainkey .'-'. $subkey ?>')">
            Remove subcategory
          </button>
        </p>
    <?php endforeach; endif; ?>

    </div>
    <button class="button" onClick="addSubcategoryReligion(event, this, '<?php echo $mainkey  ?>')"> Add subcategory </button>
    </div>

  <?php endforeach; ?>

  <?php else: ?>
    <div class="main-0">
      <p>
        <select name="report_religion[0][name]">
          <option value="">Select Religion</option>
          <?php foreach (getReligions() as $key => $value): ?>
              <option value="<?php echo $value ?>"><?php echo $value ?></option>
          <?php endforeach; ?>
        </select>

        <input
          type="text"
          name="report_religion[0][percent]"
          placeholder="percent">
      </p>

      <div class="sub-0">
        <p class="sub-0-0">
          <select name="report_religion[0][sub][0][name]">
            <option value="">Select Religion</option>
            <?php foreach (getReligions() as $key => $value): ?>
                <option value="<?php echo $value ?>"><?php echo $value ?></option>
            <?php endforeach; ?>
          </select>
          <input
            type="text"
            name="report_religion[0][sub][0][percent]"
            placeholder="percent">

            <button
              class="button btn-remove-religion"
              onClick="removeEl(event, this, '<?php echo 'sub-0-0' ?>')">
              Remove subcategory
            </button>
        </p>

      </div>

      <p></p>
      <button class="button" onClick="addSubcategoryReligion(event, this, 0)"> Add subcategory </button>
    </div>

  <?php endif; ?>

  <script type="text" id="religion-main-template">
    <div class='main-mainkey'>
      <p>
      <select name="report_religion[mainkey][name]">
        <option value="">Select Religion</option>
        <?php foreach (getReligions() as $key => $value): ?>
            <option value="<?php echo $value ?>"><?php echo $value ?></option>
        <?php endforeach; ?>
      </select>

        <input
          type="text"
          name="report_religion[mainkey][percent]"
          placeholder="percent">
            <button class="button" onClick="removeEl(event, this, 'main-mainkey')">Remove</button>
      </p>

      <div class='sub-mainkey'>

      </div>
      <button class="button" onClick="addSubcategoryReligion(event, this, mainkey)"> Add subcategory </button>
    </div>
  </script>

  <script type="text" id="religion-sub-template">
    <p class="sub-mainkey-subkey">

    <select name="report_religion[mainkey][sub][subkey][name]">
      <option value="">Select Religion</option>
      <?php foreach (getReligions() as $key => $value): ?>
          <option value="<?php echo $value ?>"><?php echo $value ?></option>
      <?php endforeach; ?>
    </select>

      <input
        type="text"
        name="report_religion[mainkey][sub][subkey][percent]"
        placeholder="percent"
      >

      <button
        class="button btn-remove-religion"
        onClick="removeEl(event, this, 'sub-mainkey-subkey')">
        Remove subcategory
      </button>
    </p>
  </script>
    <div class="append-religion"></div>
    <p>
      <button class="button" onClick="addReligion(event, this)">Add Religion</button>
    </p>

    <script type="text/javascript">
      var $ = jQuery;

      var religionMain = $('#religion-main-template').html();
      var religionSub = $('#religion-sub-template').html();
      var religionContainer = $('.append-religion');

      function removeEl(evt, el, name) {
        evt.preventDefault();
        $(el).off();
        $('.' + name).remove();
      }

      function addReligion(evt, el) {
        evt.preventDefault();
        var religionMainCount = $('[class*="main-"]').length;

        var mainkey = (religionMainCount + 1);
        religionContainer.append(religionMain.replace(/mainkey/g, mainkey));

        $(document).find('.sub-'+ mainkey).append( religionSub.replace(/mainkey/g, mainkey).replace(/subkey/g, 0) );
      }

      function addSubcategoryReligion(evt, el, mainkey) {
        evt.preventDefault();
        var religionSubCount = $('.sub-' + mainkey + ' p').length;
        var subkey = (religionSubCount + 1);
        $(document).find('.sub-'+ mainkey).append( religionSub.replace(/mainkey/g, mainkey).replace(/subkey/g, subkey) );
      }

    </script>

  <?php
  }

 ?>
