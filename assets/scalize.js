!function(t){"use strict";var s={width:0,height:0,selector:".item-point",styleSelector:"circle",animationSelector:"",animationPopoverIn:"",animationPopoverOut:"",onInit:null,getSelectorElement:null,getValueRemove:null},e={settings:null,init:function(i,n){this.settings=t.extend(s,n),this.event(i),e.layout(i),t(window).on("load",function(){e.layout(i)}),t(i).find(".target").on("load",function(){e.layout(i)}),t(window).on("resize",function(){e.layout(i)})},event:function(s){this.settings.styleSelector&&t(this.settings.selector).addClass(this.settings.styleSelector),this.settings.animationSelector&&("marker"==this.settings.animationSelector?(t(this.settings.selector).addClass(this.settings.animationSelector),t(this.settings.selector).append('<div class="pin"></div>'),t(this.settings.selector).append('<div class="pulse"></div>')):t(this.settings.selector).addClass(this.settings.animationSelector)),t.isFunction(this.settings.onInit)&&this.settings.onInit(),t(s).find(".content").addClass("animated"),t(this.settings.selector).wrapAll("<div class='wrap-selector' />"),t(this.settings.selector).each(function(){t(".toggle",this).on("click",function(i){i.preventDefault(),t(this).closest(e.settings.selector).toggleClass("active");var n=t(this).closest(e.settings.selector).data("popover"),o=t(n);t(this).closest(e.settings.selector).hasClass("active")&&!t(this).closest(e.settings.selector).hasClass("disabled")?(t.isFunction(e.settings.getSelectorElement)&&e.settings.getSelectorElement(t(this).closest(e.settings.selector)),o.fadeIn(),e.layout(s),o.removeClass(e.settings.animationPopoverOut),o.addClass(e.settings.animationPopoverIn)):(t.isFunction(e.settings.getValueRemove)&&e.settings.getValueRemove(t(this).closest(e.settings.selector)),o.removeClass(e.settings.animationPopoverIn),o.addClass(e.settings.animationPopoverOut),o.delay(500).fadeOut())});var i=t(this).data("popover"),n=t(i);n.find(".exit").on("click",function(s){s.preventDefault(),t('[data-popover="'+i+'"]').removeClass("active"),n.removeClass(e.settings.animationPopoverIn),n.addClass(e.settings.animationPopoverOut),n.delay(500).fadeOut()})})},layout:function(s){var e=new Image;e.src=s.find(".target").attr("src");var i=e.naturalWidth,n=e.naturalHeight,o=t(s).width(),a=o/i*100,l=n*a/100;t(s).css("height",l),t(window).width()<i?t(s).stop().css("width","100%"):t(s).stop().css("width",i),t(this.settings.selector).each(function(){if(t(window).width()<i)var s=t(this).data("top")*a/100,e=t(this).data("left")*a/100;else var s=t(this).data("top"),e=t(this).data("left");t(this).css("top",s+"px"),t(this).css("left",e+"px");var n=t(this).data("popover"),o=t(n).find(".head").outerHeight()+t(n).find(".body").outerHeight()+t(n).find(".footer").outerHeight();if(t(n).css("left",e+"px"),t(n).css("height",o+"px"),t(n).hasClass("bottom")){var l=t(n).outerHeight(),r=s-l;t(n).css("top",r+"px")}else if(t(n).hasClass("center")){var l=.5*t(n).outerHeight(),r=s-l;t(n).css("top",r+"px")}else t(n).css("top",s+"px");if(t(".toggle",this).css("width",t(this).outerWidth()),t(".toggle",this).css("height",t(this).outerHeight()),t(this).find(".pin")){var c=t(".pin",this).outerWidth(),h=t(".pin",this).outerHeight();t(".toggle",this).css("width",c),t(".toggle",this).css("height",h)}})}};t.fn.scalize=function(t){return e.init(this,t)}}(jQuery);