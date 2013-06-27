$(function() {
	
	//Manually add "first" and "last" class for lists
	$("ul").each(function(){
		$(this).children("li:first").addClass("first");
		$(this).children("li:last").addClass("last");
	});
	
	//Init datepicker
	if ($(".datepicker").length > 0) {
		$(".datepicker").datepicker();
	}
	
	//jCarousel 
	if ($(".jcarousel").length > 0) { 
	$(".jcarousel").jcarousel(); 
	} 
	//Carousel 
	//if ($(".carousel").length > 0) { 
	//  $('.carousel').carousel({ 
	//    interval: 2000 
	//  }) 
	//} 
	
	//Init rich text editor
	if ($(".editor").length > 0){
		$("textarea").cleditor({width:"600", height:"300"});
	}
	
	//Init color picker
	if ($('.colorpicker').length > 0) {
		$.fn.jPicker.defaults.images.clientPath='../_imgs/nor/jpicker/';
		$('.colorpicker').jPicker({window:{expandable:true,title:'Expandable Example'}});
	}
	
	//Insert remove button for homepage template
	if ($(".tpl-removable").length > 0){
		$(".tpl-removable").each(function(){
			$(this).append("<div class='tpl-btn-remove'>×</div>");
		});
	}
	
	if ($(".removable").length > 0){
		$(".removable").each(function(){
			$(this).append("<div class='btn-remove'>×</div>");
		});
	}
	
});
