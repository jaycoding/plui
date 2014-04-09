$(function(){
	$('.activity-list .checkbox-select-all').bind("click", function(){
		if ($(this).is(":checked")) {
			$(".activity-list .checkbox-item").iCheck('uncheck');
		} else {
			$(".activity-list .checkbox-item").iCheck('check');
		}
	});

	$('.schedule-list .checkbox-select-all').bind("click", function(){
		if ($(this).is(":checked")) {
			$(".schedule-list .checkbox-item").iCheck('uncheck');
		} else {
			$(".schedule-list .checkbox-item").iCheck('check');
		}
	});

	$('.date').datepicker();

	$( ".hp-edit-section-items" ).sortable({ axis: "x", containment: "parent", cursor: "move" });


});