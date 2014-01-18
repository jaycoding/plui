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

});