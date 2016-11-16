'use strict';
import $ from 'jquery';

window.slider = function(params = {}) {
	const {sliderId, imageWidth, itemMargin, controlNav} = params;
	
	$(() => {
		$(`#${sliderId}`).flexslider({
			animation: "slide",
			animationLoop: true,
			smoothHeight: true,
			imageWidth,
			itemMargin,
			controlNav
		});
	});

}

export default slider;