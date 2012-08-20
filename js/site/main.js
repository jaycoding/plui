$(function(){
	//Init expander
	$('.expander').expander({
		slicePoint: 100,
		preserveWords: true,
		widow: 4,
		expandText: 'Read more',
		expandPrefix: '&hellip; ',
		moreClass: 'read-more',
		lessClass: 'read-less',
		expandEffect: 'fadeIn',
		expandSpeed: 250,
		collapseEffect: 'fadeOut',
		collapseSpeed: 200,
		userCollapse: false,
		userCollapseText: 'Collapse',
		userCollapsePrefix: ' '
	});
});
