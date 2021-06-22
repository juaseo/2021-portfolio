 /*************** 글로벌 설정 *****************/
 var x = 0;
 var y = 0;
 var mx = 0;
 var my = 0;
 var speed = 0.1;
 var $picWrapper = $('.char-bg');
 var $picWrap = $('.char')




 /*************** 사용자 함수 *****************/
// window.onload = function() {
// 	window.addEventListener("mousemove", mouseFunc);
	
// 	function mouseFunc(e) {
// 		x = (e.clientX - window.innerWidth / 2);
// 		y = (e.clientY - window.innerWidth / 2);
// 	}
// 	loop();
// }

// function loop() {
// 	mx = ( x - mx ) * speed;
// 	my = ( y - mx ) * speed;

// 	_imgArr[0].style.transform = "translate("+ -(mx/2) +"px,"+ -(my/2) +"px)";
// 	_imgArr[0].style.transform = "translate("+ -(mx/2) +"px,"+ -(my/2) +"px)";
// 	_imgArr[0].style.transform = "translate("+ -(mx/2) +"px,"+ -(my/2) +"px)";
// 	_imgArr[0].style.transform = "translate("+ -(mx/2) +"px,"+ -(my/2) +"px)";
	
// 	window.requestAnimationFrame(loop);
// }




$(window).mousemove(function (e) {
  x = (e.clientX - window.innerWidth / 2);
  y = (e.clientY - window.innerWidth / 2);
})
 loop()


function loop() {
	mx = ( x - mx ) * speed;
	my = ( y - mx ) * speed;
  console.log(mx, my)
	$picWrapper.css("transform", "translate("+ -(mx/3) +"px,"+ -(my/6) +"px)");
	$picWrap.css("transform", "translate("+ -(mx/6) +"px,"+ -(my/4) +"px)");
	
	window.requestAnimationFrame(loop);
}



 /*************** 이벤트 등록 *****************/



 
 /*************** 이벤트 콜백 *****************/
