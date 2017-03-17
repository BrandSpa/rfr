import React from 'react';
import List from './searchByContinentList';

const SearchByContinent = React.createClass({
	render() {
		const { texts, templateUrl, countriesTrans, continents } = this.props;

		return (
			<div className="map__search_list">
				<a href="#" className="map__search__close" onClick={this.close}><i className="ion-close"></i></a>
				<div className="col-md-6 col-sm-10" style={{ float: 'none', margin: '0 auto' }}>
					<h1 className="title-center title-line color-red">{texts.search_by_list}</h1>
					<div className="row">
						<div className="col-md-6">
							<List {...this.props} />
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default SearchByContinent;