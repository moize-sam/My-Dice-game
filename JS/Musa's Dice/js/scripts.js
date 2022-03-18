function randInt() {
	return Math.floor(Math.random() * 6) + 1;
};

function Player(name, finalScore, turnScore) {
	this.name = name;
	this.finalScore = finalScore;
	this.turnScore = turnScore;
};

$(document).ready(function () {
	$("#playerNames").submit(function (event) {
		event.preventDefault();
		var p1Name = $("#playerName1").val();
		var p2Name = $("#playerName2").val();
		var player1 = new Player(p1Name, 0, 0);
		var player2 = new Player(p2Name, 0, 0);
		$("#player1 p.players").text(player1.name);
		$("#player2 p.players").text(player2.name);
		$("#section-1").fadeOut();
		$("#section-2").fadeIn();
		$("#player2-btn").hide();
		swal({
			title: "Get Ready!",
			text: "Play Pig Dice!!!",
		});

		$("#roll1").click(function () {
			var scoreHolder = randInt();
			$("#dice h2").text(scoreHolder);
			if (scoreHolder === 1) {
				player1.turnScore = 0;
				$("#player1-btn").hide();
				$("#player1 .playerTurnScore").text(player1.turnScore);
				$("#player2-btn").show();
			} else {
				var what = player1.turnScore += scoreHolder;
				$("#player1 .playerTurnScore").text(what);
			}
		});
		$("#hold1").click(function () {
			player1.finalScore += player1.turnScore;
			if (player1.finalScore >= 100) {
				sweetAlert("Player 1: " + player1.name, " wins ", "BRAVO!!!");
				player1.finalScore = 0;
				player1.turnScore = 0;
				player2.turnScore = 0;
				player2.finalScore = 0;
				$("#player1 .playerTurnScore").text(0);
				$("#player2 .playerTurnScore").text(0);
				$("#player1 .playerScore").text(0);
				$("#player2 .playerScore").text(0);
				$("#dice h2").text(0);
			} else {
				$("#player1 .playerScore").text(player1.finalScore);
				$("#player2-btn").show();
				$("#player1-btn").hide();
				player1.turnScore = 0;
				$("#player1 .playerTurnScore").text(0);
			}

		});

		$("#roll2").click(function () {
			var scoreHolder = randInt();
			$("#dice h2").text(scoreHolder);
			if (scoreHolder === 1) {
				player2.turnScore = 0;
				$("#player2-btn").hide();
				$("#player2 .playerTurnScore").text(player2.turnScore);
				$("#player1-btn").show();
			} else {
				var what = player2.turnScore += scoreHolder;
				$("#player2 .playerTurnScore").text(what);
			}
		});

		$("#hold2").click(function () {
			player2.finalScore += player2.turnScore;
			if (player2.finalScore >= 100) {
				sweetAlert("Player 2: " + player2.name, " wins ", "BRAVO!!!");
				player1.finalScore = 0;
				player1.turnScore = 0;
				player2.turnScore = 0;
				player2.finalScore = 0;
				$("#player1 .playerTurnScore").text(0);
				$("#player2 .playerTurnScore").text(0);
				$("#player1 .playerScore").text(0);
				$("#player2 .playerScore").text(0);
				$("#dice h2").text(0);
			} else {
				$("#player2 .playerScore").text(player2.finalScore);
				$("#player1-btn").show();
				$("#player2-btn").hide();
				player2.turnScore = 0;
				$("#player2 .playerTurnScore").text(0);
			}

		});
	});
});;