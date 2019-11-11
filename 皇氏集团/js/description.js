window.onload = function(){
	var iconbox = document.querySelector(".icon-box");
	var oli = iconbox.querySelectorAll(".iiiii");
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
			clearInterval(that.timer1);
			clearInterval(that.timer2);
			
			that.timer2 = setInterval(function() {
				console.log(that)
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
	
	/*菜单按钮的动画*/
	
	//小叉叉的动画
	var menuBtn = document.querySelector(".menu-btn");
	var line1 = document.querySelector(".line1");
	var line2 = document.querySelector(".line2");
	var line3 = document.querySelector(".line3");
	var box3 = document.querySelector(".box3");
	var i = 0;
	menuBtn.onclick = function(){
		line1.style.width = "27px";
		line1.style.transform = "rotate(-45deg)";
		line1.style.transformOrigin = "right top";
		
		line2.style.opacity = "0";
		
		line3.style.width = "27px";
		line3.style.transform = "rotate(45deg)";
		line3.style.transformOrigin = "right bottom";
		
		box3.style.left = "85px";
		i=1;
		console.log(i);
		if(i=1){
			line1.style.width = "27px";
			line1.style.transform = "rotate(45deg)";
			line1.style.transformOrigin = "right top";
			
			line2.style.opacity = "0";
			
			line3.style.width = "27px";
			line3.style.transform = "rotate(-45deg)";
			line3.style.transformOrigin = "right bottom";
			
			box3.style.left = "-540px";
			i=0;
		}
	}
	
	
	
}
