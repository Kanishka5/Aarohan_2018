jQuery(document).ready(function(){

var controller = new ScrollMagic.Controller();

var k = $('html, body');

var scene2 = new ScrollMagic.Scene({triggerElement: "#major-attractions #trigger", duration: 100,triggerHook: 1})
            .addTo(controller)
            // .addIndicators() // add indicators (requires plugin)
            .on("start", function (e) {
                if(e.state == 'DURING'){
                    k.animate({
                        scrollTop: $('#major-attractions').offset().top
                      }, 600);
                } 
            });

var scene = new ScrollMagic.Scene({triggerElement: "#major-attractions #trigger", duration: 100,triggerHook: 0,offset:-200})
            .addTo(controller)
            // .addIndicators() // add indicators (requires plugin)
            .on("start", function (e) {
                if(e.state == 'BEFORE'){
                    k.animate({
                        scrollTop: $('#map').offset().top
                      }, 800);
                } 
            });

});







