$(document).ready(function(){
	$("#yes").click(function(){
		var right = $(".right");
		right.css("z-index", "2");
		$(".left").css("z-index", "1");
		right.animate({width: '100%', opacity: '1'}, "slow");
	 	right.animate({width: '50%', opacity: '1'}, "slow");
	 	


	});

	$("#no").click(function(){
		var left = $(".left");
		left.css("z-index", "2");
		$(".right").css("z-index", "1");

		left.animate({width: '100%', opacity: '1'}, "slow");
		left.animate({width: '50%', opacity: '1'}, "slow");
		
	});
	
});

//pune sa se miceasca si left si right cand celelalte se fac mari . fooking ket tre sa merg
//la cumparaturi. fuck