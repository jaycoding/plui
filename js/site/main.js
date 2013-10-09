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
	
    $(".with-tooltip").tooltip();
	
	//Combobox
	$('.combobox').combobox();
	
	//Datepicker
	$('.date').datepicker();
	
	
	//Theme picker
	var wrapper = $(".wrapper");
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
        ,
        festRed : function() {
            wrapper.removeClass().addClass("theme-fest-red");
        }
        ,
        festGreen : function() {
            wrapper.removeClass().addClass("theme-fest-green");
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
    $("#theme-picker-fest-red").bind('click', function() {
        themePicker.festRed();
    });
    $("#theme-picker-fest-green").bind('click', function() {
        themePicker.festGreen();
    });


    if ($(".jcarousel").length > 0) { 
        $(".jcarousel").jcarousel(); 
    } 


    $('.product-viewer.square').etalage({
        thumb_image_width: 250,
        thumb_image_height: 250,
        source_image_width: 800,
        source_image_height: 800,
        zoom_area_width: 400,
        zoom_area_height: 400,
        zoom_area_distance: 5,
        smallthumb_inactive_opacity: 0.5,
        smallthumbs_position: 'bottom',
        show_icon: false,
        autoplay: false,
        keyboard: false,
        zoom_easing: false,
        show_descriptions: true
    });

    $('.product-viewer.rect').etalage({
        thumb_image_width: 430,
        thumb_image_height: 230,
        source_image_width: 960,
        source_image_height: 540,
        zoom_area_width: 400,
        zoom_area_height: 210,
        zoom_area_distance: 5,
        smallthumb_inactive_opacity: 0.5,
        smallthumbs_position: 'bottom',
        show_icon: false,
        autoplay: false,
        keyboard: false,
        zoom_easing: false,
        show_descriptions: true
    });



    $(".product-customize").scrollToFixed();

    $(".deco-options a").live("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
    });


});


$(".btn-faq-question").live("click", function(){
    $(this).addClass("none").siblings(".form-faq-question").removeClass("none");
});

$(".btn-faq-answer").live("click", function(){
    $(this).closest(".faq-actions").siblings(".form-faq-answer").removeClass("none");
});

$(".btn-faq-add-file").live("click", function(){
    $(this).closest(".faq-actions").siblings(".form-faq-add-file").removeClass("none");
});

$(".btn-faq-edit").live("click", function(){
    $(this).closest(".faq-actions").siblings(".form-faq-edit").removeClass("none");
});

$(".faq-upload .btn-add-upload").live("click", function(){
    $(this).before('<br><a href="#" class="btn-faq-upload">Upload the file</a> ');
});



$(".with-tooltip").tooltip();



$(".product-view .product-view-colorpane > ul > li").live("click", function(){
    var container = $(this).closest(".product-view");
    var generalView = container.find(".product-view-general");
    var colorViews = container.find(".product-view-color");
    var colorButtons = $(this).siblings("li");
    if ($(this).hasClass("active")) {
        // colorViews.addClass("none");
        // generalView.removeClass("none");
        // $(this).removeClass("active");
    } else {
        var colorCode = $(this).attr("data-color").toString();
        var target = colorViews.filter(function(){
            return $(this).data("color") == colorCode;
        });

        if (target && target.length > 0) {
            generalView.addClass("none");
            colorViews.addClass("none");
            target.removeClass("none");
        }
        $(this).addClass("active").siblings("li").removeClass("active");
    }
});
