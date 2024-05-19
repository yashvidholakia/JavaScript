let usercount=0;
let compcount=0;

const choice1=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userCountPara=document.querySelector("#user-score")
const compCountPara=document.querySelector("#comp-score")

choice1.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userid=choice.getAttribute("id")
        playgame(userid)
    })
})

const gencompchoice=()=>{
    const options=["stone","paper","scissor"];
    const Randomindex=Math.floor(Math.random()*options.length)
    return options[Randomindex];
}

const playgame=(userid)=>{
    console.log("User Choice=",userid)
    const cchoice=gencompchoice();
    console.log("Computer choice=",cchoice)
    let userWin = true;

  if (userid === cchoice) {
    drawGame();
  } else {
    userWin = (userid === "stone" && cchoice === "scissor") ||
              (userid === "paper" && cchoice === "rock") ||
              (userid === "scissor" && cchoice === "paper");

    if (userWin) {
        usercount++;
        userCountPara.innerText=usercount;
    } else {
      compcount++;
      compCountPara.innerText=compcount;
    }

    showWinner(userWin,userid,cchoice);
  }
};

const showWinner=(Userwin,userid,cchoice)=>{
    if(Userwin){
        
        msg.innerText=`You Win! Your ${userid} beats ${cchoice}`;
        msg.style.backgroundColor="green"    
    }
    else
        {
            msg.innerText=`You lost ${cchoice} beats your ${userid}`;
            msg.style.backgroundColor="Red" 
        }
}

const drawGame=()=>{
    
    msg.innerText="Game was draw,Play Again!"
    msg.style.backgroundColor="darkslategray"; 
}



