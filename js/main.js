var map = L.map('map', {
	minZoom: 6,
	zoomSnap: 1,
	zoomDelta: 1,
}).setView([49.272021, 31.437523], 6);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);


d3.json("/../all_tvo.geojson").then(function(data) {
	var geojson;

	geojson = L.geoJson(data, {
		style: style
		// onEachFeature: onEachFeature
	}).bindPopup(function (layer) {
		var text = 'Winner: ' + layer.feature.properties.winner + '<br>' +
							 'Party: ' + layer.feature.properties.proposed + '<br>' +
							 'Spread: ' + layer.feature.properties.spread

		return text;
	}).addTo(map);

});

function style(feature) {
	return {
		weight: 1,
		color: feature.properties.color,
		fillOpacity: feature.properties.spread,
		stroke: true, //by default
		//fillColor: feature.properties.color,
		//fillOpacity: feature.properties.spread
		//need to make a function here that takes the spread on a scale and
		//makes the color less opaque (add alpha) if its a small spread
	};
}
