let userScore = 1;
let computerScore = 1;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoint = document.querySelector("#user-score");
const computerPoint = document.querySelector("#comp-score");




const genCompChoice = () => {

   const options = ["rock" , "paper" , "scissor"];
   const randomIdx = Math.floor(Math.random() *3);
  
   return options[randomIdx];
};



const drawGame = () => {
   console.log("game was draw");
   msg.innerText = "Draw , try again!";
   msg.style.backgroundColor =  "cadetblue"; 
   
};

const showWinner= (userWin , userChoice , comptChoice) => {

   if(userWin) {
       console.log("you win" );
   msg.innerText = `you win! ${userChoice} beats ${comptChoice}`;
   userPoint.innerText = userScore++;  
   msg.style.backgroundColor =  "green";    
        
   } else {
       console.log("you lose");
       msg.innerText = `you lose! ${comptChoice} beats ${userChoice}`;
       computerPoint.innerText = computerScore++;
       msg.style.backgroundColor =  "red"; 
       
       
   }

};




const playGame = (userChoice) => {
console.log("user choice = " , userChoice);
//generate computer choice
const comptChoice = genCompChoice();
console.log("computer choice = " , comptChoice);

//draw game
if(userChoice === comptChoice) {

return drawGame();

} else {  
let userWin = true;
if(userChoice === "rock") {
   //paper , scissor 
  userWin = comptChoice === "paper" ? false : true;
   
} else if (userChoice === "paper") {
   //scissor , rock
   userWin = comptChoice === "scissor" ? false : true;
   
} else {
   //rock , paper 
   userWin = comptChoice === "rock" ? false : true;
   }

   showWinner(userWin , userChoice , comptChoice);

 };
};


//user-choice
choices.forEach((choice) => {
   choice.addEventListener("click" , () => {   
      const userChoice = choice.getAttribute("id");
       /*console.log("choice was clicked" , userChoice); */
       playGame(userChoice);
   });
});





