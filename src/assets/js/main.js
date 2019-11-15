//$(document).ready(function(){
//  $('.bxslider').bxSlider({
//   pager: false
//});
//});

$(document).ready(function () {
  window.updatedIndexHero = 6;
//script for herobanner slide
  $('.bxslider').bxSlider({
    auto: true,
    pagerCustom: '#bx-pager',
    pause: 6000,
    autoStart: true,
    touchEnabled: false,
    mode: 'horizontal',
    startSlide: 6,
    //hideControlOnEnd: true,
    onSlideBefore: function ($slideElement, oldIndex, newIndex) {
      var lazy = $slideElement.find(".hc-lazy-load");
      var load = lazy.attr("data-src");
      if (null != load) {
        lazy.attr("src", load).removeClass("hc-lazy-load").addClass("hc-lazy-loaded");
      }

    },
    onSliderLoad: function (currentIndex) {
      $(".bxslider").css("visibility", "visible");
      //$("#bxoutercontainer").css("visibility", "visible");
      $("#bx-pager").css("visibility", "visible");
      //$("#bx-default-Pager").css("visibility", "visible");
      //var slider = $('.bxslider').bxSlider();
      var index = currentIndex + 1;
      var currentSlide = $('.bxslider>li').eq(index);
      var lazy = currentSlide.find(".hc-lazy-load");
      var load = lazy.attr("data-src");
      if (null != load) {
        lazy.attr("src", load).removeClass("hc-lazy-load").addClass("hc-lazy-loaded");
      }
    }

  });


  if ($(".bx-loading").length) {
    $(".bx-loading").remove();
  }

  $("img.lazy").lazyload();

});


//script for showing the sub menus on clicking the menu links
$(function handleMenuClicks() {
  $(".top-nav ul li").click(function(e) {
      $(this).addClass('activeTopNav');
      $(this).siblings().removeClass('activeTopNav');
      $("#triangle1").css('visibility', 'visible');
      $("#topRtNav1Links").hide();
      $("#topRtNav4Links").hide();

  });
  $("#topRtNav1").on("click", function() {
      $("#topRtNav1Links").show();
      $("#triangle1").css('visibility', 'hidden')
  });

  $("#topRtNav4").on("click", function() {
      $("#topRtNav4Links").show();
      $("#triangle1").css('visibility', 'hidden')
  });
  $("#topRtNav3").on("click", function() {
      $("#topRtNav3Links").show();
      // $("#triangle3").css('visibility','hidden');
  });

});

//script for hide the menus on moving the mouse out.
$("#topRtNav1").mouseleave(function() {
  $("#topRtNav1Links").hide();
  $(".top-nav ul li").removeClass('activeTopNav');
  $("#triangle1").css('visibility', 'visible');
});
$("#topRtNav4").mouseleave(function() {
  $("#topRtNav4Links").hide();
  $(".top-nav ul li").removeClass('activeTopNav');
  $("#triangle1").css('visibility', 'visible');
});
$("#topRtNav3").mouseleave(function() {
  $("#topRtNav3Links").hide();
  $(".top-nav ul li").removeClass('activeTopNav');
  $("#triangle3").css('visibility', 'visible');
});

 //script for showing the sub menus on clicking the menu links
 $(function handleMenuClicks() {
  $(".topRtNav ul li").click(function(e) {
      if ($(e.target)[0].id == "selectedCountry") {
          if ($('#topRtNav3Links').children('li').length > 0) {
              e.preventDefault();
          }
      } else if ($(e.target)[0].children[0]) {
          if ($(e.target)[0].children[0].className == "dropDownTriangle") {
              e.preventDefault();
          }
      }
      $(this).addClass('activeTopNav');
      $(this).siblings().removeClass('activeTopNav');
      $("#triangle1,#triangle4").css('visibility', 'visible');
      $("#topRtNav1Links,#topRtNav3Links,#topRtNav4Links").hide();
  });
  if (typeof scpl_time == "undefined") {
      $("#topRtNav1").on("click", function() {
          $("#topRtNav1Links").show();
          $("#triangle1").css('visibility', 'hidden');
      });
  } else {
      $("#topRtNav1").live("click", function() {
          $("#topRtNav1Links").show();
          $("#triangle1").css('visibility', 'hidden');
      });
  }
  $("#topRtNav3").click(function(e) {
      if ($('#topRtNav3Links').children('li').length > 0) {
          $("#topRtNav3Links").show();
          //$("#triangle3").css('visibility','hidden');
      }
  });
  $("#topRtNav4").click(function(e) {
      $("#topRtNav4Links").show();
      $("#triangle4").css('visibility', 'hidden');
  });
  $("#triangle1").click(function(e) {
      $("#topRtNav1Links").show();
      $("#triangle1").css('visibility', 'hidden');
      e.preventDefault();
  });
  $("#triangle3").click(function(e) {
      if ($('#topRtNav3Links').children('li').length > 0) {
          $("#topRtNav3Links").show();
          //$("#triangle3").css('visibility','hidden');
          e.preventDefault();
      }
  });
  $("#triangle4").click(function(e) {
      $("#topRtNav4Links").show();
      $("#triangle4").css('visibility', 'hidden');
      e.preventDefault();
  });

});
