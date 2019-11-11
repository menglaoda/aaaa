var iconbox = document.querySelector(".icon-box");
var oli = iconbox.querySelectorAll(".ii");
for(var i = 0; i < oli.length; i++) {
	oli[i].w = 0;
	oli[i].t = 14;
	oli[i].h = 2;
	oli[i].onmouseenter = function() {
		var that = this;
		clearInterval(that.timer1);
		clearInterval(that.timer2);
		that.timer1 = setInterval(function() {
			that.w += 2;
			that.querySelector(".pagehome").style.width = that.w + "px";
			that.querySelector(".pagehome").style.height = 2 + "px";
			if(that.w >= 136) {
				clearInterval(that.timer1);
				clearInterval(that.timer2);
				that.timer2 = setInterval(function() {
					that.h += 2;
					that.t -= 1;
					that.querySelector(".pagehome").style.height = that.h + "px";
					that.querySelector(".pagehome").style.top = that.t + "px";
					if(that.h >= 93) {
						clearInterval(that.timer2);
						clearInterval(that.timer1);
					}
				}, 5)
			}
		}, 5)
	}
	oli[i].onmouseleave = function() {
		var that = this;
		clearInterval(that.timer2);
		clearInterval(that.timer1);
		that.timer2 = setInterval(function() {
			that.h -= 2;
			that.t += 1;
			that.querySelector(".pagehome").style.height = that.h + "px";
			that.querySelector(".pagehome").style.top = that.t + "px";
			if(that.h <= 2) {
				clearInterval(that.timer2);
				clearInterval(that.timer1);
				that.w = 136;
				that.timer1 = setInterval(function() {
					that.w -= 2;
					that.querySelector(".pagehome").style.width = that.w + "px";
					if(that.w <= 0) {
						clearInterval(that.timer1);
						clearInterval(that.timer2);
					}
				}, 5);
			}
		}, 5)
	}
}
//点击菜单
var menu_btn = document.querySelector(".menu-btn");
var menu_btn1 = document.querySelector(".menu-btn1");
var menu_btn2 = document.querySelector(".menu-btn2");
var line1 = menu_btn2.querySelector(".line1");
var line2 = menu_btn2.querySelector(".line2");
var line3 = menu_btn2.querySelector(".line3");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var aa = 0;
menu_btn1.onclick = function(){
	menu_btn2.style.opacity = 1;
	menu_btn1.style.opacity = 0;
	menu_btn2.style.zIndex = 4;
	menu_btn1.style.zIndex = 3;
	if(aa==0){
		line1.style.width = "27px";
		line1.style.transform = "rotate(-45deg)";
		line1.style.transformOrigin = "right top";
		line2.style.opacity = 0;
		line2.style.width = "100%";
		line3.style.width = "27px";
		line3.style.transform = "rotate(45deg)";
		line3.style.transformOrigin = "right bottom";
		box3.style.transition= "all 1s";
		box4.style.transition= "all 1s 0.1s";
		box3.style.left = "85px";
		box4.style.left = "0px";
		aa=1;
	}	
}
menu_btn2.onclick = function(){
	if(aa==0){
		line1.style.width = "27px";
		line1.style.transform = "rotate(-45deg)";
		line1.style.transformOrigin = "right top";
		line2.style.opacity = 0;
		line2.style.width = "100%";
		line3.style.width = "27px";
		line3.style.transform = "rotate(45deg)";
		line3.style.transformOrigin = "right bottom";
		box3.style.transition= "all 1s";
		box4.style.transition= "all 1s 0.1s";
		box3.style.left = "85px";
		box4.style.left = "0px";
		aa=1;
	}else{
		fn("50%","70%","100%");
		menu_btn2.style.opacity = 0;
		menu_btn2.style.zIndex = 3;
		menu_btn1.style.opacity = 1;
		menu_btn1.style.zIndex = 4;		
	}	
}
function fn(a,b,c){
	box3.style.transition= "all 1s 0.3s";
	box4.style.transition= "all 1s ";
	box4.style.left = "-100%";
	line1.style.width = a;
	line1.style.transform = "rotate(0deg)";
	line1.style.transformOrigin = "right top";
	line2.style.opacity = 1;
	line2.style.width = b;
	line3.style.width = c;
	line3.style.transform = "rotate(0deg)";
	line3.style.transformOrigin = "right bottom";
	box3.style.left = "-540px";	
	aa=0;
}
//点击xx
document.querySelector(".xx").onclick = function(){
	fn("100%","100%","70%");
	menu_btn2.style.opacity = 0;
	menu_btn2.style.zIndex = 3;
	menu_btn1.style.opacity = 1;
	menu_btn1.style.zIndex = 4;
}
