$(function(){

	$(".order-form > section").click(function(){
		var $this = $(this);		
		var $next = $this.next("section");
		if ($next && $next.hasClass("none")) {
			$next.fadeIn(400, function(){$(this).removeClass("none")});
		}
		
	});
	
	//Fix side bar when scoll
	$('.order > .bd > .side').scrollToFixed();
	
});


