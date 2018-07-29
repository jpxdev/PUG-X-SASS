$(document).ready(function(){
//SLIDE SHOW FUNC
var triggers = $('ul.slideshow-triggers li');
var images = $('ul.mySlides li');
var lastElem = triggers.length-1;
var mask = $('.slideshow--mask ul.mySlides');
var imgWidth = images.width();
var target;
console.log(imgWidth);

triggers.first().addClass('selected');
mask.css('width', imgWidth*(lastElem+1) +'px');

function sliderResponse(target) {
	mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
	triggers.removeClass('selected').eq(target).addClass('selected');
}

triggers.click(function() {
	if ( !$(this).hasClass('selected') ) {
			target = $(this).index();
			sliderResponse(target);
			resetTiming();
	}
});

$('.next').click(function() {
	target = $('ul.slideshow-triggers li.selected').index();
	target === lastElem ? target = 2 : target = target+1;
	sliderResponse(target);
	resetTiming();
});

$('.prev').click(function() {
	target = $('ul.slideshow-triggers li.selected').index();
	lastElem = triggers.length-1;
	target === 0 ? target = 0 : target = target-1;
	sliderResponse(target);
	resetTiming();
});

function sliderTiming() {
	target = $('ul.slideshow-triggers li.selected').index();
	/*
	FOR AUTO SLIDE
	target === lastElem ? target = 0 : target = target+1;
	sliderResponse(target);*/
}
var timingRun = setInterval(function() { sliderTiming(); },5000);
function resetTiming() {
	clearInterval(timingRun);
	timingRun = setInterval(function() { sliderTiming(); },5000);
}


// GO TO TOP FUNC
$('#goTo-top').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});

});
