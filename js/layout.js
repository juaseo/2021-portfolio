var winHei = 0;

$(window).scroll(onScroll)


function onScroll() {
	var bodyHeight = $('html, body').outerHeight();
	var scrollTop = $(window).scrollTop();
	var pct =  scrollTop / bodyHeight * 100 * 5;
	console.log(pct);
	$('.section-wrapper').each(function(i){
		var myPct =  Math.abs(100 - pct - ((i- 1) * 100));
		console.log(i, myPct)
		$(this).find('.section').css('transform', 'translateX('+myPct+'%)')
	})
}
