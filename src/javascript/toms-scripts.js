$(document).ready(function () {
 //show how to play tab and hide winning numbers tab
  $("#howtoplaytab").click(function () {
    $("#howtoplay").fadeIn("slow").show();
    $("#winningnumbers").hide();
    $("#howtoplaytab").addClass("active");
    $("#winningnumberstab").removeClass("active");
  });

//show winning numbers tab and hide howtoplay tab
  $("#winningnumberstab").click(function () {
    $("#winningnumbers").fadeIn("slow").show();
    $("#howtoplay").hide();
    $("#winningnumberstab").addClass("active");
    $("#howtoplaytab").removeClass("active");
   });

  //display how to play tab on reload. I could of dropped a cookie or used session storage but this seemed to be logical with the hrefs that were in the code already
  if (window.location.href.indexOf("#howtoplay") != -1) {
    $("#howtoplay").fadeIn("slow").show();
    $("#winningnumbers").hide();
    $("#howtoplaytab").addClass("active");
    $("#winningnumberstab").removeClass("active");
  }
});




