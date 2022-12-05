// Computer RNG funciton
console.log("Rock Paper SCissors");
function getComputerChoice (){
  let i = Math.random () * 100 ;
   if (i< 33){
     i = "rock"
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
let losts = 0;
let wins = 0;
let draw = 0;
// Player vs Computer Section
function singleRoundRPS(userChoice, computerChoice){
 
  
    if (userChoice == "rock" &&   computerChoice == "scissors"){
      
       wins ++ ;
      return "You Win!Rock beats scissors" ;  
    }
    else if (userChoice == "rock" && computerChoice == "paper")
    {
      losts++;
      return "You Lose !Paper beats rock" ;
    }
    else if (userChoice == "rock" && computerChoice == "rock")
    {
      draw++;
      return "It is DRAW!" ;
    }
    else if (userChoice == "paper" && computerChoice == "scissors"){
      losts ++;
      return "You Lose!Scissors beats paper" ;
    }
    else if (userChoice == "paper" && computerChoice == "paper"){
      draw ++;
      return "It is DRAW" ;
    }
    else if (userChoice == "paper" && computerChoice == "rock"){
      wins ++;
      return "You Win!Paper beats rock" ;
    }
    else if (userChoice == "scissors" && computerChoice == "scissors"){
      draw ++;
      return "It is draw";
    }
    else if (userChoice == "scissors" && computerChoice == "paper"){
      wins ++;
      return "You Win!Scissors beats paper" ;
    }
    else if (userChoice == "scissors" && computerChoice == "rock"){
      losts ++;
      return "You Lose!Rock beats scissors";
    }
    
     
}
//let playerWins = wins;
//let playerDraw = draw;
//let playerLost = losts;//

//console.log(singleRoundRPS(userChoice, computerChoice));
// Game Round Count Section
function game(){
 
  for (let i = 1; i < 6; i++) {
  const userChoice = playerSelection();
  const computerChoice = getComputerChoice();
  singleRoundRPS(userChoice, computerChoice);
  console.log (i +"."+ "ROUND ");
  console.log( "Draw = " + draw + " " + "Wins = " + wins +" " + "Losts = " + losts) ;

 }
 

}
game();