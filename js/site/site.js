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
		$(this).addClass("active");
	});

	$(".navi .navi-sub").mouseleave(function(){
		$(".navi-sub").hide();
		$(".navi .extend-sub-navi").removeClass("active");
	});

	if ($('.scrolltofixed').length > 0) {
		$('.scrolltofixed').scrollToFixed();
	}

	$(".btn-faq-question").live("click", function(){
	    $(this).addClass("none").siblings(".form-faq-question").removeClass("none");
	});

	$(".btn-faq-answer").live("click", function(){
	    $(this).closest(".faq-actions").siblings(".form-faq-answer").removeClass("none");
	});

	$(".btn-faq-add-file").live("click", function(){
	    $(this).closest(".faq-actions").siblings(".form-faq-add-file").removeClass("none");
	});

	$(".btn-faq-edit").live("click", function(){
	    $(this).closest(".faq-actions").siblings(".form-faq-edit").removeClass("none");
	});

	$(".faq-upload .btn-add-upload").live("click", function(){
	    $(this).before('<br><a href="#" class="btn-faq-upload">Upload the file</a> ');
	});

	if ($('.product-viewer.square').length > 0){
		$('.product-viewer.square').etalage({
	        thumb_image_width: 250,
	        thumb_image_height: 250,
	        source_image_width: 800,
	        source_image_height: 800,
	        zoom_area_width: 400,
	        zoom_area_height: 400,
	        zoom_area_distance: 5,
	        smallthumb_inactive_opacity: 0.5,
	        smallthumbs_position: 'bottom',
	        show_icon: false,
	        autoplay: false,
	        keyboard: false,
	        zoom_easing: false,
	        show_descriptions: true
	    });
	}

	if ($('.product-viewer.square').length > 0){
		$('.product-viewer.rect').etalage({
	        thumb_image_width: 430,
	        thumb_image_height: 230,
	        source_image_width: 960,
	        source_image_height: 540,
	        zoom_area_width: 400,
	        zoom_area_height: 210,
	        zoom_area_distance: 5,
	        smallthumb_inactive_opacity: 0.5,
	        smallthumbs_position: 'bottom',
	        show_icon: false,
	        autoplay: false,
	        keyboard: false,
	        zoom_easing: false,
	        show_descriptions: true
	    });
	}

	$("body").append('<div id="toTop">^</div>');
    

    $(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	if ($(".floatbox-eflyer").length > 0){

		$(window).bind("scroll", function(e){
			if ($(window).scrollTop() > 100){
				$(".floatbox-eflyer").removeClass("none");
			} else {
				$(".floatbox-eflyer").addClass("none");
			}
		})

		$(".btn-remove-eflyer").bind("click", function(){
			$(this).parent().remove();
		});
	}
	

});