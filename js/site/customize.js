$(function(){
	
	//Pantone color select
	$('.pms-list > .pms').bind("click", function(){
	    if ($(this).parent().hasClass("readonly")) {
	        return;
	    }
	    
		$(this).siblings(".pms").removeClass("selected");
		$(this).addClass("selected");
	});
	
	//Pantone color select
	$('.pms-list > .pms').bind("click", function(){
	    if ($(this).parent().hasClass("readonly")) {
	        return;
	    }
	    
		$(this).siblings(".pms").removeClass("selected");
		$(this).addClass("selected");
	});
	
	//Show next custome section when click first section
	$(".customize-section").click(function(){
		var $this = $(this);
		if ($this.hasClass("active")) {
			return;
		}
		
		var $next = $this.next(".customize-section");
		if ($next && $next.hasClass("none")) {
			$next.fadeIn(400, function(){$(this).removeClass("none")});
		}
		
		$(".customize-section").removeClass("active").find(".expandable").slideUp(300, function(){
		    $(this).removeClass("expanded");
		    $(this).parents(".customize-section").find(".icon-toggle-expand").removeClass("collapse");
		});
		$(this).addClass("active").find(".expandable").slideDown(300, function(){
            $(this).addClass("expanded");
            $(this).parents(".customize-section").find(".icon-toggle-expand").addClass("collapse");
        });
	});
	
	$(".customize-section .icon-toggle-expand").click(function(e){
	    if ($(this).parent(".customize-section").hasClass("active")) {
	        $(this).parent(".customize-section").removeClass("active").find(".expandable").slideUp(300, function(){
                $(this).removeClass("expanded");
                $(this).parents(".customize-section").find(".icon-toggle-expand").removeClass("collapse");
            });
	    } else {
	        $(this).parent(".customize-section").addClass("active").find(".expandable").slideDown(300, function(){
                $(this).addClass("expanded");
                $(this).parents(".customize-section").find(".icon-toggle-expand").addClass("collapse");
            });
	    }
	    e.stopPropagation();
	});
	
	//Show item details when mouseover on review item
	$(".customize-review-details > .bd > .item").mouseover(function(){
		var $this = $(this);
		if ($this.hasClass("active")) {
			return;
		}
		
		$(".customize-review-details > .bd > .item").removeClass("active").find(".expandable").slideUp(300);
		$(this).addClass("active").find(".expandable").slideDown(300);
		
		
	});
	
	//Check radio when click on a row of price table
	$(".price-table td").click(function(e){
		$(this).siblings().find("input:radio").trigger("click");
		var $editable = $(this).parent().find(".editable");
		if ($editable && $editable.length > 0) {
			$editable.trigger("click");
		}
	});
	
	//Fix side bar when scoll
	$('.customize > .bd > .side').scrollToFixed();
	
	// //Single Select
	// $(".single-select .select-item").bind("click", function(){
		// var $this = $(this);
		// $(".single-select .select-item").removeClass("checked");
		// $this.addClass("checked");
	// });
// 	
	// //Single Select
	// $(".multiple-select .select-item").bind("click", function(){
		// var $this = $(this);
		// if ($this.hasClass("checked")){
			// $this.removeClass("checked");
		// } else {
			// $this.addClass("checked");
		// }
	// });
	
	//Trigger hash
	function triggerHash() {
		var hash = window.location.hash,
		targetModule = $(hash);
		
		if (targetModule) {
			targetModule.trigger("click");
		}
		
		$("body").localScroll({
		   target: hash,
		   duration: 500
		});
	}
	
	$(window).bind("load", triggerHash);
	
	
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
	
	//Save
    $(".customize-section").bind("click", function(){
        //Save first
        var $all = $(".customize-section");
        $all.addClass("readonly");
        $all.addClass("readonly");
        $all.find("input, textarea").addClass("disabled");
        $all.find(".pms-list, .upload-thumbnails, .upload-text-links").addClass("readonly");
        
        //Edit this
        var $me = $(this);
        $me.removeClass("readonly");
        $me.find("input, textarea").removeClass("disabled");
        $me.find(".pms-list, .upload-thumbnails, .upload-text-links").removeClass("readonly");
    });
    
    
    //Save
    $(".job-edit-section").live("click", function(){
        //Save first
        var $all = $(".job-edit-section");
        $all.addClass("readonly");
        $all.addClass("readonly");
        $all.find("input, textarea").addClass("disabled");
        $all.find(".pms-list, .upload-thumbnails, .upload-text-links").addClass("readonly");
        
        //Edit this
        var $me = $(this);
        $me.removeClass("readonly");
        $me.find("input, textarea").removeClass("disabled");
        $me.find(".pms-list, .upload-thumbnails, .upload-text-links").removeClass("readonly");
    });
    
    
    
    $(".job-edit .editable-color .pms-list .pms").live("click", function(){
       var $me = $(this);
       $me.closest(".editable-color").find(".modal-color").fadeIn(300);
    });
    
    $(".job-edit .editable-color .modal-color .modal-footer .btn-save").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-color").fadeOut(300);
    });
    
    $(".job-edit .editable-color .modal-color .modal-footer .btn-cancel").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-color").fadeOut(300);
    });
    
    
    $(".job-edit .editable-specifications > a").live("click", function(){
       var $me = $(this);
       $me.closest(".editable-specifications").find(".modal-specifications").fadeIn(300);
    });
    
    $(".job-edit .editable-specifications .modal-specifications .modal-footer .btn-save").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-specifications").fadeOut(300);
    });
    
    $(".job-edit .editable-specifications .modal-specifications .modal-footer .btn-cancel").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-specifications").fadeOut(300);
    });
    
    
    $(".expandable-once > .expandable-once-btn").live("click", function(){
        $(this).hide().prev(".expandable-once-bd").slideDown("fast");
    });
    
    //Product viewer
    $('.product-viewer').etalage({
        thumb_image_width: 250,
        thumb_image_height: 250,
        source_image_width: 600,
        source_image_height: 600,
        zoom_area_width: 400,
        zoom_area_height: 400,
        zoom_area_distance: 5,
        smallthumb_inactive_opacity: 0.5,
        smallthumbs_position: 'bottom',
        show_icon: false,
        autoplay: false,
        keyboard: false,
        zoom_easing: false
    });
    
    $(".etalage_small_thumbs ul > li:first").addClass("none");
    $(".etalage_small_thumbs ul > li:last").addClass("none");
    
    
    $(".price-table td > input:radio").click(function(){
        $(this).closest("tr").siblings("tr").removeClass("info");
         $(this).closest("tr").addClass("info");
    });
    
    //Form validation
    // $('.customize-section').validate({
        // rules: {
          // quantity: {
            // minlength: 1,
            // number: true,
            // required: true
          // }
        // },
        // highlight: function(label) {
            // $(label).closest('.control-group').addClass('error');
        // },
        // success: function(label) {
            // label
                // .text('OK!').addClass('valid')
                // .closest('.control-group').addClass('success');
        // }
      // });
      
     //Check section
     $(".customize-section input, .customize-section .pms, .customize-section textarea").live("click", function(){
         if ($(this).parents(".section-select").length > 0 ) {
             return;
         }
         
         $(this).closest(".customize-section").find(".section-select input").attr("checked", "checked");
     })
     
});


