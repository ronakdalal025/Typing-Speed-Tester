const api = "https://baconipsum.com/api/?type=all-meat&paras=2&format=text";

let typingBox = document.querySelector(".typingBox");
let timer = document.querySelector(".timer");
let score = document.querySelector("#speed");
let highestScore = document.querySelector("#highest");
let btn = document.querySelector("button");
let caretIndex = 0;
let charArr =[];
let time = 60;
let timerID = null;
let gameOver = false;

async function getPara(){
    let res = await axios.get(api);
    return res.data;
}

window.addEventListener("load",async ()=>{
    let text = await getPara();
    typingBox.textContent = text;
    let highest = localStorage.getItem("highestScore") || 0;
    highestScore.innerHTML = `<b>Highest Speed</b>: ${highest} Words Per Minute`;
});

typingBox.addEventListener("beforeinput",(e)=>{
    e.preventDefault();
})
typingBox.addEventListener("keydown",(e)=>{
    if(gameOver) return;
    if(timerID === null && time >= 0){
        timerID = setInterval(()=>{
            if(time <= 0){
                displayScore();
                gameOver = true;
                clearInterval(timerID);
                timerID = null;
                return;
            }
            time--;
            timer.innerHTML = `<b>Remaining Time</b></br><b>00:${time}</b>`;
        },1000);
    }

    let key = e.key;
    console.log(e.key);
    if(key === "Backspace"){
        if(caretIndex > 0){
            charArr.splice(caretIndex - 1,1);
            caretIndex--;
        }
    }
    else if(key === "Delete"){
        if(caretIndex > 0){
            charArr.splice(caretIndex,1);
            caretIndex--;
        }
    }
    else if(key === "ArrowLeft"){
        if(caretIndex > 0) caretIndex--;
    }
    else if(key === "ArrowRight"){
        if(caretIndex < charArr.length) caretIndex++;
    }
    else if(key.length === 1){
        charArr.splice(caretIndex,0,key);
        caretIndex++;
    }
    renderText(charArr,caretIndex);
});

function renderText(charArr,caretIndex){
    let higlighted_char = "";
    let charPara = typingBox.textContent.replace("  "," ").split("");

    for(let i=0;i<charPara.length;i++){
        let expectedC = charPara[i];
        let typedC = charArr[i];

        if (i === caretIndex) {
            higlighted_char += `<span class="caret"></span>`;
        }

        if(typedC === undefined){
            higlighted_char += `${expectedC}`;
        }
        else if(typedC === expectedC){
            higlighted_char += `<span class="correct">${expectedC}</span>`;
        }
        else{
            higlighted_char += `<span class="incorrect">${expectedC}</span>`;
        }
    }

    if(caretIndex >= charPara.length){
        higlighted_char += `<span class="caret"></span>`;
    }
    typingBox.innerHTML = higlighted_char;
};

function displayScore(){
    let typedText = charArr.join("");
    let typedWords = typedText.split(" ");
    score.innerHTML = `<b>Speed</b> : ${typedWords.length} Words Per Minute`;

    let highest = parseInt(localStorage.getItem("highestScore") || 0);
    if(typedWords.length > highest){
        localStorage.setItem('highestScore',typedWords.length);
        highestScore.innerHTML = `<b>Highest Speed</b> : ${typedWords.length} Words Per Minute`;
    }
    else{
        highestScore.innerHTML = `<b>Highest Speed</b> : ${highest} Words Per Minute`;
    }
}

btn.addEventListener("click", async ()=>{
    // reseting text;
    let text = await getPara();
    typingBox.textContent = text;

    // start the time again
    timer.innerHTML = "<b>Remaining Time</b> <br> <b>00:60</b>";
    clearInterval(timerID);
    caretIndex = 0;
    charArr =[];
    time = 60;
    timerID = null;
    gameOver = false;

    //reset spped calculated
    score.innerHTML = `<b>Speed</b> : __ Words Per Minute`;
})