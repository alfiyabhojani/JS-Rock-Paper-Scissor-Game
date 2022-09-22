function myJanken() {
  // selecting the elements
  let userScoreValue = document.getElementById("userScoreVal");
  let compScoreValue = document.getElementById("compScoreVal");
  let resultUserStat = document.getElementById("result-user-stat");
  let resultCompStat = document.getElementById("result-comp-stat");
  let winner = document.getElementById("result-final-stat");
  let rock = document.getElementById("r");
  let paper = document.getElementById("p");
  let scissor = document.getElementById("s");
  var tagSpan1 = document.createElement("span");
  var tagSpan2 = document.createElement("span");
  var tagSpan3 = document.createElement("span");
  resultUserStat.appendChild(tagSpan1);
  resultCompStat.appendChild(tagSpan2);
  winner.appendChild(tagSpan3);
  var compWin = 0;
  var userWin = 0;

  // when rock is clicked by user
  rock.addEventListener("click", () => {
    let option = ["Rock", "Paper", "Scissor"];
    let computer = option[Math.floor(Math.random() * option.length)];
    tagSpan1.innerText = "Rock";
    tagSpan2.innerText = computer;

    if (computer === "Paper") {
      compWin = compWin + 1;
      compScoreValue.innerText = compWin;
      tagSpan3.innerText = " Computer Wins";
    } else if (computer === "Scissor") {
      userWin = userWin + 1;
      userScoreValue.innerText = userWin;
      tagSpan3.innerText = " You Wins";
    } else {
      compWin = compWin + 1;
      userWin = userWin + 1;
      compScoreValue.innerText = compWin;
      userScoreValue.innerText = userWin;
      tagSpan3.innerText = " Match Tie";
    }
  });

  // when paper is clicked by user
  paper.addEventListener("click", () => {
    let option = ["Rock", "Paper", "Scissor"];
    let computer = option[Math.floor(Math.random() * option.length)];
    tagSpan1.innerText = "Paper";
    tagSpan2.innerText = computer;

    if (computer === "Scissor") {
      compWin = compWin + 1;
      compScoreValue.innerText = compWin;
      tagSpan3.innerText = " Computer Wins";
    } else if (computer === "Rock") {
      userWin = userWin + 1;
      userScoreValue.innerText = userWin;
      tagSpan3.innerText = " You Wins";
    } else {
      compWin = compWin + 1;
      userWin = userWin + 1;
      compScoreValue.innerText = compWin;
      userScoreValue.innerText = userWin;
      tagSpan3.innerText = " Match Tie";
    }
  });

  // when scissor is clicked by user
  scissor.addEventListener("click", () => {
    let option = ["Rock", "Paper", "Scissor"];
    let computer = option[Math.floor(Math.random() * option.length)];
    tagSpan1.innerText = "Scissor";
    tagSpan2.innerText = computer;

    if (computer === "Rock") {
      compWin = compWin + 1;
      compScoreValue.innerText = compWin;
      tagSpan3.innerText = " Computer Wins";
    } else if (computer === "Paper") {
      userWin = userWin + 1;
      userScoreValue.innerText = userWin;
      tagSpan3.innerText = " You Wins";
    } else {
      compWin = compWin + 1;
      userWin = userWin + 1;
      compScoreValue.innerText = compWin;
      userScoreValue.innerText = userWin;
      tagSpan3.innerText = " Match Tie";
    }
  });
}
myJanken();
