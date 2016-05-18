var speed = 400;

$(document).ready(function(e){

  $(".homeclick").on("click", function(){
    $(".portfoliopage").hide("slide", {direction: "down"}, speed);
    $(".contactpage").hide("slide", {direction: "up"}, speed);
    $(this).addClass("underline");
    $(".portfolioclick").removeClass("underline");
    $(".contactclick").removeClass("underline");
    //e.preventDefault();
  });

  $(".portfolioclick").on("click", function(){
    $(".portfoliopage").show("slide", {direction: "down"}, speed);
    $(".contactpage").hide("slide", {direction: "up"}, speed);
    $(this).addClass("underline");
    $(".homeclick").removeClass("underline");
    $(".contactclick").removeClass("underline");
    //e.preventDefault();
  });

  $(".contactclick").on("click", function(){
    $(".contactpage").show("slide", {direction: "up"}, speed);
    $(".portfoliopage").hide("slide", {direction: "down"}, speed);
    $(this).addClass("underline");
    $(".homeclick").removeClass("underline");
    $(".portfolioclick").removeClass("underline");
    //e.preventDefault();
  });
});
