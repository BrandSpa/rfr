import React from 'react';
// <?php echo gett('SEARCH BY COUNTRY') ?>
//<?php echo gett('NATURE OF PERSECUTION') ?>
/**
 * "{
		'bg-discrimination': isDiscrimination(item.meta_nature_persecution),
    'bg-red': isPersecution(item.meta_nature_persecution),
  	'selected': isSelected($index)
}"
*/

const SearchByCountry = React.createClass({
	search() {
		console.log('nea');
	},

	getIcon(name) {
		return `${this.props.templateUrl}/public/img/icons/${name}.svg`
	},

	close() {

	},

	render() {
		const { texts, templateUrl } = this.props;

		return (
			<div className="map__search">
				<a href="#" className="map__search__close" onClick={this.close}><i className="ion-close"></i></a>
  
			<div className="col-md-6 col-sm-10" style={{ float: 'none', margin: '0 auto' }}>
				<h1 className="title-center title-line color-red">{texts.search_by_country}</h1>

				<div className="row">
					<div className="col-md-6">
						<div className="map__search_input-container">
							<input type="text" onChange={this.search} className="map__search_input" />
						</div>

						<ul className="map__search_results">
							{this.props.reports.map((report, i) => 
								<li key={i}>
									<a href={report.guid}>{report.meta_country}</a>
									<span> <img src={this.getIcon(report.meta_situation)} alt="" /> </span>
								</li>
							)}
						</ul>
					</div>
					<div className="col-md-6">
						<div className="row">
							<h5 className="color-red pull-left"></h5>
							<ul className="map__search__list">
									<li>
										<img src={`${templateUrl}/public/img/icons/Persecution.svg`} alt="" />
										{texts.persecution}
									</li>

									<li>
										<img src={`${templateUrl}/public/img/icons/Discrimination.svg`} alt="" />
										{texts.discrimination}

									</li>

									<li>
										<img src={`${templateUrl}/public/img/icons/Stable.svg`} alt="" />
										{texts.stable}
									</li>
							</ul>
						</div>

						<div className="row">
							<h5 className="color-red pull-left">{texts.situation}</h5>
							<ul className="map__search__list">
									<li>
										<img src={`${templateUrl}/public/img/icons/Persecution.svg`} alt="" />
										{texts.persecution}
									</li>

									<li>
										<img src={`${templateUrl}/public/img/icons/Discrimination.svg`} alt="" />
										{texts.discrimination}

									</li>

									<li>
										<img src={`${templateUrl}/public/img/icons/Stable.svg`} alt="" />
										{texts.stable}
									</li>
							</ul>
						</div>
					</div>
				</div >


			</div >
  </div >

		)
	}
});

export default SearchByCountry;