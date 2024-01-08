let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetBtn");
let newButton = document.querySelector("#newBtn");
let message = document.querySelector("#msg");
let winnerContent = document.querySelector(".container1");


let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let count = 0;
boxes.forEach ((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.style.color = "#ffb703";
            box.innerText = "O";
            turnO = false;
        }else{
            box.style.color = "#fb8500";
            box.innerText = "X";
            turnO = true;
        }
        count++;
        box.disabled = true;
        checkWinner();    
    })
})

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    winnerContent.classList.add("hide");
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!=="" && pos2val!=="" && pos3val!==""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }else if(count==9){
                showDraw();
            }
        }
   
    }
}

const showWinner = (winner)=>{
    message.innerText = `Congratulations! Winner is Player ${winner}`;
    winnerContent.classList.remove("hide");
    disableBoxes();
    count = 0;
}

const showDraw = ()=>{
    message.innerText = `The game ends in a draw!`;
    winnerContent.classList.remove("hide");
    disableBoxes();
    count = 0;
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

