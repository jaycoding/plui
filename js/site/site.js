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

});