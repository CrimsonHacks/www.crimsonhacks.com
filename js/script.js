(function($) {
	$('.answers').hide();

	// FAQs hover stuff
	$('.portfolio-item').mouseenter(function() {
		var id = $(this).attr('id');
		$('#'+id+' .caption .caption-content').animate({top: '15%'}, 500);
		// $('#'+id+' .caption .caption-content .answers').animate({display: "block"}, 500);
		$('#'+id+' .caption .caption-content .answers').show(500);
	})

	$('.portfolio-item').mouseleave(function() {
		var id = $(this).attr('id');
		$('#'+id+' .caption .caption-content').animate({top: '60%'}, 500);
		// $('#'+id+' .caption .caption-content .answers').animate({display: "none"}, 500);
		$('#'+id+' .caption .caption-content .answers').hide(500);
	})

})(jQuery);