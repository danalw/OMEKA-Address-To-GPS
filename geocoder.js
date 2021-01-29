if (!Omeka) {
    var Omeka = {};
}

Omeka.Themes = {};

(function ($) {
						
$(document).ready(function(){
});//end ready
				
		     
    
})(jQuery);

function Map_toggle(Object_id) {
					var full_name="GEO_texts"+Object_id;
					var x = document.getElementById(full_name);
				  if (x.style.display === "none") {
				    x.style.display = "block";
				  } else {
				    x.style.display = "none";
				  }
};


var geocoder;
var map;
var output_gps;
		
function Map_init(Object_id) {
	var full_map_name="map"+Object_id;	
	geocoder = new google.maps.Geocoder();
	
    var address = document.getElementById("address"+Object_id).value;  	
     	
	document.getElementById("map"+Object_id).setAttribute("style", "height:100px");
 	geocoder.geocode({
      'address': address
			 }, function (results, status) 
{
    if (status == google.maps.GeocoderStatus.OK) {
	    var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
		////
		var full_textarea_id; 
		full_textarea_id	= Object_id+"text";
		full_textarea_id = full_textarea_id.replace(/\]\[/g, "-");
    	full_textarea_id = full_textarea_id.replace(/\]\[|\[|\]/g, "-");
    	document.getElementById(full_textarea_id).value = address+"("+latitude+";"+longitude+")";
		};	   	
					   
	var latlng = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
    	zoom: 16,
    	center: latlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
    	}

	map = new google.maps.Map(document.getElementById('map'+Object_id), mapOptions);
	var latlng = new google.maps.LatLng(latitude, longitude);
	map.setCenter(latlng);
	var marker = new google.maps.Marker({
		map: map,
		position: latlng,
		draggable:false
	  });
  
	marker.addListener('drag', handleEvent);
	marker.addListener('dragend', handleEvent);
});
				
function handleEvent(event) {
	document.getElementById("answer"+Object_id).value =	event.latLng.lat()+", "+event.latLng.lng();
	document.getElementById("GEO_gps"+Object_id).value =	event.latLng.lat()+", "+event.latLng.lng();
}; 
							
};	
							