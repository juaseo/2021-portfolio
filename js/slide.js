var slide = [];
var now = 0;
var list = 0;
$.get('../json/slide.json', onGetData);
function onGetData(r) {
	slide = r.slide;
	now = 0;
	last = slide.length - 1;
	console.log(slide)
}



$('.slide-wrapper .bt-prev').click(onPrev);
$('.slide-wrapper .bt-next').click(onNext);
$(".slide-wrapper").swipe({ threshold: 30, swipe: onSwipe });

function onSwipe(event, direction, distance, duration, fingerCount, fingerData) {
	if(direction === 'left') $('.slide-wrapper .bt-prev').trigger('click');
	else $('.slide-wrapper .bt-next').trigger('click');
}

function onPrev() {
	now = now == 0 ? last : now - 1;
	$('.slide-wrapper').addClass('active');
	setTimeout(function(){
		changeSlide();
		$('.slide-wrapper').removeClass('active');
	}, 775)
}

function onNext() {
	now = now == last ? 0 : now + 1;
	$('.slide-wrapper').addClass('active');
	setTimeout(function(){
		changeSlide();
		$('.slide-wrapper').removeClass('active');
	}, 775)
}

function changeSlide() {
	console.log(slide[now].src);
	$('.slide-wrapper').find('.title').text(slide[now].title);
	$('.slide-wrapper').find('.content').text(slide[now].cont);
	$('.slide-wrapper').find('.img-back img').attr('src', slide[now].src);
	$('.slide-wrapper').find('.img-front img').attr('src', slide[now].src);
	$('.slide-wrapper').find('.box').css('background-color', slide[now].box);
}