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







    function check() {
        var k = $('#container').scrollTop();
        var t = $('#vertical-cont').scrollTop();
        // console.log(t);
        if(k < $(window).width()*3){
          $('#vertical-cont').css('overflow-y','hidden');
        }

        if(t > $(window).height()*0.8){
          var sponsorTimeline = new TimelineMax()
            .to("#sponsors h1",0.5,{opacity:1,y:'-25'})
            .to("#1-sp",0.2,{opacity:1,y:'-5'},0)
            .to("#2-sp",0.2,{opacity:1,y:'-5'},0.1)
            .to("#3-sp",0.2,{opacity:1,y:'-5'},0.2)
            .to("#4-sp",0.2,{opacity:1,y:'-5'},0.3)
            .to("#5-sp",0.2,{opacity:1,y:'-5'},0.4)
            .to("#6-sp",0.2,{opacity:1,y:'-5'},0.5)
            .to("#7-sp",0.2,{opacity:1,y:'-5'},0.6)
            .to("#8-sp",0.2,{opacity:1,y:'-5'},0.7)
            .to("#9-sp",0.2,{opacity:1,y:'-5'},0.8)
            .to("#10-sp",0.2,{opacity:1,y:'-5'},0.9)
            .to("#11-sp",0.2,{opacity:1,y:'-5'},1)
            .to("#12-sp",0.2,{opacity:1,y:'-5'},1.1)
            .to("#13-sp",0.2,{opacity:1,y:'-5'},1.2)
            .to("#14-sp",0.2,{opacity:1,y:'-5'},1.3)
            .to("#15-sp",0.2,{opacity:1,y:'-5'},1.4)
            .to("#16-sp",0.2,{opacity:1,y:'-5'},1.5)
            .to("#17-sp",0.2,{opacity:1,y:'-5'},1.6)
            .to("#18-sp",0.2,{opacity:1,y:'-5'},1.7)
            .to("#19-sp",0.2,{opacity:1,y:'-5'},1.8)
            .to("#20-sp",0.2,{opacity:1,y:'-5'},1.9)
            .to("#21-sp",0.2,{opacity:1,y:'-5'},2)
            .to("#22-sp",0.2,{opacity:1,y:'-5'},2.1)
            .to("#23-sp",0.2,{opacity:1,y:'-5'},2.1)
            .to("#24-sp",0.2,{opacity:1,y:'-5'},2.3);
        }

        if(k == $(window).width()*3){
          // $('#space2').css('height','100vh');
          $('#vertical-cont').css('overflow-y','scroll');
        }
        setTimeout(check,10);
    };


    check();
});







