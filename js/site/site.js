$(function(){
	$("#home-slide").carousel();

	$(".header-search input:text").focus(function(){
		$(this).animate({width: 370}, 200);
	});

	$(".header-search input:text").blur(function(){
		$(this).animate({width: 270}, 200);
	});

	$(".navi .extend-sub-navi").mouseover(function(){
		$(".navi-sub").show();
	});

	$(".navi .navi-sub").mouseleave(function(){
		$(".navi-sub").hide();
	});


});