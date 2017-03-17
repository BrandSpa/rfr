import React from 'react';
import List from './searchByContinentList';

const SearchByContinent = React.createClass({
		getInitialState() {
			return {
				continents: [],
				show: false
			}
		},
	
	componentWillReceiveProps(props) {

		this.setContinents(props);
	},

	toggleShow(e) {
		if(e) e.preventDefault();
		this.setState({show: !this.state.show});
	},

	setContinents(props) {
		const { reports, continents } = props;
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

		this.setState({continents: newContinents});
		console.log(newContinents);
	},

	render() {
		const { texts, templateUrl, countriesTrans, continents } = this.props;

		let continentsList = [
			'afrika',
			'asia',
			'easterEurope',
			'latinAmerica',
			'middleEast',
			'northAmerica',
			'ocenia',
			'russiaCentralAsia',
			'westernEurope'
		];

		return (
			<div className={this.state.show ? "map__search_list map__search_list--show" : "map__search_list"}>
				<a href="#" className="map__search__close" onClick={this.toggleShow}><i className="ion-close"></i></a>
				<div className="col-md-6 col-sm-10" style={{ float: 'none', margin: '0 auto' }}>
					<h1 className="title-center title-line color-red">{texts.search_by_list}</h1>
					<div className="row">
						<div className="col-md-6">
						{continentsList.map(continent => 
							<List {...this.props} title={texts[continent]} reports={this.state.continents[continent]} />
						)}
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default SearchByContinent;