let humanScore = 0;
let computerScore = 0;
let pick = prompt("Rock, Papper, Scissors?: ");


//Human logic function
function getHumanChoice(){
    const func = ()=>{
        
    let lowCase = pick.slice(1);
    var pickFix = pick[0].toUpperCase() +lowCase.toLowerCase();
    return pickFix;
    }
    let pickF = func();
    
    if(pickF === "Rock"){
        return 0;
    }
    else if(pickF === "Papper"){
        return 1;
    }
    else if(pickF ==="Scissors"){
        return 2;
    }
    else if(pickF !== "Rock" || "Papper" ||"Scissors"){
        return console.error("Enter Rock Papper or Scissors");
    }
}
//Computer logic function
function getComputerChoice(){
    var comp_rps = [0, 1, 2];
    const choice = comp_rps[Math.floor(Math.random() * comp_rps.length)];
    if(choice === 0){
        return 0;
    }else if(choice == 1){
        return 1;
    }else if(choice == 2){
        return 2;
    }    
    return choice;
}
//Round Function
function playRound(hChoice, cChoice){
    //For play score
    
        if(hChoice == 0 && cChoice == 2){
            return "Rock beats scissors."
            humanScore += 1;
        }
        else if(hChoice == 1 && cChoice == 0){
            return "Papper beats Rock."
            humanScore += 1;
        }
        else if(hChoice == 2 && cChoice == 1){
            return "Scissors beats Papper."
            humanScore += 1;
        }
        //For computer score
        else if(hChoice == 2 && cChoice == 0){
            return "Rock beats Scissors."
            computerScore += 1;
        }else if(hChoice == 0 && cChoice == 1){
            return "Papper beats Rock."
            computerScore += 1;
        }else if(hChoice == 1 && cChoice == 2){
            return "Scissors beats Papper."
            computerScore += 1;
        }
}

//Game logic
let roundMax = 5;
let r =0;

function playGame(){
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    for (let i = 0; i < roundMax; i++) {
        playRound(humanSelection, computerSelection);
    

        if(i === roundMax){
            if (humanScore > computerScore) {
                return `Round ${r+=1} you Win ${humanScore} to ${computerScore}`;
            } else if (computerScore > humanScore) {
                return `Round ${r+=1} computer Win ${computerScore} to ${humanScore}`;
            } else {
                return `It's a tie`;
            }
            
        }
        else{
            console.log(playRound(humanSelection, computerSelection));
        }
    }    
            // Determine the winner after all rounds
}

playGame();
