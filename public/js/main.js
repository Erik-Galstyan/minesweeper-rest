let complexityDivs = document.querySelectorAll(".complaxity-div");
let complaxity = "";
let easy = document.querySelector(".easy");
let normal = document.querySelector(".normal");
let hard = document.querySelector(".hard");
let playButton = document.querySelector(".play-button");
let link = document.querySelector("a");

complexityDivs.forEach((elem) => {
  elem.onclick = (event) => {
    let clickedComplexity = elem.classList[elem.classList.length - 1];
    link.href = `/${clickedComplexity}`;
    elem.style.border = "5px solid black";
    if (clickedComplexity === "easy") {
      normal.style.border = "none";
      hard.style.border = "none";
      easy.style.backgroundColor = "rgb(88, 190, 88)";
      normal.style.backgroundColor = "rgb(251, 251, 110)";
      hard.style.backgroundColor = "rgb(255, 112, 112)";
    } else if (clickedComplexity === "normal") {
      easy.style.backgroundColor = "rgb(112, 235, 112)";
      normal.style.backgroundColor = "rgb(211, 211, 94)";
      hard.style.backgroundColor = "rgb(255, 112, 112)";
      easy.style.border = "none";
      hard.style.border = "none";
    } else {
      easy.style.backgroundColor = "rgb(112, 235, 112)";
      normal.style.backgroundColor = "rgb(251, 251, 110)";
      hard.style.backgroundColor = "rgb(221, 97, 97)";
      easy.style.border = "none";
      normal.style.border = "none";
    }
  };
});
