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
    levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },150);
}

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
    
    let randIndex = Math.floor(Math.random()*3);
    let randNumber = btns[randIndex];
    let randBtn = document.querySelector(`.${randNumber}`)
    console.log(randNumber);
    btnFlash(randBtn);
}