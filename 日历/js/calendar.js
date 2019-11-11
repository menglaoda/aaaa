var months = document.querySelectorAll("#months");
var footer = document.querySelector("#footer");
var h = document.querySelector(".h");
var i ;
//console.log(months.length);
//var aa=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
//console.log(h[i]);
for (i = 0; i<months.length; i++) {
	
	months[i].index=i;
	
	
	months[i].onclick = function(){
		b=this.index;
		
//		console.log(b);
	var aa=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
	//h.style.innerHTML = (aa[this.index]+1) + "好";
	if (aa[i] = b ){
		i=b;
		
		footer.style.innerHTML = aa[i] + "好";
//		console.log(aa[i]);
		
	
//		console.log(aa[i]+"好");
	}else{
//		console.log("一月好");
	}
}
}