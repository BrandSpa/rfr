'use strict';
'use strict';
import Vue from 'vue';
import $ from 'jquery';

export default function slider(params = {}) {
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
