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
	
	$('.btn-expand').bind("click", function(){
		var $me = $(this),
			$section = $me.closest('.data-section');
		
		if (!$section.find('.row-expandable').hasClass('expanded')) {
			$me.addClass("btn-collapse");
			$section.find('.row-expandable').addClass("expanded").slideDown(300);
		} else {
			$me.removeClass("btn-collapse");
			$section.find('.row-expandable').removeClass("expanded").slideUp(300);
		}
	});
	
	
	$('.order-list-toolbar').scrollToFixed();
	
	$(".filter-group .filter-item").live("click", function(){
		var $me = $(this),
			$group = $me.closest(".filter-group");
		$group.find(".filter-item").removeClass("selected");
		$me.addClass("selected");
	})
});


