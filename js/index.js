/*************** 글로벌 설정 *****************/
var x = 0;
var y = 0;
var mx = 0;
var my = 0;
var speed = 0.15;
var $picWrapper = $('.char-bg');
var $picWrap = $('.char')
var $box = $('.box')
var winHei = 0;


/*************** 사용자 함수 *****************/
// slideNavi();

/*  main  */
$(window).mousemove(function (e) {
	x = (e.clientX - window.innerWidth / 2);
	y = (e.clientY - window.innerWidth / 2);
	loop()
})
function loop() {
	var oldMx = mx;
	var oldMy = my;
	mx = (x - mx) * (speed * 2);
	my = (y - mx) * (speed * 1.1);
	//console.log(mx, my)
	$picWrapper.css("transform", "translate(" + -(mx / 4) + "px," + -(my / 6) + "px)");
	$picWrap.css("transform", "translate(" + (mx / 4) + "px," + (my / 4) + "px)");
	$box.css("transform", "translate(" + -(mx / 2) + "px," + -(my / 8) + "px)");
	if(oldMx !== mx || oldMy !== my) window.requestAnimationFrame(loop);
}

/*
$('.about-wrapper').scroll(function () {
	var scrollT = $(this).scrollTop();
	var scrollH = $(this).height();
	var contentH = $('.about-wrap').height();
	if (scrollT + scrollH + 1 >= contentH) {
		$('.about-bg').addClass('.active');
	}
});
*/

/*  nav  */
var link = $('#navbar a.dot')
link.on('click', function (e) {
	var target = $($(this).attr('href'));
	$('html, body').animate({ scrollTop: target.offset().top }, 600);
	$(this).addClass('active');
	e.preventDefault();
});

$(window).on('scroll', function () {
	findPosition();
	projectPage();
}).trigger('scroll')

function findPosition() {
	$('section').each(function () {
		if (($(this).offset().top - $(window).scrollTop()) < 20) {
			link.removeClass('active');
			$('#navbar').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
		}
	});
}

function projectPage() {
	var bodyHeight = $('html, body').outerHeight();
	var scrollTop = $(window).scrollTop();
	var pct =  scrollTop / bodyHeight * 100 * $('.section-wrapper').length;
	console.log('pct', pct);
	$('.section-wrapper').each(function(i){
		var myPct = 100* i - pct;
		if(myPct < 0) myPct = 0;
		if(i === 1) console.log('myPct', myPct)
		$(this).find('.section').css('transform', 'translateX('+myPct+'%)')
	})
}


function slideNavi() {
	var $navi = $('.navi-section');
	var $slick = $navi.find('.slide-wrapper');
	var $btPrev = $navi.find('.bt-slide.left');
	var $btNext = $navi.find('.bt-slide.right');
	var options = cloneObject($slick);
	var lastIdx;
	
	function onGetData(r) {
		lastIdx = r.navi.length - 1;
		r.navi.forEach(function (v, i) {
			var html = '';
			html += '<li class="slide" title="' + i + '">';
			html += '<div class="img-wrap">';
			html += '<img src="' + v.src + '" alt="navi" class="w-100">';
			html += '</div>';
			html += '<h4 class="title">' + v.title + '</h4>';
			html += '</li>';
			$slick.append(html);
		})
	}
	
	$.get('../json/navi.json', onGetData);
}


/*************** 이벤트 등록 *****************/


/*************** 이벤트 콜백 *****************/
