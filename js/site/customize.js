$(function(){
	
	//Pantone color select
	$('.pms-list > .pms').bind("click", function(){
		$(this).siblings(".pms").removeClass("selected");
		$(this).addClass("selected");
	});
	
	//Show next custome section when click first section
	$(".customize-selection").click(function(){
		var $this = $(this);
		if ($this.hasClass("active")) {
			return;
		}
		
		var $next = $this.next(".customize-selection");
		if ($next && $next.hasClass("none")) {
			$next.fadeIn(400, function(){$(this).removeClass("none")});
		}
		
		$(".customize-selection").removeClass("active").find(".expandable").slideUp(300);
		$(this).addClass("active").find(".expandable").slideDown(300);
	});
	
	//Show item details when mouseover on review item
	$(".customize-review-details > .bd > .item").mouseover(function(){
		var $this = $(this);
		if ($this.hasClass("active")) {
			return;
		}
		
		$(".customize-review-details > .bd > .item").removeClass("active").find(".expandable").slideUp(300);
		$(this).addClass("active").find(".expandable").slideDown(300);
		
		
	});
	
	//Check radio when click on a row of price table
	$(".price-table td").click(function(e){
		$(this).siblings().find("input:radio").trigger("click");
		var $editable = $(this).parent().find(".editable");
		if ($editable && $editable.length > 0) {
			$editable.trigger("click");
		}
	});
	
	//Fix side bar when scoll
	$('.customize > .bd > .side').scrollToFixed();
	
	//Single Select
	$(".single-select .select-item").bind("click", function(){
		var $this = $(this);
		$(".single-select .select-item").removeClass("checked");
		$this.addClass("checked");
	});
	
	//Single Select
	$(".multiple-select .select-item").bind("click", function(){
		var $this = $(this);
		if ($this.hasClass("checked")){
			$this.removeClass("checked");
		} else {
			$this.addClass("checked");
		}
	});
	
	//Trigger hash
	function triggerHash() {
		var hash = window.location.hash,
		targetModule = $(hash);
		
		if (targetModule) {
			targetModule.trigger("click");
		}
		
		$("body").localScroll({
		   target: hash,
		   duration: 500
		});
	}
	
	$(window).bind("load", triggerHash);
	
	
	//Remove attachment
	$(".upload-thumbnail .icon-remove").live("click", function(){
	    $(this).parent(".upload-thumbnail").fadeOut(250, function(){$(this).remove()});
	    //@Todo: Add ajax function to remove upload file
	});
});


