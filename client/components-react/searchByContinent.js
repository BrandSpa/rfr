import React from 'react';

const SearchByContinent = React.createClass({
	render() {
		return (
			<div class="map__search_list">
				<a href="#" class="map__search__close" onClick={this.close}><i class="ion-close"></i></a>
			<div class="col-md-6 col-sm-10" style={{float: 'none', margin: '0 auto'}}>
				<h1 class="title-center title-line color-red"><?php echo gett('SEARCH BY LIST') ?></h1>
				<div class="row">
					<div class="col-md-6">
						
					</div>
				</div>
			</div>
		</div>
		)
	}
});

export default SearchByContinent;