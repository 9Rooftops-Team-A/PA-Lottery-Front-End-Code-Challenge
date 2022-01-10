var paltabs = (function($){
	"use strict";

	//Remove tabActive status from all tabs but the first content tab
	$('.tab:gt(0)').removeClass('tabActive');

	//Main Tab Transition
	$('#game-tabs li a').on('click', function(e){
		e.preventDefault();
		let tabSelected = $(this);
		let tabHref = $(this).attr('href');

		if($(tabSelected).hasClass('active')) {
			slideToLoc(tabHref);
		}
		else {
			//Toggle Tab Active Status from Tab Menu
			$('#game-tabs li a').not(tabSelected).removeClass('active');
			$(tabSelected).addClass('active');

			//Toggle Tab Content Display
			$('.tab:not(' + tabHref + ')').removeClass('tabActive');
			$(tabHref).addClass('tabActive');
		}
	});

	//UTILITY FUNCTIONS
	function slideToLoc(sectionId){
		let theAnchor = $(sectionId).offset();
		$('html, body').animate({scrollTop:theAnchor.top}, 500);
	}

	//RETURNS
	return {
		slideToLoc : slideToLoc
	};

}
)(jQuery);
