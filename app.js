let boxes = document.querySelectorAll(".box")

let resetBtn =  document.querySelector(".reset")

let newGamebtn = document.querySelector(".new")

let msgContainer = document.querySelector(".msg-container")

let msg = document.querySelector("#msg")

let turnO = true

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

const resetGame = () => {
    turnO = true
    enabledBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "X"
            turnO = false
        }
        else{
            box.innerText = "O"
            turnO = true
        }
        box.disabled = true

        checkWinner()
    })
});

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled =true
    }
}  

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled =false
        box.innerText = ""
    }
}  

const showWinner = (winner) => {
    msg.innerText = `Congratulations, The winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledBoxes()
}

const checkWinner =() => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText     
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1)
                showWinner(pos1)
            }
        }

    }
}

newGamebtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)