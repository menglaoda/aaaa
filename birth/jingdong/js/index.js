

var box = document.querySelector("#box1");

window.onscroll = function(){
	var top = document.body.scrollTop||document.documentElement.scrollTop;

	if(box.style.top==0){
		box.style.top=100;
	}else{
		
	}
}
