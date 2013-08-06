
jQuery(document).ready(function() {
	// $('.the-popups').find('.image').magnificPopup({
	// 	type:'image',
	// 	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	// 	  zoom: {
	// 	    enabled: true, // By default it's false, so don't forget to enable it

	// 	    duration: 300, // duration of the effect, in milliseconds
	// 	    easing: 'ease-in-out'
	// 	  }
	// });

	$('#gm-letter-opener').on('click', function() {
		$('#guru-maharaj-letter').trigger('click');
	})

    $('#construction-status').magnificPopup({
      delegate: 'a.image-full',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>Parivartan Construction Status</small>';
        }
      }
    });
});
