$(document).ready(function(){
	var index=0;
	var currentIndex=0;
	var timer=null;
	$("#list li").eq(index).addClass("hover").siblings().removeClass("hover");
	autoPlay();
	$("#list li").mouseover(function(){
		clearInterval(timer);
		index=$(this).index();
		scrollPlay();
		currentIndex=index;
	}).mouseout(function(){
		autoPlay();
	});
	
	function autoPlay(){
		timer=setInterval(function(){
			index++;
		
		if(index>7){
			index=0;
			currentIndex=7;
			
		}
		scrollPlay();
		currentIndex=index;
		},3000);
		}

	
	function scrollPlay(){
		$("#list li").eq(index).addClass("hover").siblings().removeClass("hover");
		if(index>currentIndex){
			$("#imgBox img").eq(currentIndex).stop(true,true).animate({"left":"-1300px"});
			$("#imgBox img").eq(index).css("left","1300px").stop(true,true).animate({"left":"0"});
		}
		else if(index<currentIndex){
			$("#imgBox img").eq(currentIndex).stop(true,true).animate({"left":"1300px"});
			$("#imgBox img").eq(index).css("left","-1300px").stop(true,true).animate({"left":"0"});
		}
	}
});