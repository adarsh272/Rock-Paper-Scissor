var arr = ['rock', 'paper', 'scissor']


let BotScore = 0;
let UserScore = 0;
let round = 1;


function play(arr){

  while(round<=5){

    var user_choice = prompt('Round_'+ round +' Enter choice:')
    console.log(user_choice)
    var comp_choice = arr[(Math.floor(Math.random()*3))]
    console.log(comp_choice)

    if(user_choice==="rock" && comp_choice==="scissor"){
      UserScore++
      round++
      console.log("Rock crushes Scissor! You win!") 
      
    }
        
    else if(comp_choice==="rock" && user_choice==="scissor"){
      BotScore++
      round++
      console.log("Rock crushes Scissor! You lose!") 
      
    }

    else if(comp_choice==="paper" && user_choice==="rock"){
      BotScore++
      round++
      console.log("Paper covers Rock! You lose!") 
      
    }

    else if(user_choice==="paper" && comp_choice==="rock"){
      UserScore++
      round++
      console.log("Paper covers Rock! You Win!") 
      
    }

    else if(user_choice==="scissor" && comp_choice==="paper"){
      UserScore++
      round++
      console.log("Scissor cuts Paper! You Win!") 
    }

    else if(comp_choice==="scissor" && user_choice==="paper"){
      BotScore++
      round++
      console.log("Scissor cuts Paper! You lose!")       
    }

    else if(user_choice===comp_choice){
      round++
      console.log("Game tied")
    }    
  }

  alert("Computer Score: " + BotScore + "\n" +
        "Your Score: " + UserScore)
}




function check_winner(b_score, u_score){

  if(b_score > u_score){
      console.log("You loose! Better luck next time:")
  }
  else if(u_score > b_score){
    console.log("You Win! Great Game:XD")
  }
  else{
    console.log("The game is tied!")
  }

  return "Game Over"

}
   



play(arr)
check_winner(BotScore, UserScore)




