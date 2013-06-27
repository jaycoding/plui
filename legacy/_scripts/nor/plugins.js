/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);




//////////////////////////////////////////////////////////////////////////////////
// Cloud Zoom V1.0.2
// (c) 2010 by R Cecco. <http://www.professorcloud.com>
// MIT License
//
// Please retain this copyright header in all versions of the software
//////////////////////////////////////////////////////////////////////////////////
(function($){$(document).ready(function(){$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom()});function format(str){for(var i=1;i<arguments.length;i++){str=str.replace('%'+(i-1),arguments[i])}return str}function CloudZoom(jWin,opts){var sImg=$('img',jWin);var img1;var img2;var zoomDiv=null;var $mouseTrap=null;var lens=null;var $tint=null;var softFocus=null;var $ie6Fix=null;var zoomImage;var controlTimer=0;var cw,ch;var destU=0;var destV=0;var currV=0;var currU=0;var filesLoaded=0;var mx,my;var ctx=this,zw;setTimeout(function(){if($mouseTrap===null){var w=jWin.width();jWin.parent().append(format('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>',w/3,(w/2)-(w/6))).find(':last').css('opacity',0.5)}},200);var ie6FixRemove=function(){if($ie6Fix!==null){$ie6Fix.remove();$ie6Fix=null}};this.removeBits=function(){if(lens){lens.remove();lens=null}if($tint){$tint.remove();$tint=null}if(softFocus){softFocus.remove();softFocus=null}ie6FixRemove();$('.cloud-zoom-loading',jWin.parent()).remove()};this.destroy=function(){jWin.data('zoom',null);if($mouseTrap){$mouseTrap.unbind();$mouseTrap.remove();$mouseTrap=null}if(zoomDiv){zoomDiv.remove();zoomDiv=null}this.removeBits()};this.fadedOut=function(){if(zoomDiv){zoomDiv.remove();zoomDiv=null}this.removeBits()};this.controlLoop=function(){if(lens){var x=(mx-sImg.offset().left-(cw*0.5))>>0;var y=(my-sImg.offset().top-(ch*0.5))>>0;if(x<0){x=0}else if(x>(sImg.outerWidth()-cw)){x=(sImg.outerWidth()-cw)}if(y<0){y=0}else if(y>(sImg.outerHeight()-ch)){y=(sImg.outerHeight()-ch)}lens.css({left:x,top:y});lens.css('background-position',(-x)+'px '+(-y)+'px');destU=(((x)/sImg.outerWidth())*zoomImage.width)>>0;destV=(((y)/sImg.outerHeight())*zoomImage.height)>>0;currU+=(destU-currU)/opts.smoothMove;currV+=(destV-currV)/opts.smoothMove;zoomDiv.css('background-position',(-(currU>>0)+'px ')+(-(currV>>0)+'px'))}controlTimer=setTimeout(function(){ctx.controlLoop()},30)};this.init2=function(img,id){filesLoaded++;if(id===1){zoomImage=img}if(filesLoaded===2){this.init()}};this.init=function(){$('.cloud-zoom-loading',jWin.parent()).remove();$mouseTrap=jWin.parent().append(format("<div class='mousetrap' style='background-image:url(\".\");z-index:999;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;\'></div>",sImg.outerWidth(),sImg.outerHeight(),0,0)).find(':last');$mouseTrap.bind('mousemove',this,function(event){mx=event.pageX;my=event.pageY});$mouseTrap.bind('mouseleave',this,function(event){clearTimeout(controlTimer);if(lens){lens.fadeOut(299)}if($tint){$tint.fadeOut(299)}if(softFocus){softFocus.fadeOut(299)}zoomDiv.fadeOut(300,function(){ctx.fadedOut()});return false});$mouseTrap.bind('mouseenter',this,function(event){mx=event.pageX;my=event.pageY;zw=event.data;if(zoomDiv){zoomDiv.stop(true,false);zoomDiv.remove()}var xPos=opts.adjustX,yPos=opts.adjustY;var siw=sImg.outerWidth();var sih=sImg.outerHeight();var w=opts.zoomWidth;var h=opts.zoomHeight;if(opts.zoomWidth=='auto'){w=siw}if(opts.zoomHeight=='auto'){h=sih}var appendTo=jWin.parent();switch(opts.position){case'top':yPos-=h;break;case'right':xPos+=siw;break;case'bottom':yPos+=sih;break;case'left':xPos-=w;break;case'inside':w=siw;h=sih;break;default:appendTo=$('#'+opts.position);if(!appendTo.length){appendTo=jWin;xPos+=siw;yPos+=sih}else{w=appendTo.innerWidth();h=appendTo.innerHeight()}}zoomDiv=appendTo.append(format('<div id="cloud-zoom-big" class="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-image:url(\'%4\');z-index:99;"></div>',xPos,yPos,w,h,zoomImage.src)).find(':last');if(sImg.attr('title')&&opts.showTitle){zoomDiv.append(format('<div class="cloud-zoom-title">%0</div>',sImg.attr('title'))).find(':last').css('opacity',opts.titleOpacity)}if($.browser.msie&&$.browser.version<7){$ie6Fix=$('<iframe frameborder="0" src="#"></iframe>').css({position:"absolute",left:xPos,top:yPos,zIndex:99,width:w,height:h}).insertBefore(zoomDiv)}zoomDiv.fadeIn(500);if(lens){lens.remove();lens=null}cw=(sImg.outerWidth()/zoomImage.width)*zoomDiv.width();ch=(sImg.outerHeight()/zoomImage.height)*zoomDiv.height();lens=jWin.append(format("<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>",cw,ch)).find(':last');$mouseTrap.css('cursor',lens.css('cursor'));var noTrans=false;if(opts.tint){lens.css('background','url("'+sImg.attr('src')+'")');$tint=jWin.append(format('<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />',sImg.outerWidth(),sImg.outerHeight(),opts.tint)).find(':last');$tint.css('opacity',opts.tintOpacity);noTrans=true;$tint.fadeIn(500)}if(opts.softFocus){lens.css('background','url("'+sImg.attr('src')+'")');softFocus=jWin.append(format('<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />',sImg.outerWidth()-2,sImg.outerHeight()-2,opts.tint)).find(':last');softFocus.css('background','url("'+sImg.attr('src')+'")');softFocus.css('opacity',0.5);noTrans=true;softFocus.fadeIn(500)}if(!noTrans){lens.css('opacity',opts.lensOpacity)}if(opts.position!=='inside'){lens.fadeIn(500)}zw.controlLoop();return})};img1=new Image();$(img1).load(function(){ctx.init2(this,0)});img1.src=sImg.attr('src');img2=new Image();$(img2).load(function(){ctx.init2(this,1)});img2.src=jWin.attr('href')}$.fn.CloudZoom=function(options){try{document.execCommand("BackgroundImageCache",false,true)}catch(e){}this.each(function(){var relOpts,opts;eval('var	a = {'+$(this).attr('rel')+'}');relOpts=a;if($(this).is('.cloud-zoom')){$(this).css({'position':'relative','display':'block'});$('img',$(this)).css({'display':'block'});if($(this).parent().attr('id')!='wrap'){$(this).wrap('<div id="wrap" style="top:0px;z-index:999;position:relative;"></div>')}opts=$.extend({},$.fn.CloudZoom.defaults,options);opts=$.extend({},opts,relOpts);$(this).data('zoom',new CloudZoom($(this),opts))}else if($(this).is('.cloud-zoom-gallery')){opts=$.extend({},relOpts,options);$(this).data('relOpts',opts);$(this).bind('click',$(this),function(event){var data=event.data.data('relOpts');$('#'+data.useZoom).data('zoom').destroy();$('#'+data.useZoom).attr('href',event.data.attr('href'));$('#'+data.useZoom+' img').attr('src',event.data.data('relOpts').smallImage);$('#'+event.data.data('relOpts').useZoom).CloudZoom();return false})}});return this};$.fn.CloudZoom.defaults={zoomWidth:'auto',zoomHeight:'auto',position:'right',tint:false,tintOpacity:0.5,lensOpacity:0.5,softFocus:false,smoothMove:3,showTitle:true,titleOpacity:0.5,adjustX:0,adjustY:0}})(jQuery);






/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.9
* Updated: September 5th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function($){
	$.fn.slides = function( option ) {
		// override defaults with specified option
		option = $.extend( {}, $.fn.slides.option, option );

		return this.each(function(){
			// wrap slides in control container, make sure slides are block level
			$('.' + option.container, $(this)).children().wrapAll('<div class="slides_control"/>');
			
			var elem = $(this),
				control = $('.slides_control',elem),
				total = control.children().size(),
				width = control.children().outerWidth(),
				height = control.children().outerHeight(),
				start = option.start - 1,
				effect = option.effect.indexOf(',') < 0 ? option.effect : option.effect.replace(' ', '').split(',')[0],
				paginationEffect = option.effect.indexOf(',') < 0 ? effect : option.effect.replace(' ', '').split(',')[1],
				next = 0, prev = 0, number = 0, current = 0, loaded, active, clicked, position, direction, imageParent, pauseTimeout, playInterval;
			
			// is there only one slide?
			if (total < 2) {
				// Fade in .slides_container
				$('.' + option.container, $(this)).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
					// let the script know everything is loaded
					loaded = true;
					// call the loaded funciton
					option.slidesLoaded();
				});
				// Hide the next/previous buttons
				$('.' + option.next + ', .' + option.prev).fadeOut(0);
				return false;
			}

			// animate slides
			function animate(direction, effect, clicked) {
				if (!active && loaded) {
					active = true;
					// start of animation
					option.animationStart(current + 1);
					switch(direction) {
						case 'next':
							// change current slide to previous
							prev = current;
							// get next from current + 1
							next = current + 1;
							// if last slide, set next to first slide
							next = total === next ? 0 : next;
							// set position of next slide to right of previous
							position = width*2;
							// distance to slide based on width of slides
							direction = -width*2;
							// store new current slide
							current = next;
						break;
						case 'prev':
							// change current slide to previous
							prev = current;
							// get next from current - 1
							next = current - 1;
							// if first slide, set next to last slide
							next = next === -1 ? total-1 : next;								
							// set position of next slide to left of previous
							position = 0;								
							// distance to slide based on width of slides
							direction = 0;		
							// store new current slide
							current = next;
						break;
						case 'pagination':
							// get next from pagination item clicked, convert to number
							next = parseInt(clicked,10);
							// get previous from pagination item with class of current
							prev = $('.' + option.paginationClass + ' li.'+ option.currentClass +' a', elem).attr('href').match('[^#/]+$');
							// if next is greater then previous set position of next slide to right of previous
							if (next > prev) {
								position = width*2;
								direction = -width*2;
							} else {
							// if next is less then previous set position of next slide to left of previous
								position = 0;
								direction = 0;
							}
							// store new current slide
							current = next;
						break;
					}

					// fade animation
					if (effect === 'fade') {
						// fade animation with crossfade
						if (option.crossfade) {
							// put hidden next above current
							control.children(':eq('+ next +')', elem).css({
								zIndex: 10
							// fade in next
							}).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
								if (option.autoHeight) {
									// animate container to height of next
									control.animate({
										height: control.children(':eq('+ next +')', elem).outerHeight()
									}, option.autoHeightSpeed, function(){
										// hide previous
										control.children(':eq('+ prev +')', elem).css({
											display: 'none',
											zIndex: 0
										});								
										// reset z index
										control.children(':eq('+ next +')', elem).css({
											zIndex: 0
										});									
										// end of animation
										option.animationComplete(next + 1);
										active = false;
									});
								} else {
									// hide previous
									control.children(':eq('+ prev +')', elem).css({
										display: 'none',
										zIndex: 0
									});									
									// reset zindex
									control.children(':eq('+ next +')', elem).css({
										zIndex: 0
									});									
									// end of animation
									option.animationComplete(next + 1);
									active = false;
								}
							});
						} else {
							// fade animation with no crossfade
							control.children(':eq('+ prev +')', elem).fadeOut(option.fadeSpeed,  option.fadeEasing, function(){
								// animate to new height
								if (option.autoHeight) {
									control.animate({
										// animate container to height of next
										height: control.children(':eq('+ next +')', elem).outerHeight()
									}, option.autoHeightSpeed,
									// fade in next slide
									function(){
										control.children(':eq('+ next +')', elem).fadeIn(option.fadeSpeed, option.fadeEasing);
									});
								} else {
								// if fixed height
									control.children(':eq('+ next +')', elem).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
										// fix font rendering in ie, lame
										if($.browser.msie) {
											$(this).get(0).style.removeAttribute('filter');
										}
									});
								}									
								// end of animation
								option.animationComplete(next + 1);
								active = false;
							});
						}
					// slide animation
					} else {
						// move next slide to right of previous
						control.children(':eq('+ next +')').css({
							left: position,
							display: 'block'
						});
						
						// animate to new height
						if (option.autoHeight) {
							control.animate({
								left: direction,
								height: control.children(':eq('+ next +')').outerHeight()
							},option.slideSpeed, option.slideEasing, function(){
								control.css({
									left: -width
								});
								control.children(':eq('+ next +')').css({
									left: width,
									zIndex: 5
								});
								// reset previous slide
								control.children(':eq('+ prev +')').css({
									left: width,
									display: 'none',
									zIndex: 0
								});
								// end of animation
								option.animationComplete(next + 1);
								active = false;
							});
							// if fixed height
							} else {
								// animate control
								control.animate({
									left: direction
								},option.slideSpeed, option.slideEasing, function(){
									// after animation reset control position
									control.css({
										left: -width
									});
									// reset and show next
									control.children(':eq('+ next +')').css({
										left: width,
										zIndex: 5
									});
									// reset previous slide
									control.children(':eq('+ prev +')').css({
										left: width,
										display: 'none',
										zIndex: 0
									});
									// end of animation
									option.animationComplete(next + 1);
									active = false;
								});
							}
						}
					// set current state for pagination
					if (option.pagination) {
						// remove current class from all
						$('.'+ option.paginationClass +' li.' + option.currentClass, elem).removeClass(option.currentClass);
						// add current class to next
						$('.' + option.paginationClass + ' li:eq('+ next +')', elem).addClass(option.currentClass);
					}
				}
			} // end animate function
			
			function stop() {
				// clear interval from stored id
				clearInterval(elem.data('interval'));
			}

			function pause() {
				if (option.pause) {
					// clear timeout and interval
					clearTimeout(elem.data('pause'));
					clearInterval(elem.data('interval'));
					// pause slide show for option.pause amount
					pauseTimeout = setTimeout(function() {
						// clear pause timeout
						clearTimeout(elem.data('pause'));
						// start play interval after pause
						playInterval = setInterval(	function(){
							animate("next", effect);
						},option.play);
						// store play interval
						elem.data('interval',playInterval);
					},option.pause);
					// store pause interval
					elem.data('pause',pauseTimeout);
				} else {
					// if no pause, just stop
					stop();
				}
			}
				
			// 2 or more slides required
			if (total < 2) {
				return;
			}
			
			// error corection for start slide
			if (start < 0) {
				start = 0;
			}
			
			if (start > total) {
				start = total - 1;
			}
					
			// change current based on start option number
			if (option.start) {
				current = start;
			}
			
			// randomizes slide order
			if (option.randomize) {
				control.randomize();
			}
			
			// make sure overflow is hidden, width is set
			$('.' + option.container, elem).css({
				overflow: 'hidden',
				// fix for ie
				position: 'relative'
			});
			
			// set css for slides
			control.children().css({
				position: 'absolute',
				top: 0, 
				left: control.children().outerWidth(),
				zIndex: 0,
				display: 'none'
			 });
			
			// set css for control div
			control.css({
				position: 'relative',
				// size of control 3 x slide width
				width: (width * 3),
				// set height to slide height
				height: 338,
				// center control to slide
				left: -width
			});
			
			// show slides
			$('.' + option.container, elem).css({
				display: 'block'
			});

			// if autoHeight true, get and set height of first slide
			if (option.autoHeight) {
				control.children().css({
					height: 'auto'
				});
				control.animate({
					height: 338
				},option.autoHeightSpeed);
			}
			
			// checks if image is loaded
			if (option.preload && control.find('img:eq(' + start + ')').length) {
				// adds preload image
				$('.' + option.container, elem).css({
					background: 'url(' + option.preloadImage + ') no-repeat 50% 50%'
				});
				
				// gets image src, with cache buster
				var img = control.find('img:eq(' + start + ')').attr('src') + '?' + (new Date()).getTime();
				
				// check if the image has a parent
				if ($('img', elem).parent().attr('class') != 'slides_control') {
					// If image has parent, get tag name
					imageParent = control.children(':eq(0)')[0].tagName.toLowerCase();
				} else {
					// Image doesn't have parent, use image tag name
					imageParent = control.find('img:eq(' + start + ')');
				}

				// checks if image is loaded
				control.find('img:eq(' + start + ')').attr('src', img).load(function() {
					// once image is fully loaded, fade in
					control.find(imageParent + ':eq(' + start + ')').fadeIn(option.fadeSpeed, option.fadeEasing, function(){
						$(this).css({
							zIndex: 5
						});
						// removes preload image
						$('.' + option.container, elem).css({
							background: ''
						});
						// let the script know everything is loaded
						loaded = true;
						// call the loaded funciton
						option.slidesLoaded();
					});
				});
			} else {
				// if no preloader fade in start slide
				control.children(':eq(' + start + ')').fadeIn(option.fadeSpeed, option.fadeEasing, function(){
					// let the script know everything is loaded
					loaded = true;
					// call the loaded funciton
					option.slidesLoaded();
				});
			}
			
			// click slide for next
			if (option.bigTarget) {
				// set cursor to pointer
				control.children().css({
					cursor: 'pointer'
				});
				// click handler
				control.children().click(function(){
					// animate to next on slide click
					animate('next', effect);
					return false;
				});									
			}
			
			// pause on mouseover
			if (option.hoverPause && option.play) {
				control.bind('mouseover',function(){
					// on mouse over stop
					stop();
				});
				control.bind('mouseleave',function(){
					// on mouse leave start pause timeout
					pause();
				});
			}
			
			// generate next/prev buttons
			if (option.generateNextPrev) {
				$('.' + option.container, elem).after('<a href="#" class="'+ option.prev +'">Prev</a>');
				$('.' + option.prev, elem).after('<a href="#" class="'+ option.next +'">Next</a>');
			}
			
			// next button
			$('.' + option.next ,elem).click(function(e){
				e.preventDefault();
				if (option.play) {
					pause();
				}
				animate('next', effect);
			});
			
			// previous button
			$('.' + option.prev, elem).click(function(e){
				e.preventDefault();
				if (option.play) {
					 pause();
				}
				animate('prev', effect);
			});
			
			// generate pagination
			if (option.generatePagination) {
				// create unordered list
				if (option.prependPagination) {
					elem.prepend('<ul class='+ option.paginationClass +'></ul>');
				} else {
					elem.append('<ul class='+ option.paginationClass +'></ul>');
				}
				// for each slide create a list item and link
				control.children().each(function(){
					$('.' + option.paginationClass, elem).append('<li><a href="#'+ number +'">'+ (number+1) +'</a></li>');
					number++;
				});
			} else {
				// if pagination exists, add href w/ value of item number to links
				$('.' + option.paginationClass + ' li a', elem).each(function(){
					$(this).attr('href', '#' + number);
					number++;
				});
			}
			
			// add current class to start slide pagination
			$('.' + option.paginationClass + ' li:eq('+ start +')', elem).addClass(option.currentClass);
			
			// click handling 
			$('.' + option.paginationClass + ' li a', elem ).click(function(){
				// pause slideshow
				if (option.play) {
					 pause();
				}
				// get clicked, pass to animate function					
				clicked = $(this).attr('href').match('[^#/]+$');
				// if current slide equals clicked, don't do anything
				if (current != clicked) {
					animate('pagination', paginationEffect, clicked);
				}
				return false;
			});
			
			// click handling 
			$('a.link', elem).click(function(){
				// pause slideshow
				if (option.play) {
					 pause();
				}
				// get clicked, pass to animate function					
				clicked = $(this).attr('href').match('[^#/]+$') - 1;
				// if current slide equals clicked, don't do anything
				if (current != clicked) {
					animate('pagination', paginationEffect, clicked);
				}
				return false;
			});
		
			if (option.play) {
				// set interval
				playInterval = setInterval(function() {
					animate('next', effect);
				}, option.play);
				// store interval id
				elem.data('interval',playInterval);
			}
		});
	};
	
	// default options
	$.fn.slides.option = {
		preload: false, // boolean, Set true to preload images in an image based slideshow
		preloadImage: '/img/loading.gif', // string, Name and location of loading image for preloader. Default is "/img/loading.gif"
		container: 'slides_container', // string, Class name for slides container. Default is "slides_container"
		generateNextPrev: false, // boolean, Auto generate next/prev buttons
		next: 'next', // string, Class name for next button
		prev: 'prev', // string, Class name for previous button
		pagination: true, // boolean, If you're not using pagination you can set to false, but don't have to
		generatePagination: true, // boolean, Auto generate pagination
		prependPagination: false, // boolean, prepend pagination
		paginationClass: 'pagination', // string, Class name for pagination
		currentClass: 'current', // string, Class name for current class
		fadeSpeed: 350, // number, Set the speed of the fading animation in milliseconds
		fadeEasing: '', // string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
		slideSpeed: 350, // number, Set the speed of the sliding animation in milliseconds
		slideEasing: '', // string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
		start: 1, // number, Set the speed of the sliding animation in milliseconds
		effect: 'slide', // string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
		crossfade: false, // boolean, Crossfade images in a image based slideshow
		randomize: false, // boolean, Set to true to randomize slides
		play: 0, // number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
		pause: 0, // number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
		hoverPause: false, // boolean, Set to true and hovering over slideshow will pause it
		autoHeight: false, // boolean, Set to true to auto adjust height
		autoHeightSpeed: 350, // number, Set auto height animation time in milliseconds
		bigTarget: false, // boolean, Set to true and the whole slide will link to next slide on click
		animationStart: function(){}, // Function called at the start of animation
		animationComplete: function(){}, // Function called at the completion of animation
		slidesLoaded: function() {} // Function is called when slides is fully loaded
	};
	
	// Randomize slide order on load
	$.fn.randomize = function(callback) {
		function randomizeOrder() { return(Math.round(Math.random())-0.5); }
			return($(this).each(function() {
			var $this = $(this);
			var $children = $this.children();
			var childCount = $children.length;
			if (childCount > 1) {
				$children.hide();
				var indices = [];
				for (i=0;i<childCount;i++) { indices[indices.length] = i; }
				indices = indices.sort(randomizeOrder);
				$.each(indices,function(j,k) { 
					var $child = $children.eq(k);
					var $clone = $child.clone(true);
					$clone.show().appendTo($this);
					if (callback !== undefined) {
						callback($child, $clone);
					}
				$child.remove();
			});
			}
		}));
	};
})(jQuery);



/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);




/*
 CLEditor WYSIWYG HTML Editor v1.3.0
 http://premiumsoftware.net/cleditor
 requires jQuery v1.4.2 or later

 Copyright 2010, Chris Landowski, Premium Software, LLC
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(e){function aa(a){var b=this,c=a.target,d=e.data(c,x),h=s[d],f=h.popupName,i=p[f];if(!(b.disabled||e(c).attr(n)==n)){var g={editor:b,button:c,buttonName:d,popup:i,popupName:f,command:h.command,useCSS:b.options.useCSS};if(h.buttonClick&&h.buttonClick(a,g)===false)return false;if(d=="source"){if(t(b)){delete b.range;b.$area.hide();b.$frame.show();c.title=h.title}else{b.$frame.hide();b.$area.show();c.title="Show Rich Text"}setTimeout(function(){u(b)},100)}else if(!t(b))if(f){var j=e(i);if(f==
"url"){if(d=="link"&&M(b)===""){z(b,"A selection is required when inserting a link.",c);return false}j.children(":button").unbind(q).bind(q,function(){var k=j.find(":text"),o=e.trim(k.val());o!==""&&v(b,g.command,o,null,g.button);k.val("http://");r();w(b)})}else f=="pastetext"&&j.children(":button").unbind(q).bind(q,function(){var k=j.find("textarea"),o=k.val().replace(/\n/g,"<br />");o!==""&&v(b,g.command,o,null,g.button);k.val("");r();w(b)});if(c!==e.data(i,A)){N(b,i,c);return false}return}else if(d==
"print")b.$frame[0].contentWindow.print();else if(!v(b,g.command,g.value,g.useCSS,c))return false;w(b)}}function O(a){a=e(a.target).closest("div");a.css(H,a.data(x)?"#FFF":"#FFC")}function P(a){e(a.target).closest("div").css(H,"transparent")}function ba(a){var b=a.data.popup,c=a.target;if(!(b===p.msg||e(b).hasClass(B))){var d=e.data(b,A),h=e.data(d,x),f=s[h],i=f.command,g,j=this.options.useCSS;if(h=="font")g=c.style.fontFamily.replace(/"/g,"");else if(h=="size"){if(c.tagName=="DIV")c=c.children[0];
g=c.innerHTML}else if(h=="style")g="<"+c.tagName+">";else if(h=="color")g=Q(c.style.backgroundColor);else if(h=="highlight"){g=Q(c.style.backgroundColor);if(l)i="backcolor";else j=true}b={editor:this,button:d,buttonName:h,popup:b,popupName:f.popupName,command:i,value:g,useCSS:j};if(!(f.popupClick&&f.popupClick(a,b)===false)){if(b.command&&!v(this,b.command,b.value,b.useCSS,d))return false;r();w(this)}}}function C(a){for(var b=1,c=0,d=0;d<a.length;++d){b=(b+a.charCodeAt(d))%65521;c=(c+b)%65521}return c<<
16|b}function R(a,b,c,d,h){if(p[a])return p[a];var f=e(m).hide().addClass(ca).appendTo("body");if(d)f.html(d);else if(a=="color"){b=b.colors.split(" ");b.length<10&&f.width("auto");e.each(b,function(i,g){e(m).appendTo(f).css(H,"#"+g)});c=da}else if(a=="font")e.each(b.fonts.split(","),function(i,g){e(m).appendTo(f).css("fontFamily",g).html(g)});else if(a=="size")e.each(b.sizes.split(","),function(i,g){e(m).appendTo(f).html("<font size="+g+">"+g+"</font>")});else if(a=="style")e.each(b.styles,function(i,
g){e(m).appendTo(f).html(g[1]+g[0]+g[1].replace("<","</"))});else if(a=="url"){f.html('Enter URL:<br><input type=text value="http://" size=35><br><input type=button value="Submit">');c=B}else if(a=="pastetext"){f.html("Paste your content here and click submit.<br /><textarea cols=40 rows=3></textarea><br /><input type=button value=Submit>");c=B}if(!c&&!d)c=S;f.addClass(c);l&&f.attr(I,"on").find("div,font,p,h1,h2,h3,h4,h5,h6").attr(I,"on");if(f.hasClass(S)||h===true)f.children().hover(O,P);p[a]=f[0];
return f[0]}function T(a,b){if(b){a.$area.attr(n,n);a.disabled=true}else{a.$area.removeAttr(n);delete a.disabled}try{if(l)a.doc.body.contentEditable=!b;else a.doc.designMode=!b?"on":"off"}catch(c){}u(a)}function v(a,b,c,d,h){D(a);if(!l){if(d===undefined||d===null)d=a.options.useCSS;a.doc.execCommand("styleWithCSS",0,d.toString())}d=true;var f;if(l&&b.toLowerCase()=="inserthtml")y(a).pasteHTML(c);else{try{d=a.doc.execCommand(b,0,c||null)}catch(i){f=i.description;d=false}d||("cutcopypaste".indexOf(b)>
-1?z(a,"For security reasons, your browser does not support the "+b+" command. Try using the keyboard shortcut or context menu instead.",h):z(a,f?f:"Error executing the "+b+" command.",h))}u(a);return d}function w(a){setTimeout(function(){t(a)?a.$area.focus():a.$frame[0].contentWindow.focus();u(a)},0)}function y(a){if(l)return J(a).createRange();return J(a).getRangeAt(0)}function J(a){if(l)return a.doc.selection;return a.$frame[0].contentWindow.getSelection()}function Q(a){var b=/rgba?\((\d+), (\d+), (\d+)/.exec(a),
c=a.split("");if(b)for(a=(b[1]<<16|b[2]<<8|b[3]).toString(16);a.length<6;)a="0"+a;return"#"+(a.length==6?a:c[1]+c[1]+c[2]+c[2]+c[3]+c[3])}function r(){e.each(p,function(a,b){e(b).hide().unbind(q).removeData(A)})}function U(){var a=e("link[href$='jquery.cleditor.css']").attr("href");return a.substr(0,a.length-19)+"images/"}function K(a){var b=a.$main,c=a.options;a.$frame&&a.$frame.remove();var d=a.$frame=e('<iframe frameborder="0" src="javascript:true;">').hide().appendTo(b),h=d[0].contentWindow,f=
a.doc=h.document,i=e(f);f.open();f.write(c.docType+"<html>"+(c.docCSSFile===""?"":'<head><link rel="stylesheet" type="text/css" href="'+c.docCSSFile+'" /></head>')+'<body style="'+c.bodyStyle+'"></body></html>');f.close();l&&i.click(function(){w(a)});E(a);if(l){i.bind("beforedeactivate beforeactivate selectionchange keypress",function(g){if(g.type=="beforedeactivate")a.inactive=true;else if(g.type=="beforeactivate"){!a.inactive&&a.range&&a.range.length>1&&a.range.shift();delete a.inactive}else if(!a.inactive){if(!a.range)a.range=
[];for(a.range.unshift(y(a));a.range.length>2;)a.range.pop()}});d.focus(function(){D(a)})}(e.browser.mozilla?i:e(h)).blur(function(){V(a,true)});i.click(r).bind("keyup mouseup",function(){u(a)});L?a.$area.show():d.show();e(function(){var g=a.$toolbar,j=g.children("div:last"),k=b.width();j=j.offset().top+j.outerHeight()-g.offset().top+1;g.height(j);j=(/%/.test(""+c.height)?b.height():parseInt(c.height))-j;d.width(k).height(j);a.$area.width(k).height(ea?j-2:j);T(a,a.disabled);u(a)})}function u(a){if(!L&&
e.browser.webkit&&!a.focused){a.$frame[0].contentWindow.focus();window.focus();a.focused=true}var b=a.doc;if(l)b=y(a);var c=t(a);e.each(a.$toolbar.find("."+W),function(d,h){var f=e(h),i=e.cleditor.buttons[e.data(h,x)],g=i.command,j=true;if(a.disabled)j=false;else if(i.getEnabled){j=i.getEnabled({editor:a,button:h,buttonName:i.name,popup:p[i.popupName],popupName:i.popupName,command:i.command,useCSS:a.options.useCSS});if(j===undefined)j=true}else if((c||L)&&i.name!="source"||l&&(g=="undo"||g=="redo"))j=
false;else if(g&&g!="print"){if(l&&g=="hilitecolor")g="backcolor";if(!l||g!="inserthtml")try{j=b.queryCommandEnabled(g)}catch(k){j=false}}if(j){f.removeClass(X);f.removeAttr(n)}else{f.addClass(X);f.attr(n,n)}})}function D(a){l&&a.range&&a.range[0].select()}function M(a){D(a);if(l)return y(a).text;return J(a).toString()}function z(a,b,c){var d=R("msg",a.options,fa);d.innerHTML=b;N(a,d,c)}function N(a,b,c){var d,h,f=e(b);if(c){var i=e(c);d=i.offset();h=--d.left;d=d.top+i.height()}else{i=a.$toolbar;
d=i.offset();h=Math.floor((i.width()-f.width())/2)+d.left;d=d.top+i.height()-2}r();f.css({left:h,top:d}).show();if(c){e.data(b,A,c);f.bind(q,{popup:b},e.proxy(ba,a))}setTimeout(function(){f.find(":text,textarea").eq(0).focus().select()},100)}function t(a){return a.$area.is(":visible")}function E(a,b){var c=a.$area.val(),d=a.options,h=d.updateFrame,f=e(a.doc.body);if(h){var i=C(c);if(b&&a.areaChecksum==i)return;a.areaChecksum=i}c=h?h(c):c;c=c.replace(/<(?=\/?script)/ig,"&lt;");if(d.updateTextArea)a.frameChecksum=
C(c);if(c!=f.html()){f.html(c);e(a).triggerHandler(F)}}function V(a,b){var c=e(a.doc.body).html(),d=a.options,h=d.updateTextArea,f=a.$area;if(h){var i=C(c);if(b&&a.frameChecksum==i)return;a.frameChecksum=i}c=h?h(c):c;if(d.updateFrame)a.areaChecksum=C(c);if(c!=f.val()){f.val(c);e(a).triggerHandler(F)}}e.cleditor={defaultOptions:{width:500,height:250,controls:"bold italic underline strikethrough subscript superscript | font size style | color highlight removeformat | bullets numbering | outdent indent | alignleft center alignright justify | undo redo | rule image link unlink | cut copy paste pastetext | print source",
colors:"FFF FCC FC9 FF9 FFC 9F9 9FF CFF CCF FCF CCC F66 F96 FF6 FF3 6F9 3FF 6FF 99F F9F BBB F00 F90 FC6 FF0 3F3 6CC 3CF 66C C6C 999 C00 F60 FC3 FC0 3C0 0CC 36F 63F C3C 666 900 C60 C93 990 090 399 33F 60C 939 333 600 930 963 660 060 366 009 339 636 000 300 630 633 330 030 033 006 309 303",fonts:"Arial,Arial Black,Comic Sans MS,Courier New,Narrow,Garamond,Georgia,Impact,Sans Serif,Serif,Tahoma,Trebuchet MS,Verdana",sizes:"1,2,3,4,5,6,7",styles:[["Paragraph","<p>"],["Header 1","<h1>"],["Header 2","<h2>"],
["Header 3","<h3>"],["Header 4","<h4>"],["Header 5","<h5>"],["Header 6","<h6>"]],useCSS:false,docType:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',docCSSFile:"",bodyStyle:"margin:4px; font:10pt Arial,Verdana; cursor:text"},buttons:{init:"bold,,|italic,,|underline,,|strikethrough,,|subscript,,|superscript,,|font,,fontname,|size,Font Size,fontsize,|style,,formatblock,|color,Font Color,forecolor,|highlight,Text Highlight Color,hilitecolor,color|removeformat,Remove Formatting,|bullets,,insertunorderedlist|numbering,,insertorderedlist|outdent,,|indent,,|alignleft,Align Text Left,justifyleft|center,,justifycenter|alignright,Align Text Right,justifyright|justify,,justifyfull|undo,,|redo,,|rule,Insert Horizontal Rule,inserthorizontalrule|image,Insert Image,insertimage,url|link,Insert Hyperlink,createlink,url|unlink,Remove Hyperlink,|cut,,|copy,,|paste,,|pastetext,Paste as Text,inserthtml,|print,,|source,Show Source"},
imagesPath:function(){return U()}};e.fn.cleditor=function(a){var b=e([]);this.each(function(c,d){if(d.tagName=="TEXTAREA"){var h=e.data(d,Y);h||(h=new cleditor(d,a));b=b.add(h)}});return b};var H="backgroundColor",A="button",x="buttonName",F="change",Y="cleditor",q="click",n="disabled",m="<div>",I="unselectable",W="cleditorButton",X="cleditorDisabled",ca="cleditorPopup",S="cleditorList",da="cleditorColor",B="cleditorPrompt",fa="cleditorMsg",l=e.browser.msie,ea=/msie\s6/i.test(navigator.userAgent),
L=/iphone|ipad|ipod/i.test(navigator.userAgent),p={},Z,s=e.cleditor.buttons;e.each(s.init.split("|"),function(a,b){var c=b.split(","),d=c[0];s[d]={stripIndex:a,name:d,title:c[1]===""?d.charAt(0).toUpperCase()+d.substr(1):c[1],command:c[2]===""?d:c[2],popupName:c[3]===""?d:c[3]}});delete s.init;cleditor=function(a,b){var c=this;c.options=b=e.extend({},e.cleditor.defaultOptions,b);var d=c.$area=e(a).hide().data(Y,c).blur(function(){E(c,true)}),h=c.$main=e(m).addClass("cleditorMain").width(b.width).height(b.height),
f=c.$toolbar=e(m).addClass("cleditorToolbar").appendTo(h),i=e(m).addClass("cleditorGroup").appendTo(f);e.each(b.controls.split(" "),function(g,j){if(j==="")return true;if(j=="|"){e(m).addClass("cleditorDivider").appendTo(i);i=e(m).addClass("cleditorGroup").appendTo(f)}else{var k=s[j],o=e(m).data(x,k.name).addClass(W).attr("title",k.title).bind(q,e.proxy(aa,c)).appendTo(i).hover(O,P),G={};if(k.css)G=k.css;else if(k.image)G.backgroundImage="url("+U()+k.image+")";if(k.stripIndex)G.backgroundPosition=
k.stripIndex*-24;o.css(G);l&&o.attr(I,"on");k.popupName&&R(k.popupName,b,k.popupClass,k.popupContent,k.popupHover)}});h.insertBefore(d).append(d);if(!Z){e(document).click(function(g){g=e(g.target);g.add(g.parents()).is("."+B)||r()});Z=true}/auto|%/.test(""+b.width+b.height)&&e(window).resize(function(){K(c)});K(c)};var $=cleditor.prototype;e.each([["clear",function(a){a.$area.val("");E(a)}],["disable",T],["execCommand",v],["focus",w],["hidePopups",r],["sourceMode",t,true],["refresh",K],["select",
function(a){setTimeout(function(){t(a)?a.$area.select():v(a,"selectall")},0)}],["selectedHTML",function(a){D(a);a=y(a);if(l)return a.htmlText;var b=e("<layer>")[0];b.appendChild(a.cloneContents());return b.innerHTML},true],["selectedText",M,true],["showMessage",z],["updateFrame",E],["updateTextArea",V]],function(a,b){$[b[0]]=function(){for(var c=[this],d=0;d<arguments.length;d++)c.push(arguments[d]);c=b[1].apply(this,c);if(b[2])return c;return this}});$.change=function(a){var b=e(this);return a?b.bind(F,
a):b.trigger(F)}})(jQuery);



/*
 * jPicker 1.1.6
 *
 * jQuery Plugin for Photoshop style color picker
 *
 * Copyright (c) 2010 Christopher T. Tillman
 * Digital Magic Productions, Inc. (http://www.digitalmagicpro.com/)
 * MIT style license, FREE to use, alter, copy, sell, and especially ENHANCE
 *
 * Painstakingly ported from John Dyers' excellent work on his own color picker based on the Prototype framework.
 *
 * John Dyers' website: (http://johndyer.name)
 * Color Picker page:   (http://johndyer.name/post/2007/09/PhotoShop-like-JavaScript-Color-Picker.aspx)
 *
 */
(function(e,a){Math.precision=function(j,h){if(h===undefined){h=0}return Math.round(j*Math.pow(10,h))/Math.pow(10,h)};var d=function(z,k){var o=this,j=z.find("img:first"),F=0,E=100,w=100,D=0,C=100,v=100,s=0,p=0,n,q,u=new Array(),l=function(y){for(var x=0;x<u.length;x++){u[x].call(o,o,y)}},H=function(x){var y=z.offset();n={l:y.left|0,t:y.top|0};clearTimeout(q);q=setTimeout(function(){A.call(o,x)},0);e(document).bind("mousemove",h).bind("mouseup",B);x.preventDefault()},h=function(x){clearTimeout(q);q=setTimeout(function(){A.call(o,x)},0);x.stopPropagation();x.preventDefault();return false},B=function(x){e(document).unbind("mouseup",B).unbind("mousemove",h);x.stopPropagation();x.preventDefault();return false},A=function(M){var K=M.pageX-n.l,x=M.pageY-n.t,L=z.w,y=z.h;if(K<0){K=0}else{if(K>L){K=L}}if(x<0){x=0}else{if(x>y){x=y}}J.call(o,"xy",{x:((K/L)*w)+F,y:((x/y)*v)+D})},r=function(){var L=0,x=0,N=z.w,K=z.h,M=j.w,y=j.h;setTimeout(function(){if(w>0){if(s==E){L=N}else{L=((s/w)*N)|0}}if(v>0){if(p==C){x=K}else{x=((p/v)*K)|0}}if(M>=N){L=(N>>1)-(M>>1)}else{L-=M>>1}if(y>=K){x=(K>>1)-(y>>1)}else{x-=y>>1}j.css({left:L+"px",top:x+"px"})},0)},J=function(x,K,y){var O=K!==undefined;if(!O){if(x===undefined||x==null){x="xy"}switch(x.toLowerCase()){case"x":return s;case"y":return p;case"xy":default:return{x:s,y:p}}}if(y!=null&&y==o){return}var N=false,M,L;if(x==null){x="xy"}switch(x.toLowerCase()){case"x":M=K&&(K.x&&K.x|0||K|0)||0;break;case"y":L=K&&(K.y&&K.y|0||K|0)||0;break;case"xy":default:M=K&&K.x&&K.x|0||0;L=K&&K.y&&K.y|0||0;break}if(M!=null){if(M<F){M=F}else{if(M>E){M=E}}if(s!=M){s=M;N=true}}if(L!=null){if(L<D){L=D}else{if(L>C){L=C}}if(p!=L){p=L;N=true}}N&&l.call(o,y||o)},t=function(x,L){var P=L!==undefined;if(!P){if(x===undefined||x==null){x="all"}switch(x.toLowerCase()){case"minx":return F;case"maxx":return E;case"rangex":return{minX:F,maxX:E,rangeX:w};case"miny":return D;case"maxy":return C;case"rangey":return{minY:D,maxY:C,rangeY:v};case"all":default:return{minX:F,maxX:E,rangeX:w,minY:D,maxY:C,rangeY:v}}}var O=false,N,K,M,y;if(x==null){x="all"}switch(x.toLowerCase()){case"minx":N=L&&(L.minX&&L.minX|0||L|0)||0;break;case"maxx":K=L&&(L.maxX&&L.maxX|0||L|0)||0;break;case"rangex":N=L&&L.minX&&L.minX|0||0;K=L&&L.maxX&&L.maxX|0||0;break;case"miny":M=L&&(L.minY&&L.minY|0||L|0)||0;break;case"maxy":y=L&&(L.maxY&&L.maxY|0||L|0)||0;break;case"rangey":M=L&&L.minY&&L.minY|0||0;y=L&&L.maxY&&L.maxY|0||0;break;case"all":default:N=L&&L.minX&&L.minX|0||0;K=L&&L.maxX&&L.maxX|0||0;M=L&&L.minY&&L.minY|0||0;y=L&&L.maxY&&L.maxY|0||0;break}if(N!=null&&F!=N){F=N;w=E-F}if(K!=null&&E!=K){E=K;w=E-F}if(M!=null&&D!=M){D=M;v=C-D}if(y!=null&&C!=y){C=y;v=C-D}},I=function(x){if(e.isFunction(x)){u.push(x)}},m=function(y){if(!e.isFunction(y)){return}var x;while((x=e.inArray(y,u))!=-1){u.splice(x,1)}},G=function(){e(document).unbind("mouseup",B).unbind("mousemove",h);z.unbind("mousedown",H);z=null;j=null;u=null};e.extend(true,o,{val:J,range:t,bind:I,unbind:m,destroy:G});j.src=k.arrow&&k.arrow.image;j.w=k.arrow&&k.arrow.width||j.width();j.h=k.arrow&&k.arrow.height||j.height();z.w=k.map&&k.map.width||z.width();z.h=k.map&&k.map.height||z.height();z.bind("mousedown",H);I.call(o,r)},b=function(u,z,k,y){var q=this,l=u.find("td.Text input"),r=l.eq(3),v=l.eq(4),h=l.eq(5),o=l.length>7?l.eq(6):null,n=l.eq(0),p=l.eq(1),x=l.eq(2),s=l.eq(l.length>7?7:6),B=l.length>7?l.eq(8):null,C=function(E){if(E.target.value==""&&E.target!=s.get(0)&&(k!=null&&E.target!=k.get(0)||k==null)){return}if(!t(E)){return E}switch(E.target){case r.get(0):switch(E.keyCode){case 38:r.val(j.call(q,(r.val()<<0)+1,0,255));z.val("r",r.val(),E.target);return false;case 40:r.val(j.call(q,(r.val()<<0)-1,0,255));z.val("r",r.val(),E.target);return false}break;case v.get(0):switch(E.keyCode){case 38:v.val(j.call(q,(v.val()<<0)+1,0,255));z.val("g",v.val(),E.target);return false;case 40:v.val(j.call(q,(v.val()<<0)-1,0,255));z.val("g",v.val(),E.target);return false}break;case h.get(0):switch(E.keyCode){case 38:h.val(j.call(q,(h.val()<<0)+1,0,255));z.val("b",h.val(),E.target);return false;case 40:h.val(j.call(q,(h.val()<<0)-1,0,255));z.val("b",h.val(),E.target);return false}break;case o&&o.get(0):switch(E.keyCode){case 38:o.val(j.call(q,parseFloat(o.val())+1,0,100));z.val("a",Math.precision((o.val()*255)/100,y),E.target);return false;case 40:o.val(j.call(q,parseFloat(o.val())-1,0,100));z.val("a",Math.precision((o.val()*255)/100,y),E.target);return false}break;case n.get(0):switch(E.keyCode){case 38:n.val(j.call(q,(n.val()<<0)+1,0,360));z.val("h",n.val(),E.target);return false;case 40:n.val(j.call(q,(n.val()<<0)-1,0,360));z.val("h",n.val(),E.target);return false}break;case p.get(0):switch(E.keyCode){case 38:p.val(j.call(q,(p.val()<<0)+1,0,100));z.val("s",p.val(),E.target);return false;case 40:p.val(j.call(q,(p.val()<<0)-1,0,100));z.val("s",p.val(),E.target);return false}break;case x.get(0):switch(E.keyCode){case 38:x.val(j.call(q,(x.val()<<0)+1,0,100));z.val("v",x.val(),E.target);return false;case 40:x.val(j.call(q,(x.val()<<0)-1,0,100));z.val("v",x.val(),E.target);return false}break}},w=function(E){if(E.target.value==""&&E.target!=s.get(0)&&(k!=null&&E.target!=k.get(0)||k==null)){return}if(!t(E)){return E}switch(E.target){case r.get(0):r.val(j.call(q,r.val(),0,255));z.val("r",r.val(),E.target);break;case v.get(0):v.val(j.call(q,v.val(),0,255));z.val("g",v.val(),E.target);break;case h.get(0):h.val(j.call(q,h.val(),0,255));z.val("b",h.val(),E.target);break;case o&&o.get(0):o.val(j.call(q,o.val(),0,100));z.val("a",Math.precision((o.val()*255)/100,y),E.target);break;case n.get(0):n.val(j.call(q,n.val(),0,360));z.val("h",n.val(),E.target);break;case p.get(0):p.val(j.call(q,p.val(),0,100));z.val("s",p.val(),E.target);break;case x.get(0):x.val(j.call(q,x.val(),0,100));z.val("v",x.val(),E.target);break;case s.get(0):s.val(s.val().replace(/[^a-fA-F0-9]/g,"").toLowerCase().substring(0,6));k&&k.val(s.val());z.val("hex",s.val()!=""?s.val():null,E.target);break;case k&&k.get(0):k.val(k.val().replace(/[^a-fA-F0-9]/g,"").toLowerCase().substring(0,6));s.val(k.val());z.val("hex",k.val()!=""?k.val():null,E.target);break;case B&&B.get(0):B.val(B.val().replace(/[^a-fA-F0-9]/g,"").toLowerCase().substring(0,2));z.val("a",B.val()!=null?parseInt(B.val(),16):null,E.target);break}},A=function(E){if(z.val()!=null){switch(E.target){case r.get(0):r.val(z.val("r"));break;case v.get(0):v.val(z.val("g"));break;case h.get(0):h.val(z.val("b"));break;case o&&o.get(0):o.val(Math.precision((z.val("a")*100)/255,y));break;case n.get(0):n.val(z.val("h"));break;case p.get(0):p.val(z.val("s"));break;case x.get(0):x.val(z.val("v"));break;case s.get(0):case k&&k.get(0):s.val(z.val("hex"));k&&k.val(z.val("hex"));break;case B&&B.get(0):B.val(z.val("ahex").substring(6));break}}},t=function(E){switch(E.keyCode){case 9:case 16:case 29:case 37:case 39:return false;case"c".charCodeAt():case"v".charCodeAt():if(E.ctrlKey){return false}}return true},j=function(G,F,E){if(G==""||isNaN(G)){return F}if(G>E){return E}if(G<F){return F}return G},m=function(G,E){var F=G.val("all");if(E!=r.get(0)){r.val(F!=null?F.r:"")}if(E!=v.get(0)){v.val(F!=null?F.g:"")}if(E!=h.get(0)){h.val(F!=null?F.b:"")}if(o&&E!=o.get(0)){o.val(F!=null?Math.precision((F.a*100)/255,y):"")}if(E!=n.get(0)){n.val(F!=null?F.h:"")}if(E!=p.get(0)){p.val(F!=null?F.s:"")}if(E!=x.get(0)){x.val(F!=null?F.v:"")}if(E!=s.get(0)&&(k&&E!=k.get(0)||!k)){s.val(F!=null?F.hex:"")}if(k&&E!=k.get(0)&&E!=s.get(0)){k.val(F!=null?F.hex:"")}if(B&&E!=B.get(0)){B.val(F!=null?F.ahex.substring(6):"")}},D=function(){r.add(v).add(h).add(o).add(n).add(p).add(x).add(s).add(k).add(B).unbind("keyup",w).unbind("blur",A);r.add(v).add(h).add(o).add(n).add(p).add(x).unbind("keydown",C);z.unbind(m);r=null;v=null;h=null;o=null;n=null;p=null;x=null;s=null;B=null};e.extend(true,q,{destroy:D});r.add(v).add(h).add(o).add(n).add(p).add(x).add(s).add(k).add(B).bind("keyup",w).bind("blur",A);r.add(v).add(h).add(o).add(n).add(p).add(x).bind("keydown",C);z.bind(m)};e.jPicker={List:[],Color:function(z){var q=this,j,o,t,u,n,A,x,k=new Array(),m=function(r){for(var h=0;h<k.length;h++){k[h].call(q,q,r)}},l=function(h,G,r){var F=G!==undefined;if(!F){if(h===undefined||h==null||h==""){h="all"}if(j==null){return null}switch(h.toLowerCase()){case"ahex":return g.rgbaToHex({r:j,g:o,b:t,a:u});case"hex":return l("ahex").substring(0,6);case"all":return{r:j,g:o,b:t,a:u,h:n,s:A,v:x,hex:l.call(q,"hex"),ahex:l.call(q,"ahex")};default:var D={};for(var B=0;B<h.length;B++){switch(h.charAt(B)){case"r":if(h.length==1){D=j}else{D.r=j}break;case"g":if(h.length==1){D=o}else{D.g=o}break;case"b":if(h.length==1){D=t}else{D.b=t}break;case"a":if(h.length==1){D=u}else{D.a=u}break;case"h":if(h.length==1){D=n}else{D.h=n}break;case"s":if(h.length==1){D=A}else{D.s=A}break;case"v":if(h.length==1){D=x}else{D.v=x}break}}return D=={}?l.call(q,"all"):D;break}}if(r!=null&&r==q){return}var v=false;if(h==null){h=""}if(G==null){if(j!=null){j=null;v=true}if(o!=null){o=null;v=true}if(t!=null){t=null;v=true}if(u!=null){u=null;v=true}if(n!=null){n=null;v=true}if(A!=null){A=null;v=true}if(x!=null){x=null;v=true}v&&m.call(q,r||q);return}switch(h.toLowerCase()){case"ahex":case"hex":var D=g.hexToRgba(G&&(G.ahex||G.hex)||G||"00000000");l.call(q,"rgba",{r:D.r,g:D.g,b:D.b,a:h=="ahex"?D.a:u!=null?u:255},r);break;default:if(G&&(G.ahex!=null||G.hex!=null)){l.call(q,"ahex",G.ahex||G.hex||"00000000",r);return}var s={},E=false,C=false;if(G.r!==undefined&&!h.indexOf("r")==-1){h+="r"}if(G.g!==undefined&&!h.indexOf("g")==-1){h+="g"}if(G.b!==undefined&&!h.indexOf("b")==-1){h+="b"}if(G.a!==undefined&&!h.indexOf("a")==-1){h+="a"}if(G.h!==undefined&&!h.indexOf("h")==-1){h+="h"}if(G.s!==undefined&&!h.indexOf("s")==-1){h+="s"}if(G.v!==undefined&&!h.indexOf("v")==-1){h+="v"}for(var B=0;B<h.length;B++){switch(h.charAt(B)){case"r":if(C){continue}E=true;s.r=G&&G.r&&G.r|0||G&&G|0||0;if(s.r<0){s.r=0}else{if(s.r>255){s.r=255}}if(j!=s.r){j=s.r;v=true}break;case"g":if(C){continue}E=true;s.g=G&&G.g&&G.g|0||G&&G|0||0;if(s.g<0){s.g=0}else{if(s.g>255){s.g=255}}if(o!=s.g){o=s.g;v=true}break;case"b":if(C){continue}E=true;s.b=G&&G.b&&G.b|0||G&&G|0||0;if(s.b<0){s.b=0}else{if(s.b>255){s.b=255}}if(t!=s.b){t=s.b;v=true}break;case"a":s.a=G&&G.a!=null?G.a|0:G!=null?G|0:255;if(s.a<0){s.a=0}else{if(s.a>255){s.a=255}}if(u!=s.a){u=s.a;v=true}break;case"h":if(E){continue}C=true;s.h=G&&G.h&&G.h|0||G&&G|0||0;if(s.h<0){s.h=0}else{if(s.h>360){s.h=360}}if(n!=s.h){n=s.h;v=true}break;case"s":if(E){continue}C=true;s.s=G&&G.s!=null?G.s|0:G!=null?G|0:100;if(s.s<0){s.s=0}else{if(s.s>100){s.s=100}}if(A!=s.s){A=s.s;v=true}break;case"v":if(E){continue}C=true;s.v=G&&G.v!=null?G.v|0:G!=null?G|0:100;if(s.v<0){s.v=0}else{if(s.v>100){s.v=100}}if(x!=s.v){x=s.v;v=true}break}}if(v){if(E){j=j||0;o=o||0;t=t||0;var D=g.rgbToHsv({r:j,g:o,b:t});n=D.h;A=D.s;x=D.v}else{if(C){n=n||0;A=A!=null?A:100;x=x!=null?x:100;var D=g.hsvToRgb({h:n,s:A,v:x});j=D.r;o=D.g;t=D.b}}u=u!=null?u:255;m.call(q,r||q)}break}},p=function(h){if(e.isFunction(h)){k.push(h)}},y=function(r){if(!e.isFunction(r)){return}var h;while((h=e.inArray(r,k))!=-1){k.splice(h,1)}},w=function(){k=null};e.extend(true,q,{val:l,bind:p,unbind:y,destroy:w});if(z){if(z.ahex!=null){l("ahex",z)}else{if(z.hex!=null){l((z.a!=null?"a":"")+"hex",z.a!=null?{ahex:z.hex+g.intToHex(z.a)}:z)}else{if(z.r!=null&&z.g!=null&&z.b!=null){l("rgb"+(z.a!=null?"a":""),z)}else{if(z.h!=null&&z.s!=null&&z.v!=null){l("hsv"+(z.a!=null?"a":""),z)}}}}}},ColorMethods:{hexToRgba:function(m){m=this.validateHex(m);if(m==""){return{r:null,g:null,b:null,a:null}}var l="00",k="00",h="00",j="255";if(m.length==6){m+="ff"}if(m.length>6){l=m.substring(0,2);k=m.substring(2,4);h=m.substring(4,6);j=m.substring(6,m.length)}else{if(m.length>4){l=m.substring(4,m.length);m=m.substring(0,4)}if(m.length>2){k=m.substring(2,m.length);m=m.substring(0,2)}if(m.length>0){h=m.substring(0,m.length)}}return{r:this.hexToInt(l),g:this.hexToInt(k),b:this.hexToInt(h),a:this.hexToInt(j)}},validateHex:function(h){h=h.toLowerCase().replace(/[^a-f0-9]/g,"");if(h.length>8){h=h.substring(0,8)}return h},rgbaToHex:function(h){return this.intToHex(h.r)+this.intToHex(h.g)+this.intToHex(h.b)+this.intToHex(h.a)},intToHex:function(j){var h=(j|0).toString(16);if(h.length==1){h=("0"+h)}return h.toLowerCase()},hexToInt:function(h){return parseInt(h,16)},rgbToHsv:function(l){var o=l.r/255,n=l.g/255,j=l.b/255,k={h:0,s:0,v:0},m=0,h=0,p;if(o>=n&&o>=j){h=o;m=n>j?j:n}else{if(n>=j&&n>=o){h=n;m=o>j?j:o}else{h=j;m=n>o?o:n}}k.v=h;k.s=h?(h-m)/h:0;if(!k.s){k.h=0}else{p=h-m;if(o==h){k.h=(n-j)/p}else{if(n==h){k.h=2+(j-o)/p}else{k.h=4+(o-n)/p}}k.h=parseInt(k.h*60);if(k.h<0){k.h+=360}}k.s=(k.s*100)|0;k.v=(k.v*100)|0;return k},hsvToRgb:function(n){var r={r:0,g:0,b:0,a:100},m=n.h,x=n.s,u=n.v;if(x==0){if(u==0){r.r=r.g=r.b=0}else{r.r=r.g=r.b=(u*255/100)|0}}else{if(m==360){m=0}m/=60;x=x/100;u=u/100;var l=m|0,o=m-l,k=u*(1-x),j=u*(1-(x*o)),w=u*(1-(x*(1-o)));switch(l){case 0:r.r=u;r.g=w;r.b=k;break;case 1:r.r=j;r.g=u;r.b=k;break;case 2:r.r=k;r.g=u;r.b=w;break;case 3:r.r=k;r.g=j;r.b=u;break;case 4:r.r=w;r.g=k;r.b=u;break;case 5:r.r=u;r.g=k;r.b=j;break}r.r=(r.r*255)|0;r.g=(r.g*255)|0;r.b=(r.b*255)|0}return r}}};var f=e.jPicker.Color,c=e.jPicker.List,g=e.jPicker.ColorMethods;e.fn.jPicker=function(j){var h=arguments;return this.each(function(){var w=this,av=e.extend(true,{},e.fn.jPicker.defaults,j);if(e(w).get(0).nodeName.toLowerCase()=="input"){e.extend(true,av,{window:{bindToInput:true,expandable:true,input:e(w)}});if(e(w).val()==""){av.color.active=new f({hex:null});av.color.current=new f({hex:null})}else{if(g.validateHex(e(w).val())){av.color.active=new f({hex:e(w).val(),a:av.color.active.val("a")});av.color.current=new f({hex:e(w).val(),a:av.color.active.val("a")})}}}if(av.window.expandable){e(w).after('<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker">&nbsp;</span><span class="Container">&nbsp;</span></span></span>')}else{av.window.liveUpdate=false}var Q=parseFloat(navigator.appVersion.split("MSIE")[1])<7&&document.body.filters,R=null,l=null,s=null,au=null,at=null,ar=null,P=null,O=null,N=null,M=null,L=null,K=null,D=null,U=null,aw=null,J=null,I=null,am=null,ai=null,E=null,an=null,ah=null,X=null,ab=null,aq=null,r=null,C=null,u=null,ag=function(aB){var aD=G.active,aE=n.clientPath,aA=aD.val("hex"),aC,az;av.color.mode=aB;switch(aB){case"h":setTimeout(function(){y.call(w,l,"transparent");x.call(w,au,0);Y.call(w,au,100);x.call(w,at,260);Y.call(w,at,100);y.call(w,s,"transparent");x.call(w,P,0);Y.call(w,P,100);x.call(w,O,260);Y.call(w,O,100);x.call(w,N,260);Y.call(w,N,100);x.call(w,M,260);Y.call(w,M,100);x.call(w,K,260);Y.call(w,K,100)},0);D.range("all",{minX:0,maxX:100,minY:0,maxY:100});U.range("rangeY",{minY:0,maxY:360});if(aD.val("ahex")==null){break}D.val("xy",{x:aD.val("s"),y:100-aD.val("v")},D);U.val("y",360-aD.val("h"),U);break;case"s":setTimeout(function(){y.call(w,l,"transparent");x.call(w,au,-260);x.call(w,at,-520);x.call(w,P,-260);x.call(w,O,-520);x.call(w,K,260);Y.call(w,K,100)},0);D.range("all",{minX:0,maxX:360,minY:0,maxY:100});U.range("rangeY",{minY:0,maxY:100});if(aD.val("ahex")==null){break}D.val("xy",{x:aD.val("h"),y:100-aD.val("v")},D);U.val("y",100-aD.val("s"),U);break;case"v":setTimeout(function(){y.call(w,l,"000000");x.call(w,au,-780);x.call(w,at,260);y.call(w,s,aA);x.call(w,P,-520);x.call(w,O,260);Y.call(w,O,100);x.call(w,K,260);Y.call(w,K,100)},0);D.range("all",{minX:0,maxX:360,minY:0,maxY:100});U.range("rangeY",{minY:0,maxY:100});if(aD.val("ahex")==null){break}D.val("xy",{x:aD.val("h"),y:100-aD.val("s")},D);U.val("y",100-aD.val("v"),U);break;case"r":aC=-1040;az=-780;D.range("all",{minX:0,maxX:255,minY:0,maxY:255});U.range("rangeY",{minY:0,maxY:255});if(aD.val("ahex")==null){break}D.val("xy",{x:aD.val("b"),y:255-aD.val("g")},D);U.val("y",255-aD.val("r"),U);break;case"g":aC=-1560;az=-1820;D.range("all",{minX:0,maxX:255,minY:0,maxY:255});U.range("rangeY",{minY:0,maxY:255});if(aD.val("ahex")==null){break}D.val("xy",{x:aD.val("b"),y:255-aD.val("r")},D);U.val("y",255-aD.val("g"),U);break;case"b":aC=-2080;az=-2860;D.range("all",{minX:0,maxX:255,minY:0,maxY:255});U.range("rangeY",{minY:0,maxY:255});if(aD.val("ahex")==null){break}D.val("xy",{x:aD.val("r"),y:255-aD.val("g")},D);U.val("y",255-aD.val("b"),U);break;case"a":setTimeout(function(){y.call(w,l,"transparent");x.call(w,au,-260);x.call(w,at,-520);x.call(w,P,260);x.call(w,O,260);Y.call(w,O,100);x.call(w,K,0);Y.call(w,K,100)},0);D.range("all",{minX:0,maxX:360,minY:0,maxY:100});U.range("rangeY",{minY:0,maxY:255});if(aD.val("ahex")==null){break}D.val("xy",{x:aD.val("h"),y:100-aD.val("v")},D);U.val("y",255-aD.val("a"),U);break;default:throw ("Invalid Mode");break}switch(aB){case"h":break;case"s":case"v":case"a":setTimeout(function(){Y.call(w,au,100);Y.call(w,P,100);x.call(w,N,260);Y.call(w,N,100);x.call(w,M,260);Y.call(w,M,100)},0);break;case"r":case"g":case"b":setTimeout(function(){y.call(w,l,"transparent");y.call(w,s,"transparent");Y.call(w,P,100);Y.call(w,au,100);x.call(w,au,aC);x.call(w,at,aC-260);x.call(w,P,az-780);x.call(w,O,az-520);x.call(w,N,az);x.call(w,M,az-260);x.call(w,K,260);Y.call(w,K,100)},0);break}if(aD.val("ahex")==null){return}aj.call(w,aD)},aj=function(aA,az){if(az==null||(az!=U&&az!=D)){v.call(w,aA,az)}setTimeout(function(){ay.call(w,aA);al.call(w,aA);W.call(w,aA)},0)},z=function(aA,az){var aC=G.active;if(az!=D&&aC.val()==null){return}var aB=aA.val("all");switch(av.color.mode){case"h":aC.val("sv",{s:aB.x,v:100-aB.y},az);break;case"s":case"a":aC.val("hv",{h:aB.x,v:100-aB.y},az);break;case"v":aC.val("hs",{h:aB.x,s:100-aB.y},az);break;case"r":aC.val("gb",{g:255-aB.y,b:aB.x},az);break;case"g":aC.val("rb",{r:255-aB.y,b:aB.x},az);break;case"b":aC.val("rg",{r:aB.x,g:255-aB.y},az);break}},ac=function(aA,az){var aB=G.active;if(az!=U&&aB.val()==null){return}switch(av.color.mode){case"h":aB.val("h",{h:360-aA.val("y")},az);break;case"s":aB.val("s",{s:100-aA.val("y")},az);break;case"v":aB.val("v",{v:100-aA.val("y")},az);break;case"r":aB.val("r",{r:255-aA.val("y")},az);break;case"g":aB.val("g",{g:255-aA.val("y")},az);break;case"b":aB.val("b",{b:255-aA.val("y")},az);break;case"a":aB.val("a",255-aA.val("y"),az);break}},v=function(aC,az){if(az!=D){switch(av.color.mode){case"h":var aH=aC.val("sv");D.val("xy",{x:aH!=null?aH.s:100,y:100-(aH!=null?aH.v:100)},az);break;case"s":case"a":var aB=aC.val("hv");D.val("xy",{x:aB&&aB.h||0,y:100-(aB!=null?aB.v:100)},az);break;case"v":var aE=aC.val("hs");D.val("xy",{x:aE&&aE.h||0,y:100-(aE!=null?aE.s:100)},az);break;case"r":var aA=aC.val("bg");D.val("xy",{x:aA&&aA.b||0,y:255-(aA&&aA.g||0)},az);break;case"g":var aI=aC.val("br");D.val("xy",{x:aI&&aI.b||0,y:255-(aI&&aI.r||0)},az);break;case"b":var aG=aC.val("rg");D.val("xy",{x:aG&&aG.r||0,y:255-(aG&&aG.g||0)},az);break}}if(az!=U){switch(av.color.mode){case"h":U.val("y",360-(aC.val("h")||0),az);break;case"s":var aJ=aC.val("s");U.val("y",100-(aJ!=null?aJ:100),az);break;case"v":var aF=aC.val("v");U.val("y",100-(aF!=null?aF:100),az);break;case"r":U.val("y",255-(aC.val("r")||0),az);break;case"g":U.val("y",255-(aC.val("g")||0),az);break;case"b":U.val("y",255-(aC.val("b")||0),az);break;case"a":var aD=aC.val("a");U.val("y",255-(aD!=null?aD:255),az);break}}},ay=function(aA){try{var az=aA.val("all");E.css({backgroundColor:az&&"#"+az.hex||"transparent"});Y.call(w,E,az&&Math.precision((az.a*100)/255,4)||0)}catch(aB){}},al=function(aC){switch(av.color.mode){case"h":y.call(w,l,new f({h:aC.val("h")||0,s:100,v:100}).val("hex"));break;case"s":case"a":var aB=aC.val("s");Y.call(w,at,100-(aB!=null?aB:100));break;case"v":var aA=aC.val("v");Y.call(w,au,aA!=null?aA:100);break;case"r":Y.call(w,at,Math.precision((aC.val("r")||0)/255*100,4));break;case"g":Y.call(w,at,Math.precision((aC.val("g")||0)/255*100,4));break;case"b":Y.call(w,at,Math.precision((aC.val("b")||0)/255*100));break}var az=aC.val("a");Y.call(w,ar,Math.precision(((255-(az||0))*100)/255,4))},W=function(aF){switch(av.color.mode){case"h":var aH=aF.val("a");Y.call(w,L,Math.precision(((255-(aH||0))*100)/255,4));break;case"s":var aA=aF.val("hva"),aB=new f({h:aA&&aA.h||0,s:100,v:aA!=null?aA.v:100});y.call(w,s,aB.val("hex"));Y.call(w,O,100-(aA!=null?aA.v:100));Y.call(w,L,Math.precision(((255-(aA&&aA.a||0))*100)/255,4));break;case"v":var aC=aF.val("hsa"),aE=new f({h:aC&&aC.h||0,s:aC!=null?aC.s:100,v:100});y.call(w,s,aE.val("hex"));Y.call(w,L,Math.precision(((255-(aC&&aC.a||0))*100)/255,4));break;case"r":case"g":case"b":var aD=0,aG=0,az=aF.val("rgba");if(av.color.mode=="r"){aD=az&&az.b||0;aG=az&&az.g||0}else{if(av.color.mode=="g"){aD=az&&az.b||0;aG=az&&az.r||0}else{if(av.color.mode=="b"){aD=az&&az.r||0;aG=az&&az.g||0}}}var aI=aG>aD?aD:aG;Y.call(w,O,aD>aG?Math.precision(((aD-aG)/(255-aG))*100,4):0);Y.call(w,N,aG>aD?Math.precision(((aG-aD)/(255-aD))*100,4):0);Y.call(w,M,Math.precision((aI/255)*100,4));Y.call(w,L,Math.precision(((255-(az&&az.a||0))*100)/255,4));break;case"a":var aH=aF.val("a");y.call(w,s,aF.val("hex")||"000000");Y.call(w,L,aH!=null?0:100);Y.call(w,K,aH!=null?100:0);break}},y=function(az,aA){az.css({backgroundColor:aA&&aA.length==6&&"#"+aA||"transparent"})},t=function(az,aA){if(Q&&(aA.indexOf("AlphaBar.png")!=-1||aA.indexOf("Bars.png")!=-1||aA.indexOf("Maps.png")!=-1)){az.attr("pngSrc",aA);az.css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+aA+"', sizingMethod='scale')"})}else{az.css({backgroundImage:"url('"+aA+"')"})}},x=function(az,aA){az.css({top:aA+"px"})},Y=function(aA,az){aA.css({visibility:az>0?"visible":"hidden"});if(az>0&&az<100){if(Q){var aB=aA.attr("pngSrc");if(aB!=null&&(aB.indexOf("AlphaBar.png")!=-1||aB.indexOf("Bars.png")!=-1||aB.indexOf("Maps.png")!=-1)){aA.css({filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+aB+"', sizingMethod='scale') progid:DXImageTransform.Microsoft.Alpha(opacity="+az+")"})}else{aA.css({opacity:Math.precision(az/100,4)})}}else{aA.css({opacity:Math.precision(az/100,4)})}}else{if(az==0||az==100){if(Q){var aB=aA.attr("pngSrc");if(aB!=null&&(aB.indexOf("AlphaBar.png")!=-1||aB.indexOf("Bars.png")!=-1||aB.indexOf("Maps.png")!=-1)){aA.css({filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+aB+"', sizingMethod='scale')"})}else{aA.css({opacity:""})}}else{aA.css({opacity:""})}}}},B=function(){G.active.val("ahex",G.current.val("ahex"))},T=function(){G.current.val("ahex",G.active.val("ahex"))},A=function(az){e(this).parents("tbody:first").find('input:radio[value!="'+az.target.value+'"]').removeAttr("checked");ag.call(w,az.target.value)},Z=function(){B.call(w)},q=function(){B.call(w);av.window.expandable&&ao.call(w);e.isFunction(ax)&&ax.call(w,G.active,X)},m=function(){T.call(w);av.window.expandable&&ao.call(w);e.isFunction(ae)&&ae.call(w,G.active,ah)},af=function(){V.call(w)},ap=function(aB,az){var aA=aB.val("hex");an.css({backgroundColor:aA&&"#"+aA||"transparent"});Y.call(w,an,Math.precision(((aB.val("a")||0)*100)/255,4))},H=function(aC,az){var aB=aC.val("hex");var aA=aC.val("va");aq.css({backgroundColor:aB&&"#"+aB||"transparent"});Y.call(w,r,Math.precision(((255-(aA&&aA.a||0))*100)/255,4));if(av.window.bindToInput&&av.window.updateInputColor){av.window.input.css({backgroundColor:aB&&"#"+aB||"transparent",color:aA==null||aA.v>75?"#000000":"#ffffff"})}},S=function(aB){var az=av.window.element,aA=av.window.page;J=parseInt(R.css("left"));I=parseInt(R.css("top"));am=aB.pageX;ai=aB.pageY;e(document).bind("mousemove",k).bind("mouseup",p);aB.preventDefault()},k=function(az){R.css({left:J-(am-az.pageX)+"px",top:I-(ai-az.pageY)+"px"});if(av.window.expandable&&!e.support.boxModel){R.prev().css({left:R.css("left"),top:R.css("top")})}az.stopPropagation();az.preventDefault();return false},p=function(az){e(document).unbind("mousemove",k).unbind("mouseup",p);az.stopPropagation();az.preventDefault();return false},F=function(az){az.preventDefault();az.stopPropagation();G.active.val("ahex",e(this).attr("title")||null,az.target);return false},ae=e.isFunction(h[1])&&h[1]||null,ad=e.isFunction(h[2])&&h[2]||null,ax=e.isFunction(h[3])&&h[3]||null,V=function(){G.current.val("ahex",G.active.val("ahex"));var az=function(){if(!av.window.expandable||e.support.boxModel){return}var aA=R.find("table:first");R.before("<iframe/>");R.prev().css({width:aA.width(),height:R.height(),opacity:0,position:"absolute",left:R.css("left"),top:R.css("top")})};if(av.window.expandable){e(document.body).children("div.jPicker.Container").css({zIndex:10});R.css({zIndex:20})}switch(av.window.effects.type){case"fade":R.fadeIn(av.window.effects.speed.show,az);break;case"slide":R.slideDown(av.window.effects.speed.show,az);break;case"show":default:R.show(av.window.effects.speed.show,az);break}},ao=function(){var az=function(){if(av.window.expandable){R.css({zIndex:10})}if(!av.window.expandable||e.support.boxModel){return}R.prev().remove()};switch(av.window.effects.type){case"fade":R.fadeOut(av.window.effects.speed.hide,az);break;case"slide":R.slideUp(av.window.effects.speed.hide,az);break;case"show":default:R.hide(av.window.effects.speed.hide,az);break}},o=function(){var aG=av.window,az=aG.expandable?e(w).next().find(".Container:first"):null;R=aG.expandable?e("<div/>"):e(w);R.addClass("jPicker Container");if(aG.expandable){R.hide()}R.get(0).onselectstart=function(aN){if(aN.target.nodeName.toLowerCase()!=="input"){return false}};var aJ=G.active.val("all");if(aG.alphaPrecision<0){aG.alphaPrecision=0}else{if(aG.alphaPrecision>2){aG.alphaPrecision=2}}var aK='<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>'+(aG.expandable?'<tr><td class="Move" colspan="5">&nbsp;</td></tr>':"")+'<tr><td rowspan="9"><h2 class="Title">'+(aG.title||aa.text.title)+'</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="'+n.clientPath+n.colorMap.arrow.file+'" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="'+n.clientPath+n.colorBar.arrow.file+'" class="Arrow"/></div></td><td colspan="2" class="Preview">'+aa.text.newColor+'<div><span class="Active" title="'+aa.tooltips.colors.newColor+'">&nbsp;</span><span class="Current" title="'+aa.tooltips.colors.currentColor+'">&nbsp;</span></div>'+aa.text.currentColor+'</td><td rowspan="9" class="Button"><input type="button" class="Ok btn" value="'+aa.text.ok+'" title="'+aa.tooltips.buttons.ok+'"/><input type="button" class="Cancel btn" value="'+aa.text.cancel+'" title="'+aa.tooltips.buttons.cancel+'"/><hr/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="'+aa.tooltips.hue.radio+'"><input type="radio" value="h"'+(av.color.mode=="h"?' checked="checked"':"")+'/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="'+(aJ!=null?aJ.h:"")+'" title="'+aa.tooltips.hue.textbox+'"/>&nbsp;&deg;</td></tr><tr class="Saturation"><td class="Radio"><label title="'+aa.tooltips.saturation.radio+'"><input type="radio" value="s"'+(av.color.mode=="s"?' checked="checked"':"")+'/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="'+(aJ!=null?aJ.s:"")+'" title="'+aa.tooltips.saturation.textbox+'"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="'+aa.tooltips.value.radio+'"><input type="radio" value="v"'+(av.color.mode=="v"?' checked="checked"':"")+'/>V:</label><br/><br/></td><td class="Text"><input type="text" maxlength="3" value="'+(aJ!=null?aJ.v:"")+'" title="'+aa.tooltips.value.textbox+'"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="'+aa.tooltips.red.radio+'"><input type="radio" value="r"'+(av.color.mode=="r"?' checked="checked"':"")+'/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="'+(aJ!=null?aJ.r:"")+'" title="'+aa.tooltips.red.textbox+'"/></td></tr><tr class="Green"><td class="Radio"><label title="'+aa.tooltips.green.radio+'"><input type="radio" value="g"'+(av.color.mode=="g"?' checked="checked"':"")+'/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="'+(aJ!=null?aJ.g:"")+'" title="'+aa.tooltips.green.textbox+'"/></td></tr><tr class="Blue"><td class="Radio"><label title="'+aa.tooltips.blue.radio+'"><input type="radio" value="b"'+(av.color.mode=="b"?' checked="checked"':"")+'/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="'+(aJ!=null?aJ.b:"")+'" title="'+aa.tooltips.blue.textbox+'"/></td></tr><tr class="Alpha"><td class="Radio">'+(aG.alphaSupport?'<label title="'+aa.tooltips.alpha.radio+'"><input type="radio" value="a"'+(av.color.mode=="a"?' checked="checked"':"")+"/>A:</label>":"&nbsp;")+'</td><td class="Text">'+(aG.alphaSupport?'<input type="text" maxlength="'+(3+aG.alphaPrecision)+'" value="'+(aJ!=null?Math.precision((aJ.a*100)/255,aG.alphaPrecision):"")+'" title="'+aa.tooltips.alpha.textbox+'"/>&nbsp;%':"&nbsp;")+'</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="'+aa.tooltips.hex.textbox+'">#:<input type="text" maxlength="6" class="Hex" value="'+(aJ!=null?aJ.hex:"")+'"/></label>'+(aG.alphaSupport?'<input type="text" maxlength="2" class="AHex" value="'+(aJ!=null?aJ.ahex.substring(6):"")+'" title="'+aa.tooltips.hex.alpha+'"/></td>':"&nbsp;")+"</tr></tbody></table>";if(aG.expandable){R.html(aK);if(e(document.body).children("div.jPicker.Container").length==0){e(document.body).prepend(R)}else{e(document.body).children("div.jPicker.Container:last").after(R)}R.mousedown(function(){e(document.body).children("div.jPicker.Container").css({zIndex:10});R.css({zIndex:20})});R.css({left:aG.position.x=="left"?(az.offset().left-530-(aG.position.y=="center"?25:0))+"px":aG.position.x=="center"?(az.offset().left-260)+"px":aG.position.x=="right"?(az.offset().left-10+(aG.position.y=="center"?25:0))+"px":aG.position.x=="screenCenter"?((e(document).width()>>1)-260)+"px":(az.offset().left+parseInt(aG.position.x))+"px",position:"absolute",top:aG.position.y=="top"?(az.offset().top-312)+"px":aG.position.y=="center"?(az.offset().top-156)+"px":aG.position.y=="bottom"?(az.offset().top+25)+"px":(az.offset().top+parseInt(aG.position.y))+"px"})}else{R=e(w);R.html(aK)}var aD=R.find("tbody:first");l=aD.find("div.Map:first");s=aD.find("div.Bar:first");var aL=l.find("span"),aI=s.find("span");au=aL.filter(".Map1:first");at=aL.filter(".Map2:first");ar=aL.filter(".Map3:first");P=aI.filter(".Map1:first");O=aI.filter(".Map2:first");N=aI.filter(".Map3:first");M=aI.filter(".Map4:first");L=aI.filter(".Map5:first");K=aI.filter(".Map6:first");D=new d(l,{map:{width:n.colorMap.width,height:n.colorMap.height},arrow:{image:n.clientPath+n.colorMap.arrow.file,width:n.colorMap.arrow.width,height:n.colorMap.arrow.height}});D.bind(z);U=new d(s,{map:{width:n.colorBar.width,height:n.colorBar.height},arrow:{image:n.clientPath+n.colorBar.arrow.file,width:n.colorBar.arrow.width,height:n.colorBar.arrow.height}});U.bind(ac);aw=new b(aD,G.active,aG.expandable&&aG.bindToInput?aG.input:null,aG.alphaPrecision);var aB=aJ!=null?aJ.hex:null,aH=aD.find(".Preview"),aF=aD.find(".Button");E=aH.find(".Active:first").css({backgroundColor:aB&&"#"+aB||"transparent"});an=aH.find(".Current:first").css({backgroundColor:aB&&"#"+aB||"transparent"}).bind("click",Z);Y.call(w,an,Math.precision(G.current.val("a")*100)/255,4);ah=aF.find(".Ok:first").bind("click",m);X=aF.find(".Cancel:first").bind("click",q);ab=aF.find(".Grid:first");setTimeout(function(){t.call(w,au,n.clientPath+"Maps.png");t.call(w,at,n.clientPath+"Maps.png");t.call(w,ar,n.clientPath+"map-opacity.png");t.call(w,P,n.clientPath+"Bars.png");t.call(w,O,n.clientPath+"Bars.png");t.call(w,N,n.clientPath+"Bars.png");t.call(w,M,n.clientPath+"Bars.png");t.call(w,L,n.clientPath+"bar-opacity.png");t.call(w,K,n.clientPath+"AlphaBar.png");t.call(w,aH.find("div:first"),n.clientPath+"preview-opacity.png")},0);aD.find("td.Radio input").bind("click",A);if(G.quickList&&G.quickList.length>0){var aE="";for(i=0;i<G.quickList.length;i++){if((typeof(G.quickList[i])).toString().toLowerCase()=="string"){G.quickList[i]=new f({hex:G.quickList[i]})}var aC=G.quickList[i].val("a");var aM=G.quickList[i].val("ahex");if(!aG.alphaSupport&&aM){aM=aM.substring(0,6)+"ff"}var aA=G.quickList[i].val("hex");aE+='<span class="QuickColor"'+(aM&&' title="#'+aM+'"'||"")+' style="background-color:'+(aA&&"#"+aA||"")+";"+(aA?"":"background-image:url("+n.clientPath+"NoColor.png)")+(aG.alphaSupport&&aC&&aC<255?";opacity:"+Math.precision(aC/255,4)+";filter:Alpha(opacity="+Math.precision(aC/2.55,4)+")":"")+'">&nbsp;</span>'}t.call(w,ab,n.clientPath+"bar-opacity.png");ab.html(aE);ab.find(".QuickColor").click(F)}ag.call(w,av.color.mode);G.active.bind(aj);e.isFunction(ad)&&G.active.bind(ad);G.current.bind(ap);if(aG.expandable){w.icon=az.parents(".Icon:first");aq=w.icon.find(".Color:first").css({backgroundColor:aB&&"#"+aB||"transparent"});r=w.icon.find(".Alpha:first");t.call(w,r,n.clientPath+"bar-opacity.png");Y.call(w,r,Math.precision(((255-(aJ!=null?aJ.a:0))*100)/255,4));C=w.icon.find(".Image:first").css({backgroundImage:"url('"+n.clientPath+n.picker.file+"')"}).bind("click",af);if(aG.bindToInput&&aG.updateInputColor){aG.input.css({backgroundColor:aB&&"#"+aB||"transparent",color:aJ==null||aJ.v>75?"#000000":"#ffffff"})}u=aD.find(".Move:first").bind("mousedown",S);G.active.bind(H)}else{V.call(w)}},ak=function(){R.find("td.Radio input").unbind("click",A);an.unbind("click",Z);X.unbind("click",q);ah.unbind("click",m);if(av.window.expandable){C.unbind("click",af);u.unbind("mousedown",S);w.icon=null}R.find(".QuickColor").unbind("click",F);l=null;s=null;au=null;at=null;ar=null;P=null;O=null;N=null;M=null;L=null;K=null;D.destroy();D=null;U.destroy();U=null;aw.destroy();aw=null;E=null;an=null;ah=null;X=null;ab=null;ae=null;ax=null;ad=null;R.html("");for(i=0;i<c.length;i++){if(c[i]==w){c.splice(i,1)}}},n=av.images,aa=av.localization,G={active:(typeof(av.color.active)).toString().toLowerCase()=="string"?new f({ahex:!av.window.alphaSupport&&av.color.active?av.color.active.substring(0,6)+"ff":av.color.active}):new f({ahex:!av.window.alphaSupport&&av.color.active.val("ahex")?av.color.active.val("ahex").substring(0,6)+"ff":av.color.active.val("ahex")}),current:(typeof(av.color.active)).toString().toLowerCase()=="string"?new f({ahex:!av.window.alphaSupport&&av.color.active?av.color.active.substring(0,6)+"ff":av.color.active}):new f({ahex:!av.window.alphaSupport&&av.color.active.val("ahex")?av.color.active.val("ahex").substring(0,6)+"ff":av.color.active.val("ahex")}),quickList:av.color.quickList};e.extend(true,w,{commitCallback:ae,liveCallback:ad,cancelCallback:ax,color:G,show:V,hide:ao,destroy:ak});c.push(w);setTimeout(function(){o.call(w)},0)})};e.fn.jPicker.defaults={window:{title:null,effects:{type:"slide",speed:{show:"slow",hide:"fast"}},position:{x:"screenCenter",y:"top"},expandable:false,liveUpdate:true,alphaSupport:false,alphaPrecision:0,updateInputColor:true},color:{mode:"h",active:new f({ahex:"#ffcc00ff"}),quickList:[new f({h:360,s:33,v:100}),new f({h:360,s:66,v:100}),new f({h:360,s:100,v:100}),new f({h:360,s:100,v:75}),new f({h:360,s:100,v:50}),new f({h:180,s:0,v:100}),new f({h:30,s:33,v:100}),new f({h:30,s:66,v:100}),new f({h:30,s:100,v:100}),new f({h:30,s:100,v:75}),new f({h:30,s:100,v:50}),new f({h:180,s:0,v:90}),new f({h:60,s:33,v:100}),new f({h:60,s:66,v:100}),new f({h:60,s:100,v:100}),new f({h:60,s:100,v:75}),new f({h:60,s:100,v:50}),new f({h:180,s:0,v:80}),new f({h:90,s:33,v:100}),new f({h:90,s:66,v:100}),new f({h:90,s:100,v:100}),new f({h:90,s:100,v:75}),new f({h:90,s:100,v:50}),new f({h:180,s:0,v:70}),new f({h:120,s:33,v:100}),new f({h:120,s:66,v:100}),new f({h:120,s:100,v:100}),new f({h:120,s:100,v:75}),new f({h:120,s:100,v:50}),new f({h:180,s:0,v:60}),new f({h:150,s:33,v:100}),new f({h:150,s:66,v:100}),new f({h:150,s:100,v:100}),new f({h:150,s:100,v:75}),new f({h:150,s:100,v:50}),new f({h:180,s:0,v:50}),new f({h:180,s:33,v:100}),new f({h:180,s:66,v:100}),new f({h:180,s:100,v:100}),new f({h:180,s:100,v:75}),new f({h:180,s:100,v:50}),new f({h:180,s:0,v:40}),new f({h:210,s:33,v:100}),new f({h:210,s:66,v:100}),new f({h:210,s:100,v:100}),new f({h:210,s:100,v:75}),new f({h:210,s:100,v:50}),new f({h:180,s:0,v:30}),new f({h:240,s:33,v:100}),new f({h:240,s:66,v:100}),new f({h:240,s:100,v:100}),new f({h:240,s:100,v:75}),new f({h:240,s:100,v:50}),new f({h:180,s:0,v:20}),new f({h:270,s:33,v:100}),new f({h:270,s:66,v:100}),new f({h:270,s:100,v:100}),new f({h:270,s:100,v:75}),new f({h:270,s:100,v:50}),new f({h:180,s:0,v:10}),new f({h:300,s:33,v:100}),new f({h:300,s:66,v:100}),new f({h:300,s:100,v:100}),new f({h:300,s:100,v:75}),new f({h:300,s:100,v:50}),new f({h:180,s:0,v:0}),new f({h:330,s:33,v:100}),new f({h:330,s:66,v:100}),new f({h:330,s:100,v:100}),new f({h:330,s:100,v:75}),new f({h:330,s:100,v:50}),new f()]},images:{clientPath:"/jPicker/images/",colorMap:{width:256,height:256,arrow:{file:"mappoint.gif",width:15,height:15}},colorBar:{width:20,height:256,arrow:{file:"rangearrows.gif",width:20,height:7}},picker:{file:"picker.gif",width:25,height:24}},localization:{text:{title:"Drag Markers To Pick A Color",newColor:"new",currentColor:"current",ok:"OK",cancel:"Cancel"},tooltips:{colors:{newColor:"New Color - Press &ldquo;OK&rdquo; To Commit",currentColor:"Click To Revert To Original Color"},buttons:{ok:"Commit To This Color Selection",cancel:"Cancel And Revert To Original Color"},hue:{radio:"Set To &ldquo;Hue&rdquo; Color Mode",textbox:"Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)"},saturation:{radio:"Set To &ldquo;Saturation&rdquo; Color Mode",textbox:"Enter A &ldquo;Saturation&rdquo; Value (0-100%)"},value:{radio:"Set To &ldquo;Value&rdquo; Color Mode",textbox:"Enter A &ldquo;Value&rdquo; Value (0-100%)"},red:{radio:"Set To &ldquo;Red&rdquo; Color Mode",textbox:"Enter A &ldquo;Red&rdquo; Value (0-255)"},green:{radio:"Set To &ldquo;Green&rdquo; Color Mode",textbox:"Enter A &ldquo;Green&rdquo; Value (0-255)"},blue:{radio:"Set To &ldquo;Blue&rdquo; Color Mode",textbox:"Enter A &ldquo;Blue&rdquo; Value (0-255)"},alpha:{radio:"Set To &ldquo;Alpha&rdquo; Color Mode",textbox:"Enter A &ldquo;Alpha&rdquo; Value (0-100)"},hex:{textbox:"Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)",alpha:"Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)"}}}}})(jQuery,"1.1.6");


