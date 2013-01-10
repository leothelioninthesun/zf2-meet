$(window).load(function() {
    $('#featuredContent').orbit({
        fluid: '16x6'
    });
});

$(document).ready(function() {

    $('.tabs').foundationTabs();

});
// text animation for slider
$(function(){
	// container is the DOM element;
	// userText is the textbox
	var container = $("#text_anim")
		userText = $('#userText');
	// Shuffle the contents of container
	container.shuffleLetters();
	// Bind events
	userText.click(function () {
	  userText.val("");
	}).bind('keypress',function(e){
		if(e.keyCode == 13){
			// The return key was pressed
			container.shuffleLetters({
				"text": userText.val()
			});
			userText.val("");
		}
	}).hide();
	// Leave a 4 second pause
	setTimeout(function(){
		// Shuffle the container with custom text
		container.shuffleLetters({
			"text": "Test it for yourself!"
		});
		userText.val("type anything and hit return..").fadeIn();
	},5000);
});
//-------------------------------
