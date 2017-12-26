jQuery(document).ready(function(){
  //Events map size - 
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = [37, 38, 39, 40];

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }

  function keydown(e) {
      for (var i = keys.length; i--;) {
          if (e.keyCode === keys[i]) {
              preventDefault(e);
              return;
          }
      }
  }

  function wheel(e) {
    preventDefault(e);
  }

  function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
  }

  function enable_scroll() {
      if (window.removeEventListener) {
          window.removeEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
  }

  var base = {width:975, height:523, top:0, left: 0};
  var one = {left:23, top:27, width:444, height:262};
  var two = {left:92, top:279, width:330, height:108};
  var three = {width:166, height:258, top:1, left: 412};
  var four = {width:279, height:190, top:251, left: 363};
  var five = {width:279, height:305, top:27, left: 578};
  var six = {width:245, height:243, top:197, left: 612};
  var seven = {width:200, height:124, top:352, left: 746};
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var scale_factor =windowWidth/975;

  // if(scale_factor<1){
  //   scale_factor = 1;
  // }

  // if($(window).width() < 500){
  //   scale_factor = 0.3;
  // }
  

   


  function resize(id,scale,id_string){
    $('.events-map ' + id_string).css('width',id.width/windowWidth*100*scale + "vw");
    $('.events-map ' + id_string).css('height',id.height/windowHeight*100*scale + "vh");
    $('.events-map ' + id_string).css('left',id.left/windowWidth*100*scale + "vw");
    $('.events-map ' + id_string).css('top',id.top/windowHeight*100*scale + "vh");
  }

  resize(base,scale_factor,"#base");
  resize(base,scale_factor,"#base2");
  resize(one,scale_factor,"#top");
  resize(two,scale_factor,"#two");
  resize(three,scale_factor,'#three');
  resize(four,scale_factor,"#four");
  resize(five,scale_factor,"#five");
  resize(six,scale_factor,"#six");
  resize(seven,scale_factor,"#seven");

  $('img[usemap]').rwdImageMaps();

  
  
  $('.mapping').mouseover(function() {
      $('.events-map #top').css('opacity','1');
  }).mouseout(function(){
      $('.events-map #top').css('opacity','0'); 
  });

  $('.mapping2').mouseover(function() {
      $('.events-map #two').css('opacity','1');
  }).mouseout(function(){
      $('.events-map #two').css('opacity','0');   
  });

  $('.mapping3').mouseover(function() {
      $('.events-map #three').css('opacity','1');
  }).mouseout(function(){
      $('.events-map #three').css('opacity','0');   
  });

  $('.mapping4').mouseover(function() {
      $('.events-map #five').css('opacity','1');
  }).mouseout(function(){
      $('.events-map #five').css('opacity','0');   
  });

  $('.mapping5').mouseover(function() {
      $('.events-map #four').css('opacity','1');
  }).mouseout(function(){
      $('.events-map #four').css('opacity','0');   
  });

  $('.mapping6').mouseover(function() {
      $('.events-map #six').css('opacity','1');
  }).mouseout(function(){
      $('.events-map #six').css('opacity','0');   
  });

  $('.mapping7').mouseover(function() {
      $('.events-map #seven').css('opacity','1');
  }).mouseout(function(){
      $('.events-map #seven').css('opacity','0');   
  });



  $(".mapping").on("click touchstart", function(e){
      e.preventDefault();
      if(windowWidth < 500){
        $('#map-popup').css('right','0vw');  
      }
      else{
        $('#map-popup').css('right','35vw');  
      } 
      $('#map-popup').css('visibility','visible');
      $(".section-map #map-popup .content").html( "<div class=\"popup-title\"> EUREKA </div> <div class=\"popup-list\" ><ol><li><p>Behind The Dots</p></li><li><p>B-plan</p></li> <li><p>Bidweiser</p></li><li><p>Selldom</p></li><li><p>Colossus</p></li><li><p>Nit Case Study Challeng</p></li></ol></div>");
  });

  $(".mapping2").on("click touchstart", function(e){
      e.preventDefault();
       if(windowWidth < 500){
        $('#map-popup').css('right','0vw');  
      }
      else{
        $('#map-popup').css('right','35vw');  
      } 
      $('#map-popup').css('visibility','visible');
      $(".section-map #map-popup .content").html( "<div class=\"popup-title\"> QUIZ </div> <div class=\"popup-list\" ><ol><li><p>Exquizzit</p></li></ol></div>");
  });

  $(".mapping3").on("click touch", function(e){
      e.preventDefault();
       if(windowWidth < 500){
        $('#map-popup').css('right','0vw');  
      }
      else{
        $('#map-popup').css('right','35vw');  
      }  
      $('#map-popup').css('visibility','visible');
      $(".section-map #map-popup .content").html( "<div class=\"popup-title\"> BATTLE OF BYTES</div> <div class=\"popup-list\"><ol><li><p>Khula Maidan</p></li><li><p>Inquest</p></li><li><p>Decathlon</p></li><li><p>Fifa</p></li><li><p>Couter Strike</p></li></ol></div>");
  });

  $(".mapping4").on("click touch", function(e){
      e.preventDefault();
       if(windowWidth < 500){
        $('#map-popup').css('right','0vw');  
      }
      else{
        $('#map-popup').css('right','35vw');  
      }  
      $('#map-popup').css('visibility','visible');
      $(".section-map #map-popup .content").html( "<div class=\"popup-title\">Strategist </div> <div class=\"popup-list\" > <ol><li><p>Journo Detective</p></li><li><p>Game of Recruitment</p></li><li><p>Stockhastic</p></li><li><p>Be a Billionare</p></li><li><p>TCDC</p></li></ol></div>");
     
      
  });

  $(".mapping5").on("click touch", function(e){
      e.preventDefault();
       if(windowWidth < 500){
        $('#map-popup').css('right','0vw');  
      }
      else{
        $('#map-popup').css('right','35vw');  
      } 
      $('#map-popup').css('visibility','visible');
      $(".section-map #map-popup .content").html( "<div class=\"popup-title\"> Armageddon </div> <div class=\"popup-list\" ><ol><li><p>Robowar</p></li><li><p>Inside Out</p></li><li><p>Detour</p></li><li><p>Shuttle</p></li><li><p>Jigsaw</p></li></ol></div>");
      
  });

  $(".mapping6").on("click touch", function(e){
      e.preventDefault();
       if(windowWidth < 500){
        $('#map-popup').css('right','0vw');  
      }
      else{
        $('#map-popup').css('right','35vw');  
      } 
      $('#map-popup').css('visibility','visible');
      $(".section-map #map-popup .content").html( "<div class=\"popup-title\">Techlon </div> <div class=\"popup-list\" > <ol><li><p>Invictus</p></li><li><p>Assembler</p></li><li><p>Contraptions</p></li></ol> </div>");
  });

  $(".mapping7").on("click touch", function(e){
      e.preventDefault();
       if(windowWidth < 500){
        $('#map-popup').css('right','0vw');  
      }
      else{
        $('#map-popup').css('right','35vw');  
      } 
      $('#map-popup').css('visibility','visible');
      $(".section-map #map-popup .content").html( "<div class=\"popup-title\">Apostrophe </div> <div class=\"popup-list\" > <ol><li><p>Abhivyakti</p></li><li><p>Conjecture</p></li></ol> </div>");
      
  });

  $(".section-map #map-popup .buttons .close").on("click touch", function(e){
      e.preventDefault();
      if(windowWidth < 500){
        $('#map-popup').css('right','-100vw');  
      }
      else{
        $('#map-popup').css('right','-30vw');   
      }
      
      // $('#map-popup').css('visibility','hidden');
  });


  var controller = new ScrollMagic.Controller();
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  var scene2 = new ScrollMagic.Scene({triggerElement: "#major-attractions #trigger2", duration: 0,triggerHook: 1})
            .addTo(controller)
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

  var scrollArea = window.innerWidth*12;


  var square1 = $('#city-front');


  var tlp = 0;

  var logo_timeline = new TimelineMax({paused:true})
                .to('#major-logo',0.5,{opacity:0});

  var open_timeline = new TimelineMax({paused:true})
                .set('.major-img img', {'-webkit-filter':'blur(5px)'})
                .to('.major-img .heading',1,{opacity:1},0.5)
                .to('.major-img .caption',1,{opacity:1},1);

  var two_timeline = new TimelineMax({paused:true})
                .to('.major-img1 img',1,{'-webkit-filter':'blur(5px)'})
                .to('.major-img1 .heading',1,{opacity:1},0.5)
                .to('.major-img1 .caption',1,{opacity:1},1);

  var three_timeline = new TimelineMax({paused:true})
                .to('.major-img2 img',1,{'-webkit-filter':'blur(5px)'})
                .to('.major-img2 .heading',1,{opacity:1},0.5)
                .to('.major-img2 .caption',1,{opacity:1},1);

  var work1_timeline = new TimelineMax({paused:true})
                .to('.work-img1 img',1,{'-webkit-filter':'blur(5px)'})
                .to('.work-img1 .heading2',1,{opacity:1},0.5)
                .to('.work-img1 .caption',1,{opacity:1},1);

  var work2_timeline = new TimelineMax({paused:true})
                .to('.work-img2 img',1,{'-webkit-filter':'blur(5px)'})
                .to('.work-img2 .heading2',1,{opacity:1},0.5)
                .to('.work-img2 .caption',1,{opacity:1},1);

  var work3_timeline = new TimelineMax({paused:true})
                .to('.work-img3 img',1,{'-webkit-filter':'blur(5px)'})
                .to('.work-img3 .heading2',1,{opacity:1},0.5)
                .to('.work-img3 .caption',1,{opacity:1},1);

  var work4_timeline = new TimelineMax({paused:true})
                .to('.work-img4 img',1,{'-webkit-filter':'blur(5px)'})
                .to('.work-img4 .heading2',1,{opacity:1},0.5)
                .to('.work-img4 .caption',1,{opacity:1},1);


   var sponsorTimeline = new TimelineMax({paused:true})
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


    var teamTimeline = new TimelineMax({paused:true})
            .to("#team_title",0.5,{opacity:1,y:'-25'})
            .to("#mem1",0.2,{opacity:1,y:'-5'},0)
            .to("#mem2",0.2,{opacity:1,y:'-5'},0.1)
            .to("#mem3",0.2,{opacity:1,y:'-5'},0.2)
            .to("#mem4",0.2,{opacity:1,y:'-5'},0.3)
            .to("#mem5",0.2,{opacity:1,y:'-5'},0.4)
            .to("#mem6",0.2,{opacity:1,y:'-5'},0.5)
            .to("#mem7",0.2,{opacity:1,y:'-5'},0.6)
            .to("#mem8",0.2,{opacity:1,y:'-5'},0.7)
            .to("#mem9",0.2,{opacity:1,y:'-5'},0.8)
            .to("#mem10",0.2,{opacity:1,y:'-5'},0.9)
            .to("#mem11",0.2,{opacity:1,y:'-5'},1)
            .to("#mem12",0.2,{opacity:1,y:'-5'},1.1)
            .to("#mem13",0.2,{opacity:1,y:'-5'},1.2)
            .to("#mem14",0.2,{opacity:1,y:'-5'},1.3)
            .to("#mem15",0.2,{opacity:1,y:'-5'},1.4)
            .to("#mem16",0.2,{opacity:1,y:'-5'},1.5)
            .to("#mem17",0.2,{opacity:1,y:'-5'},1.6)
            .to("#mem18",0.2,{opacity:1,y:'-5'},1.7)
            .to("#mem19",0.2,{opacity:1,y:'-5'},1.8)
            .to("#mem20",0.2,{opacity:1,y:'-5'},1.9);

    var hospTimeline = new TimelineMax({paused:true})
            .to("#hospitality #title",0.5,{opacity:1,y:'-25'})
            .from("#hospitality #space_ship",1,{scale:0,y:'-5'},0.5)
            .to("#hospitality .accom",1,{opacity:1,y:'-5'},0.5)
            .to("#hospitality .travel",1,{opacity:1,y:'-5'},1)
            .to("#hospitality .hospitality",1,{opacity:1,y:'-5'},1.5);

  $('#vertical-cont').scroll(function(){
       var t = $('#vertical-cont').scrollTop();

       var diff = t - $('#sponsors').scrollTop();

       if(t > windowHeight*4.2){
          hospTimeline.play();
       }

       if(t < windowHeight){
          hospTimeline.pause(0);
       }

       if(t > windowHeight*2){
          teamTimeline.play();
       }

       if(t < windowHeight){
          teamTimeline.pause(0);
       }

       if(diff > windowHeight/2){
          sponsorTimeline.play();
       }

       if(diff == 0){
          sponsorTimeline.pause(0);
       }
  });

      $(window).stellar();

  $(window).scroll(function(){
       var t = $(window).scrollTop();
       console.log(t);

       if(t > windowHeight*0.5){
          
       }
  });






  $('#container').scroll(function() {



  var scrollTop = $('#container').scrollTop();
  var scrollPercent = scrollTop/scrollArea ;
  var scrollWidth = -scrollPercent*window.innerWidth*3;
  $('#city-front').css('left', scrollWidth + 'px');
  var scrollWidth2 = $(window).width() - scrollPercent*window.innerWidth*3;
  $('#city-front2').css('left', scrollWidth2 + 'px');

  var scrollWidthBack = -scrollPercent*window.innerWidth*1;
  $('#city-back').css('left', scrollWidthBack + 'px');
  var scrollWidthBack2 = $(window).width() - scrollPercent*window.innerWidth*1;
  $('#city-back2').css('left', scrollWidthBack2 + 'px');

  var scrollWidth3 = $(window).width()*2 - scrollPercent*window.innerWidth*3;
  $('#city-front3').css('left', scrollWidth3 + 'px');
  var scrollWidth4 = $(window).width()*3 - scrollPercent*window.innerWidth*3;
  $('#city-front4').css('left', scrollWidth4 + 'px');
  var scrollWidth8 = $(window).width()*4 - scrollPercent*window.innerWidth*3;
  $('#city-front5').css('left', scrollWidth4 + 'px');
  var scrollWidth9 = $(window).width()*5 - scrollPercent*window.innerWidth*3;
  $('#city-front5').css('left', scrollWidth4 + 'px');


  var scrollWidth5 = $(window).width()*2-scrollPercent*window.innerWidth*12;
  $('.major-img').css('left', scrollWidth5 + 'px');
  var scrollWidth6 = $(window).width()*3-scrollPercent*window.innerWidth*12;
  $('.major-img1').css('left', scrollWidth6 + 'px');
  var scrollWidth7 = $(window).width()*4-scrollPercent*window.innerWidth*12;
  $('.major-img2').css('left', scrollWidth7 + 'px');

  var scrollWork1 = $(window).width()*7-scrollPercent*window.innerWidth*12;
  $('.work-img1').css('left', scrollWork1 + 'px');
  var scrollWork2 = $(window).width()*8-scrollPercent*window.innerWidth*12;
  $('.work-img2').css('left', scrollWork2 + 'px');
  var scrollWork3 = $(window).width()*9-scrollPercent*window.innerWidth*12;
  $('.work-img3').css('left', scrollWork3 + 'px');
  var scrollWork4 = $(window).width()*10-scrollPercent*window.innerWidth*12;
  $('.work-img4').css('left', scrollWork4 + 'px');
  // var scrollWidth8 = $(window).width()*0.25-scrollPercent*window.innerWidth*3;
  // $('#major-logo').css('left', scrollWidth8 + 'px');
  // console.log(window.innerWidth);

  

  var k = $('#container').scrollTop();



  if(k < $(window).width()*12  && k > $(window).width()*10){
    $('#vertical-cont').css('overflow-y','hidden');
     sponsor_scroll = false;
    var robot_timeline = new TimelineMax()
                  .to("#robot3",0.5,{opacity:1})
                  .to("#robot-grad",0.5,{opacity:1},0);

  }

  if(k == $(window).width()*12){
    // $('#space2').css('height','100vh');
    $('#vertical-cont').css('overflow-y','scroll');
    var robot_timeline = new TimelineMax()
                  .to("#robot3",0.5,{opacity:0})
                  .to("#robot-grad",0.5,{opacity:0},0);
    //               if(sponsor_scroll == false){
    //                  $('#vertical-cont').animate({
    //                   scrollTop: $(window).height()
    //                 }, 800);

    //                  sponsor_scroll = true;

    //               }
                 
  }

  if(k >= $(window).width()*5 && k <= $(window).width()*8 ){
             
              var robot_timeline = new TimelineMax()
                            .to("#robot2",0.2,{opacity:0})
                            .to("#robot3",0.2,{opacity:1});
  }

  if(k >= $(window).width()*5 && k < $(window).width()*6.10){
    var robot_timeline = new TimelineMax()
                  .to("#workshop-logo",0.5,{opacity:1});
  }

  if(k >= $(window).width()*6.27){
    var robot_timeline = new TimelineMax()
                  .to("#workshop-logo",0.5,{opacity:0});
  }

  if(k < $(window).width()*4.8 && k > $(window).width()*4){
    var robot_timeline = new TimelineMax()
                  .to("#robot3",0.2,{opacity:0})
                  .to("#robot2",0.2,{opacity:1})
                  .to("#workshop-logo",0.5,{opacity:0},0);
  }


  if(scrollWork1 > 0 && scrollWork1 < windowWidth/4){
    work1_timeline.play();
  }

  if(scrollWork1 > windowWidth){
    work1_timeline.pause(0);
    $('.work-img1 img').css('-webkit-filter','blur(0px)');
  }

  if(scrollWork2 > 0 && scrollWork2 < windowWidth/4){
    work2_timeline.play();
  }

  if(scrollWork2 > windowWidth){
    work2_timeline.pause(0);
    $('.work-img2 img').css('-webkit-filter','blur(0px)');
  }

  if(scrollWork3 > 0 && scrollWork3 < windowWidth/4){
    work3_timeline.play();
  }

  if(scrollWork3 > windowWidth){
    work3_timeline.pause(0);
    $('.work-img3 img').css('-webkit-filter','blur(0px)');
  }

  if(scrollWork4 > 0 && scrollWork4 < windowWidth/4){
    work4_timeline.play();
  }

  if(scrollWork4 > windowWidth){
    work4_timeline.pause(0);
    $('.work-img4 img').css('-webkit-filter','blur(0px)');
  }

  if(scrollWidth7 > 0 && scrollWidth7 < windowWidth/4){
    three_timeline.play();

  }

  if(scrollWidth7 > windowWidth){
    three_timeline.pause(0);
    $('.major-img2 img').css('-webkit-filter','blur(0px)');
  }

  if(scrollWidth6 > 0 && scrollWidth6 < windowWidth/4){
    two_timeline.play();
  }

  if(scrollWidth6 > windowWidth){
    two_timeline.pause(0);
    $('.major-img1 img').css('-webkit-filter','blur(0px)');
  }

  if(scrollWidth5 > 0 && scrollWidth5 < windowWidth/10){
    open_timeline.play();
  }

  if(scrollWidth5 < windowWidth/2 && scrollWidth5 > 0){
    logo_timeline.play();
  }

  if(scrollWidth5 > windowWidth){
    open_timeline.pause(0);
    $('.major-img img').css('-webkit-filter','blur(0px)');
  }

  if(scrollWidth5 > windowWidth/2 ){
    if(logo_timeline.totalProgress() == 1){
      logo_timeline.reverse();
    }
  }

});










if(windowWidth > 500){



      

      var k = $('html, body');


  
  
  


// update position of square 1 and square 2 when scroll event fires.







      var scene3 = new ScrollMagic.Scene({triggerElement: "#hz-trigger",triggerHook: 1,offset:100})
                .addTo(controller)
                .addIndicators()
                .on("enter leave", function (e) {
                    if("FORWARD" == e.scrollDirection && $(window).width() > 500){
                          // disable_scroll();
                          // jQuery('html, body').animate({

                          //   scrollTop: jQuery($('#hz-container')).offset().top

                          // }, 1000, 'swing', function () {

                          //     enable_scroll();

                          // });

                         var majotTimeline = new TimelineMax()
                                  .to("#city-front",0.5,{opacity:1},1)
                                  .to("#city-front2",0.5,{opacity:1},1)
                                  .to("#city-back",0.5,{opacity:1},1.5)
                                  .to("#city-back2",0.5,{opacity:1},1.5)
                                  .to("#major-logo",1,{opacity:1,y:'-25'},0.5)
                                  .to('#robot-grad',1,{opacity:1},0)
                                  .to('#robot2',1,{opacity:1},0.5);
                                  
                          // history.replaceState(void 0, void 0, "#major-attractions")
                    } 

                    if("REVERSE" == e.scrollDirection && $(window).width() > 500){
                          // disable_scroll();
                          // $('html, body').animate({
                          //     scrollTop: $('#map').offset().top
                          //   }, 800, function(){
                          //       enable_scroll();
                          //   });
                        $('#major-logo').css('opacity','0');
                        $('#robot-grad').css('opacity','0');
                        $('#robot2').css('opacity','0');
                        $('#city-front').css('opacity','0');
                        $('#city-front2').css('opacity','0');
                        $('#city-back').css('opacity','0');
                        $('#city-back2').css('opacity','0');
                        
                        var majotTimelineReverse = new TimelineMax()
                                    .to("#major-logo",0.1,{y:'25'},0.5)

                        // history.replaceState(void 0, void 0, "#map")
                    }

    });








  }

  

});







