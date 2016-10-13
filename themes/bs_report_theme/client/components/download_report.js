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
        const {field, type} = opts;
        const data = this.$data[field];
        let validation = this.$data.validation;

        switch (type) {
          case 'required':
          validation = {...validation, name: true};
          break;
          case 'email':
            validator.isEmail(data);
          break;
        }

        console.log(validation);

        this.$set('validation', validation);
      },

      onSubmit() {
        console.log('submit', this.validate());
      }
    }
  });
}