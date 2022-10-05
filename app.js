var userScore = 0;
var botScore = 0;
const rock_choice = document.getElementById("rock");
const paper_choice = document.getElementById("paper");
const scissor_choice = document.getElementById("scissors");
const result = document.getElementById("result_h3");
const Player1Score = document.getElementById("player1-score");
const BotScore = document.getElementById("bot-score");
const player1Chosen = document.getElementById("player1-chosen");
const botChosen = document.getElementById("bot-chosen");

function getCompChoice() {
  const choices = ("Rock", "Paper", "Scissors");
  const random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "Rock";
  } else if (random == 1) {
    return "Paper";
  } else if (random == 2) {
    return "Scissors";
  }
}

function changeImage(userChoice, compChoice) {
  if (userChoice === "Rock") {
    player1Chosen.src = "Assets/rock.png";
  } else if (userChoice === "Paper") {
    player1Chosen.src = "Assets/paper.png";
  } else if (userChoice === "Scissors") {
    player1Chosen.src = "Assets/scissors.png";
  }

  if (compChoice === "Rock") {
    botChosen.src = "Assets/rock.png";
  } else if (compChoice === "Paper") {
    botChosen.src = "Assets/paper.png";
  } else if (compChoice === "Scissors") {
    botChosen.src = "Assets/scissors.png";
  }
}

function gameplay(userChoice) {
  const compChoice = getCompChoice();
  changeImage(userChoice, compChoice);
  if (
    (userChoice == "Rock" && compChoice == "Scissors") ||
    (userChoice == "Paper" && compChoice == "Rock") ||
    (userChoice == "Scissors" && compChoice == "Paper")
  ) {
    result.innerHTML = "You Win!";
    userScore++;
    Player1Score.innerHTML = userScore;
    document.getElementById("section").classList.add("green-glow");
    setTimeout(() => {
      document.getElementById("section").classList.remove("green-glow");
    }, 200);
  } else if (userChoice === compChoice) {
    result.innerHTML = "It's a Draw!";
    document.getElementById("section").classList.add("grey-glow");
    setTimeout(() => {
      document.getElementById("section").classList.remove("grey-glow");
    }, 200);
  } else {
    result.innerHTML = "You Lose!";
    botScore++;
    BotScore.innerHTML = botScore;
    document.getElementById("section").classList.add("red-glow");
    setTimeout(() => {
      document.getElementById("section").classList.remove("red-glow");
    }, 200);
  }
}

function main() {
  rock_choice.onclick = function () {
    gameplay("Rock");
    console.log("Rock");
  };

  paper_choice.onclick = function () {
    gameplay("Paper");
    console.log("Paper");
  };

  scissor_choice.onclick = function () {
    gameplay("Scissors");
    console.log("Scissor");
  };
}

main();
