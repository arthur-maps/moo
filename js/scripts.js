var mapboxAccessToken = pk.eyJ1IjoiYXJ0aHVyLW1hcHMiLCJhIjoiY2p4NHZuem9hMGUwYTQ4bndxeHdkbmhnNiJ9.re1IdiuQLHc3Co4Wsc6Vcg;
var map = L.map('mapid').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: "© Mapbox"
}).addTo(map);

L.geoJson(statesData).addTo(map);
