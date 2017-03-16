import React from 'react';
import qs from 'qs';
import MapHeader from './header'; 
import MapFooter from './footer';
import request from 'axios';
import setMap from '../../lib/setMap';
const endpoint = 'http://religious-freedom-report.org/wp-admin/admin-ajax.php';

const MapComponent = React.createClass({
	getInitialProps() {
		return {
			texts: {},
			images: {},
			templateUrl: ""
		}
	},

	componentDidMount() {
		let data = qs.stringify({ action: 'reports', data: { lang: 'es' } });
		let dataTranslations = qs.stringify({ action: 'countries_translations', data: { lang: 'es' } });

		let reqReports = request.post(endpoint, data);
		let reqTranslations = request.post(endpoint, dataTranslations);

		Promise.all([reqReports, reqTranslations])
			.then(res => {
				setMap(`${templateUrl}/public/img/map.svg`, res[0].data, 'en', res[1].data);
			});
	},

 	render() {
		const { texts, templateUrl } = this.props;

		return (
			<div>
				<div className="map__info" style={{position: 'absolute'}}> 
					<div className="map__info_country"></div>
					<div className="map__info_situation"></div>
				</div>
			<div className="map">
				<MapHeader {...this.props} />
				<div id="map-container">
					<div className="map__zoom_btns">
						<button className="zoom_btn zoom_reset">
							<img src={`${templateUrl}/public/img/r.svg`} alt="" />
						</button>
						<button className="zoom_btn zoom_more">
							<img src={`${templateUrl}/public/img/plus.svg`} alt="" />
						</button>
						<button className="zoom_btn zoom_less">
							<img src={`${templateUrl}/public/img/less.svg`} alt="" />
						</button>
					</div>
				</div>
				<MapFooter {...this.props} />
			</div>
			</div>
		)
	}
});

export default MapComponent;