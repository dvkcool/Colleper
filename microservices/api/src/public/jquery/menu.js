$(document).ready(function(){
  $("#main").click(function(){
    $("#main").animate({height:'800px',width:'800px'});
    $("#icon").fadeOut();
    $("#menu ul").delay(300).animate({opacity:'1'});
    $("#menu ul").css("visibility","visible");
    $("#bg").delay(200).animate({opacity:"0"});
    $("#bg").css("visibility","visible");
  });
  $("#bg").click(function(){
    $("#main").animate({height:'50px',width:'50px'});
    $("#icon").fadeIn();
    $("#menu ul").animate({opacity:'0'});
    $("#menu ul").css("visibility","hidden");
    $("#bg").animate({opacity:"0"});
    $("#bg").css("visibility","hidden");
  });
});


