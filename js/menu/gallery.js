//********************************************************
// CHANGE GALLERY LIST ITEM CLASSES
//********************************************************
var galleryItem = ".albumList__albumItem a";

var loadingOverlay = '<div class="galleryArea__loadingOverlay"><div class="cssload-thecube "><div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div></div></div>'


//class switch function
function classSwitch(item) {
	//grab parent of clicked item and apply new class
	$(item).parent().addClass("albumList__albumItem--selected");
	//remove a class from the siblings of the parents
	$(item).parent().siblings().removeClass("albumList__albumItem--selected");
}
function overlayFadeIn() {
	$(document).ajaxStart( function() {
		$(".galleryArea__imageContainer").fadeOut('fast', function() {
			$(this).html(loadingOverlay).fadeIn('fast');
		});
	});
}
function overlayFadeOut() {
	$(document).ajaxStop( function() {
		$(".galleryArea__loadingOverlay").fadeOut("slow");
	});
}


//**************************************
// FUNCTIONS
//**************************************

function galleryRequest(tag) {
	$.ajax({
	url: "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=d0ba9b88378b2c37ab129a6ae0e86aed&format=json&tags=" + tag + "&per_page=9&content_type=1",
	method: 'GET',
	dataType: 'jsonp',
	jsonp: 'jsoncallback',
	}).then(function(data) {
			var galleryList = ""
			data.photos.photo.forEach(function(item) {
				var imageURL="https://farm"+ item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
				galleryList += "<div class='imageContainer__galleryImage'>";
				galleryList += "<img class='galleryImage' ";
				galleryList += "src='" + imageURL + "' /></div>";
		});
		 $('.galleryArea__imageContainer').fadeOut('fast', function() {
		 		$(this).html(loadingOverlay).fadeIn('fast').delay(1500).fadeOut('fast', function() {
		 			$('.galleryArea__imageContainer').fadeIn('fast').html(galleryList);
		 		});
		 });
	}); 
}

$(galleryItem).on('click', function() {
	//prevents links from default action
	event.preventDefault();
	//switch the classes
	classSwitch(this);
	var searchTag = $(this).text();
	//load the loading overlay
	// overlayFadeIn();
	// overlayFadeOut();
	galleryRequest(searchTag);
			
	// galleryRequest(searchTag);
});
