$(document).ready(function(){
	//hide menu options
	$( ".menu" ).hide();
	//on click toggle menu
	$( ".hamburger" ).click(function() {
		$( ".mobile-menu" ).slideToggle();

	});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).show();
		});
	});
});
