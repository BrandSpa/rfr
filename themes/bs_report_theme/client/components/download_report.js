'use strict';
import Vue from 'vue';
import validator from 'validator';

const ValidatorMessages = {
  name: 'Name required',
  email: {
    required: 'Email required',
    invalid: 'Email invalid'
  }
};

export default function() {
  Vue.component('form-download-report', {
    template: '#form-download-template',
    
    data() {
      return {
        name: '',
        email: '',
        language: '',
        country: ''
      }
    },

    ready() {
     console.log(this.name);
    },
    
    methods: {
      validate(field) {
        validator.isEmail('foo@bar.com');
      },

      onSubmit() {
        console.log('submit', this.$data['name']);
      }
    }
  });
}
