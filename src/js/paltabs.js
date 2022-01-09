var paltabs = (function($){
	"use strict";

	$('.tab:gt(0)').css('display', 'none');

	$('#game-tabs li a').on('click', function(e){
		e.preventDefault();
		let tabSelected = $(this).attr('href');

		//Toggle Tab Active Status
		$('#game-tabs li a:not(' + tabSelected + ')').removeClass('active');
		$(this).addClass('active');

		//Toggle Tab Content Display
		$('.tab:not(' + tabSelected + ')').css('display', 'none');
		$(tabSelected).css('display', 'block');
	});

	//FUNCTIONS
	function alertMe() {
		alert('Found');
	}

	//RETURNS
	return {
		alertMe : alertMe
	};

}
)(jQuery);
