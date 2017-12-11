$(document).ready(function(){
  $(".hamburger_menu").click(function(){
    $(".hamburger_menu_toggle").slideToggle();
  });
});

$(window).load(function(){
  $(".sleep.sub_display img").click(function(){
    var img_src = $(this).attr("src");
    $(".sleep.main_display img").attr("src", img_src);
  });
});

$(window).load(function(){
  $(".relax.sub_display img").click(function(){
    var img_src = $(this).attr("src");
    $(".relax.main_display img").attr("src", img_src);
  });
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});
