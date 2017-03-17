import React from 'react';
import qs from 'qs';
import request from 'axios';

const SubscribeForm = React.createClass({
	getInitialState() {
		return {
			name: '',
			email: '',
			country: '',
			errors: {

			}
		}
	},

	handleChange(field, e) {
		let val = e.target.value;
		this.setState({...this.state, [field]: val});
	},

	handleSubmit(e) {
		e.preventDefault();
	},

	storeContact() {
		let data = {action: 'mailchimp_subscribe', lang, data};
		request
			.post(endpoint, data)
			.then(res => {
				console.log(res.data);
			}) 
	},

	render() {
		const { errors } = this.state;
		const { texts, countries, country } = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-container">
					<label for="" className="color-white">
						{texts.name}
						{texts.invalid}
						<span
							className={errors.name ? 'input-container__error input-container__error-show' : 'input-container__error'}
						>
							{texts.invalid}
						</span>
					</label>

					<input type="text" onChange={this.handleChange.bind(null, 'name')} value={this.state.name} />
				</div>

				<div className="input-container">
					<label for="" className="color-white">
						{texts.email}
						<span
							className={errors.email ? 'input-container__error input-container__error-show' : 'input-container__error'}
						>
							{texts.invalid}
						</span>
					</label>
					<input type="text" onChange={this.handleChange.bind(null, 'email')} value={this.state.email} />
				</div>

				<div className="input-container">
					<label className="color-white">{texts.country}</label>
					<select onChange={this.handleChange.bind(null, 'country')} value={country || this.state.country}>
						{countries.map((country, i) =>
							<option value={country}>{country}</option>
						)}
					</select>
				</div>

				<button className="button button-dark" onClick={this.handleSubmit}>{texts.subscribe}</button>
			</form>
		)
	}
});

export default SubscribeForm;