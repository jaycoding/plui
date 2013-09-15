$(function(){
	if ($('#btn-add-item').length > 0) {
		$('#btn-add-item').fancybox({
			width: 580,
			height: 610,
			href: "popup-add-item.html"
		});
	}

	$(".sortable-img-list").sortable({
	    forcePlaceholderSize: true,
	    connectWith: ".sortable-connected",
	    tolerance:"pointer"
	});
});