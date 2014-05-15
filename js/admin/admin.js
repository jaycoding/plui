$(function(){
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