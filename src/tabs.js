//Hide and show tabs when user clicks href
function tabs() {
	var $winningNumbersLI = $('#winningnumbersli');
  var $howToPlayLI = $('#howToPlayLI');
	var $winningNumbersTab = $('#winningnumberstab');
	var $howToPlayTab = $('#howtoplaytab');

  if ($winningNumbersLI.children().hasClass('active')) {
    $winningNumbersLI.children().removeClass('active');
    $winningNumbersTab.addClass('hide');
    $howToPlayLI.children().addClass('active');
    $howToPlayTab.removeClass('hide');
  } else {
    $howToPlayLI.children().removeClass('active');
    $howToPlayTab.addClass('hide');
    $winningNumbersLI.children().addClass('active');
    $winningNumbersTab.removeClass('hide');
  }
};
