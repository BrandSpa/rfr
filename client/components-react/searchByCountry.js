import React from 'react';

const SearchByCountry = React.createClass({
	getInitialState(){
		return {
			show: false,
			reports: [],
			allReports: []
		}
	},

	componentDidMount() {
		const btn = document.querySelector('.open-select-countries');
		if(btn) {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				this.toggleShow(e);
			});
		}
	
	},

	componentWillReceiveProps(props) {
		this.setState({reports: props.reports, allReport: props.reports});
	},

	search(e) {
		let query = e.target.value;
		let results = [];
		if (query.length > 0) {

		results = this.state.allReport.filter(pst => {
		let translation = this.props.countriesTrans[pst.meta_country];

				if (translation) {
					return translation.toLowerCase().indexOf(query.toLowerCase()) != -1
				}

			});

		} else {
			results = this.state.allReport;
		}

		this.setState({reports: results});
	},

	getIcon(name) {
		return `${this.props.templateUrl}/public/img/icons/${name}.svg`
	},

	toggleShow(e) {
		if(e) e.preventDefault();
		this.setState({show: !this.state.show});
	},

	getColor(situation) {
		if(situation == 'Discrimination') {
			return 'bg-discrimination';
		}

		if(situation == 'Persecution') {
			return 'bg-red';
		}

		return '';
	},

	render() {
		const { texts, templateUrl, countriesTrans } = this.props;
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
									<li key={i} className={this.getColor(report.meta_nature_persecution)}>
										<a href={report.guid}>{countriesTrans[report.meta_country] ? countriesTrans[report.meta_country] : report.meta_country}</a>
										<span><img src={this.getIcon(report.meta_situation)} alt="" /></span>
									</li>
								)}
						</ul>
					</div>
					<div className="col-md-6">
						<div className="row">
							<h5 className="color-red pull-left">{texts.nature_of_persecution}</h5>
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