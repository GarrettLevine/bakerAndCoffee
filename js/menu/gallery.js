//********************************************************
// CHANGE GALLERY LIST ITEM CLASSES
//********************************************************
var galleryItem = ".albumList__albumItem a";

//class switch function
function classSwitch(item) {
	//grab parent of clicked item and apply new class
	$(item).parent().addClass("albumList__albumItem--selected");
	//remove a class from the siblings of the parents
	$(item).parent().siblings().removeClass("albumList__albumItem--selected");
}

//**************************************
// FUNCTIONS
//**************************************

$(document).ready(function() {
 $(galleryItem).on( 'click', function() {
    event .preventDefault();
    // the AJAX part
   var flickerAPI =  $.getJSON("http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=" + apiKey + "&user_id=29096781@N02&per_page=12&page=4&format=json&jsoncallback=?");
	var apiKey = "d0ba9b88378b2c37ab129a6ae0e86aed";
	var tagSearch = $(this).text();
    var flickrOptions = {
      tags: tagSearch,
      format: "json"
    };
    function displayPhotos(data) {
      $.each(data.items,function() {
        $('.galleryImage').attr('src', photo.media.m);
      }); // end each
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); // end click
}); // end ready


$(document).ready(function() {
	$(galleryItem).on('click', function() {
		event.preventDefault();
		classSwitch(this);
		console.log($(this).text());
	}); //end of on.click
}); // end ready
















