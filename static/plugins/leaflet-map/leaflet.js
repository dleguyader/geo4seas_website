var mymap = L.map('mapid', {scrollWheelZoom: false})
    .setView(
        [48.4023305, -4.4125471],
        5
    );

// Normal extending
var customIcon = L.Icon.extend({
    options: {
		iconUrl: '/images/marker.png',
        iconSize:     [46, 40],
        iconAnchor:   [23, 39],
    }
});


L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFtaWVubGVnIiwiYSI6ImNrMDNzMDBuODF4dnQzaHByZ2w5M2JqaGsifQ.ogj06UEw_TQA3qlU1fgd0A',
    {
      maxZoom: 13,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/dark-v10'
    }
    ).addTo(mymap);

L.marker([48.4023305, -4.4125471], {icon: new customIcon}).addTo(mymap);

