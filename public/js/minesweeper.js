export default class Minesweeper {
  constructor(n, m, countOfBombs, complexity) {
    this.n = n;
    this.m = m;
    this.board = [];
    this.boardFlag = [];
    this.rightClickFlag = [];
    this.countOfBombs = countOfBombs;
    this.complexity = complexity;
    if (this.complexity == "easy") {
      this.fontSize = "3rem";
      this.height = "90px";
      this.width = "100px";
    } else {
      this.fontSize = "1.5rem";
      this.height = "50px";
      this.width = "50px";
    }
  }

  createBoard() {
    for (let i = 0; i < this.n; ++i) {
      this.board[i] = new Array(this.m).fill("0");
      this.boardFlag[i] = new Array(this.m).fill(false);
      this.rightClickFlag[i] = new Array(this.m).fill(false);
    }
  }

  fillTheBombs() {
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(this.countOfBombs);

    for (let i = 0; i < this.countOfBombs; ++i) {
      let j = getRandomNumber(0, this.n - 1);
      let k = getRandomNumber(0, this.m - 1);
      if (this.boardFlag[j][k]) {
        --i;
      }
      this.board[j][k] = "*";
      this.boardFlag[j][k] = true;
    }
  }

  countOfBombForOneField(i, j) {
    let count = 0;
    if (i == 0 && j == 0) {
      for (let l = 0; l < 2; l++) {
        for (let z = 0; z < 2; z++) {
          if (l == 0 && z == 0) {
            continue;
          }
          if (this.board[l][z] == "*") {
            count++;
          }
        }
      }
    } else if (i != 0 && j == 0 && i < this.n - 1) {
      if (this.board[i][j + 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j] == "*") {
        count++;
      }
      if (this.board[i + 1][j + 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j] == "*") {
        count++;
      }
      if (this.board[i - 1][j + 1] == "*") {
        count++;
      }
    } else if (i == this.n - 1 && j == 0) {
      if (this.board[i][j + 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j] == "*") {
        count++;
      }
      if (this.board[i - 1][j + 1] == "*") {
        count++;
      }
    } else if (i == 0 && j != 0 && j < this.m - 1) {
      if (this.board[i][j + 1] == "*") {
        count++;
      }
      if (this.board[i][j - 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j] == "*") {
        count++;
      }
      if (this.board[i + 1][j + 1] == "*") {
        count++;
      }
    } else if (i == 0 && j == this.m - 1) {
      if (this.board[i][j - 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j] == "*") {
        count++;
      }
    } else if (i != 0 && j == this.m - 1 && i != this.n - 1) {
      if (this.board[i][j - 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j] == "*") {
        count++;
      }
      if (this.board[i - 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j] == "*") {
        count++;
      }
    } else if (i == this.n - 1 && j == this.m - 1) {
      if (this.board[i][j - 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j] == "*") {
        count++;
      }
    } else if (i == this.n - 1 && j != 0 && j < this.m - 1) {
      if (this.board[i][j - 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j] == "*") {
        count++;
      }
      if (this.board[i - 1][j + 1] == "*") {
        count++;
      }
      if (this.board[i][j + 1] == "*") {
        count++;
      }
    } else {
      if (this.board[i][j - 1] == "*") {
        count++;
      }
      if (this.board[i][j + 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i - 1][j] == "*") {
        count++;
      }
      if (this.board[i - 1][j + 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j - 1] == "*") {
        count++;
      }
      if (this.board[i + 1][j] == "*") {
        count++;
      }
      if (this.board[i + 1][j + 1] == "*") {
        count++;
      }
    }
    return count;
  }

  fillTheNumOfBombsForEachField() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.m; j++) {
        if (this.board[i][j] == "*") {
          continue;
        }

        this.board[i][j] = String(this.countOfBombForOneField(i, j));
      }
    }
  }

  openZeroes(i, j, allFields) {
    if (i < 0 || j < 0 || i >= this.n || j >= this.m || this.boardFlag[i][j]) {
      return;
    }

    if (this.board[i][j] == "0") {
      allFields.forEach((elm) => {
        let list1 = parseInt(elm.classList[1]);
        let list2 = parseInt(elm.classList[2]);
        if (list2 == j && list1 == i) {
          elm.innerHTML = " ";
          elm.style.all = "unset";
          elm.style.height = this.height;
          elm.style.width = this.width;
        }
      });
      this.boardFlag[i][j] = true;
    } else {
      allFields.forEach((elm) => {
        let list1 = parseInt(elm.classList[1]);
        let list2 = parseInt(elm.classList[2]);
        if (list2 == j && list1 == i) {
          elm.innerHTML = this.board[i][j];
          if (this.board[i][j] == "1") {
            elm.style.backgroundColor = "green";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          } else if (this.board[i][j] == "2") {
            elm.style.backgroundColor = "orange";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          } else if (this.board[i][j] == "3") {
            elm.style.backgroundColor = "orangered";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          } else if (this.board[i][j] == "4") {
            elm.style.backgroundColor = "rgb(180, 126, 27)";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          } else if (this.board[i][j] == "5") {
            elm.style.backgroundColor = "rgb(100, 73, 23)";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          } else if (this.board[i][j] == "6") {
            elm.style.backgroundColor = "rgb(8, 42, 100)";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          } else if (this.board[i][j] == "7") {
            elm.style.backgroundColor = "rgb(65, 11, 29)";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          } else if (this.board[i][j] == "8") {
            elm.style.backgroundColor = "rgb(65, 11, 69)";
            elm.style.display = "flex";
            elm.style.justifyContent = "center";
            elm.style.alignItems = "center";
            elm.style.fontSize = this.fontSize;
            elm.style.fontWeight = 700;
          }
        }
      });
      this.boardFlag[i][j] = true;
    }
    if (this.board[i][j] == "0") {
      if (i < this.n - 1 && j < this.m - 1 && this.board[i + 1][j + 1] != "0") {
        allFields.forEach((elm) => {
          let list1 = parseInt(elm.classList[1]);
          let list2 = parseInt(elm.classList[2]);
          if (list2 == j + 1 && list1 == i + 1) {
            elm.innerHTML = this.board[i + 1][j + 1];
            if (this.board[i + 1][j + 1] == "1") {
              elm.style.backgroundColor = "green";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j + 1] == "2") {
              elm.style.backgroundColor = "orange";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j + 1] == "3") {
              elm.style.backgroundColor = "orangered";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j + 1] == "4") {
              elm.style.backgroundColor = "rgb(180, 126, 27)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j + 1] == "5") {
              elm.style.backgroundColor = "rgb(100, 73, 23)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j + 1] == "6") {
              elm.style.backgroundColor = "rgb(8, 42, 100)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j + 1] == "7") {
              elm.style.backgroundColor = "rgb(65, 11, 29)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j + 1] == "8") {
              elm.style.backgroundColor = "rgb(65, 11, 69)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            }
          }
        });
        this.boardFlag[i + 1][j + 1] = true;
      }
      if (i > 0 && j > 0 && this.board[i - 1][j - 1] != "0") {
        allFields.forEach((elm) => {
          let list1 = parseInt(elm.classList[1]);
          let list2 = parseInt(elm.classList[2]);
          if (list2 == j - 1 && list1 == i - 1) {
            elm.innerHTML = this.board[i - 1][j - 1];
            if (this.board[i - 1][j - 1] == "1") {
              elm.style.backgroundColor = "green";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j - 1] == "2") {
              elm.style.backgroundColor = "orange";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j - 1] == "3") {
              elm.style.backgroundColor = "orangered";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j - 1] == "4") {
              elm.style.backgroundColor = "rgb(180, 126, 27)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j - 1] == "5") {
              elm.style.backgroundColor = "rgb(100, 73, 23)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j - 1] == "6") {
              elm.style.backgroundColor = "rgb(8, 42, 100)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j - 1] == "7") {
              elm.style.backgroundColor = "rgb(65, 11, 29)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j - 1] == "8") {
              elm.style.backgroundColor = "rgb(65, 11, 69)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            }
          }
        });
        this.boardFlag[i - 1][j - 1] = true;
      }
      if (i > 0 && j < this.m - 1 && this.board[i - 1][j + 1] != "0") {
        allFields.forEach((elm) => {
          let list1 = parseInt(elm.classList[1]);
          let list2 = parseInt(elm.classList[2]);
          if (list2 == j + 1 && list1 == i - 1) {
            elm.innerHTML = this.board[i - 1][j + 1];
            if (this.board[i - 1][j + 1] == "1") {
              elm.style.backgroundColor = "green";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j + 1] == "2") {
              elm.style.backgroundColor = "orange";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j + 1] == "3") {
              elm.style.backgroundColor = "orangered";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j + 1] == "4") {
              elm.style.backgroundColor = "rgb(180, 126, 27)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j + 1] == "5") {
              elm.style.backgroundColor = "rgb(100, 73, 23)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j + 1] == "6") {
              elm.style.backgroundColor = "rgb(8, 42, 100)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j + 1] == "7") {
              elm.style.backgroundColor = "rgb(65, 11, 29)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i - 1][j + 1] == "8") {
              elm.style.backgroundColor = "rgb(65, 11, 69)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            }
          }
        });
        this.boardFlag[i - 1][j + 1] = true;
      }
      if (i < this.n - 1 && j > 0 && this.board[i + 1][j - 1] != "0") {
        allFields.forEach((elm) => {
          let list1 = parseInt(elm.classList[1]);
          let list2 = parseInt(elm.classList[2]);
          if (list2 == j - 1 && list1 == i + 1) {
            elm.innerHTML = this.board[i + 1][j - 1];
            if (this.board[i + 1][j - 1] == "1") {
              elm.style.backgroundColor = "green";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j - 1] == "2") {
              elm.style.backgroundColor = "orange";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j - 1] == "3") {
              elm.style.backgroundColor = "orangered";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j - 1] == "4") {
              elm.style.backgroundColor = "rgb(180, 126, 27)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j - 1] == "5") {
              elm.style.backgroundColor = "rgb(100, 73, 23)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j - 1] == "6") {
              elm.style.backgroundColor = "rgb(8, 42, 100)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j - 1] == "7") {
              elm.style.backgroundColor = "rgb(65, 11, 29)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            } else if (this.board[i + 1][j - 1] == "8") {
              elm.style.backgroundColor = "rgb(65, 11, 69)";
              elm.style.display = "flex";
              elm.style.justifyContent = "center";
              elm.style.alignItems = "center";
              elm.style.fontSize = this.fontSize;
              elm.style.fontWeight = 700;
            }
          }
        });
        this.boardFlag[i + 1][j - 1] = true;
      }

      this.openZeroes(i + 1, j, allFields);
      this.openZeroes(i - 1, j, allFields);
      this.openZeroes(i, j + 1, allFields);
      this.openZeroes(i, j - 1, allFields);
      this.openZeroes(i + 1, j + 1, allFields);
      this.openZeroes(i + 1, j - 1, allFields);
      this.openZeroes(i - 1, j - 1, allFields);
      this.openZeroes(i - 1, j + 1, allFields);
    }
  }

  handleRightClick(i, j, allFields) {
    if (this.boardFlag[i][j] && this.board[i][j] != "*") {
      return;
    }
    let clickedElm = null;
    allFields.forEach((elm) => {
      let list1 = parseInt(elm.classList[1]);
      let list2 = parseInt(elm.classList[2]);
      if (list1 == i && list2 == j) {
        clickedElm = elm;
      }
    });
    if (!this.rightClickFlag[i][j]) {
      clickedElm.innerHTML = "✔️";
      clickedElm.style.fontSize = this.fontSize;
      clickedElm.style.display = "flex";
      clickedElm.style.justifyContent = "center";
      clickedElm.style.alignItems = "center";
      this.rightClickFlag[i][j] = true;
    } else {
      clickedElm.innerHTML = "";
      this.rightClickFlag[i][j] = false;
    }
  }

  printBoard() {
    let res = "";
    for (let i = 0; i < this.n; ++i) {
      res += "\n";
      for (let j = 0; j < this.m; ++j) {
        res += this.board[i][j] + " ";
      }
    }
    console.log(res);
  }
}
