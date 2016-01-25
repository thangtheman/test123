// JavaScript Document


//tabs
    jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });


//neat
$("#searchclear").click(function(){
    $("#searchinput").val('');
});

jQuery(".dropdown-toggle").removeClass("disabled");
jQuery(".dropdown-toggle").dblclick(function(){
   window.location.assign(jQuery(".dropdown-toggle").attr("href"));
});




//custom nav order change
var width = $('body').width();
//$(window).on('load resize', function(){
//  var ww=$(this).width();
  //if(ww < 767){
//    $(".mbl-view-b").insertBefore(".mbl-view-a");
  //}
//});



//form top
$(document).ready(function() {
  if (width < 1025) {
	  var navhtml=jQuery(".navbar-collapse").clone();
	  //jQuery(".navbar-collapse").appendTo('.jq-lee');
	  jQuery('.jq-lee').html(navhtml);
//		jQuery(".jq-parent-nav .jq-nav-structure").length
	jQuery(".navbar-fixed-top .jq-lee .jq-nav-structure").removeClass('custom-top-master')
	jQuery(".navbar-fixed-top.out .jq-parent-nav .jq-nav-structure").addClass('in')

	
  }
});



//fixed header
$(window).scroll(function(){
    if($(document).scrollTop() > 400) {
        $('#header').addClass('reduce');
    } else {
        $('#header').removeClass('reduce');
    }
});




//header add css
$(document).ready(function() {
  if (width < 767) {
$(".header").parents('.col-lg-12').css("box-shadow", "0px 0px 0px 4px #f0c");
  }
});

$(window).on('load resize', function(){
  if(width < 1025){
   $(".jq-trim").each(function(i){
    len=$(this).text().length;
    if(len>10)
    {
      $(this).text($(this).text().substr(0,170)+'...');
    }
  });       
  }
});



$(window).on('load resize', function(){
  if(width < 1025){
   $(".jq-trim-head").each(function(i){
    len=$(this).text().length;
    if(len>10)
    {
      $(this).text($(this).text().substr(0,30)+'...');
    }
  });       
  }
});



// equal height script

$(document).ready(function(){
       $('.featured-widget').each(function(){  
            var highestBox = 0;
            $('.equal-height', this).each(function(){
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });  
            $('.equal-height',this).height(highestBox);     
    });    
});



//search





//offcanvas
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
   if(width < 1025){
    $(".custom-top-master .jq-mobile-item-1").addClass('clearfix').insertBefore(".custom-top-master .jq-mobile-item-2");
	    $(".custom-top-master .jq-mobile-item-1").insertBefore(".custom-top-master .jq-mobile-item-2");
    $(".custom-top-master .jq-mobile-item-3").insertAfter(".custom-top-master .jq-mobile-item-2");
    $(".custom-top-master  .jq-mobile-item-4").insertAfter(".custom-top-master  .jq-mobile-item-3");
	$(".custom-top-master .jq-mobile-item-5").insertAfter(".custom-top-master  .jq-mobile-item-3");
	 $(".copy-text").insertAfter(".custom-top-master .jq-mobile-item-4");
  }
});


//page refresh
//jQuery('ul.nav li.dropdown').hover(function() {
  //jQuery(this).find('.dropdown-menu').stop(true, true).delay(250).fadeIn();
//}, function() {
//  jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
//});


 // Add slideup & fadein animation to dropdown
//$('.navbar .dropdown').hover(function() {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(300);
    //}, function() {
//    $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(300)
//  });

//
//$('.navbar .dropdown').hover(function() {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
//}, function() {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
//});


//
$('ul.nav li.dropdown').hover(function() {http://www.bootply.com/PZIuAAmHST#
$(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(10);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(10);
});

//$(document).ready(function () {
  //  $('.navbar-default .navbar-nav > li.dropdown').hover(function () {
    ///    $('ul.dropdown-menu', this).stop(true, true).slideDown('slow');
       // $(this).addClass('open');
//    }, function () {
  //      $('ul.dropdown-menu', this).stop(true, true).slideUp('slow');
    //    $(this).removeClass('open');
//    });
//});

//ie8 support






//fullwidth image
if($(window).width()<767){

    $('.full-width-img').css('width',$(window).width());
    $(window).resize(function(){
        $('.full-width-img').css('width',$(window).width());
    })
}

$(document).ready(function () {
    $('.fa.fa-search.main').click(function(){
        var $search = $('.hidden-search.main');
        console.log($search.width());
        if($search.width() == 200){
            $search.width(0);
            setTimeout(function() {
                $search.toggle();
            }, 1000);

        }else{
            $search.toggle();
            if($search.width()== 0){
                $search.width(200);
            }
        }

    });
    $('.fa.fa-search.mobile').click(function(){
        var $search = $('.hidden-search.mobile');
        console.log($search.width());
        if($search.width() == 200){
            $search.width(0);
            setTimeout(function() {
                $search.toggle();
            }, 1000);

        }else{
            $search.toggle();
            if($search.width()== 0){
                $search.width(200);
            }
        }

    });
    var detach1,detach2,detach3;
    detach1 = $('.detach1').detach();
    detach2 = $('.detach2').detach();
    detach3 = $('.detach3').detach();
    if ($(window).width() < 767) {

        $('.injectmob1').prepend(detach1);
        $('.injectmob2').prepend(detach2);
        $('.injectmob3').prepend(detach3);
    }
    if ($(window).width() >= 767) {
        $('.detach1').detach();
        $('.detach2').detach();
        $('.detach3').detach();
        $('.injectdesk1').prepend(detach1);
        $('.injectdesk2').prepend(detach2);
        $('.injectdesk3').prepend(detach3);
    }
    $( window ).resize(function() {
        if ($('window').width() < 767) {
            console.log(detach1);
            console.log('<');
            $('.detach1').detach();
            $('.detach2').detach();
            $('.detach3').detach();
            $('.injectmob1').prepend(detach1);
            $('.injectmob2').prepend(detach2);
            $('.injectmob3').prepend(detach3);
        }
        if ($(window).width() >= 767) {
            console.log(detach1);
            console.log('>');
            $('.detach1').detach();
            $('.detach2').detach();
            $('.detach3').detach();
            $('.injectdesk1').prepend(detach1);
            $('.injectdesk2').prepend(detach2);
            $('.injectdesk3').prepend(detach3);
        }
    })
});


