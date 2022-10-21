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

// Activities
const pointA = { //Create a point
  type: "point",
  longitude: -111.81022,
  latitude: 43.83036
};
const attributesA = {
  Name: "The RockGym",
  Description: "An indoor rock climbing gym, also has a crossfit gym and yoga loft"
}
const pointGraphicA = new Graphic({
  geometry: pointA, 
  symbol: simpleMarkerSymbol,
  attributes: attributesA,
  popupTemplate: popupTemplate
});



graphicsLayer.add(pointGraphic);
graphicsLayer.add(pointGraphic_1);
graphicsLayer.add(pointGraphic_2);


graphicsLayer.add(pointGraphicA);


  // Create a line geometry
const polyline = {
  type: "polyline",
  paths: [
      [-118.821527826096, 34.0139576938577], //Longitude, latitude
      [-118.814893761649, 34.0080602407843], //Longitude, latitude
      [-118.808878330345, 34.0016642996246]  //Longitude, latitude
  ]
};
const simpleLineSymbol = {
  type: "simple-line",
  color: [226, 119, 40], // Orange
  width: 2
};

const polylineGraphic = new Graphic({
  geometry: polyline,
  symbol: simpleLineSymbol
});
graphicsLayer.add(polylineGraphic);

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
graphicsLayer.add(polygonGraphicR);

});