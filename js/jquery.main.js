// init map
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$(function(){
	var mainNav = $("#main-nav");

	// Create the dropdown base
	$("<select />").appendTo(mainNav);

	var selectNew = mainNav.find('select');

	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Go to..."
	}).appendTo(selectNew);

	// Populate dropdown with menu items
	$("#main-nav a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo(selectNew);
	});

   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    selectNew.change(function() {
      window.location = $(this).find("option:selected").val();
    });	

    $("#carousel-example-generic").carousel({
		interval: 4000
	})

});

