import React from 'react';

const SearchByContinentList = React.createClass({
	getInitialState() {
		return {
			show: false
		}
	},

	getIcon(name) {
		return `${this.props.templateUrl}/public/img/icons/${name}.svg`
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

	toggleShow() {
		this.setState({show: !this.state.show});
	},

	render() {
		const { countriesTrans } = this.props;

		return (
    <button 
      className="bg-dark_jungle map__search__list_btn color-rolling-store"
			onClick={this.toggleShow}
		>
		{texts.africa}
		</button>

    <ul class="map__search_results" data-country="afrika" style="display: none">
     {reports.map(report => 
			 <li className="">
        <a href={report.guid}>{{countriesTrans[report.meta_country]}}</a>
        <span>
          <img src={this.getIcon(report.meta_situation)} alt="" />
        </span>
      </li>	 
		)}
    </ul>
		)
	}
});

export default SearchByContinentList;