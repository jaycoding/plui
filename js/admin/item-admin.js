$(function(){
	if ($('#btn-add-item').length > 0) {
		$('#btn-add-item').fancybox({
			width: 580,
			height: 437,
			href: "popup-add-item.html"
		});
	}

	if ($('#btn-add-main-image').length > 0) {
		$('#btn-add-main-image').fancybox({
			width: 640,
			height: 600,
			href: "popup-add-image.html"
		});
	}

	if ($('#btn-add-imprint-image').length > 0) {
		$('#btn-add-imprint-image').fancybox({
			width: 640,
			height: 600,
			href: "popup-add-image.html"
		});
	}


	$(".image-items-sortable").sortable({
	    forcePlaceholderSize: true,
	    connectWith: ".sortable-connected",
	    tolerance:"pointer"
	});

	$(".box .btn-edit").bind("click", function(){
		var box = $(this).closest(".box");
		var boxContentView = box.find(".box-content.view");
		var boxContentEdit = box.find(".box-content.editing");

		boxContentView.addClass("none");
		boxContentEdit.removeClass("none");

		return false;
	});

	$(".box .btn-save").bind("click", function(){
		var box = $(this).closest(".box");
		var boxContentView = box.find(".box-content.view");
		var boxContentEdit = box.find(".box-content.editing");

		boxContentView.removeClass("none");
		boxContentEdit.addClass("none");

		return false;
	});

	$(".box .btn-cancel").bind("click", function(){
		var box = $(this).closest(".box");
		var boxContentView = box.find(".box-content.view");
		var boxContentEdit = box.find(".box-content.editing");

		boxContentView.removeClass("none");
		boxContentEdit.addClass("none");

		return false;
	});

	if ($('.colorpicker-pantone').length > 0) {
		$('.colorpicker-pantone').colorpicker({
			parts:			['map', 'bar', 'swatches'],
			swatches:		'pantone',
			colorFormat:	'NAME',
			swatchesWidth:	173,
			limit:			'name',
			init:			function(event, color) {
								//$('.cp-pantone-output').text(color.formatted);
							},
			select:			function(event, color) {
								//$('.cp-pantone-output').text(color.formatted);
							}
		});
	}

	$(".image-item .btn-select").bind("click", function(){
		var item = $(this).closest(".image-item");
		var itemList = item.parent();
		item.addClass("selected");
		if (itemList.hasClass("image-items-selectable-single")) {
			item.siblings(".image-item").removeClass("selected");
		}

		return false;
	});

	$(".image-item .btn-unselect").bind("click", function(){
		var item = $(this).closest(".image-item");
		var itemList = item.parent();
		item.removeClass("selected");

		return false;
	});




});