"use strict";
$(document).ready(function() {


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })

    
  /*Mesonary active*/


  var $grid = $('.iso-grid-wrap');
  $grid.packery({
      // options
      itemSelector: '.isotope-item',
      // gutter: 15,
      resize: true
  });
  $grid.imagesLoaded().progress(function() {
      $grid.packery('layout');
  });


  var $gridMas = $('.iso-mas-grid-wrap');
  $gridMas.packery({
      // options
      itemSelector: '.isotope-mas-item',
      // gutter: 15,
      resize: true
  });
  $gridMas.imagesLoaded().progress(function() {
      $gridMas.packery('layout');
  });


  // filter functions
  var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: function() {
          var name = $(this).find('.name').text();
          return name.match(/ium$/);
      }
  };

  // bind filter button click
  $('#isotope-filters').on('click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
          filter: filterValue
      });
  });
  // bind filter button click
  $('#isotope-mas-filters').on('click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $gridMas.isotope({
          filter: filterValue
      });
  });

  // change is-checked class on buttons
  $('.isotope-nav').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'a', function() {
          $buttonGroup.find('.active').removeClass('active');
          $(this).addClass('active');
      });
  });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Prcing Dynamic Script
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('#table-price-value .toggle-btn').on("click", function(e) {
        console.log($(e.target).parent().parent().hasClass("monthly-active"));
        $(e.target).toggleClass("clicked");
        if ($(e.target).parent().parent().hasClass("monthly-active")) {
            $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
        } else {
            $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
        }
    });

    $("[data-pricing-trigger]").on("click", function(e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        var target = $(e.target).attr("data-target");
        console.log($(target).attr("data-value-active") == "monthly");
        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
        } else {
            $(target).attr("data-value-active", "monthly");
        }
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $("#loading").remove();
        }, 2000);
    });


 /*----------------------------------------
            Accordian Plugin
        ----------------------------------------*/

        (function($) {
            $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    
            $('.accordion a').click(function(j) {
                var dropDown = $(this).closest('li').find('p');
    
                $(this).closest('.accordion').find('p').not(dropDown).slideUp();
    
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.accordion').find('a.active').removeClass('active');
                    $(this).addClass('active');
                }
    
                dropDown.stop(false, true).slideToggle();
    
                j.preventDefault();
            });
        })(jQuery);
    
    
        /*Accordian L-12 li active shade*/
    
        $(document).ready(function() {
            $('.faq-l-12-1 li').click(function() {
                $('.faq-l-12-1 li').removeClass("active");
                $(this).addClass("active");
            });
        });
    
    
        /*FAQ TAB li active*/
    
        $(document).ready(function() {
            $('.faq-main-tab-area li').click(function() {
                $('.faq-main-tab-area li').removeClass("active");
                $(this).addClass("active");
            });
        });

    

});