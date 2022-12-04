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

// Player choice section
function playerSelection(){
return prompt("Please type one of these option : Rock , Paper , Scissors").toLowerCase();
}
// Player vs Computer Section
function singleRoundRPS(userChoice, computerChoice){

    if (userChoice == "rock" &&   computerChoice == "scissors"){
      return "You Win!Rock beats scissors" ;  
    }
    else if (userChoice == "rock" && computerChoice == "paper")
    {
      return "You Lose !Paper beats rock" ;
    }
    else if (userChoice == "rock" && computerChoice == "rock")
    {
      return "It is DRAW!" ;
    }
    else if (userChoice == "paper" && computerChoice == "scissors"){
      return "You Lose!Scissors beats paper" ;
    }
    else if (userChoice == "paper" && computerChoice == "paper"){
      return "It is DRAW" ;
    }
    else if (userChoice == "paper" && computerChoice == "rock"){
      return "You Win!Paper beats rock" ;
    }
    else if (userChoice == "scissors" && computerChoice == "scissors"){
      return "It is draw";
    }
    else if (userChoice == "scissors" && computerChoice == "paper"){
      return "You Win!Scissors beats paper" ;
    }
    else if (userChoice == "scissors" && computerChoice == "rock"){
      return "You Lose!Rock beats scissors";
    }
    
     
}
const userChoice = playerSelection()
const computerChoice = getComputerChoice()
//console.log(singleRoundRPS(userChoice, computerChoice));
// Game Round Count Section
function game(){
  let losts ;
  let wins ;
  let draw;
  for (let i = 0; i < 5; i++) {
  const userChoice = playerSelection()
  const computerChoice = getComputerChoice()
  console.log (i +"."+ "ROUND ");
  let result = singleRoundRPS(userChoice,computerChoice);
  
    if (result.charAt(2) == ''){
      draw += draw;
      
    }
    else if (result.charAt(4) == 'W'){
      wins+= wins
      
    }
    else if ( result.charAt(4) == 'L') {
      losts+= losts
      
    }
   
    return console.log( "Draw =" + draw + "Wins = " + wins +"Losts = " + losts) ; 
 }
 

}
game();