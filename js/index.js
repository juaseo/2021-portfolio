 /*************** 글로벌 설정 *****************/
 let x = 0;
 let y = 0;
 let mx = 0;
 let my = 0;
 let speed = 0.01;
 let $picWrapper = $('.pic-wrapper img');
 let $picWrap = $('.pic-wrap img')




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





window.onload = function() {
	$(this).mousemove(function (e) { 
		x = (e.clientX - window.innerWidth / 2);
		y = (e.clientY - window.innerWidth / 2);
	}
	loop();
};


function loop() {
	mx = ( x - mx ) * speed;
	my = ( y - mx ) * speed;

	$picWrapper.css({"transfrom": "translate("+ -(mx/3) +"px,"+ -(my/6) +"px)"});
	$picWrap.css({"transfrom": "translate("+ -(mx/6) +"px,"+ -(my/4) +"px)"});
	
	window.requestAnimationFrame(loop);
}



 /*************** 이벤트 등록 *****************/



 
 /*************** 이벤트 콜백 *****************/
