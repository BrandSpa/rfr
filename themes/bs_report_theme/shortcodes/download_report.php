<?php  ?>
<div id="download-report">

  <h1 class="title-center title-line color-red">
    <?php echo gett('DOWNLOAD REPORT'); ?>
  </h1>
 
  <div class="row">
    <div class="col-md-1"></div>

    <div class="col-md-5" style="float: none; margin: 0 auto">
      <form-download-report country="<?php echo getUserCountry() ?>"></form-download-report>
    </div>
    <div class="col-md-1"></div>
  </div>

</div>

<template id="form-download-template">
     <form  v-on:submit.prevent="onSubmit">

        <div class="input-container">
          <label for="" class="color-red">
            <?php echo gett('Name') ?> 
            <span 
              class="input-container__error" 
              v-bind:class="{ 'input-container__error-show': validation.name}"   
            >
              <?php echo gett('Required') ?>
            </span>
          </label>

          <input 
            type="text" 
            v-model="name" 
            v-on:keyup="validate({field: 'name'})" 
          />

        </div>

        <div class="input-container">
          <label for="" class="color-red">
            <?php echo gett('Email') ?>
            <span
              class="input-container__error"
              v-bind:class="{ 'input-container__error-show': validation.email}"
            > 
              <?php echo gett('Invalid') ?>
            </span>
          </label>
          <input 
            type="text"
            v-model="email"
            v-on:keyup="validate({field: 'email'})" 
          />
        </div>

        <div class="input-container">
          <label for="" class="color-red"><?php echo gett('Language') ?></label>
          <select name="" id="" v-model="language">
          
            <?php foreach(getLanguages() as $country): ?>
              <option value="<?php echo $country ?>"><?php echo $country; ?></option>
            <?php endforeach; ?>
          </select>
        </div>

         <div class="input-container">
          <label for="" class="color-red"><?php echo gett('Country') ?></label>
       
          <select name="" id="" v-model="country">

            <?php foreach(getCountries() as $country): ?>
              <option value="<?php echo $country ?>"><?php echo $country; ?></option>
            <?php endforeach; ?>
          </select>
        </div>

        <button class="button title-uppercase" v-on:click.prevent="onSubmit"><?php echo gett('Download Executive Summary') ?></button>
      </form>
</template>