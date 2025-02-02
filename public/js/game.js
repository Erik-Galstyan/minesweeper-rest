import Minesweeper from "./minesweeper.js";

let n = 0;
let m = 0;
let complaxity = "";
let bombs = 0;
let body = document.querySelector("body");

if (body.className == "easy") {
  n = 8;
  m = 8;
  complaxity = "easy";
  bombs = 10;
} else if (body.className == "normal") {
  console.log("heheheheh");

  n = 16;
  m = 16;
  complaxity = "normal";
  bombs = 40;
} else {
  n = 15;
  m = 32;
  complaxity = "hard";
  bombs = 100;
}

let loseAndWinFlag = false;
let game = new Minesweeper(n, m, bombs, complaxity);
game.createBoard();
game.fillTheBombs();
game.fillTheNumOfBombsForEachField();
game.printBoard(); /*print on console browser border*/

let allFields = document.querySelectorAll(".every-square");

allFields.forEach((elm) => {
  elm.onclick = () => {
    let i = parseInt(elm.classList[1]);
    let j = parseInt(elm.classList[2]);
    if (
      loseAndWinFlag ||
      (game.boardFlag[i][j] && game.board[i][j] != "*") ||
      game.rightClickFlag[i][j]
    ) {
      return;
    }

    if (game.board[i][j] == "*") {
      let youLoseMsg = document.createElement("div");
      youLoseMsg.innerHTML = "<h1>You Lose!</h1>";
      youLoseMsg.style.position = "absolute";
      youLoseMsg.style.top = 50;
      if (complaxity == "hard") {
        youLoseMsg.style.fontSize = "2rem";
        youLoseMsg.style.right = "25px";
      } else {
        youLoseMsg.style.fontSize = "4rem";
        youLoseMsg.style.right = "325px";
      }
      body.append(youLoseMsg);

      for (let i = 0; i < game.n; ++i) {
        for (let j = 0; j < game.m; ++j) {
          if (game.board[i][j] == "*") {
            loseAndWinFlag = true;
            allFields.forEach((elm) => {
              if (elm.classList[1] == `${i}i` && elm.classList[2] == `${j}j`) {
                elm.innerHTML = "💣";
                elm.style.display = "flex";
                elm.style.justifyContent = "center";
                elm.style.alignItems = "center";
                elm.style.backgroundColor = "red";
                elm.style.fontSize = game.fontSize;
              }
            });
          }
        }
      }
      return;
    } else if (game.board[i][j] == "0") {
      game.openZeroes(i, j, allFields);
    } else {
      elm.innerHTML = game.board[i][j];
      game.boardFlag[i][j] = true;
      if (game.board[i][j] == "1") {
        elm.style.backgroundColor = "green";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      } else if (game.board[i][j] == "2") {
        elm.style.backgroundColor = "orange";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      } else if (game.board[i][j] == "3") {
        elm.style.backgroundColor = "orangered";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      } else if (game.board[i][j] == "4") {
        elm.style.backgroundColor = "rgb(180, 126, 27)";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      } else if (game.board[i][j] == "5") {
        elm.style.backgroundColor = "rgb(100, 73, 23)";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      } else if (game.board[i][j] == "6") {
        elm.style.backgroundColor = "rgb(8, 42, 100)";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      } else if (game.board[i][j] == "7") {
        elm.style.backgroundColor = "rgb(65, 11, 29)";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      } else if (game.board[i][j] == "8") {
        elm.style.backgroundColor = "rgb(65, 11, 69)";
        elm.style.display = "flex";
        elm.style.justifyContent = "center";
        elm.style.alignItems = "center";
        elm.style.fontSize = game.fontSize;
        elm.style.fontWeight = 700;
      }
    }
    if (game.boardFlag.flat(Infinity).every((elm) => elm == true)) {
      loseAndWinFlag = true;
      let youWinMsg = document.createElement("div");
      youWinMsg.innerHTML = "<h1>🎉 You Win! 🎉</h1>";
      youWinMsg.style.position = "absolute";
      youWinMsg.style.top = 50;
      if (complaxity == "hard") {
        youWinMsg.style.fontSize = "1.5rem";
        youWinMsg.style.right = "5px";
      } else {
        youWinMsg.style.fontSize = "4rem";
        youWinMsg.style.right = "240px";
      }
      body.prepend(youWinMsg);
      return;
    }
  };
});

allFields.forEach((elm) => {
  elm.addEventListener("contextmenu", (event) => {
    if (loseAndWinFlag) {
      return;
    }
    event.preventDefault();
    game.handleRightClick(
      parseInt(elm.classList[1]),
      parseInt(elm.classList[2]),
      allFields
    );
  });
});
