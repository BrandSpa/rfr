'use strict';
import Vue from 'vue';
import validator from 'validator';

let initialState = {
  name: '',
  email: '',
  language: '',
  isValid: false,
  validation: {
    name: false,
    email: false
  }
};

export default function () {
  Vue.component('form-download-report', {
    template: '#form-download-template',
    props: ['country'],
    data() {
      return initialState;
    },

    methods: {
      validate(opts = {field: ''}) {
        const {field} = opts;
        const data = this.$data[field];
        let validation = this.$data.validation;

        switch (field) {
          case 'name':
            validation = {...validation, name: validator.isEmpty(data)};
          break;
          case 'email':
            validation = {...validation, email: !validator.isEmail(data)};
          break;
        };

        this.$set('validation', validation);
        this.$set('isValid', Object.keys(validation).filter(key => validation[key] == true).length == 0);
      },

      validateAll() {
        let fields = Object.keys(this.validation);
      },

      onSubmit() {
        console.log(this.validateAll());
        console.log('is valid: ' + this.isValid);
      }
    }
  });
}