 /*************** 글로벌 설정 *****************/
  var x = 0;
  var y = 0;
  var mx = 0;
  var my = 0;
  var speed = 0.15;
  var $picWrapper = $('.char-bg');
  var $picWrap = $('.char')
	var $box = $('.box')




 /*************** 사용자 함수 *****************/

 
/*  main  */

$(window).mousemove(function (e) {
  x = (e.clientX - window.innerWidth / 2);
  y = (e.clientY - window.innerWidth / 2);
  
	loop()
})

function loop() {
	mx = ( x - mx ) * speed;
	my = ( y - mx ) * speed;
  console.log(mx, my)
	$picWrapper.css("transform", "translate("+ -(mx/4) +"px,"+ -(my/6) +"px)");
	$picWrap.css("transform", "translate("+ (mx/6) +"px,"+ (my/4) +"px)");
	$box.css("transform", "translate("+ (mx/10) +"px,"+ -(my/8) +"px)");
	
	window.requestAnimationFrame(loop);
}

$(document).ready(function(){
	$('.about-wrapper').scroll(function(){
			var scrollT = $(this).scrollTop();
			var scrollH = $(this).height(); 
			var contentH = $('.about-wrap').height(); 
			if(scrollT + scrollH +1 >= contentH) { 
					$('.about-bg').addClass('.active');
			}
	});
});

/*  nav  */

$(function(){
	var link = $('#navbar a.dot');

	link.on('click',function(e){
		var target = $($(this).attr('href'));

		$('html, body').animate({ scrollTop: target.offset().top },600);
		$(this).addClass('active');
		e.preventDefault();
	});
	
	$(window).on('scroll',function(){
		findPosition();
	});

	function findPosition(){
		$('section').each(function(){
			if( ($(this).offset().top - $(window).scrollTop() ) < 20){
				link.removeClass('active');
				$('#navbar').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
			}
		});
	}
	findPosition();
});



 /*************** 이벤트 등록 *****************/



 /*************** 이벤트 콜백 *****************/
