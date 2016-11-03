'use strict';
import Vue from 'vue';
import validator from 'validator';
import request from 'axios';
const apiKey = '709cb76ed68f751a3ae287f2c067a046-us13';
const listId = 'e4bd5ff7e0';

let initialState = {
  name: '',
  email: '',
  language: '',
  isValid: false,
  country: '',
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
        Object.keys(this.validation).forEach(field => this.validate({field}));
      },

      onSubmit() {
        const {name, email, country, language} = this;
        this.validateAll();

        if(this.isValid) {
          request({
            method: 'post',
            url: `http://us13.api.mailchimp.com/3.0/lists/${listId}`,
            data: {name, email, country, language},
            auth: { user: apiKey }
          })
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
        }
      }
    }
  });
}