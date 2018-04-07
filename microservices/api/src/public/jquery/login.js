$(document).ready(function(){
  $("#admin_btn").click(function(){
    $("#main").animate({left:"22.5%"},400);
    $("#main").animate({left:"30%"},500);
    $("#studentform").css("visibility","hidden");
    $("#studentform").animate({left:"25%"},400);

    $("#adminform").animate({left:"17%"},400);
    $("#adminform").animate({left:"30%"},500);
    $("#adminform").css("visibility","visible");
  });
    $("#student_btn").click(function(){
      $("#main").animate({left:"77.5%"},400);
      $("#main").animate({left:"70%"},500);
      $("#adminform").css("visibility","hidden");
      $("#adminform").animate({left:"75%"},400);

      $("#studentform").animate({left:"83.5%"},400);
      $("#studentform").animate({left:"70%"},500);
      $("#studentform").css("visibility","visible");
    });
});
