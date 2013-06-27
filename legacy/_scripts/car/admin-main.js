$(function() {
	$('.mod-pricing table tr').click(function(e){
		if ($(e.target).attr("type") != "checkbox") {
        $(this).find(":checkbox").attr("checked", !$(this).find(":checkbox").attr("checked"));
    	}
	});
		
	$('.dropdown').mouseover(function(){
		$(this).addClass('active');
		});
	$('.dropdown').mouseleave(function(){
		$(this).removeClass('active');
		});

	$('.btn-remove').mouseover(function(){
		$(this).parent().css({"outline-width":"3px", "outline-color":"#0088CC", "outline-style":"solid"});
		});
	$('.btn-remove').mouseout(function(){$(this).parent().css("outline-width","0px");});
	
	$('.form-inline').change(function(){
		if ($(".datepicker").length > 0) {
		$(".datepicker").datepicker();
	}
		});
	
	 $('.delLink').mouseover(function(){
		 $(this).parent().parent().css("background","#0088cc");
		 });
	
	$('.delLink').mouseleave(function(){
		$(this).parent().parent().css("background","none");
		});
							
	$('.link').mouseover(function(){
		$(this).parent().css({"outline-width":"3px", "outline-color":"#0088CC", "outline-style":"solid"});
		});

	$('.link').mouseleave(function(){
		$(this).parent().css("outline-width","0px");
		});
	
	var pHeight= $('#body').height()-13;
	$('.admin-pagination a').height(pHeight);

	$('.SubItemRadiobox:checked').change(function(){
		$(this).parent().css({"outline-width":"3px", "outline-color":"#0088CC", "outline-style":"solid"});
		})

	
	$('.mode-grip').click(function(){
		$(this).toggleClass('hover');
		$('.mode-notice').toggleClass('action');
	});
		
	$('.set-calidation').toggle(
	function(){
		$('.set-calidation').text('Set validation permanent');},
	function(){
		$('.set-calidation').text('Set validation');}
	);

});
function radio_check(){
	$('#radio1:checked').parent().addClass('hover');
	$('#radio1:checked').parent().find('a').removeClass('tpl-field-disabled');
	$('#radio1:not(:checked)').parent().removeClass('hover');
	$('#radio1:not(:checked)').parent().find('a').addClass('tpl-field-disabled');
	
}