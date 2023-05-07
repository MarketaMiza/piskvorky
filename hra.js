import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";
// to do: prejmenovat change, rozkouskovat funkci
// ukol 3
let currentPlayer = "circle"; // globalni promnenna bez zanoreni, zije nahore

const player = document.querySelector("#player"); // vyznacuje policko HRAJE

// doPlayerMove(event)
const doPlayerMove = (event) => {
  
  if (currentPlayer === "circle") {
   
    event.target.className = "board__field--circle"; // nastav classu DOM elementu na ktery bylo kliknuto
    currentPlayer = "cross";
    player.className = "board__nav--cross";
  
  } else if (currentPlayer === "cross") {
 
    event.target.className = "board__field--cross";
    currentPlayer = "circle";
    player.className = "board__nav--circle";
  
  }

  const buttonsArray = Array.from(buttons); // list DOM prvku prevedno do Array aby mohl byt uplatnen map
  

  let playField = buttonsArray.map((element) => { // do map davame call back funkci, ta se zavola pro kazdy ele. vychoziho pole / po kazdem zadani setavuje nove pole
    
    if (element.className === "board__field--circle") {
        return 'o'
    };
    if (element.className === "board__field--cross") {
        return 'x'
    }

    return "_";
  });

  const winner = findWinner(playField);
  if (winner === "o" || winner === "x") {
      setTimeout(() => {
          alert(`Vyhrál hráč se symbolem ${winner}.`); 
          location.reload();

      }, 500)
      
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
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", doPlayerMove, {once:true});
});


