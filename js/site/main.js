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
	
	//Combobox
	$('.combobox').combobox();
	
	//Datepicker
	$('.date').datepicker();
});


