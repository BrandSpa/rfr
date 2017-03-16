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
	getInitialState(){
		return {
			show: false,
			reports: []
		}
	},

	search(e) {
		let query = e.target.value;
		let results = [];
		if (query.length > 0) {

			results = this.props.reports.filter(pst => {
				let translation = this.props.countriesTrans[pst.meta_country];
				if (translation) {
					return translation.toLowerCase().indexOf(query.toLowerCase()) != -1
				}

			});

		} else {
			results = this.props.reports;
		}
		console.log(results);
	},

	getIcon(name) {
		return `${this.props.templateUrl}/public/img/icons/${name}.svg`
	},

	toggleShow() {
		this.setState({show: !this.state.show});
	},

	render() {
		const { texts, templateUrl } = this.props;
		const { reports } = this.state;

		return (
			<div className={this.state.show ? "map__search map__search--show" : "map__search" }>
				<a href="#" className="map__search__close" onClick={this.toggleShow}><i className="ion-close"></i></a>
  
			<div className="col-md-6 col-sm-10" style={{ float: 'none', margin: '0 auto' }}>
				<h1 className="title-center title-line color-red">{texts.search_by_country}</h1>

				<div className="row">
					<div className="col-md-6">
						<div className="map__search_input-container">
							<input type="text" onChange={this.search} className="map__search_input" />
						</div>

						<ul className="map__search_results">
								{reports.map((report, i) =>
									<li key={i}>
										<a href={report.guid}>{report.meta_country}</a>
										<span><img src={this.getIcon(report.meta_situation)} alt="" /></span>
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
										<img src={`${templateUrl}/public/img/icons/improved.svg`} alt="" />
										{texts.improved}
									</li>
									<li>
										<img src={`${templateUrl}/public/img/icons/unchanged.svg`} alt="" />
										{texts.unchanged}
									</li>
									<li>
										<img src={`${templateUrl}/public/img/icons/Worsened.svg`} alt="" />
										{texts.worsened}
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