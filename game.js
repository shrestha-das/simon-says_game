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

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },150);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userSeq = [];
    // gameSeq = [];

    level++;
    h3.innerText = `Level ${level}`;
    
    let randIndex = Math.floor(Math.random()*3);
    let randNumber = btns[randIndex];
    let randBtn = document.querySelector(`.${randNumber}`)
    console.log(randNumber);

    gameSeq.push(randNumber);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns() {
    // console.log("Current Level: ", level);

    let index = level-1;

    if(userSeq[index]==gameSeq[index]){
        console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 500);
        }       
    }
    else{
        h3.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start again :)`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userNumber = btn.getAttribute("id");
    console.log(userNumber);

    userSeq.push(userNumber);
    console.log(userSeq);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}