<?php
  function report_Languages($post) {
    $report_languages = get_post_meta($post->ID, 'report_languages_key', true);
    $report_languages_sup = get_post_meta($post->ID, 'report_languages_sup_key', true);

    ?>
    <div class="language-section">
      <h3>Major languages</h3>
      <hr>

      <input
      type="text"
      placeholder="Major languages sup"
      value="<?php echo $report_languages_sup ?>"
      >

    <?php if(is_array($report_languages) && count($report_languages)): ?>
      <?php foreach ($report_languages as $key => $language): ?>
        <p>
          <select name="report_languages[]" id="">
            <option value="<?php echo $language ?>"><?php echo $language ?></option>
            <?php foreach (getLanguages() as $key => $language): ?>
              <option value="<?php echo $language ?>"><?php echo $language ?></option>
            <?php endforeach; ?>
          </select>
            <button class="button btn-remove-religion" onClick="listenRemove(event, this)">Remove</button>
        </p>
      <?php endforeach; ?>
    <?php else: ?>
      <p>
        <select name="report_languages[]" id="">
          <option value="">Select language</option>
          <?php foreach (getLanguages() as $key => $language): ?>
            <option value="<?php echo $language ?>"><?php echo $language ?></option>
          <?php endforeach; ?>
        </select>
      </p>

    <?php endif; ?>

      <div class="append-language"></div>

      <button class="button btn-add-language">Add new Language</button>

      <script type="text" id="template-language">
      <p>
        <select name="report_languages[]" id="">
          <option value="">Select language</option>
          <?php foreach (getLanguages() as $key => $language): ?>
            <option value="<?php echo $language ?>"><?php echo $language ?></option>
          <?php endforeach; ?>
        </select>
          <button class="button btn-remove-religion" onClick="listenRemove(event, this)">Remove</button>
      </p>

      </script>
    </div>

    <?php
  }

 ?>
