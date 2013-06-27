$(function() {
	
	function dropdownSlideup(){
		$('#product-tabs ul li.active').find('.dropdown dd').slideUp();
		$('#product-tabs ul li.active').find('.dropdown dt').css('border', '0px');
		}
	
	function dropdownSlidedown(){
		$('li.active').find('.dropdown dd').slideDown();
		$('#product-tabs ul li.active').find('.dropdown dt').css('border', '1px solid #ccc');
		}
	 
		
	$('.dropdown').mouseleave(function(){
		dropdownSlideup();
		});
		
	$('.dropdown').mouseover(function(){
		dropdownSlidedown();
		});
	
	$('.dropdown dd a').click(function(){
		dropdownSlideup();
	});
							
	$('li.extendable').mouseover(function(){
		$(this).find('.mod-sub-cate').css('display', 'block');
	});
													
	$('li.extendable').mouseleave(function(){
		$(this).find('.mod-sub-cate').css('display', 'none');
	});
	
	$('.faq-item-question').click(function(){
		$(this).parent().toggleClass('accordion-delete');
		$(this).toggleClass('accordion-delete');
		});
	
	
	
	$(".mod-pricing-table input[class!='pricing-custom']").click(function(){	
		$('.pricing-custom-value').show();
		$('.pricing-custom-input').hide();
		
		//$(".activity-input-wrap").focus(function(){$(this).val('');});
	});
	
	$('.activity-input').click(function(){
		$(this).addClass('hide');
		$(this).parent().find('.activity-input-box').removeClass('hide');
		$(this).parent().find('.activity-input-box textarea').focus();
	});	

	$(".mod-price tbody td").click(function(){
		$(this).parents().find(".section1").show();	
	});
	
	$('.section1').click(function(){
			$(this).parent().find(".section2").show();
			$(this).find("input:text").addClass("required");
	});
	
	$('.section2').click(function(){
		$(this).parent().find(".section3").show();
		$(this).parents().find(".mod-show").addClass("mod-hide").toggle(
			function(){
			$(this).parent().find('.expand').fadeOut("fast");
			$(this).removeClass("mod-hide");
			$(this).parent().find('.mod-more').text("Expand");
			},
			function(){
			$(this).parent().find('.expand').fadeIn("fast");
			$(this).addClass("mod-hide");
			$(this).parent().find('.mod-more').text("Contract");
			}
		);
	});
	
	$(".mod-price tbody tr").click(function() {
        $(this).addClass("select").siblings().removeClass("select");
        $(this).find("input").click();
		
    });
	
    $(".mod-price tbody input:radio").click(function() {
        $(this).parent("tr").addClass("select").siblings().removeClass("select");
    });

	$('.mod-close').mouseover(function(){
		$(this).parent().addClass('active');
	});
	
	$('.mod-close').mouseout(function(){
		$(this).parent().removeClass('active');
	});
	
	
	$('.mod-more').toggle(
		function(){
			$(this).parent().find('.expand').fadeIn("fast");
			$(this).text("Contract");
		},
		function(){
			$(this).parent().find('.expand').fadeOut("fast");
			$(this).text("Expand");
		}
	);
	
	$('.mod-show').toggle(
		function(){
			$(this).parent().find('.expand').fadeIn("fast");
			$(this).addClass("mod-hide");
			$(this).parent().find('.mod-more').text("Contract");
		},
		function(){
			$(this).parent().find('.expand').fadeOut("fast");
			$(this).removeClass("mod-hide");
			$(this).parent().find('.mod-more').text("Expand");
		}
	);
});	


function pricingCustom(){
		$('.pricing-custom-value').hide();
		$('.pricing-custom-input').show();
	}
	
function fnHide(obj){
	$(obj).parents('.activity-input-box').addClass('hide');
	$(obj).parents().find('.activity-input').removeClass('hide');
	$(obj).parents('.faq-answer-form').removeClass('in');
	$(obj).parents('.faq-answer-form').css("height","0px");
	$(obj).parents('.faq-edit-form').removeClass('in');
	$(obj).parents('.faq-edit-form').css("height","0px");
	}


