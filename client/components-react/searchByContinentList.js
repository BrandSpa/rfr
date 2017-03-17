import React from 'react';

const SearchByContinentList = React.createClass({
	getInitialState() {
		return {
			show: false
		}
	},

	componentDidMount() {
		this.setContinents();
	},

	setContinents() {
		const { reports, continents } = this.props;
		let newContinents = {};

		let filterByCountry = country => {
			if (reports.filter(r => r.meta_country == country)[0]) {
				return reports.filter(r => r.meta_country == country)[0];
			} else {
				return '';
			}
		};

		let cleanEmpty = report => typeof report == 'object';

		let continentsList = {
			'afrika': 'Afrika',
			'asia': 'Asia',
			'easterEurope': 'Easter Europe',
			'latinAmerica': 'Latin America',
			'middleEast': 'Middle East',
			'northAmerica': 'North America',
			'ocenia': 'Ocenia',
			'russiaCentralAsia': 'Russia & Central Asia',
			'westernEurope': 'Western Europe'
		};

		Object.keys(continentsList).forEach(continentKey => {
			newContinents[continentKey] = continents[continentsList[continentKey]]
				.map(filterByCountry)
				.filter(cleanEmpty);
		});

		console.log(newContinents);
	},

	getIcon(name) {
		return `${this.props.templateUrl}/public/img/icons/${name}.svg`
	},

	getColor(situation) {
		if (situation == 'Discrimination') {
			return 'bg-discrimination';
		}

		if (situation == 'Persecution') {
			return 'bg-red';
		}

		return '';
	},

	toggleShow() {
		this.setState({ show: !this.state.show });
	},

	render() {
		const { texts, templateUrl, countriesTrans } = this.props;

		return (
			<div>
				<button
					className="bg-dark_jungle map__search__list_btn color-rolling-store"
					onClick={this.toggleShow}
				>
					{texts.africa}
				</button>

				<ul class="map__search_results" style={this.state.show ? { display: 'block' } : { display: 'none' }}>
					{reports.map(report =>
						<li className="">
							<a href={report.guid}>{ countriesTrans[report.meta_country] }</a>
							<span>
								<img src={this.getIcon(report.meta_situation)} alt="" />
							</span>
						</li>
					)}
				</ul>
			</div>
		)
	}
});

export default SearchByContinentList;