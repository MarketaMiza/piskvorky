import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

// ukol 3
let currentPlayer = "circle";
const player = document.querySelector("#player");

const change = (event) => {
  if (currentPlayer === "circle") {
    event.target.classList.add("board__field--circle");
    currentPlayer = "cross";
    player.className = "board__nav--cross";
  } else if (currentPlayer === "cross") {
    event.target.classList.add("board__field--cross");
    currentPlayer = "circle";
    player.className = "board__nav--circle";
  }
  event.target.disabled = true;

  const buttonsArray = Array.from(buttons);

  let herniPole = buttonsArray.map((element) => {
    if (element.firstChild.className === "board__field--circle") {
        return 'o'
    };
    if (element.firstChild.className === "board__field--cross") {
        return 'x'
    }

    return "_";
  });

  const vitez = findWinner(herniPole);
  if (vitez === "o" || vitez === "x") {
      setTimeout(() => {
          alert(`Vyhrál hráč se symbolem ${vitez}.`); 
          location.reload();

      }, 500)
      // toto by se provedlo hned
  }
};

// bonus 3
const restart = document.querySelector(".blue");
restart.addEventListener("click", (event) => {
  if (!confirm("Opravdu chceš začít znovu?")) {
    event.preventDefault();
  }
});

// ukol 4
const buttons = document.querySelectorAll("td");
buttons.forEach((button) => {
  button.addEventListener("click", change);
});


