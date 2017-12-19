jQuery(document).ready(function(){

var controller = new ScrollMagic.Controller();

var k = $('html, body');


var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = window.innerWidth*3;
var square1 = $('#city-front');

// update position of square 1 and square 2 when scroll event fires.
$('#container').scroll(function() {

  var scrollTop = $('#container').scrollTop();
  var scrollPercent = scrollTop/scrollArea ;
  var scrollWidth = -scrollPercent*window.innerWidth*0.5;
  $('#city-front').css('left', scrollWidth + 'px');
  var scrollWidth2 = $(window).width() - scrollPercent*window.innerWidth*0.5;
  $('#city-front2').css('left', scrollWidth2 + 'px');

  var scrollWidthBack = -scrollPercent*window.innerWidth*0.3;
  $('#city-back').css('left', scrollWidthBack + 'px');
  var scrollWidthBack2 = $(window).width() - scrollPercent*window.innerWidth*0.3;
  $('#city-back2').css('left', scrollWidthBack2 + 'px');

  var scrollWidth3 = $(window).width()*2 - scrollPercent*window.innerWidth*0.5;
  $('#city-front3').css('left', scrollWidth3 + 'px');
  var scrollWidth4 = $(window).width()*3 - scrollPercent*window.innerWidth*0.5;
  $('#city-front4').css('left', scrollWidth4 + 'px');
  var scrollWidth5 = $(window).width()-scrollPercent*window.innerWidth*3;
  $('.major-img').css('left', scrollWidth5 + 'px');
  var scrollWidth6 = $(window).width()*2-scrollPercent*window.innerWidth*3;
  $('.major-img1').css('left', scrollWidth6 + 'px');
  var scrollWidth7 = $(window).width()*3-scrollPercent*window.innerWidth*3;
  $('.major-img2').css('left', scrollWidth7 + 'px');

  var scrollWork1 = $(window).width()*5-scrollPercent*window.innerWidth*3;
  $('.work-img1').css('left', scrollWork1 + 'px');
  var scrollWork2 = $(window).width()*6-scrollPercent*window.innerWidth*3;
  $('.work-img2').css('left', scrollWork2 + 'px');
  var scrollWork3 = $(window).width()*7-scrollPercent*window.innerWidth*3;
  $('.work-img3').css('left', scrollWork3 + 'px');
  var scrollWork4 = $(window).width()*8-scrollPercent*window.innerWidth*3;
  $('.work-img4').css('left', scrollWork4 + 'px');
  // var scrollWidth8 = $(window).width()*0.25-scrollPercent*window.innerWidth*3;
  // $('#major-logo').css('left', scrollWidth8 + 'px');
  // console.log(window.innerWidth);

});




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


// var scene3 = new ScrollMagic.Scene({triggerElement: "#hz-trigger", duration: 200,triggerHook: 1})
//                 .addTo(controller)
//                 .addIndicators() // add indicators (requires plugin)
//                 .on("start", function (e) {
//                     if(e.state == 'DURING'){
//                         $('html, body').animate({
//                             scrollTop: $('#hz-container').offset().top
//                           }, 800);

//                          var majotTimeline = new TimelineMax()
//                                   .to("#major-logo",1,{opacity:1,y:'-25'},0.5)
//                                   .to('#robot-grad',1,{opacity:1},1)
//                                   .to('#robot2',1,{opacity:1},1.5);
//                     } 

//                     if(e.state == 'BEFORE'){
//                       $('html, body').animate({
//                             scrollTop: $('#map').offset().top
//                           }, 800);
//                       $('#major-logo').css('opacity','0');
//                       $('#robot-grad').css('opacity','0');
//                       $('#robot2').css('opacity','0');
//                       var majotTimelineReverse = new TimelineMax()
//                                   .to("#major-logo",0.1,{y:'25'},0.5)
//                     }

                   
//                 });
var sponsor_scroll = false;

var majotTimeline = new TimelineMax()
                                  .to("#major-logo",1,{opacity:1,y:'-25'},0.5)
                                  .to('#robot-grad',1,{opacity:1},1)
                                  .to('#robot2',1,{opacity:1},1.5);


    function check() {
        var k = $('#container').scrollTop();
        var t = $('#vertical-cont').scrollTop();
        // console.log(t);

        if(k>$(window).width()*0.25){
          var mj_timeline = new TimelineMax()
                    .to('#major-logo',0.5,{opacity:0});
        }

        if(k<$(window).width()*0.25){
          var mj_timeline = new TimelineMax()
                    .to('#major-logo',0.5,{opacity:1});
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
        console.log(k);
        if(k < $(window).width()*10  && k > $(window).width()*8){
          $('#vertical-cont').css('overflow-y','hidden');
          var robot_timeline = new TimelineMax()
                        .to("#robot3",0.5,{opacity:1})
                        .to("#robot-grad",0.5,{opacity:1},0);
        }

        if(k == $(window).width()*10){
          // $('#space2').css('height','100vh');
          $('#vertical-cont').css('overflow-y','scroll');
          var robot_timeline = new TimelineMax()
                        .to("#robot3",0.5,{opacity:0})
                        .to("#robot-grad",0.5,{opacity:0},0);
                        if(sponsor_scroll == false){
                           $('#vertical-cont').animate({
                            scrollTop: $(window).height()
                          }, 800);

                           sponsor_scroll = true;

                        }
                       
        }

        if(k >= $(window).width()*4 && k < $(window).width()*4.25){
          var robot_timeline = new TimelineMax()
                        .to("#robot2",0.2,{opacity:0})
                        .to("#robot3",0.2,{opacity:1});

                        sponsor_scroll = false;

        }

        if(k >= $(window).width()*4 && k < $(window).width()*4.25){
          var robot_timeline = new TimelineMax()
                        .to("#workshop-logo",0.5,{opacity:1});
        }

        if(k >= $(window).width()*4.27){
          var robot_timeline = new TimelineMax()
                        .to("#workshop-logo",0.5,{opacity:0});
        }

        if(k < $(window).width()*3.8){
          var robot_timeline = new TimelineMax()
                        .to("#robot3",0.2,{opacity:0})
                        .to("#robot2",0.2,{opacity:1})
                        .to("#workshop-logo",0.5,{opacity:0},0);
        }

        setTimeout(check,10);
    };


    check();

});







