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

    methods: {
      validate(opts = {type: '', field: ''}) {
        const {field, type} = opts;
        const data = this.$data[field];
        let validation = this.$data.validation;

        switch (type) {
          case 'required':
          validation = {...validation, name: validator.isEmpty(data)};
          break;
          case 'email':
            validation = {...validation, email: !validator.isEmail(data)};
          break;
        };

        this.$set('validation', validation);
        return !Object.keys(validation).filter(key => validation[key] == true).length > 0;
      },

      onSubmit() {
        console.log(this.$data.validation);
        console.log('is valid: ' + this.validate());
      }
    }
  });
}