import React from 'react';
/**
 * <?php echo gett('Country') ?>
 * 			<?php echo gett('Email') ?>
 * 			<?php echo gett('Name') ?>
 * <?php echo gett('Subscribe') ?>
 * getCountries()
 */

const SubscribeForm = React.createClass({
	getInitialState() {
		errors: {

		}
	},

	handleSubmit(e) {
		e.preventDefault();
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

					<input type="text" v-model="name" />
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
					<input type="text" v-model="email" />
				</div>

				<div className="input-container">
					<label className="color-white">{texts.country}</label>
					<select value={country}>
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