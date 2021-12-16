$(document).ready(function(){
    $(".korzina").click(function(){
      $(".all-box").toggle(300);
    });
    $(".green-box").click(function(){
        $(".all-box").hide(300);
      });
  });