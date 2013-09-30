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
	    tolerance:"pointer"
	});

	$(".item-categories").sortable({
	    forcePlaceholderSize: true,
	    tolerance:"pointer"
	});
	

	$(".box .btn-edit").bind("click", function(){
		var box = $(this).closest(".box");
		var boxContentView = box.find(".box-content.view");
		var boxContentEdit = box.find(".box-content.editing");

		boxContentView.addClass("none");
		boxContentEdit.removeClass("none");

		if(boxContentEdit.find(".price-table-edit").length > 0) {
			function getData() {
			  return [
			      ["Capacity", "Setup 1", "Qty 100", "Qty 200", "Qty 300", "Qty 1000", "Qty 3000", "Qty 5000"],
			      ["1G", 7.50, 7.50, 7.50, 7.50, 7.50, 7.50, 7.50],
			      ["2G", 7.50, 7.50, 7.50, 7.50, 7.50, 7.50, 7.50],
			      ["4G", 7.50, 7.50, 7.50, 7.50, 7.50, 7.50, 7.50],
			      ["Custom", "quote", "quote", "quote", "quote", "quote", "quote", "quote"]
			    ];
			}

			$("#price-table-1").handsontable({
			    data: getData(),
			    startRows: 5,
			    startCols: 5,
			    minRows: 5,
			    minCols: 5,
			    maxRows: 10,
			    maxCols: 10,
			    rowHeaders: true,
			    colHeaders: true,
			    minSpareRows: 1,
			    contextMenu: true
			  });
		}

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
							},
			showOn:	'button',
			buttonImageOnly:true
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