jQuery(document).ready(function(){

var controller = new ScrollMagic.Controller();

var k = $('html, body');

var scene2 = new ScrollMagic.Scene({triggerElement: "#major-attractions #trigger2", duration: 0,triggerHook: 1})
            .addTo(controller)
            .addIndicators() // add indicators (requires plugin)
            .on("start", function (e) {
                if(e.state == 'DURING'){
                    $('#container').css('overflow-y','scroll');
                    $('#body').css('overflow-y','hidden');
                    // $('#major-attractions').css('position','fixed');
                } 
                if(e.state == 'BEFORE'){
                    $('#container').css('overflow-y','hidden');
                    $('#body').css('overflow-y','scroll');
                } 
            });

// var scene = new ScrollMagic.Scene({triggerElement: "#major-attractions #trigger", duration: 100,triggerHook: 0,offset:-200})
//             .addTo(controller)
//             // .addIndicators() // add indicators (requires plugin)
//             .on("start", function (e) {
//                 if(e.state == 'BEFORE'){
//                     k.animate({
//                         scrollTop: $('#map').offset().top
//                       }, 800);
//                 } 
//             });
    function check() {
        var k = $('#container').scrollTop();
        
        if(k < $(window).width()*3){
          $('#vertical-cont').css('overflow-y','hidden');
        }

        if(k == $(window).width()*3){
          // $('#space2').css('height','100vh');
          $('#vertical-cont').css('overflow-y','scroll');
        }
        setTimeout(check,10);
    };


    check();
});







