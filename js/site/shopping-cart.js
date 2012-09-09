$(function(){
	//Fix side bar when scoll
	$('.shopping-cart > .bd > .side').scrollToFixed();
	
	$('.job-item').click(function(){
	    $('.job-item').removeClass("active");
	    $(this).addClass("active");
	});
});
