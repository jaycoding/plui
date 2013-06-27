$(document).ready(tpl_Show);
function tpl_Show(){
	$("a.tpl-action").click(function(){
		tpl_show();
		return false;
		});
	}
function tpl_show(){
	$("body").append("<div class='tpl-bg'></div><div class='tpl-window'></div>");
	$(window).resize(tpl_position());
	$(".tpl-bg").show();
	$(".tpl-window").append("<a class='tpl-close'>关闭</a>");
	$(".tpl-close").click(tpl_remove);
	}
function tpl_position(){
	var w=$(document).scrollLeft() + $(window).width();
	var h=$(document).scrollTop() + $(window).height();
	var tplw=$(".tpl-window").width();
	var tplh=$(".tpl-window").height();
	var tplleft=(w - tplw)/2+"px";
	var tpltop=(h - tplh)/2+"px";
	$(".tpl-bg").css("height",h+"px");
	$(".tpl-window").css("left",tplleft);
	$(".tpl-window").css("top",tpltop);
	}
function tpl_remove(){
	$(".tpl-window").fadeOut("fast",function(){$('.tpl-bg,.tpl-window').remove()});
	return false;
	}
