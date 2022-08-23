var MenuItems = document.getElementById("MenuItems");
var MenuItems1 = document.getElementById("MenuItems1");

MenuItems.style.maxHeight = "0%";
MenuItems1.style.maxHeight = "0%";

function menutoggle(){
 if(MenuItems.style.maxHeight == "0%"){
    MenuItems.style.maxHeight = "500px";
 }
 else{
    MenuItems.style.maxHeight = "0%";
 }
 
  if(MenuItems1.style.maxHeight == "0%"){
    MenuItems1.style.maxHeight = "100px";
 }
 else{
    MenuItems1.style.maxHeight = "0%";
 }
}


jQuery(function($){
	var topMenuHeight = $("#desktop-nav").outerHeight();
	$("#desktop-nav").menuScroll(topMenuHeight);
});

jQuery.fn.extend({
    menuScroll: function(offset) {
        var topMenu = this;
		var topOffset = offset ? offset : 0;
        var menuItems = $(topMenu).find("a");
        var lastId;
	
        var scrollItems = $(menuItems).map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

        $(topMenu).on("click", "a", function(e){
            var href = $(this).attr("href");
            
            var offsetTop = href === "#" ? 0 : $(href).offset().top-topOffset;

            $('html, body').stop().animate({ 
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();

        });
		
        $(window).scroll(function(){
            var nm = $("html").scrollTop();
            var nw = $("body").scrollTop();
            var fromTop = (nm > nw ? nm : nw)+topOffset;

			
            var current = $(scrollItems).map(function(){
                if ($(this).offset().top <= fromTop)
                return this;
            });
			
            current = current[current.length-1];
            var id = current && current.length ? current[0].id : "";
            if (lastId !== id) {
                lastId = id;
                $(menuItems)
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
            }      

        });
    }
});