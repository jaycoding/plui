$(function(){
	//Pantone color select
	$('.pms-list > .pms').bind("click", function(){
	    if ($(this).parent().hasClass("readonly")) {
	        return;
	    }
	    
		$(this).siblings(".pms").removeClass("selected");
		$(this).addClass("selected");
	});
	
	$(".with-tooltop").tooltip();
	
	//Datepicker
	$('.date').datepicker();
	
	$('.btn-advanced-filter').bind("click", function(){
		var $me = $(this),
			$filter = $me.closest('.order-list-filter');
		
		if (!$filter.find('.expandable').hasClass('expanded')) {
			$me.addClass("btn-collapse");
			$filter.find('.expandable').addClass("expanded").slideDown(300);
		} else {
			$me.removeClass("btn-collapse");
			$filter.find('.expandable').removeClass("expanded").slideUp(300);
		}
	});
	
	$('.btn-expand-order').bind("click", function(){
		var $me = $(this),
			$order = $me.closest('.type-order');
		
		if (!$order.next('.type-job').hasClass('expanded')) {
			$me.addClass("btn-collapse");
			$order.next('.type-job').addClass("expanded").fadeIn(300);
		} else {
			$me.removeClass("btn-collapse");
			$order.next('.type-job').removeClass("expanded").fadeOut(300);
		}
	});
});


