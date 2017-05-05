//Business Logic - Backend
var pingPong = function(number) {
  var result = [];
    for (var i = 1; i <= number; i++) {
     if (i % 15 === 0) {
       result.push("ping-pong");
     } else if (i % 3 === 0) {
       result.push("ping");
     } else if (i % 5 === 0) {
       result.push("pong");
     } else {
       result.push(i);
     }
   }
    return result;
  }

//User Interface Logic - Frontend
$(document).ready(function(){
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var resultUl  = $("ul#result");
    var playerNum = parseInt($("input#number").val());
    // Empty out  unordered list
    resultUl.empty();

    // Iterate through result array and print values
    var pingPongArray = pingPong(playerNum); // [1, 2, ping, 4]

    for(var x = 0; x < pingPongArray.length; x++) {
      resultUl.append("<li>"+ pingPongArray[x] + "</li>");
    }

  });
});
