let box=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let turno=true;
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winpattern=[
    [0,1,2],
    [0.3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    ];
    box.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turno)
            {
                box.innerText="O";
                turno=false;
            }
            else{
                box.innerText="X";
                turno=true;
            }
            box.disabled=true; //disables a button if click ones
            checkWinner();
    });
});

const showWinner=(pos)=>{
msg.innerText='Winner is '+pos1;
msgcontainer.classList.remove("hide");

}
    let checkWinner =() => {
        for(let pattern of winpattern ){

            let pos1 = box[pattern[0]].innerText; 
            let pos2=box[pattern[1]].innerText;
            let pos3=box[pattern[2]].innerText;

            if(pos1!="" && pos2!="" && pos3!="")
            {
                if(pos1===pos2 && pos2===pos3)
                {
                    console.log("Winner",pos1);
                    showWinner(pos1);
                }
            }
        }
    };