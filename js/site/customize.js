$(function(){
	$('.editables').editables(
		{ 
          beforeEdit: function(field){
            field.val(this.text());
          },
          beforeFreeze: function(display){ 
            display.text(this.val());
          },
          onEdit: function(){
            //console.log('"on edit"', this);
          },
          onFreeze: function(){
            console.log('"on freeze"', this);
          }
        }
	);
	
	$('.pms-list > .pms').bind("click", function(){
		$(this).siblings(".pms").removeClass("selected");
		$(this).addClass("selected");
	});
	
	$(".customize-selection #input-quantity").click(function(){
		$(".customize-selection").fadeIn(400, function(){$(this).removeClass("none")});
	});
	
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
	
	$(".customize-review-details > .bd > .item").click(function(){
		var $this = $(this);
		if ($this.hasClass("active")) {
			return;
		}
		
		$(".customize-review-details > .bd > .item").removeClass("active").find(".expandable").slideUp(300);
		$(this).addClass("active").find(".expandable").slideDown(300);
	});
});


