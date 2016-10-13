'use strict';
import Vue from 'vue';
import validator from 'validator';

let initialState = {
  name: '',
  email: '',
  language: '',
  country: '',
  validation: {
    name: false,
    email: false
  }
};

export default function () {
  Vue.component('form-download-report', {
    template: '#form-download-template',

    data() {
      return initialState;
    },

    ready() {
      console.log(this.name);
    },

    methods: {
      validate(opts) {
        console.log(opts);
        validator.isEmail(this.$data['email']);
        validator.isEmpty(this.$data['name']);
      },

      onSubmit() {
        console.log('submit', this.validate());
      }
    }
  });
}