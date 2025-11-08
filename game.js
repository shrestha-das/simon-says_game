let gameSeq = [];
let userSeq = [];

let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started!");
        started = true;
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },1000);
}

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
    
    let randIndex = Math.floor(Math,random()*3);
    // let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randIndex+1}`)
    btnFlash();
}