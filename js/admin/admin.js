$(function(){

	$('.date').datepicker();

	$( ".hp-edit-section-items" ).sortable({ axis: "x", containment: "parent", cursor: "move" });

	$('.activity-list .checkbox-select-all').bind("click", function(){
		if ($(this).is(":checked")) {
			$(".activity-list .checkbox-item").iCheck('uncheck');
		} else {
			$(".activity-list .checkbox-item").iCheck('check');
		}
		$(".activity-list .checkbox-item").trigger("change");
	});

	$('.schedule-list .checkbox-select-all').bind("click", function(){
		if ($(this).is(":checked")) {
			$(".schedule-list .checkbox-item").iCheck('uncheck');
		} else {
			$(".schedule-list .checkbox-item").iCheck('check');
		}
		$(".schedule-list .checkbox-item").trigger("change");
	});

	$('.checkbox-item').bind("change", function(){
		if ($(this).is(":checked")) {
			$(this).closest("tr").addClass("checked");
		} else {
			$(this).closest("tr").removeClass("checked");
		}
	});

	$('.date').datepicker();

	$( ".hp-edit-section-items" ).sortable({ axis: "x", containment: "parent", cursor: "move" });

	$(".filter-date-btn").bind("click", function(){
		if ($(this).next(".filter-date-dropdown").hasClass("none")) {
			$(this).next(".filter-date-dropdown").removeClass("none")
		} else {
			$(this).next(".filter-date-dropdown").addClass("none")
		}
	});

	$(".filter-date .btn-filter").bind("click", function(){
		$(this).closest(".filter-date-dropdown").addClass("none");
	});

	if ($(".list-actions-bar").length > 0) {
		$(".list-actions-bar").scrollToFixed({
			zIndex : 1
		});
	}

	if ($(".side-scrollfixed").length > 0) {
		$(".side-scrollfixed").css("max-height", $(window).height() + "px")
		$(window).bind("resize", function(){
			$(".side-scrollfixed").css("max-height", $(window).height() + "px");
		});
		$(".side-scrollfixed").scrollToFixed({
			zIndex : 1
		});
	}

	$(".separator-unread").bind("click", function(){
		if ($(this).hasClass("collapsed")) {
			$(this).removeClass("collapsed").find(".icon-caret-down").removeClass("icon-caret-up");
			$(".activity-list tr.unread").removeClass("none");
		} else {
			$(this).addClass("collapsed").find(".icon-caret-down").addClass("icon-caret-up");
			$(".activity-list tr.unread").addClass("none");
		}
	});

	$(".separator-read").bind("click", function(){
		if ($(this).hasClass("collapsed")) {
			$(this).removeClass("collapsed").find(".icon-caret-down").removeClass("icon-caret-up");
			$(".activity-list tr.read").removeClass("none");
		} else {
			$(this).addClass("collapsed").find(".icon-caret-down").addClass("icon-caret-up");
			$(".activity-list tr.read").addClass("none");
		}
	});


	if ($(".multiselect-tag").length > 0) {
		$(".multiselect-tag").multiselect({
	      buttonText: function() {
	        return "<i class='icon-tag icon-large'></i> <span class='caret'></span>";
	      },
	      numberDisplayed: 1,
	      enableFiltering: true
	    });
	}

	if ($(".multiselect-folder").length > 0) {
		$(".multiselect-folder").multiselect({
	      buttonText: function() {
	        return "<i class='icon-folder-close icon-large'></i> <span class='caret'></span>";
	      },
	      numberDisplayed: 1,
	      enableFiltering: true
	    });
	}

});



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
			height: 495,
			href: "popup-add-image.html"
		});
	}

	if ($('#btn-add-imprint-image').length > 0) {
		$('#btn-add-imprint-image').fancybox({
			width: 640,
			height: 495,
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


	$(".price-table-edit table .price-table-delete-col").live("click", function(){
		var table = $(this).closest("table");
		var index = $(this).parent("td")[0].cellIndex;

	    $(table).find('tr').each(function() {
	    	$(this).children().eq(index).remove();
	    });
	});

	$(".price-table-edit table .price-table-delete-row").live("click", function(){
		$(this).closest("tr").remove();
	});

	$(".price-table-edit table .price-table-add-row").bind("click", function(){
		var row = $(this).closest("tr").prev();
		var newRow = row.clone();
		newRow.find("input").attr("value", "");
		row.after(newRow);
	});

	$(".price-table-edit table .price-table-add-col").bind("click", function(){
		var table = $(this).closest("table");
		var index = $(this).parent("td")[0].cellIndex - 1;

		$(table).find('tr').each(function() {
			var cell = $(this).children().eq(index);
			var newCell = cell.clone();
			newCell.find("input").attr("value", "");
	    	cell.after(newCell);
	    });
	});

	$(".price-table-edit table .price-table-add-setup").bind("click", function(){
		var table = $(this).closest("table");
		var index = $(this).parent("td")[0].cellIndex;

		$(table).find('tr').each(function() {
			var cell = $(this).children().eq(index);
			var newCell = cell.clone();
			newCell.find("input").attr("value", "");
	    	cell.after(newCell);
	    });
	});

	$(".btn-delete-param-value").live("click", function(){
		var row = $(this).closest(".row-fluid");
		row.remove();
	});

	$(".btn-delete-param").live("click", function(){
		var param = $(this).closest(".spec-param");
		param.remove();
	});

	$(".btn-insert-param-value").live("click", function(){
		var row = $(this).closest(".row-fluid").prev();
		var newRow = row.clone();
		newRow.find("input").val("");

		row.after(newRow);
	});

	$(".btn-insert-param").live("click", function(){
		if ($(".spec-param").length < 4) {
			var tpl = $(".spec-param-template");
			var newParam = tpl.clone().removeClass("spec-param-template");
			tpl.before(newParam);
		} else {
			return;
		}
	});

	if ($("#input-pms-color").length > 0){
		var pmsDemo = [
	      "PMS 293",
	      "PMS 229",
	      "PMS 239",
	      "PMS 291",
	      "PMS 288",
	      "PMS 212"
	    ];

		$("#input-pms-color").autocomplete({
	    	source: pmsDemo
	    });
	}



	// Activity

	$('.btn-add-activity').live('click', function(){
		$(this).parent().parent().next('.activity-add').slideDown(300, function(){
			$(this).removeClass("none");
		});
		$(this).addClass("none");
	});

	$(".btn-edit-follow").live('click', function(){
		$('.btn-add-activity').trigger("click");
	});


	$(".btn-edit-reply").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-reply').first().slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-assignment").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-assignment').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-tag").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-tag').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-file").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-file').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-email").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-email').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-review").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-review').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".section-edit .btn-close-section").live('click', function(){
		//$(this).closest(".section-edit").find("input").show().next().addClass("none");

		$(this).closest(".section-edit").hide();
	});

	$(".act-box, .activity-thread-reply").live('mouseover', function(){
		$(this).find(".edit").removeClass("none");
		$(this).find(".remove").removeClass("none");
	});

	$(".act-box, .activity-thread-reply").live('mouseout', function(){
		$(this).find(".edit").addClass("none");
		$(this).find(".remove").addClass("none");
	});




	$(".section-edit-reply > input").live("click", function(){
		$(this).hide().next().removeClass("none").find("textarea").focus();
	});

	$(".section-edit-tag .edit").live("click", function(){
		$(this).hide().closest(".section-edit").removeClass("no-shadow").addClass("editing");
		$(this).closest(".section-edit").find(".save").show();
	});

	$(".section-edit-tag .save").live("click", function(){
		$(this).hide().closest(".section-edit").addClass("no-shadow").removeClass("editing");
		$(this).closest(".section-edit").find(".edit").show();
	});

	$(".act-tag .btn-remove-tag").live("click", function(e){
		$(this).closest(".act-tag").remove();
		return false;
	});

	$(".section-edit-assignment .edit").live("click", function(){
		$(this).hide().closest(".section-edit").addClass("editing");
		$(this).closest(".section-edit").find(".save").show();
		$(this).closest(".section-edit").find(".remove-all").show();
	});

	$(".section-edit-assignment .save").live("click", function(){
		$(this).hide().closest(".section-edit").removeClass("editing");
		$(this).closest(".section-edit").find(".edit").removeAttr("style");
		$(this).closest(".section-edit").find(".remove-all").hide();
	});

	$(".section-edit-assignment .remove-all").live("click", function(){
		$(this).closest(".row-fluid").next(".row-fluid").find(".user-stripe").remove();
	});


	

	$(".btn-change-vote").live("click", function(){
		
		$(this).siblings(".act-voting-edit").removeClass("none");
		$(this).siblings(".act-voting").addClass("none");
	});


	$(".btn-submit-vote").live("click", function(){
		$(this).parent(".act-voting-edit").addClass("none").siblings(".act-voting").removeClass("none");
	});

	$(".poll-option input").live("click", function(){
		var option = $(this).closest(".poll-option");
		var tpl = option.clone();
		tpl.find('input').removeAttr("placeholder").val('');
		if (option.next(".poll-option").length <= 0) {
			option.after(tpl);
		}
	});

	$(".poll-option .btn-remove-option").live("click", function(){
		var option = $(this).closest(".poll-option");
		option.remove();
	});


	$(".activity-thread .btn-section-expand").live("click", function(){
		var $btn = $(this),
			$thread = $btn.closest(".activity-thread"),
			$expandable = $thread.find(".section-expandable");

		if ($btn.hasClass("expanded")) {
			$expandable.hide(0);
			$btn.removeClass("expanded");
		} else {
			$expandable.show(0);
			$btn.addClass("expanded");
		}
	});


	$(".act-user-popover").popover({
		html: true,
		trigger: 'hover',
		delay: { show: 200, hide: 200 }
	});

	//Group dropbox
	$('.dropdown-menu-group li').live("click", function(){
		var $me = $(this),
			$group = $me.closest(".dropdown-menu-group");

		if ($group.hasClass("group-radio")) {
			$me.addClass("selected").siblings().removeClass("selected");
		} else if ($group.hasClass("group-checkbox")) {
			if ($me.hasClass("selected")) {
				$me.removeClass("selected");
			} else {
				$me.addClass("selected");
			}
		}
	});

	$('.popover-workflow').hover(
		function() {
			var self = this;
			clearTimeout(timer);
          hoverTimeout = setTimeout(function(){
				$('.popover').hide(); //Hide any open popovers on other elements.
	          //popover_parent = self
	          $(self).popover('show');
	          $(".btn-close-popover").bind("click", function(){$(self).popover('destroy');});
			}, 500);       
      }, 
      function() {
      	var self = this;
      	timer = setTimeout(function(){hidePopover(self)},500);                 
      });
	$('.popover-workflow').mouseout(function(){
		clearTimeout(hoverTimeout);
	});



});