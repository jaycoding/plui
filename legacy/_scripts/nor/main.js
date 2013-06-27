$(function() {

	$(function(){
	    $(".has-tooltip").tooltip();
	  });
	
	$("ul").each(function(){
		$(this).children("li:first").addClass("first");
		$(this).children("li:last").addClass("last");
	});
	
	var wrapper = $("#wrapper");
	var themePicker = {
		black : function() {
			wrapper.removeClass().addClass("theme-black");
		},
		blue : function() {
			wrapper.removeClass().addClass("theme-blue");
		},
		deepBlue : function() {
			wrapper.removeClass().addClass("theme-deepblue");
		},
		green : function() {
			wrapper.removeClass().addClass("theme-green");
		},
		red : function() {
			wrapper.removeClass().addClass("theme-red");
		},
		yellow : function() {
			wrapper.removeClass().addClass("theme-yellow");
		}
	};
	
	$("#theme-picker-black").bind('click', function() {
		themePicker.black();
	});
	$("#theme-picker-blue").bind('click', function() {
		themePicker.blue();
	});
	$("#theme-picker-deepblue").bind('click', function() {
		themePicker.deepBlue();
	});
	$("#theme-picker-green").bind('click', function() {
		themePicker.green();
	});
	$("#theme-picker-red").bind('click', function() {
		themePicker.red();
	});
	$("#theme-picker-yellow").bind('click', function() {
		themePicker.yellow();
	});
	
	//jCarousel 

	if ($(".jcarousel").length > 0) { 
	$(".jcarousel").jcarousel(); 
	} 
	//Carousel 

	//if ($(".carousel").length > 0) { 
	//  $('.carousel').carousel({ 
	//    interval: 2000 
	//  }) 
	//} 
	
	InitBannerSlider($(".mod-slider"));
	
	
	//Init rich text editor
	if ($(".editor").length > 0){
		//Email FAQ
		$("#email-faq-editor").cleditor({width:"820", height:""});
	}
	
	//Init datepicker
	if ($(".datepicker").length > 0) {
		$(".datepicker").datepicker();
	}
	
});
function InitBannerSlider(objSlider) {
    if (objSlider.length > 0) {
        var sliders = objSlider.find(".slide");
        if (sliders.size() == 0) {
            objSlider.remove();
        }
        else if (sliders.size() == 1) {
            var sliderContainer = objSlider.find(".slides_container");
            sliderContainer.attr("class", "slide_container");
            var firstSlider = sliders.first();
            firstSlider.children().appendTo(sliderContainer);
            firstSlider.remove();
            $(".slider-control").remove();
        }
        else {
            // Set starting slide to 1 
            var startSlide = 1;

            // Initialize Slides 
            objSlider.slides({
                preload: true,
                preloadImage: '',
                generatePagination: false,
                play: 5000,
                pause: 2500,
                hoverPause: true,
                // Get the starting slide 
                start: startSlide,
                animationComplete: function (current) {
                }
            });
        }
    }
}
