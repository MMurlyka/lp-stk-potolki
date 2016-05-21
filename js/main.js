$(document).ready(function (){
	$('.slick-slider img').each(function(index, element) {
		
		if(index > 11) {
			return;
		}
		var $e = $(element),
			$img = $('<img>').attr('src', $e.attr('src')).addClass('img-responsive').data('to', index),
			$row = $('<div></div>').addClass('row'),
			$container = $('<div></div>').addClass('col-xs-1');


		$('.gallery_dots').append($container.append($row.append($img)));
	});

	$('.gallery_dots img').css('height', $('.gallery_dots .col-xs-1 .row').width());
	//$('.gallery_dots img').css('height', 100);
	

	$slick = $('.slick-slider')
	$slick.slick({
		autoplay: true
	});

	$('.gallery_dots img').click(function() {
		$slick.slick('slickGoTo', $(this).data('to'));
	});

	var colors = [];

	$('.slick-price img').each(function(index, el) {
		var $e = $(el);

		colors.push($e.data('color'));
	});

	$('.slick-price').slick({
		autoplay: false,
		arrows: false,
		dots: true
	});

	$('.slick-price .slick-dots button').each(function(index, el) {
		var $e = $(el);

		$e.css('background-color', colors.shift());
	});

	$('.nav a').click(function() {
		var elementClick = $(this).attr("href");
		var arr = elementClick.split("#");
		var destination;

		if(arr[0] != "") {
			if(arr[0] == location.pathname) {
				elementClick = '#' + arr[1];
			} else {
				return true;
			}

			console.log(~arr[0].indexOf(location.pathname));

			
		}

		destination = $(elementClick).offset().top;

		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});

	$('.popup-link').fancybox({
		width: 343
	});
});