//Business Logic - Backend

//User Interface Logic - Frontend
$(document).ready(function)(){
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var playerNum = parseInt($("input#number").val())
    $("#result").append("<li>") + pingPong(playerNum) + "</li>"
      $("li").prev().remove();
  });
});
