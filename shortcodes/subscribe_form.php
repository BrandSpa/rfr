
<subscribe-form 
  lang="<?php echo getLang() ?>" 
  country="<?php if(function_exists('geoip_detect2_get_info_from_current_ip')){ echo geoip_detect2_get_info_from_current_ip()->country->names['en']; } ?>"
  thanks="<?php echo gett('http://religious-freedom-report.org/thank-you/') ?>"
>
</subscribe-form>

<script type="text/template" id="subscribe-form-template">
  <form>
    <div class="input-container">
       <label for="" class="color-white">
            <?php echo gett('Name') ?>
            <span
              class="input-container__error"
              v-bind:class="{ 
                'input-container__error-show': validation.name
              }"
            >
              <?php echo gett('Invalid') ?>
            </span>
          </label>

      <input type="text" v-model="name" />
    </div>

    <div class="input-container">
        <label for="" class="color-white">
            <?php echo gett('Email') ?>
            <span
              class="input-container__error"
              v-bind:class="{ 'input-container__error-show': validation.email}"
            > 
              <?php echo gett('Invalid') ?>
            </span>
          </label>
      <input type="text" v-model="email" />
    </div>

     <div class="input-container">
      <label for="" class="color-white"><?php echo gett('Country') ?></label>
      <select v-model="country">
        <?php foreach(getCountries() as $country): ?>
          <option value="<?php echo $country ?>"><?php echo $country; ?></option>
        <?php endforeach; ?>
      </select>
    </div>

    <button class="button button-dark" v-on:click.prevent="onSubmit"><?php echo gett('Subscribe') ?></button>
  </form>
</script>
