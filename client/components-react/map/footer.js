import React from 'react';

const MapFooter = React.createClass({
	render() {
		const { texts, templateUrl } = this.props;
		return (
			<div className="row map__footer hidden-xs">
				<div className="col-md-6 map_list">
					<h5 className="color-red pull-left">{texts.footerTitle}</h5>
					<ul className="map_list_exp">
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

				<div className="col-md-6 map_list">
					<h5 className="color-red pull-left">{texts.situation}</h5>
					<ul className="map_list_exp">
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
		)
	}
});

export default MapFooter;