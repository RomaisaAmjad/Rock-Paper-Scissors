let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score")
const compscorePara = document.querySelector("#comp-score")

document.addEventListener("DOMContentLoaded",function(){
        });

const genComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
   const randomIndex =  Math.floor(Math.random()*3);
   return options[randomIndex];
}
const drawGame = ()=>{
    console.log("Game was Draw")
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = " #081b31";
    
}
const showWinner = (userWin,userchoice,compChoice)=>{
    if(userWin){
        console.log("You Win");
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose")
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText =  `You Lose! ${compChoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userchoice) => {
    console.log("User choice = ", userchoice)
    //Generate Computer Choice
    const compChoice = genComputerChoice();
    console.log("Computer choice = ", compChoice);
    if(userchoice===compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice==="rock"){
            userWin = compChoice === "paper"? false : true

        }
        else if(userchoice ==="paper"){
            userWin = compChoice ===  "scissors"? false : true
        }
        else{
            userWin = compChoice === "rock"? false : true
        }
        showWinner(userWin,userchoice,compChoice);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playGame(userchoice);
    })
})