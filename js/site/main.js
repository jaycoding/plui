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


    $('.btn-add-activity').live('click', function(){
        $(this).parent().parent().next('.activity-add').slideDown(300, function(){
            $(this).removeClass("none");
        });
        $(this).addClass("none");
    });


    $(".btn-edit-reply").live('click', function(){
        $(this).parents(".activity-thread").find('.section-edit-reply').first().slideDown(300, function(){
            $(this).removeClass("none");
        });
        return false;
    });

    $(".btn-edit-assignment").live('click', function(){
        $(this).parents(".activity-thread").find('.section-edit-assignment').slideDown(300, function(){
            $(this).removeClass("none");
        });
        return false;
    });

    $(".btn-edit-tag").live('click', function(){
        $(this).parents(".activity-thread").find('.section-edit-tag').slideDown(300, function(){
            $(this).removeClass("none");
        });
        return false;
    });

    $(".btn-edit-file").live('click', function(){
        $(this).parents(".activity-thread").find('.section-edit-file').slideDown(300, function(){
            $(this).removeClass("none");
        });
        return false;
    });

    $(".btn-edit-review").live('click', function(){
        $(this).parents(".activity-thread").find('.section-edit-review').slideDown(300, function(){
            $(this).removeClass("none");
        });
        return false;
    });

    $(".section-edit .btn-close-section").live('click', function(){
        //$(this).closest(".section-edit").find("input").show().next().addClass("none");

        $(this).closest(".section-edit").hide();
    });

    $(".act-box, .activity-thread-reply").live('mouseover', function(){
        $(this).find(".edit").removeClass("none");
        $(this).find(".remove").removeClass("none");
    });

    $(".act-box, .activity-thread-reply").live('mouseout', function(){
        $(this).find(".edit").addClass("none");
        $(this).find(".remove").addClass("none");
    });




    $(".section-edit-reply > input").live("click", function(){
        $(this).hide().next().removeClass("none").find("textarea").focus();
    });

    $(".section-edit-tag .edit").live("click", function(){
        $(this).hide().closest(".section-edit").removeClass("no-shadow").addClass("editing");
        $(this).closest(".section-edit").find(".save").show();
    });

    $(".section-edit-tag .save").live("click", function(){
        $(this).hide().closest(".section-edit").addClass("no-shadow").removeClass("editing");
        $(this).closest(".section-edit").find(".edit").show();
    });

    $(".act-tag .btn-remove-tag").live("click", function(e){
        $(this).closest(".act-tag").remove();
        return false;
    });

    $(".section-edit-assignment .edit").live("click", function(){
        $(this).hide().closest(".section-edit").addClass("editing");
        $(this).closest(".section-edit").find(".save").show();
        $(this).closest(".section-edit").find(".remove-all").show();
    });

    $(".section-edit-assignment .save").live("click", function(){
        $(this).hide().closest(".section-edit").removeClass("editing");
        $(this).closest(".section-edit").find(".edit").removeAttr("style");
        $(this).closest(".section-edit").find(".remove-all").hide();
    });

    $(".section-edit-assignment .remove-all").live("click", function(){
        $(this).closest(".row-fluid").next(".row-fluid").find(".user-stripe").remove();
    });


    

    $(".btn-change-vote").live("click", function(){
        
        $(this).siblings(".act-voting-edit").removeClass("none");
        $(this).siblings(".act-voting").addClass("none");
    });


    $(".btn-submit-vote").live("click", function(){
        $(this).parent(".act-voting-edit").addClass("none").siblings(".act-voting").removeClass("none");
    });

    $(".poll-option input").live("click", function(){
        var option = $(this).closest(".poll-option");
        var tpl = option.clone();
        tpl.find('input').removeAttr("placeholder").val('');
        if (option.next(".poll-option").length <= 0) {
            option.after(tpl);
        }
    });

    $(".poll-option .btn-remove-option").live("click", function(){
        var option = $(this).closest(".poll-option");
        option.remove();
    });


    $(".activity-thread .btn-section-expand").live("click", function(){
        var $btn = $(this),
            $thread = $btn.closest(".activity-thread"),
            $expandable = $thread.find(".section-expandable");

        if ($btn.hasClass("expanded")) {
            $expandable.hide(0);
            $btn.removeClass("expanded");
        } else {
            $expandable.show(0);
            $btn.addClass("expanded");
        }
    });


    $(".act-user-popover").popover({
        html: true,
        trigger: 'hover',
        delay: { show: 200, hide: 200 }
    });
    
});


