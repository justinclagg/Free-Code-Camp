"use strict";

$(document).ready(function () {

  var gameState = {
    "userSymbol": "X",
    "compSymbol": "O",
    "difficulty": "Easy",
    "squareNodes": document.getElementsByClassName("square")
  };

  // Symbol change
  $(".symbol-buttons > button").click(function changeSymbol() {
    var tempSymbol = gameState.compSymbol;
    gameState.compSymbol = gameState.userSymbol;
    gameState.userSymbol = tempSymbol;
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
  
  // Difficulty changes
  $(".difficulty-buttons > button").click(function changeDifficulty() {
    gameState.difficulty = $(this).text();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  // User move, initiated by square click
  $(".square").click(function userMove() {
    if ($(this).html() === "") {
      $(this).html(gameState.userSymbol);
      if (checkTerminal() === false) {
        // Delayed computer moves
        setTimeout(compMove, 500);
        setTimeout(checkTerminal, 500);
      }
    }
  });
  
  function compMove(state) {
    // Easy - computer places in random squares
    if (gameState.difficulty == "Easy") {
      for (var i = 0; i < 9; i++) {
        if (gameState.squareNodes[i].innerHTML === "") {
          gameState.squareNodes[i].innerHTML = gameState.compSymbol;
          return; // End computer move after first empty square is found
        }
      }
    // Medium - 
    // } else if (gameState.difficulty == "Medium") {
    
    // Hard - user can at best tie the computer
    // } else if (gameState.difficulty == "Hard") {
      
    }
  }
  
  function checkTerminal() {
    // Check diagonals for win
    if (gameState.squareNodes[0].innerHTML 
        && gameState.squareNodes[0].innerHTML === gameState.squareNodes[4].innerHTML 
        && gameState.squareNodes[4].innerHTML === gameState.squareNodes[8].innerHTML) 
    {
        win(gameState.squareNodes[0].innerHTML === gameState.userSymbol ? "User" : "Computer", [0, 4, 8]);
        return true;
    } 
    if (gameState.squareNodes[2].innerHTML 
        && gameState.squareNodes[2].innerHTML === gameState.squareNodes[4].innerHTML 
        && gameState.squareNodes[4].innerHTML === gameState.squareNodes[6].innerHTML) 
    {
        win(gameState.squareNodes[2].innerHTML === gameState.userSymbol ? "User" : "Computer", [2, 4, 6]);
        return true;
    }
    // Check rows for win
    for (var i = 0; i < 7; i += 3) {
      if (gameState.squareNodes[i].innerHTML 
          && gameState.squareNodes[i].innerHTML === gameState.squareNodes[i + 1].innerHTML 
          && gameState.squareNodes[i + 1].innerHTML === gameState.squareNodes[i + 2].innerHTML) 
      {
          win(gameState.squareNodes[i].innerHTML === gameState.userSymbol ? "User" : "Computer", [i, i + 1, i + 2]);
          return true;
      }
    }
    // Check columns for win
    for (var i = 0; i < 3; i++) {
      if (gameState.squareNodes[i].innerHTML 
          && gameState.squareNodes[i].innerHTML === gameState.squareNodes[i + 3].innerHTML 
          && gameState.squareNodes[i + 3].innerHTML === gameState.squareNodes[i + 6].innerHTML) 
      {
          win(gameState.squareNodes[i].innerHTML === gameState.userSymbol ? "User" : "Computer", [i, i + 3, i + 6]);
          return true;
      }
    }
    return false; // No terminal condition
  }

  // Player can be "User" or "Computer"
  function win(player, line) {
    if (player === "User") {
      for (var i = 0; i < 3; i++) {
        gameState.squareNodes[line[i]].classList.add("winning-square__user");
      }
    } else {
      for (var i = 0; i < 3; i++) {
        gameState.squareNodes[line[i]].classList.add("winning-square__comp");
      }
    }
    setTimeout(newGame, 1500);
  }

  function newGame() {
    for (var i = 0; i < 9; i++) {
      gameState.squareNodes[i].innerHTML = "";
      gameState.squareNodes[i].classList.remove("winning-square__user");
      gameState.squareNodes[i].classList.remove("winning-square__comp");
    }
  }

});