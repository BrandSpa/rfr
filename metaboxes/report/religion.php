<?php

function report_religion($post) {
  $report_religion_name = get_post_meta($post->ID, 'report_religion_name_key', true);
  $report_religion_percent = get_post_meta($post->ID, 'report_religion_percent_key', true);
  ?>

  <div class="religion-section">
    <h4>Religion</h4>

    <?php if(is_array($report_religion_name) && count($report_religion_name) > 0): ?>
      <?php for($i = 0; $i < count($report_religion_name); $i++): ?>
        <p>
          <select class="" name="report_religion_name[]">
            <option value="<?php echo $report_religion_name[$i] ?>"><?php echo $report_religion_name[$i] ?></option>
            <?php foreach (getLanguages() as $value): ?>
              <option value="<?php echo $value ?>"><?php echo $value ?></option>
            <?php endforeach; ?>
          </select>

          <input
            type="text"
            placeholder="percent"
            name="report_religion_percent[]"
            value="<?php echo $report_religion_percent[$i] ?>"
          >

          <button class="button btn-remove-religion" onClick="listenRemove(event, this)">Remove</button>
        </p>
      <?php endfor; ?>

    <?php else: ?>
      <p>
        <select class="" name="report_religion_name[]">
          <option value="">Select Relgion</option>
          <?php foreach (getLanguages() as $country): ?>
            <option value="<?php echo $country ?>"><?php echo $country ?></option>
          <?php endforeach; ?>
        </select>

        <input
          type="text"
          placeholder="percent only number"
          name="report_religion_percent[]"
          value="<?php echo $religion['percent'] ?>"
        >

      </p>
  <?php endif; ?>

    <div class="append-religion"></div>

    <script type="text" id="template-religion">
    <p>
      <select class="" name="report_religion_name[]">
        <option value="">Select Religion</option>
        <?php foreach (getLanguages() as $value): ?>
          <option value="<?php echo $value ?>"><?php echo $value ?></option>
        <?php endforeach; ?>
      </select>

      <input type="text" placeholder="percent" name="report_religion_percent[]">

      <a href="#" class="button btn-remove-religion" onClick="listenRemove(event, this)">Remove</a>
    </p>
    </script>

    <button class="button btn-add-religion">Add new Religion</button>
  </div>
  <?php
}

 ?>
