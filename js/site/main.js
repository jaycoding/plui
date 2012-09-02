$(function(){
	//Init expander
	$('.expander').expander({
		slicePoint: 120,
		preserveWords: true,
		widow: 4,
		expandText: 'More info',
		expandPrefix: '&hellip; ',
		moreClass: 'read-more',
		lessClass: 'read-less',
		expandEffect: 'fadeIn',
		expandSpeed: 400,
		collapseEffect: 'fadeOut',
		collapseSpeed: 300,
		userCollapse: true,
		userCollapseText: 'Collapse',
		userCollapsePrefix: ' '
	});
	
	//Init expander
	$('.expander-all').expander({
		slicePoint: 0,
		preserveWords: true,
		widow: 4,
		expandText: 'More info',
		expandPrefix: '',
		moreClass: 'read-more',
		lessClass: 'read-less',
		expandEffect: 'fadeIn',
		expandSpeed: 400,
		collapseEffect: 'fadeOut',
		collapseSpeed: 300,
		userCollapse: true,
		userCollapseText: 'Collapse',
		userCollapsePrefix: ' '
	});
	
	//Fix alerts
	$('.alerts').scrollToFixed();
	
	$(".with-tooltop").tooltip();
	
	//Editable - Text
	$('.editable').editable("http://www.no1promo.com", { 
		indicator : "",
		style  : "inherit"
	});
	
	//Editable - Textarea
	$('.editable-textarea').editable("http://www.no1promo.com", { 
		indicator : "",
		type: "textarea",
		tooltip   : "Click to edit...",
		style  : "inherit"
	});
	
	//Editable - Select
	$('.editable-select').editable("http://www.no1promo.com", { 
		indicator : "",
		type: "select",
		tooltip   : "Click to edit...",
		style  : "inherit"
	});
	
	$(".editable, .editable-textarea").bind("click", function(e){
		e.stopPropagation();
	})
});


