$(function(){
	//Pantone color select
	$('.pms-list > .pms').bind("click", function(){
	    if ($(this).parent().hasClass("readonly")) {
	        return;
	    }
	    var $me = $(this),
	    	$list = $me.parent(".pms-list");
	    
	    if ($list.hasClass("pms-multi")) {
	    	if ($me.hasClass("selected")) {
				$me.removeClass("selected");
			} else {
				$me.addClass("selected");
			}
	    } else {
	    	$list.find(".pms").removeClass("selected");
			$me.addClass("selected");
	    }
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
	
	$('.btn-expand-all').bind("click", function(){
		$(".data-section").find('.row-expandable').addClass("expanded").slideDown(300);
		$(".data-section").find('.btn-expand').addClass("btn-collapse");
	});
	
	$('.btn-collapse-all').bind("click", function(){
		$(".data-section").find('.row-expandable').removeClass("expanded").slideUp(300);
		$(".data-section").find('.btn-expand').removeClass("btn-collapse");
	});
	
	
	$('.order-list-toolbar').scrollToFixed();
	
	
	$('.push-notice').scrollToFixed();
	
	$(".filter-group .filter-item").live("click", function(){
		var $me = $(this),
			$group = $me.closest(".filter-group");
		if ($group.hasClass("filter-multi")){
			if ($me.hasClass("selected")) {
				$me.removeClass("selected");
			} else {
				$me.addClass("selected");
			}
		} else {
			$group.find(".filter-item").removeClass("selected");
			$me.addClass("selected");
		}
	});
	
	$(".bp-popover").popover({
		html: true,
		trigger: 'hover',
		delay: { show: 200, hide: 100 }
	});
	
	$(".push-notice-person").clickover({
		html: true,
		trigger: 'hover',
		placement: 'left',
		delay: { show: 200, hide: 10000 }
	});
	
	
	//Remove attachment
	$(".upload-thumbnail .icon-remove").live("click", function(){
	    if ($(this).parent().parent(".upload-thumbnails").hasClass("readonly")) {
	        return;
	    }
	    $(this).parent(".upload-thumbnail").fadeOut(250, function(){$(this).remove()});
	    //@Todo: Add ajax function to remove upload file
	});
	
	$(".upload-text-link .icon-remove").live("click", function(){
        if ($(this).parent().parent(".upload-text-links").hasClass("readonly")) {
            return;
        }
        $(this).parent(".upload-text-link").fadeOut(250, function(){$(this).remove()});
        //@TODO: Add ajax function to remove upload file
    });
    
     $(".order-details .editable-color .pms-list .pms").live("click", function(){
       var $me = $(this);
       $me.closest(".editable-color").find(".modal-color").fadeIn(300);
    });
    
    $(".order-details .editable-color .modal-color .modal-footer .btn-save").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-color").fadeOut(300);
    });
    
    $(".order-details .editable-color .modal-color .modal-footer .btn-cancel").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-color").fadeOut(300);
    });
    
    
    $(".order-details .editable-specifications > a").live("click", function(){
       var $me = $(this);
       $me.closest(".editable-specifications").find(".modal-specifications").fadeIn(300);
    });
    
    $(".order-details .editable-specifications .modal-specifications .modal-footer .btn-save").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-specifications").fadeOut(300);
    });
    
    $(".order-details .editable-specifications .modal-specifications .modal-footer .btn-cancel").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-specifications").fadeOut(300);
    });
    
    
    var shipToForm = $(".data-section.section-shipping");
	$(".shipto-add").bind("click", function(){
		$(".data-section.section-shipping").first().before(shipToForm.clone().hide(0).fadeIn(300));
	});
	
	$(".data-section.section-shipping .btn.delete").live("click", function(){
		$(this).closest(".data-section.section-shipping").fadeOut(200, function(){
			$(this).remove();
		});
	});
	
	
	
	//Push notice
	
	$('.push-notice .push-notice-handle').bind('click', function(){
		var $me = $(this),
			$panel = $me.closest('.push-notice');
		if ($panel.hasClass('expanded')){
			$panel.removeClass('expanded');
			$me.removeClass('expanded');
		} else {
			$panel.addClass('expanded');
			$me.addClass('expanded');
		}
	})
});


