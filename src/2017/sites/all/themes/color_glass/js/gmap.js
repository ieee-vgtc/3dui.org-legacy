google.maps.event.addDomListener(window, 'load', init);
function init() {
	var iconBase = 'http://3dui.org/sites/all/themes/color_glass/css/images/';
	
	//var styleArray = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"http://3dui.org/sites/all/themes/color_glass/js/geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"http://3dui.org/sites/all/themes/color_glass/js/poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"http://3dui.org/sites/all/themes/color_glass/js/labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"http://3dui.org/sites/all/themes/color_glass/js/labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"http://3dui.org/sites/all/themes/color_glass/js/geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
	
	var styleArray = [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
];

	var myOptions = {
		zoom: 15,
		center: {lat: 33.89998, lng: -118.3904807},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: styleArray,
		mapTypeControl: 0,
        scrollwheel: 0
	};
	
	var map = new google.maps.Map(document.getElementById('map'), myOptions);
		
	//parking: iconBase + 'marker-car.png'
	//hotel: iconBase + 'marker-hyatt.png'
	//restaurant: iconBase + 'marker-restaurant.png'
	//park: iconBase + 'marker-park.png'
	//shop: iconBase + 'marker-shop.png'
	//coffeshop: iconBase + 'marker-coffee.png'		
		
	 var marker = new google.maps.Marker({
		 position: {lat: 33.89998, lng: -118.3904807},
		 icon: iconBase + 'marker-marriott.png',
		 map: map,
		 title: 'Manhattan Beach Marriott'
	 });	
	
	// var marker = new google.maps.Marker({
		// position: {lat: 34.8475951, lng: -82.4017112},
		// icon: iconBase + 'marker-museum.png',
		// map: map,
		// title: 'Peace Center for Performing Arts'
	// });
	
	// var marker = new google.maps.Marker({
		// position: {lat: 34.8450447, lng: -82.4016728},
		// icon: iconBase + 'marker-park.png',
		// map: map,
		// title: 'Reedy River Falls Historic Park'
	// });
	
	// var marker = new google.maps.Marker({
		// position: {lat: 34.8474781, lng: -82.3858749},
		// icon: iconBase + 'marker-zoo.png',
		// map: map,
		// title: 'Greenville Zoo'
	// });
	
	// var marker = new google.maps.Marker({
		// position: {lat: 34.8526055, lng: -82.3915301},
		// icon: iconBase + 'marker-ball.png',
		// map: map,
		// title: 'Bon Secours Wellness Arena'
	// });	
}