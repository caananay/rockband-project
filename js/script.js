
 function toggle1(){
 	$("#collapseOne").slideToggle(500);
 }
	
function toggle2(){
 	$("#collapseTwo").slideToggle(500);
 }	 

  $(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
      $(".navbar").addClass("nav-color-add");
      $(".navbar-default .navbar-nav > li > a").css({"color":"#ccccff","font-weight":"bold"});
      $(".navbar-default .navbar-brand").css({"color":"#ccccff","font-weight":"bold"});
    } else {
      $(".navbar").removeClass("nav-color-add");
      $(".navbar-default .navbar-nav > li > a").css({"color":"#777","font-weight":"normal"});
       $(".navbar-default .navbar-brand").css({"color":"#777","font-weight":"normal"});
    }
  });