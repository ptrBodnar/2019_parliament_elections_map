var map = L.map('map', {
	minZoom: 6,
	zoomSnap: 0.5,
	zoomDelta: 0.5,
}).setView([49.272021, 31.437523], 6.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);

//var my_layer = d3.json("all_tvo.geojson").then(function(data) {
// 	var geojson;
//
// 	geojson = L.geoJson(data, {
// 		style: style
// 		// onEachFeature: onEachFeature
// 	}).bindPopup(function (layer) {
// 		// need to add functionality for TVO's with two "winners"
// 		//  want the popup to display both, side by side, !without probability!
// 		var text
// 		var tvo = layer.feature.properties.id;
// 		var oblast = layer.feature.properties.oblast;
// 		var winners = layer.feature.properties.winner;
// 		var parties = layer.feature.properties.proposed;
// 		var factions = layer.feature.properties.fraction;
//
// 		if (layer.feature.properties.winner.length>1) {
//
// 			text= "<table>" +
// 							"<tr>" +
// 								"<th>ТВО</th>" +
// 								"<td colspan='2'>" + "№" + tvo + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Область</th>" +
// 								"<td colspan='2'>" + oblast + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Переможці</th>" +
// 								"<td>" + winners[0] + "</td>" +
// 								"<td>" + winners[1] + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Партії</th>" +
// 								"<td>" + parties[0] + "</td>" +
// 								"<td>" + parties[1] + "</td>" +
// 							"</tr>" //+
// 						// 	"<tr>" +
// 						// 		"<th>Фракції</th>" +
// 						// 		"<td>" + factions[0] + "</td>" +
// 						// 		"<td>" + factions[1] + "</td>" +
// 						// 	"</tr>" +
// 						// "</table>"
//
// 		} else {
//
// 			text= "<table>" +
// 							"<tr>" +
// 								"<th>ТВО</th>" +
// 								"<td>" + "№" + tvo + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Область</th>" +
// 								"<td>" + oblast + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Переможець</th>" +
// 								"<td>" + winners[0] + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Партія</th>" +
// 								"<td>" + parties[0] + "</td>" +
// 							"</tr>"
// 		}
//
// 		return text;
//
// 	}, {maxWidth: "auto"}).addTo(map);
//
// });

// var geojsonLayer = new L.GeoJSON.AJAX("all_tvo.geojson",{
// 		style: style
// 		// onEachFeature: onEachFeature
// 	}
// ).bindPopup(function (layer) {
// 		// need to add functionality for TVO's with two "winners"
// 		//  want the popup to display both, side by side, !without probability!
// 		var text
// 		var tvo = layer.feature.properties.id;
// 		var oblast = layer.feature.properties.oblast;
// 		var winners = layer.feature.properties.winner;
// 		var parties = layer.feature.properties.proposed;
// 		var factions = layer.feature.properties.fraction;
//
// 		if (layer.feature.properties.winner.length>1) {
//
// 			text= "<table>" +
// 							"<tr>" +
// 								"<th>ТВО</th>" +
// 								"<td colspan='2'>" + "№" + tvo + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Область</th>" +
// 								"<td colspan='2'>" + oblast + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Переможці</th>" +
// 								"<td>" + winners[0] + "</td>" +
// 								"<td>" + winners[1] + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Партії</th>" +
// 								"<td>" + parties[0] + "</td>" +
// 								"<td>" + parties[1] + "</td>" +
// 							"</tr>" //+
// 						// 	"<tr>" +
// 						// 		"<th>Фракції</th>" +
// 						// 		"<td>" + factions[0] + "</td>" +
// 						// 		"<td>" + factions[1] + "</td>" +
// 						// 	"</tr>" +
// 						// "</table>"
//
// 		} else {
//
// 			text= "<table>" +
// 							"<tr>" +
// 								"<th>ТВО</th>" +
// 								"<td>" + "№" + tvo + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Область</th>" +
// 								"<td>" + oblast + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Переможець</th>" +
// 								"<td>" + winners[0] + "</td>" +
// 							"</tr>" +
// 							"<tr>" +
// 								"<th>Партія</th>" +
// 								"<td>" + parties[0] + "</td>" +
// 							"</tr>"
// 		}
//
// 		return text;
//
// 	}, {maxWidth: "auto"});
//
// geojsonLayer.addTo(map);

// trying a new way to load the polygons in based on party
var promise = $.getJSON("all_tvo.geojson");

promise.then(function(data) {
	function customPopupContent(layer) {
		// need to add functionality for TVO's with two "winners"
		//  want the popup to display both, side by side, !without probability!
		var text
		var tvo = layer.feature.properties.id;
		var oblast = layer.feature.properties.oblast;
		var winners = layer.feature.properties.winner;
		var parties = layer.feature.properties.proposed;
		var factions = layer.feature.properties.fraction;

		if (layer.feature.properties.winner.length>1) {
			text= "<table>" +
							"<tr>" +
								"<th>ТВО</th>" +
								"<td colspan='2'>" + "№" + tvo + "</td>" +
							"</tr>" +
							"<tr>" +
								"<th>Область</th>" +
								"<td colspan='2'>" + oblast + "</td>" +
							"</tr>" +
							"<tr>" +
								"<th>Переможці</th>" +
								"<td>" + winners[0] + "</td>" +
								"<td>" + winners[1] + "</td>" +
							"</tr>" +
							"<tr>" +
								"<th>Партії</th>" +
								"<td>" + parties[0] + "</td>" +
								"<td>" + parties[1] + "</td>" +
							"</tr>" //+
						// 	"<tr>" +
						// 		"<th>Фракції</th>" +
						// 		"<td>" + factions[0] + "</td>" +
						// 		"<td>" + factions[1] + "</td>" +
						// 	"</tr>" +
						// "</table>"

		} else {

			text= "<table>" +
							"<tr>" +
								"<th>ТВО</th>" +
								"<td>" + "№" + tvo + "</td>" +
							"</tr>" +
							"<tr>" +
								"<th>Область</th>" +
								"<td>" + oblast + "</td>" +
							"</tr>" +
							"<tr>" +
								"<th>Переможець</th>" +
								"<td>" + winners[0] + "</td>" +
							"</tr>" +
							"<tr>" +
								"<th>Партія</th>" +
								"<td>" + parties[0] + "</td>" +
							"</tr>"
		}

		return text;
	};

	var servantOfThePeople = L.geoJson(data, {
		filter: function(feature, layer) {
			return feature.properties.proposed.includes("СН");
		},
		style: function(feature) {
			return (style(feature, mainParty = "СН"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var oppositionPlatform = L.geoJson(data, {
		filter: function(feature, layer) {
			return feature.properties.proposed.includes("ОПЗЖ");
		},
		style: function(feature) {
			return (style(feature, mainParty = "ОПЗЖ"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var unaffiliated = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.proposed.includes("самовисування") || feature.properties.proposed.includes("Other") );
		},
		style: function(feature) {
			return (style(feature, mainParty = "самовисування"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var europeanSolidarity = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.proposed.includes("ЄС"));
		},
		style: function(feature) {
			return (style(feature, mainParty = "ЄС"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var voiceParty = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.proposed.includes("Голос"));
		},
		style: function(feature) {
			return (style(feature, mainParty = "Голос"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var fatherlandParty = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.proposed.includes("ВОБ"));
		},
		style: function(feature) {
			return (style(feature, mainParty = "ВОБ"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var oppositionBlock = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.proposed.includes("ОПОБЛОК"));
		},
		style: function(feature) {
			return (style(feature, mainParty = "ОПОБЛОК"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var freedomParty = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.proposed.includes("Свобода"));
		},
		style: function(feature) {
			return (style(feature, mainParty = "Свобода"));
		},
		onEachFeature: function (feature, layer) {
    	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	}
	});

	var nonGovControlled = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.proposed.includes(""));
		},
		style: function(feature) {
			return (style(feature, mainParty = ""));
		},
		// onEachFeature: function (feature, layer) {
    // 	layer.bindPopup(customPopupContent(layer), {maxWidth: "auto"});
  	// }
	});

	// servantOfThePeople.addTo(map)
	// oppositionPlatform.addTo(map)
	// unaffiliated.addTo(map)
	// europeanSolidarity.addTo(map)
	// voiceParty.addTo(map)
	// fatherlandParty.addTo(map)
	// oppositionBlock.addTo(map)
	// freedomParty.addTo(map)
	// nonGovControlled.addTo(map)

	// var partyLayers = {
	// 	"<div class='color-box' id='SN'></div>Слуга Народу": servantOfThePeople,
	// 	"<div class='color-box' id='OP'></div>Опозиційна платформа": oppositionPlatform,
	// 	"<div class='color-box' id='Un'></div>Безпартійний": unaffiliated,
	// 	"<div class='color-box' id='ES'></div>Європейська Солідарність": europeanSolidarity,
	// 	"<div class='color-box' id='VP'></div>Голос": voiceParty,
	// 	"<div class='color-box' id='FP'></div>Батьківщина": fatherlandParty,
	// 	"<div class='color-box' id='OB'></div>ОпоБлок": oppositionBlock,
	// 	"<div class='color-box' id='FP'></div>Свобода": freedomParty
	// }

	var groupedOverlays = {	"Партії":
	{
		"<div class='color-box' id='SN'></div>Слуга Народу": servantOfThePeople,
		"<div class='color-box' id='OP'></div>Опозиційна платформа": oppositionPlatform,
		"<div class='color-box' id='Un'></div>Безпартійний": unaffiliated,
		"<div class='color-box' id='ES'></div>Європейська Солідарність": europeanSolidarity,
		"<div class='color-box' id='VP'></div>Голос": voiceParty,
		"<div class='color-box' id='FP'></div>Батьківщина": fatherlandParty,
		"<div class='color-box' id='OB'></div>ОпоБлок": oppositionBlock,
		"<div class='color-box' id='FP'></div>Свобода": freedomParty
	}
	};

  // L.control.layers(null, partyLayers,{collapsed:false}).addTo(map);

	L.control.groupedLayers(null, groupedOverlays,{collapsed:false, groupCheckboxes:true}).addTo(map);
	nonGovControlled.addTo(map)

	// for (party in groupedOverlays['Партії']) {
	// 	groupedOverlays['Партії'][party].addTo(map)
	// }

	//hard coding the inital click to select all groups because this package
	//doesn't explain how to select all and have the group box automatically checked
	$('.leaflet-control-layers-group-selector').click();


});

var polygonPatterns = {};
var tvosFilled = {}

var Colors = {
    "самовисування": '#c4c4c4',
    "СН": "#00B140",
    "ЄС": "#1071F4",
    "ОПЗЖ": "#0050A3",
    "Голос": "#ED6C00",
    "ВОБ": "#EE2136",
    "ОПОБЛОК": "#29388B",
    "Свобода": "#00682c",
    "Other": "#c4c4c4",
		'': "#333333",
}

function style(feature, mainParty) {


	var parties = feature.properties.proposed
	// a code to replace "Other" with samo
	var index = parties.indexOf("Other");
	if (index !== -1) {
    parties[index] = "самовисування";
	}

	colors = feature.properties.color
	color = "white" //stroke color
	tvo = feature.properties.id

	if (parties.length > 1) {
		// the start of the stripe code (if there is more than one winner)
		var partyIndex = parties.indexOf(mainParty)
		var patternName = mainParty + partyIndex
		var first = (partyIndex == 0)

		var unique = true
		if (parties[0] == parties[1]) {
			unique = false
			patternName = mainParty + mainParty
		}

		//create the pattern if it doesn't exist
		if (polygonPatterns [patternName] === undefined ) {
			polygonPatterns[ patternName ] = new L.StripePattern({
				//2 stripes defined as color + space
				color: Colors[parties[0]],
				spaceColor: Colors[parties[1]],
				opacity: unique ? (first ? 1 : 0) : 1, //if the parties are the same
				spaceOpacity: unique ? (first ? 0 : 1) : 1, //then both are opaque
				angle: -45
			});
			//patterns must be added to the map before use
			polygonPatterns[ patternName ].addTo( map );
		}
		return {
			fillPattern: polygonPatterns[ patternName ],
			color: color,
			weight: 0.5,
			fillOpacity: 1,
		}
	} else {
		// the code that runs if we predict a non-contested TVO
		fillColor = Colors[parties[0]];
		color = color;
		if (fillColor === undefined) {
			fillColor = Colors[''];
			color = "black";
		}

		return {
			weight: 0.5,
			color: color,
			fillColor: fillColor,
			opacity: (feature.properties.spread[0]/1.5)+0.6,
			fillOpacity: 1, //feature.properties.spread[0], //(feature.properties.spread/1.5)+0.3,
			stroke: true, //by default
			//fillColor: feature.properties.color,
			//fillOpacity: feature.properties.spread
			//need to make a function here that takes the spread on a scale and
			//makes the color less opaque (add alpha) if its a small spread
		};
	}

}

// add functionality for buttons with party names
// which when clicked "turn on" or "turn off" those layers (polygons where they win)
// the idea is to just change the styling, perhaps the fill color to the same gray
// as Crimea/Donbas, and the stroke color to the sam

// document.getElementById("map").addEventListener("click", function(){
// 	geojsonLayer.eachLayer(function(layer) {
// 	  layer.setStyle({fillColor :'blue'});
// 	},
// 	console.log("made them blue"));
// });
