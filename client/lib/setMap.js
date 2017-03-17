import * as d3 from 'd3';
import $ from 'jquery';
import MobileDetect from 'mobile-detect';
import mousePosition from './get_mouse_position';

const colors = {
  'Persecution': '#FC3938',
  'Discrimination': '#FFC849',
  'Stable': '#E4E7EA',
};

function showInfo(info, report, bg = '#fff', name) {
	let { meta_country, meta_situation } = report;
	let $el = d3.select(info);
	let src = `/wp-content/themes/bs_report_theme/public/img/icons/${meta_situation}.svg`;
	name = name ? name : meta_country.replace(/-/g, ' ');
	$el.style('background', bg);
	$el.select('.map__info_country').text(name);
	$el.select('.map__info_situation img').attr('src', src);

	mousePosition(null)
		.then(p => {
			info.style.opacity = 1;
			info.style.top = (p.top - 80) + 'px';
			info.style.left = (p.left - 300) + 'px';
		});
}

function setStyle(el, fill) {
  el
  .style("transition", "all 300ms ease")
  .style("fill", fill);

  el.classed("animate-path", true);
}

function setStyleOut(el, fill) {
  el
  .style("transition", "all 300ms ease")
  .style("fill", fill);
   el.classed("animate-path", false); 
}

function appendMap(mapUrl, container) {
	return new Promise(function (resolve, reject) {
		d3.xml(mapUrl).mimeType("image/svg+xml").get((error, xml) => {
			if (error) return reject(error);
			container.appendChild(xml.documentElement);
			return resolve();
		});
	});
}

function showMapInfo(el, report, fill, name) {
	let info = document.querySelector('.map__info');

	el.on('mousemove', evt => {
		showInfo(info, report, fill, name);
		setStyle(el, fill);
	});

	el.on('mouseleave', evt => {
		setStyleOut(el, fill);
		info.style.opacity = 0;
	});
}

const getReport = (fn) => reports => reports.filter(fn)[0];

function redirectToReport(reports) {
	let $el = d3.select(this);
	let countryName = $el.attr("id").replace(/-/g, ' ');
	let report = getReport(report => report.meta_country == countryName)(reports);
	if (report && report.guid) {
		window.location = report.guid;
	}
}

function setCountryReport(reports) {
	let $el = d3.select(this);
	let countryName = $el.attr("id").replace(/-/g, ' ');
	let report = getReport(report => report.meta_country == countryName)(reports);
	if (report && report.meta_nature_persecution) {
		let fill = colors[report.meta_nature_persecution];
		$el.style("fill", fill);
	}
}

function getCountryInfo(reports, countriesTrans) {
	let $el = d3.select(this);
	let countryName = $el.attr("id").replace(/-/g, ' ');
	let report = getReport(report => report.meta_country == countryName)(reports);
	if (report && report.meta_nature_persecution) {
		let fill = colors[report.meta_nature_persecution];
		$el.style("cursor", "pointer");
		$el.style("fill", fill);
		console.log(countriesTrans, countryName);
		let name = countriesTrans[countryName] ? countriesTrans[countryName] : countryName;
		showMapInfo($el, report, fill, name);
	}
}

function setMap(mapUrl, reports, lang, countriesTrans) {
	let mapContainer = document.querySelector('#map-container');

	//default transform params
	let transformX = 0;
	let transformY = 0;
	let lastX = 0;
	let lastY = 0;
	let transformScale = 1;

	appendMap(mapUrl, mapContainer)
		.then(() => {
			let polygons = d3.select(mapContainer).selectAll("polygon");
			let paths = d3.select(mapContainer).selectAll("path");

			// d3.select("#map-container svg").call(zoomed);

			paths.each(function () {
				setCountryReport.call(this, reports);
			});

			polygons.each(function () {
				setCountryReport.call(this, reports)
			});

			paths.on('mousemove', function () {
				getCountryInfo.call(this, reports, countriesTrans)
			});

			polygons.on('mousemove', function () {
				getCountryInfo.call(this, reports, countriesTrans)
			});

			paths.on('click', function () {
				redirectToReport.call(this, reports)
			});

			polygons.on('click', function () {
				redirectToReport.call(this, reports)
			});

			let windowH;
			let windowW;

			//set map height
			if (window.innerWidth <= '767') {
				windowH = window.innerHeight / 2;
			} else {
				windowH = window.innerHeight;
				windowW = $('body').innerWidth();
			}

			d3.select("#map-container svg").attr('height', windowH);

			d3.select('.zoom_reset')
				.on('click', function () {
					transformScale = 1;
					lastX = 0;
					lastY = 0;
					transformX = 0;
					transformY = 0;

					d3.select("#map-container svg g")
						.transition()
						.duration(300)
						.attr('transform', 'translate(0,0) scale(1)');
				});

			d3.select('.zoom_more')
				.on('click', function () {
					let mapSVG = d3.select("#map-container svg g");
					transformScale = transformScale + 1;
					let box = d3.select("#map-container svg g").node().getBBox();
					let transform = mapSVG.attr("transform") ? mapSVG.attr("transform").replace(/scale\((.*?)\)/g, `scale(${transformScale})`) : `translate(0,0) scale(${transformScale})`;
					mapSVG
						.transition()
						.duration(300)
						.attr("transform", transform);
				});

			d3.select('.zoom_less')
				.on('click', function () {
					let mapSVG = d3.select("#map-container svg g");
					transformScale = transformScale > 1 ? transformScale - 1 : 1;
					let box = d3.select("#map-container svg g").node().getBBox();
					let transform = mapSVG.attr("transform") ? mapSVG.attr("transform").replace(/scale\((.*?)\)/g, `scale(${transformScale})`) : `translate(0,0) scale(${transformScale})`;
					mapSVG
						.transition()
						.duration(300)
						.attr("transform", transform);
				});

			d3.select("#map-container svg")
				.on("touchstart", () => {
					let groupMap = $('#map-container svg g');
					let elOffsetLeft = groupMap.offset().left;
					let elOffsetTop = groupMap.offset().top;
					let startX = d3.event.touches[0].clientX;
					let startY = d3.event.touches[0].clientY;
					d3.event.preventDefault();
					d3.select("#map-container svg")
						.on("touchmove", () => {
							let box = d3.select("#map-container svg g").node().getBBox();
							let w = box.width / 2;
							let h = box.height / 2;
							transformY = lastY + (d3.event.touches[0].clientY - startY); //(d3.event.touches[0].clientY - elOffsetTop) - startX
							transformX = lastX + (d3.event.touches[0].clientX - startX);
							d3.select("#map-container svg g")
								.attr("transform", `translate(${transformX}, ${transformY}) scale(${transformScale})`);
						})

					d3.select(window)
						.on('touchend', () => {
							d3.select(this).on("touchmove", null);
							lastX = transformX;
							lastY = transformY;
						});

				});

			d3.select("#map-container svg")
				.on("mousedown", function () {
					let groupMap = $('#map-container svg g');
					let elOffsetLeft = groupMap.offset().left;
					let elOffsetTop = groupMap.offset().top;
					let startX = d3.event.clientX;
					let startY = d3.event.clientY;
					d3.event.preventDefault();

					d3.select(this)
						.on("mousemove", () => {
							let box = d3.select("#map-container svg g").node().getBBox();
							let w = box.width / 2;
							let h = box.height / 2;
							transformY = lastY + (d3.event.clientY - startY); //(d3.event.clientY - elOffsetTop) - startX
							transformX = lastX + (d3.event.clientX - startX);
							d3.select(this).select('g').attr("transform", `translate(${transformX}, ${transformY}) scale(${transformScale})`);
						})

					d3.select(window)
						.on('mouseup', () => {
							d3.select(this).on("mousemove", null);
							lastX = transformX;
							lastY = transformY;
						});

				});

		})
};


export default setMap;