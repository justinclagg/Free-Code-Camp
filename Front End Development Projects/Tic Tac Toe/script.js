"use strict";

$(document).ready(function () {
  
  var userSymbol = "X";
  var compSymbol = "O";
  var difficulty = "Easy";
  var squareArr = document.getElementsByClassName("square");
  var board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
  var state = "";
  
  // Changes the symbol
  $(".symbol-buttons > .btn").click(function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    compSymbol = userSymbol;
    userSymbol = $(this).html();
  });
  
  // Changes the difficulty level
  $(".difficulty-buttons > .btn").click(function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    difficulty = $(this).html();
  });
  
  function compMove(state) {
    // Computer places in random squares
    if (difficulty == "Easy") {
      for (var i = 0; i < 9; i++) {
        if (!squareArr[i].innerHTML) {
          squareArr[i].innerHTML = compSymbol;
          board[i] = 0;
          return;
        }
      }
    } else if (difficulty == "Medium") {
    
    // User can at best tie
    } else if (difficulty == "Hard") {
      
    }
  }
  
  // Update the board array, representing user entries with 1,
  // and computer entries with 0
  function updateBoard() {
    for (var i = 0; i < 9; i++) {
      if (squareArr[i].innerHTML) {
        board[i] = squareArr[i].innerHTML === userSymbol ? 1 : 0;
      }
    }
  }
  
  function newGame() {
    board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
    for (var i = 0; i < 9; i++) {
      squareArr[i].innerHTML = "";
      squareArr[i].classList.remove("winning-square__user");
      squareArr[i].classList.remove("winning-square__comp");
    }
  }
  
  // Player can be "User" or "Computer"
  function win(player, line) {
    if (player === "User") {
      for (var i = 0; i < 3; i++) {
        squareArr[line[i]].classList.add("winning-square__user");
      }
    } else {
      for (var i = 0; i < 3; i++) {
        squareArr[line[i]].classList.add("winning-square__comp");
      }
    }
    setTimeout(newGame, 1500);
  }
  
  function checkTerminal(state) {
    // Check diagonals for win
    if (board[0] !== "E" && board[0] === board[4] && board[4] === board[8]) {
      win(board[0] === 1 ? "User" : "Computer", [0, 4, 8]);
      return true;
    } else if (board[2] !== "E" && board[2] === board[4] && board[4] === board[6]) {
      win(board[2] === 1 ? "User" : "Computer", [2, 4, 6]);
      return true;
    }
    // Check rows for win
    for (var i = 0; i < 7; i += 3) {
      if (board[i] !== "E" && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
        win(board[i] === 1 ? "User" : "Computer", [i, i + 1, i + 2]);
        return true;
      }
    }
    // Check columns for win
    for (var i = 0; i < 3; i++) {
      if (board[i] !== "E" && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
        win(board[i] === 1 ? "User" : "Computer", [i, i + 3, i + 6]);
        return true;
      }
    }
    return false;
  }
  
  $(".square").click(function() {
    if (!$(this).html()) {
      $(this).html(userSymbol);
      updateBoard();
      if (checkTerminal() === false) {
        compMove();
        checkTerminal();
      }
    }
  });
  

  
});