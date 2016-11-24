'use strict';
import validator from 'validator';
import $ from 'jquery';

let initialState = {
  name: '',
  email: '',
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
    props: ['country', 'lang', 'language', 'dir', 'thanks'],
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
        const {name, email, country, language, lang} = this;
        const fields = {name, country};
        
        this.validateAll();
        
        let mergeFields = Object.keys(fields).reduce((obj, key) => {
          let newOb = {};
          let name = key.toUpperCase();
          newOb[name] = fields[key];
          return {...obj, ...newOb};
        }, {}); 

        let data = {
            "email_address": email,
            "status": "subscribed",
            "merge_fields": mergeFields,
            "update_existing": true
          };      

        let payload = {action: 'mailchimp_subscribe', lang, data};        

        if(this.isValid) {
          $.ajax({
            type: 'post',
            url: '/wp-admin/admin-ajax.php',
            data: payload
          })
          .done(this.handleSuccess)
          .fail(err => console.log(err));
        }
      },

      handleSuccess(res) {
        return window.location = this.thanks;
      }
    }
  });
}