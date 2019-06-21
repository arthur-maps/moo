var mapboxAccessToken = 'pk.eyJ1IjoiYXJ0aHVyLW1hcHMiLCJhIjoiY2p4NHdjNXJrMDI1azQ5bTRwOW5jc2F5bSJ9.OSGinHj1JWVuEHIe91Eikw';
   

var map = L.map('map', {
        minZoom: 5,
        maxZoom: 15
    });

//var map = L.map('mapid').setView([29.7, -82.3], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: "© Mapbox"
}).addTo(map);

map.setView([29.7, -82.3], 7);

//L.esri.tiledMapLayer({
 // url: 'https://tiles.arcgis.com/tiles/cDCsY3VB02CTTRKx/arcgis/rest/services/FL_strata_WGS1984/VectorTileServer',
  //maxZoom: 15
//}).addTo(map);

//for backgrounds really
//L.esri.Vector.layer('6f0044f50bd24142897d4955ee28f823').addTo(map);

  // a Leaflet marker is used by default to symbolize point features.
  L.esri.featureLayer({
    url: 'https://services5.arcgis.com/cDCsY3VB02CTTRKx/arcgis/rest/services/flstratnobounds/FeatureServer/0'
    
  }).addTo(map);
