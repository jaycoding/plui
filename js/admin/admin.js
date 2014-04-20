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


});