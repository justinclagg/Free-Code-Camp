/*eslint-env browser, jquery */
$(document).ready(function () {
	"use strict";

	var game = {
		"userSymbol": "X",
		"compSymbol": "O",
		"difficulty": "Easy",
		"board": Array(9).fill(null),
		"status": "running",
		"depth": 100,
		"winningLine": []
	};
	
	// Symbol changes
	$(".symbol-buttons > button").click(function changeSymbol() {
		var tempSymbol = game.compSymbol;
		game.compSymbol = game.userSymbol;
		game.userSymbol = tempSymbol;
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

	// Difficulty changes
	$(".difficulty-buttons > button").click(function changeDifficulty() {
		game.difficulty = $(this).text();
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

	// User move
	$(".square").click(function userMove() {
		if (game.status === "running" && $(this).html() === "") {
			var squareIndex = $(this).attr("id").slice(7);
			game.board[squareIndex] = false;
			$(this).html(game.userSymbol);
			if (gameOver(game.board) === false) {
				compMove();
			}
		}
	});

	function gameOver(board) {
		var terminalStatus = checkTerminal(board);
		switch(terminalStatus) {
		case null:
			return false;
		case "User":
			win("User");
			game.status = "off";
			return true;
		case "Computer":
			win("Computer");
			game.status = "off";
			return true;
		case "Tie":
			game.status = "off";
			setTimeout(newGame, 1500);
			return true;
		}
	}

	function updateBoard() {
		for (var i = 0; i < game.board.length; i++) {
			if (game.board[i] === true) {
				$("#square-" + i).text(game.compSymbol);
			}
			else if (game.board[i] === false) {
				$("#square-" + i).text(game.userSymbol);
			}
		}
	}

	function compMove() {
		var nextVal, bestVal, bestChild, children;
		bestVal = -1000;
		children = getChildNodes(game.board, true);
		children.forEach(function getMove(child) {
			nextVal = minimax(child, game.depth, false);	// false because it is the user's turn
			if (nextVal > bestVal) {
				bestVal = nextVal;
				bestChild = child;
			}
		});
		if (game.difficulty === "Easy") {
			if (Math.random() < 0.50) {
				game.board = bestChild;
			}
			else {
				game.board = children[Math.floor(Math.random() * children.length)];
			}
		}
		else if (game.difficulty === "Medium") {
			if (Math.random() < 0.90) {
				game.board = bestChild;
			}
			else {
				game.board = children[Math.floor(Math.random() * children.length)];
			}
		}
		else if (game.difficulty === "Hard") {
			game.board = bestChild;
		}
		updateBoard();
		gameOver(game.board);
	}
  
	function checkTerminal(board) {
		// Check diagonals for win
		if (board[0] !== null && board[0] === board[4] && board[4] === board[8]) {
			game.winningLine = [0, 4, 8];
			return board[0] === true ? "Computer" : "User";
		}
		else if (board[2] !== null && board[2] === board[4] && board[4] === board[6]) {
			game.winningLine = [2, 4, 6];
			return board[2] === true ? "Computer" : "User";
		}
		// Check rows for win
		for (var i = 0; i < 7; i += 3) {
			if (board[i] !== null && board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
				game.winningLine = [i, i + 1, i + 2];
				return board[i] === true ? "Computer" : "User";
			}
		}
		// Check columns for win
		for (var j = 0; j < 3; j++) {
			if (board[j] !== null && board[j] === board[j + 3] && board[j + 3] === board[j + 6]) {
				game.winningLine = [j, j + 3, j + 6];
				return board[j] === true ? "Computer" : "User";
			}
		}
		// Check for tie
		if (board.indexOf(null) === -1) {
			return "Tie";
		}
		// No terminal condition
		return null;
	}

	function minimax(node, depth, maximizingPlayer) {
		// Check if a leaf node has been reached
		var terminalNode = checkTerminal(node);
		if (depth === 0 || terminalNode !== null) {
			switch(terminalNode) {
			case "Computer":
				return 10 - (game.depth - depth);
			case "User":
				return -10 + (game.depth - depth);
			case "Tie":
				return 0;
			}
		}
		// Otherwise generate the children of node
		var bestVal, nextVal;
		var children = [];
		if (maximizingPlayer) {
			// Maximizing player (AI)
			bestVal = -1000;
			children = getChildNodes(node, true);
			children.forEach(function recursiveMinimax(child) {
				nextVal = minimax(child, depth - 1, false);
				bestVal = Math.max(bestVal, nextVal);
			});
			return bestVal;
		} else {
			// Minimizing player
			bestVal = 1000;
			children = getChildNodes(node, false);
			children.forEach(function recursiveMinimax(child) {
				nextVal = minimax(child, depth - 1, true);
				bestVal = Math.min(bestVal, nextVal);
			});
			return bestVal;
		}
	}

	function getChildNodes(node, maximizingPlayer) {
		var childrenArr = [],
			nodeCopy = [];
		for (var i = 0; i < node.length; i++) {
			if (node[i] === null) {
				nodeCopy = node.slice();
				nodeCopy[i] = maximizingPlayer;
				childrenArr.push(nodeCopy);
			}
		}
		return childrenArr;
	}

	function win(player) {
		if (player === "User") {
			for (var i = 0; i < 3; i++) {
				$("#square-" + game.winningLine[i]).addClass("winning-square__user");
			}
		} else if (player === "Computer") {
			for (var j = 0; j < 3; j++) {
				$("#square-" + game.winningLine[j]).addClass("winning-square__comp");
			}
		}
		setTimeout(newGame, 1500, player);
	}

	function newGame(player) {
		if (player === "User") {
			for (var i = 0; i < 3; i++) {
				$("#square-" + game.winningLine[i]).removeClass("winning-square__user");
			}
		} else if (player === "Computer") {
			for (var j = 0; j < 3; j++) {
				$("#square-" + game.winningLine[j]).removeClass("winning-square__comp");
			}
		}
		for (var k = 0; k < 9; k++) {
			$("#square-" + k).html("");
		}
		game.board = Array(9).fill(null);
		game.status = "running";
	}

});