var mapboxAccessToken = 'pk.eyJ1IjoiYXJ0aHVyLW1hcHMiLCJhIjoiY2p4N3AxMnl2MGN0MzN6bnlmbmdmcDhoZiJ9.djwTs9srm-zxsnYutHopNw';
   

var map = L.map('mapid', {
        minZoom: 6,
        maxZoom: 12
    });

//var map = L.map('mapid').setView([28.5, -81.6], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: "© Mapbox"
}).addTo(map);

map.setView([28.0, -82.8], 6.5);

//L.esri.tiledMapLayer({
 // url: 'https://tiles.arcgis.com/tiles/cDCsY3VB02CTTRKx/arcgis/rest/services/FL_strata_WGS1984/VectorTileServer',
  //maxZoom: 15
//}).addTo(map);

//for backgrounds really
//L.esri.Vector.layer('6f0044f50bd24142897d4955ee28f823').addTo(map);

 //a Leaflet marker is used by default to symbolize point features.
 var strata = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/cDCsY3VB02CTTRKx/arcgis/rest/services/FL_strata_definitions/FeatureServer',
     simplifyFactor: 0.35,
   precision: 5,
     style: function (feature) {
      if(feature.properties.Strata === 17){
      return { fillOpacity:0.7 };
      } else if(feature.properties.Strata === 18){
      return { fillOpacity:0.7 };
      } else if(feature.properties.Strata === 13){
      return { fillOpacity:0.7 };
      } else if(feature.properties.Strata === 21){
      return { fillOpacity:0.7 };
      } else if(feature.properties.Strata === 22){
      return { fillOpacity:0.7 };
      } else if(feature.properties.Strata === 27){
      return { fillOpacity:0.7 };
      } else if(feature.properties.Strata === 31){
      return { fillOpacity: 0 };
      } else if(feature.properties.Strata === 32){
      return { fillOpacity: 0 };
      } else if(feature.properties.Strata === 40){
      return { fillOpacity: 0 };
      } else if(feature.properties.Strata === 42){
      return { fillOpacity: 0 };
      } else if(feature.properties.Strata === 50){
      return { fillOpacity: 0 };
      } else if(feature.properties.Strata === 62){
      return { fillOpacity: 0 };
      } 
   }
  }).addTo(map);

 strata.bindPopup(function (layer) {
    return L.Util.template('<p>{Stratum}<br>{Definition}</p>', layer.feature.properties);
  });

//L.esri.tiledMapLayer({
 //  url: 'https://tiles.arcgis.com/tiles/cDCsY3VB02CTTRKx/arcgis/rest/services/flcrops/MapServer'
//}).addTo(map);

