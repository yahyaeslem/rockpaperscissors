// Computer RNG funciton
console.log("Rock Paper SCissors");
function getComputerChoice (){
     let i = Math.random () * 100 ;
      if (i< 33){
        i = " rock"
      }
      else if ( i> 33  && i < 66){
        i = "scissors"
      }
      else if ( i< 99 && i > 66) {
        i = "paper"
      }
      return i;
}
getComputerChoice();
console.log(getComputerChoice());
// Player vs Computer Section
function singleRoundRPS(playerSelection, computerSelection){
    let userChoice = prompt("Please type one of these option : Rock , Paper , Scissors");
    
}