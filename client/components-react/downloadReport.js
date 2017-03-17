import React from 'react';
import qs from 'qs';
import request from 'axios';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
const endpoint = '/wp-admin/admin-ajax.php';

const DownloadReport = React.createClass({
  getInitialState() {
        return {
            name: '',
            email: '',
            country: '',
            language: '',
            errors: {
                name: false,
                email: false,
            },
        };
    },

    handleChange(field, e) {
        let val = e.target.value;
        this.setState({ ...this.state, [field]: val });
    },

    validate() {
        let errors = {};

        let validations = Object.keys(this.state.errors).map(field => {
            let val = isEmpty(this.state[field]);
            if (field == 'email') val = !isEmail(this.state[field]);
            errors = { ...errors, [field]: val };
            return val;
        });

        this.setState({ errors });

        return Promise.all(validations).then(arr => arr.every(item => item == false)).catch(err => console.error(err));
    },

    handleSubmit(e) {
        e.preventDefault();
        this.validate().then(isValid => {
            if (isValid) this.storeContact();
        });
    },

    storeContact() {
        const { name, email } = this.state;
        const { country } = this.props;

        let mc_data = {
            email_address: email,
            status: 'subscribed',
            merge_fields: { NAME: name, COUNTRY: country },
            update_existing: true,
        };

        let data = qs.stringify({ action: 'mailchimp_subscribe', data: mc_data });

        request
            .post(endpoint, data)
            .then(res => {
                console.log(res.data);
                if (res.data.id) {
                    return (window.location = this.props.thanks);
                }
            })
            .catch(err => console.error(err));
    },

    render() {
        const { errors, name, email } = this.state;
        const { texts, countries, country } = this.props;

        return (
            <div id="download-report">

                <h1 className="title-center title-line color-red"> {texts.title} </h1>

                <div className="row">
                    <div className="col-md-1" />

                    <div className="col-md-5" style="float: none; margin: 0 auto">

                        <form onSubmit={this.handleSubmit}>

                            <div className="input-container">
                                <label className="color-red">
                                    {texts.name} 
                                    <span className={errors.name ? 'input-container__error input-container__error-show' : 'input-container__error'} > {texts.required} </span>
                                </label>

                                <input type="text" value={name} onChange={this.handleChange.bind(null, 'name')} />

                            </div>

                            <div className="input-container">
                                <label className="color-red">
                                    {texts.email}
                                    <span className={errors.email ? 'input-container__error input-container__error-show' : 'input-container__error'} > {texts.invalid} </span>
                                </label>
                                <input type="text" value={email} onChange={this.handleChange.bind(null, 'email')} />
                            </div>

                            <div className="input-container">
                                <label className="color-red">{texts.language}</label>
                                <select name="" id="" value={language} onChange={this.handleChange.bind(null, 'language')}>
                                    {languages.map((lang, i) => ( <option key={i} value={lang.slug}>{$lang.name}</option> ))}
                                </select>
                            </div>

                            <div className="input-container">
                                <label className="color-red">{texts.country}</label>

                                <select value={country} onChange={this.handleChange.bind(null, 'country')}>
                                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                                </select>
                            </div>

                            <button className="button title-uppercase" onClick={this.handleSubmit}>{texts.btn}</button>
                        </form>
                    </div>
                    <div className="col-md-1" />
                </div>
            </div>
        );
    },
});
