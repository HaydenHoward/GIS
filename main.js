require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/Graphic",
  "esri/layers/GraphicsLayer"

  ], function(esriConfig,Map, MapView, Graphic, GraphicsLayer) {

esriConfig.apiKey = "AAPK45b0b15f73ca4867b040ee5823c098189B0aQLUxNCTn-hnTXg6KtV008XbHRDYgJeN2PsBk-xgMNlBmWTluRvBAcBhxZw1Y";
;

const map = new Map({
  basemap: "arcgis-topographic" //Basemap layer service
});

const view = new MapView({
  map: map,
  center: [-111.79065,43.81490], //Longitude, latitude
  zoom: 13,
  container: "viewDiv"
});

const graphicsLayer = new GraphicsLayer();
map.add(graphicsLayer);

const popupTemplate = {
  title: "{Name}",
  content: "{Description}"
}

const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [226, 119, 40],  // Orange
  outline: {
      color: [255, 255, 255], // White
      width: 1
  }
};

// restruants
const point = { //Create a point
  type: "point",
  longitude: -111.78129,
  latitude: 43.82464
};
const attributes = {
  Name: "Millhollow",
  Description: "A simple sandwich shop that also serves various kinds of icecream"
}
const pointGraphic = new Graphic({
  geometry: point, 
  symbol: simpleMarkerSymbol,
  attributes: attributes,
  popupTemplate: popupTemplate
});
const point_1 = { //Create a point
  type: "point",
  longitude: -111.78933,
  latitude: 43.82165
};
const attributes_1 = {
  Name: "Righteous Slice",
  Description: "A fire oven pizza place that does regular and dessert pizzas. They also sell milkshakes"
}
const pointGraphic_1 = new Graphic({
  geometry: point_1, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_1,
  popupTemplate: popupTemplate
});

const point_2 = { //Create a point
  type: "point",
  longitude: -111.78802,
  latitude: 43.82203
};
const attributes_2 = {
  Name: "Kiwi Loco",
  Description: "A frozen yogurt place"
}
const pointGraphic_2 = new Graphic({
  geometry: point_2, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_2,
  popupTemplate: popupTemplate
});

const point_3 = { //Create a point
  type: "point",
  longitude: -111.78357,
  latitude: 43.82502
};
const attributes_3 = {
  Name: "Gringo's Mexican Restruant",
  Description: "A Mexican Restruant"
}
const pointGraphic_3 = new Graphic({
  geometry: point_3, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_3,
  popupTemplate: popupTemplate
});

const point_4 = { //Create a point
  type: "point",
  longitude: -111.77879,
  latitude: 43.83631
};
const attributes_4 = {
  Name: "The Hickory",
  Description: "Laid-back dining spot for BBQ and hamburgers"
}
const pointGraphic_4 = new Graphic({
  geometry: point_4, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_4,
  popupTemplate: popupTemplate
});
const point_5 = { //Create a point
  type: "point",
  longitude: -111.78845,
  latitude: 43.82508
};
const attributes_5 = {
  Name: "Red Rabbit Grill",
  Description: "A nice restruant the serves breakfast, lunch, and dinner. The have a big menu with many different options"
}
const pointGraphic_5 = new Graphic({
  geometry: point_5, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_5,
  popupTemplate: popupTemplate
});
const point_6 = { //Create a point
  type: "point",
  longitude: -111.78885,
  latitude: 43.81825
};
const attributes_6 = {
  Name: "Da Pineapple Grill",
  Description: "A Hawaiin restruant the serves sushi and grilled dishes. "
}
const pointGraphic_6 = new Graphic({
  geometry: point_6, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_6,
  popupTemplate: popupTemplate
});
const point_7 = { //Create a point
  type: "point",
  longitude: -111.78852,
  latitude: 43.82166
};
const attributes_7 = {
  Name: "Rocky Mountain Chocolate Fatory",
  Description: "A store that sells choclates and other things similiar."
}
const pointGraphic_7 = new Graphic({
  geometry: point_7, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_7,
  popupTemplate: popupTemplate
});
const point_8 = { //Create a point
  type: "point",
  longitude: -111.78337,
  latitude: 43.82584
};
const attributes_8 = {
  Name: "Original Thai",
  Description: "A Thai food restruant with varying spice levels"
}
const pointGraphic_8 = new Graphic({
  geometry: point_8, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_8,
  popupTemplate: popupTemplate
});
const point_9 = { //Create a point
  type: "point",
  longitude: -111.78425,
  latitude: 43.82438
};
const attributes_9 = {
  Name: "K-Lani's",
  Description: "Serves drinks and different kinds of italian ice and custard"
}
const pointGraphic_9 = new Graphic({
  geometry: point_9, 
  symbol: simpleMarkerSymbol,
  attributes: attributes_9,
  popupTemplate: popupTemplate
});
// Activities
const pointA = { //Create a point
  type: "point",
  longitude: -111.81022,
  latitude: 43.83036
};
const attributesA = {
  Name: "The RockGym",
  Description: "An indoor rock climbing gym, also has a crossfit gym and yoga loff"
}
const pointGraphicA = new Graphic({
  geometry: pointA, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA,
  popupTemplate: popupTemplate
});
const pointA_1 = { //Create a point
  type: "point",
  longitude: -111.96644,
  latitude: 43.78960
};
const attributesA_1 = {
  Name: "R Mountain",
  Description: "A nice mountain trail hike."
}
const pointGraphicA_1 = new Graphic({
  geometry: pointA_1, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA_1,
  popupTemplate: popupTemplate
});
const pointA_2 = { //Create a point
  type: "point",
  longitude: -111.78070,
  latitude: 43.83596
};
const attributesA_2 = {
  Name: "Fat Cats Rexburg",
  Description: "Entertainment center features bowling, glow golf, arcade games & a movie theater, plus food & drink."
}
const pointGraphicA_2 = new Graphic({
  geometry: pointA_2, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA_2,
  popupTemplate: popupTemplate
});
const pointA_3 = { //Create a point
  type: "point",
  longitude: -111.79550,
  latitude: 44.00314
};
const attributesA_3 = {
  Name: "St. Anthony Sand Dunes",
  Description: "A great place to have a fire or look at the stars at night"
}
const pointGraphicA_3 = new Graphic({
  geometry: pointA_3, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA_3,
  popupTemplate: popupTemplate
});
const pointA_4 = { //Create a point
  type: "point",
  longitude: -111.72260,
  latitude: 43.51913
};
const attributesA_4 = {
  Name: "Ririe Reservoir",
  Description: "A great body of water great for a fun time on the water."
}
const pointGraphicA_4 = new Graphic({
  geometry: pointA_4, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA_4,
  popupTemplate: popupTemplate
});
const pointA_5 = { //Create a point
  type: "point",
  longitude: -111.21253,
  latitude: 43.39797
};
const attributesA_5 = {
  Name: "Palisades Creek Trailhead",
  Description: "A great hike that goes to a Lower and Upper Palisade Lake. You can camp or just do a day hike."
}
const pointGraphicA_5 = new Graphic({
  geometry: pointA_5, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA_5,
  popupTemplate: popupTemplate
});
const pointA_6 = { //Create a point
  type: "point",
  longitude: -111.71784,
  latitude: 43.65916
};
const attributesA_6 = {
  Name: "Cress Creek Nature Trail",
  Description: "A simple hike with the beginning being a paved trail. "
}
const pointGraphicA_6 = new Graphic({
  geometry: pointA_6, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA_6,
  popupTemplate: popupTemplate
});
const pointA_7 = { //Create a point
  type: "point",
  longitude: -111.80104,
  latitude: 43.83439
};
const attributesA_7 = {
  Name: "Nature Park",
  Description: "A serene area for fishing a disc golf "
}
const pointGraphicA_7 = new Graphic({
  geometry: pointA_7, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA_7,
  popupTemplate: popupTemplate
});
// Restaurants
graphicsLayer.add(pointGraphic);
graphicsLayer.add(pointGraphic_1);
graphicsLayer.add(pointGraphic_2);
graphicsLayer.add(pointGraphic_3);
graphicsLayer.add(pointGraphic_4);
graphicsLayer.add(pointGraphic_5);
graphicsLayer.add(pointGraphic_6);
graphicsLayer.add(pointGraphic_7);
graphicsLayer.add(pointGraphic_8);
graphicsLayer.add(pointGraphic_9);

// Activities
graphicsLayer.add(pointGraphicA);
graphicsLayer.add(pointGraphicA_1);
graphicsLayer.add(pointGraphicA_2);
graphicsLayer.add(pointGraphicA_3);
graphicsLayer.add(pointGraphicA_4);
graphicsLayer.add(pointGraphicA_5);
graphicsLayer.add(pointGraphicA_6);
graphicsLayer.add(pointGraphicA_7);

  // Create a line geometry
// const polyline = {
//   type: "polyline",
//   paths: [
//       [-118.821527826096, 34.0139576938577], //Longitude, latitude
//       [-118.814893761649, 34.0080602407843], //Longitude, latitude
//       [-118.808878330345, 34.0016642996246]  //Longitude, latitude
//   ]
// };
// const simpleLineSymbol = {
//   type: "simple-line",
//   color: [226, 119, 40], // Orange
//   width: 2
// };

// const polylineGraphic = new Graphic({
//   geometry: polyline,
//   symbol: simpleLineSymbol
// });
// graphicsLayer.add(polylineGraphic);

// Create a polygon geometry
const simpleFillSymbol = {
  type: "simple-fill",
  color: [227, 139, 79, 0.8],  // Orange, opacity 80%
  outline: {
      color: [255, 255, 255],
      width: 1
  }
};

// Large Recratrional areas
const polygon = {
  type: "polygon",
  rings: [
      [-111.78960, 43.82190], //Longitude, latitude
      [-111.78960, 43.82392], //Longitude, latitude
      [-111.79237, 43.82392], //Longitude, latitude
      [-111.79237, 43.82190], //Longitude, latitude
      // [-111.78960, 43.82190], //Longitude, latitude
  ]
};
const attributesR = {
  Name: "Porter Park",
  Description: "A Park with courts for sports, plenty of tress, and sitting areas. Would be great for a nice time outside."
}
const polygonGraphicR = new Graphic({
  geometry: polygon,
  symbol: simpleFillSymbol,
  attributes: attributesR,
  popupTemplate: popupTemplate
});

const polygon_1 = {
  type: "polygon",
  rings: [
      [-111.78266, 43.81586], //Longitude, latitude
      [-111.78237, 43.81643], //Longitude, latitude
      [-111.78061, 43.81639], //Longitude, latitude
      [-111.78062, 43.81520], //Longitude, latitude
      [-111.78230, 43.81502], //Longitude, latitude
  ]
};
const attributesR_1 = {
  Name: "Thomas E. Ricks Gardens",
  Description: "A nice quite garden on the campus of BYU-I. "
}
const polygonGraphicR_1 = new Graphic({
  geometry: polygon_1,
  symbol: simpleFillSymbol,
  attributes: attributesR_1,
  popupTemplate: popupTemplate
});

graphicsLayer.add(polygonGraphicR);
graphicsLayer.add(polygonGraphicR_1);


});