$(function(){

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

    $(".section-thread .btn-edit-thread").live("click", function(){
        var $thread = $(this).closest(".section-thread"),
            $threadEdit = $thread.next(".section-thread-edit");

        $thread.addClass("none");
        $threadEdit.removeClass("none");
    });

    $(".section-thread-edit .btn-save").live("click", function(){
        var $threadEdit = $(this).closest(".section-thread-edit"),
            $thread = $threadEdit.prev(".section-thread");

        $thread.removeClass("none");
        $threadEdit.addClass("none");
    });

    $(".section-thread-edit .btn-cancel").live("click", function(){
        var $threadEdit = $(this).closest(".section-thread-edit"),
            $thread = $threadEdit.prev(".section-thread");

        $thread.removeClass("none");
        $threadEdit.addClass("none");
    });
    
});


