document.addEventListener("DOMContentLoaded", function(){

  var squares = document.getElementsByTagName("td");

  var player_turn = document.getElementsByClassName("playerTurn");
  console.log(player_turn);

  var turnCount = 0;


  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(event){
      console.log(this);
      clicked_square(this);

    });
  }

  function clicked_square(square){
    if (square.innerHTML == "") {
      if (turnCount % 2 == 0) {
        square.classList.add("X");
        square.innerHTML = "X";
        turnCount++;
        player_turn[0].innerHTML = "It is Y's turn";
      } else if (turnCount % 2 != 0){
        square.classList.add("O");
        square.innerHTML = "O";
        turnCount++;
        player_turn[0].innerHTML = "It is X's turn";
      }
    }
  }

});
