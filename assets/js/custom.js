$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var header = $('.navbar').height();
    if (scroll >= header) {
        $("header").addClass("sticky_header");
    } else {
        $("header").removeClass("sticky_header");
    }
});


// $(document).ready(function(){
//     $("#kickoff").click(function(){
//       $(this).hide();
//     });
//   });