
var mymap = L.map('mapid').setView([29.706, -82.34], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiYXJ0aHVyLW1hcHMiLCJhIjoiY2p4NHY4dTA0MGFyaTQwcGN1Z2s4aG5rNyJ9.Vrd6-12La3xfYSoym0aASA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
