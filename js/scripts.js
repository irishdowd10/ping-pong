//Business Logic - Backend
var pingPong = function(number) {
  var result = [];

  for (var i = 0; i <= number; i++) {

      if ((i % 3 === 0) && (i % 5 === 0)) {
      result.push("Ping-Pong");
        console.log(result);
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 ===0) {
      result.push("Pong");

    }
    return result;
  }
}


//User Interface Logic - Frontend
$(document).ready(function(){
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var playerNum = parseInt($("input#number").val())
    $("#result").append("<p>" + pingPong(playerNum) + "</p>");
      // $("li").prev().remove();
  });
});
