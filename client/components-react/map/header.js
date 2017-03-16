import React from 'react';

const MapHeader = React.createClass({
	showSearchList(e) {
		e.preventDefault();
		console.log('showSearchList');
	},

	showSearch(e) {
		e.preventDefault();
		this.props.searchCountry.toggleShow();
		console.log('showSearch', this.props.searchCountry);
	},

	render() {
		const { texts } = this.props;
		return (
			<div className="row map__header">
				<div className="col-md-8">
					<h1 className="title title-line color-red">
					{texts.by_country}
					</h1>
					<p style={{color: '#fff'}}>
						{texts.header_subtitle}
					</p>
				</div>
				
				<div className="col-md-4 map__header__btns">
					<div className="col-xs-6">
						<button className="button button--fill" onClick={this.showSearchList}>{texts.list}</button>
					</div>

					<div className="col-xs-6">
						<div className="map__search_input-container">
							<button className="button button--fill map__search_click" onClick={this.showSearch}></button>
						</div>
					</div>
				</div>

			</div>
		)
	}
})

export default MapHeader;