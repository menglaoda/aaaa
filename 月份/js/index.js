

var box = document.querySelectorAll("#box4");

var box2 = document.querySelector(".box3");

var tx = ["一月份好！","二月份好!","三月份好!","四月份好!","五月份好!",

		"六月份好!","七月份好!","八月份好!","九月份好!","十月份好!",
		"十一月份好!","十二月份好!"
];



for(var i = 0;i<box.length;i++){
	
	box[i].index=i;
	box[i].onclick = function(){
		
		
		for(var j = 0;j<box.length;j++){
			
			box[j].style.background="gray";
			box[j].style.color="white";
			box[j].style.borderStyle="none";
			
			
		}
		
			
			
			this.style.background="white";
			this.style.color="red";
			this.style.borderStyle="solid";
			this.style.borderColor="red";
			this.style.borderWidth="1px";
			box2.innerHTML= tx[this.index];
			
			
	}
}