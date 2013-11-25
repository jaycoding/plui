//Show form section step by step
$(function(){
	
	$(".order-form > section").live("click", function(){
		var $this = $(this);		
		var $next = $this.next("section");
		if ($next && $next.hasClass("none")) {
			$next.fadeIn(400, function(){$(this).removeClass("none")});
		}
	});
	
	//Fix side bar when scoll
	$('.order > .bd > .side').scrollToFixed();
	
});


//Fix side bar when scoll
$(function(){
	//Fix side bar when scoll
	$('.order > .bd > .side').scrollToFixed();
});

//Show user profile when hover
$(function(){
	$(".user.with-profile").popover({
		delay: {show: 0, hide: 1000},
		trigger: 'hover',
		title: function(){
			$me = $(this);
			var name = $me.data("name");
			return name;
		},
		content: function(){
			$me = $(this);
			var email = $me.data("email"),
			picture = $me.data("picture"),
			phone = $me.data("phone");
			var content = '<img width="36" height="36" src="' + picture + '" class="pull-left spaced" />' + ' <span>Phone: '+phone+'</span> <br />' + ' <span>Email: '+email+'</span>' ;
			return content;
		},
		customClass: "large user-profile"
	});
})

//Add ship to
$(function(){
	var shipToForm = $(".order-form-ship");
	$(".shipto-add").bind("click", function(){
		$(".order-form-ship").first().before(shipToForm.clone().hide(0).fadeIn(300));
	});
});

$(function(){
    //Save
    // $(".order-form > .order-form-section > .save").live("click", function(){
        // var $me = $(this),
            // $section = $me.parent();
        // $section.addClass("readonly");
        // $section.find("input, textarea").attr("disabled", "disabled");
        // console.log($section);
    // });
//     
    // $(".order-form > .order-form-section > .edit").live("click", function(){
        // var $me = $(this),
            // $section = $me.parent();
        // $section.removeClass("readonly");
        // $section.find("input, textarea").removeAttr("disabled");
    // });
//     
    
    // //Save
    // $(".order-form-section").live("click", function(){
        // //Save first
        // var $all = $(".order-form-section");
        // $all.addClass("readonly");
        // $all.find("input, textarea").attr("disabled", "disabled");
//         
        // //Edit this
        // var $me = $(this);
//         
        // $me.removeClass("readonly");
        // $me.find("input, textarea").removeAttr("disabled");
    // });
    
    //Save
    
	$(".order-form > .order-form-section .save").live("click", function(){
		var $me = $(this),
			$section = $me.closest(".order-form-section");
		$section.addClass("readonly");
		$section.find("input, textarea, select").attr("disabled", "disabled");
		//console.log($section.find(".for-jobs input:not(:checked)").parent("label"));
        $section.find(".for-jobs input:not(:checked)").parent("label").hide(0);
        $section.find(".upload-thumbnails, .upload-text-links").addClass("readonly");
	});
	
	$(".order-form > .order-form-section .edit").live("click", function(){
		var $me = $(this),
			$section = $me.closest(".order-form-section");
		$section.removeClass("readonly");
		$section.find("input, textarea, select").removeAttr("disabled");
        $section.find(".for-jobs input:not(:checked)").parent("label").show(0);
        $section.find(".upload-thumbnails, .upload-text-links").removeClass("readonly");
	});
    
    $(".job-details > .bd > .item").mouseover(function(){
        var $this = $(this);
        if ($this.hasClass("active")) {
            return;
        }
        
        $(".job-details > .bd > .item").removeClass("active").find(".expandable").slideUp(300);
        $(this).addClass("active").find(".expandable").slideDown(300);
    });
    
    
    //Remove attachment
    $(".upload-thumbnail .icon-remove").live("click", function(){
        if ($(this).parent().parent(".upload-thumbnails").hasClass("readonly")) {
            return;
        }
        $(this).parent(".upload-thumbnail").fadeOut(250, function(){$(this).remove()});
        //@Todo: Add ajax function to remove upload file
    });
    
    $(".upload-text-link .icon-remove").live("click", function(){
        if ($(this).parent().parent(".upload-text-links").hasClass("readonly")) {
            return;
        }
        $(this).parent(".upload-text-link").fadeOut(250, function(){$(this).remove()});
        //@TODO: Add ajax function to remove upload file
    });
});


    
// $(".order-form > .order-form-section input:disabled").bind("click", function(){
	// alert(0);
	// var $me = $(this),
		// $section = $me.parents(".order-form-section")[0];
	// $section.removeClass("readonly");
	// $section.find("input, textarea").removeAttr("disabled");
// });
