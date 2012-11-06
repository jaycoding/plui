$(function(){
	$('.mockup-edit-side').scrollToFixed();
	
	$('.btn-post').bind('click', function(){
		var $me = $(this),
			$postTo = $me.parent().next('.post-to');
		$postTo.removeClass("none");
	});
	
	$('.post-to .close').bind('click', function(){
		var $me = $(this),
			$postTo = $me.closest('.post-to');
		$postTo.addClass("none");
	});
	
	$(".mockup-img-zoom").etalage(
		{
			thumb_image_width: 160,
			thumb_image_height: 160,
			source_image_width: 600,
			source_image_height: 600,
			zoom_area_width: 300,
			zoom_area_height: 300
		}
	);
});



$(function(){
	var sectionUpload = $(".mockup-section-upload-tpl");
	$(".mockup-btn-add-upload").bind("click", function(){
		$(this).parent().after(sectionUpload.clone().removeClass("none"));
	});
	
	$(".btn-remove").live("click", function(){
		$(this).closest(".mockup-section-upload").remove();
	});
	
	var sectionColor = $(".mockup-section-color-tpl");
	$(".mockup-btn-add-color").bind("click", function(){
		$(this).parent().after(sectionColor.clone().removeClass("none"));
	});
	
	$(".btn-remove").live("click", function(){
		$(this).closest(".mockup-section-color").remove();
	});
});
