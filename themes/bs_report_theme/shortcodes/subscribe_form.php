<?php
?>
<subscribe-form></subscribe-form>

<template id="subscribe-form-template">
  <form action="">
    <div class="input-container">
      <input type="text">
    </div>
    <div class="input-container">
      <input type="text">
    </div>
    <div class="input-container">
      <input type="text">
    </div>

     <div class="input-container">
          <label for="" class="color-red"><?php echo gett('Country') ?></label>
          <select name="" id="" v-model="country">
            <?php foreach(getCountries() as $country): ?>
              <option value="<?php echo $country ?>"><?php echo $country; ?></option>
            <?php endforeach; ?>
          </select>
        </div>
        <button><?php echo gett('Subscribe') ?></button>
  </form>
</template>
