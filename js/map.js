function initMap() {
	var qldLatLng = {lat: -20.917574, lng: 142.702789}; 
	var wakawakaLatLng = {lat:-26.178936, lng: 152.674535};
	var wakawakaString = '<div class="infoWindow" <p>Waka Waka<p><img src="images/base.jpg"></img></div>';

	var map = new google.maps.Map(document.getElementById('map'), {
		center: qldLatLng,
		zoom: 6
	});

	var wakawakaMarker = new google.maps.Marker({
		position: wakawakaLatLng,
		map: map,
		title: "Waka Waka"
	});

	var wakawakaWindow = new google.maps.InfoWindow({
		content: wakawakaString,
	});

	wakawakaMarker.addListener('click', function() {
		wakawakaWindow.open(map, wakawakaMarker);
	});
}