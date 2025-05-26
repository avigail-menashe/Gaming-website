let x
let sum=0
let but=document.getElementById("but")
let score=100;
const fullScreenMessage = document.createElement('div')//מציג את הודעות הסופיות
fullScreenMessage.className = "fullScreenMessage"
window.onload=function(){

     x =parseInt(Math.random()*100)
}
document.getElementById('score').innerText = score;

const disableInteraction = () => {
    document.querySelector("#inp").classList.add('disable-interaction');
    document.querySelector("#but").classList.add('disable-interaction');
};
function input(){
    let y=document.querySelector("#inp").value
    let p= document.querySelector("#p")
    let p1= document.querySelector("#p1")
    let gameElement = document.querySelector("#experience");


    if (y === "") {
        p1.innerHTML = "Please enter a number.";
        return;
    }

    p1.innerHTML=""

    if(x!=y){ // אם מצאתה את המספר הנכון אל תוסיף ניקוד
    sum++
    }
       
    if(x == y)
    {
        p.innerHTML="Excelent!!!!😁🎉"
        disableInteraction();
        users1.forEach(user => {
            if (user.name === currentUser1.name && user.password === currentUser1.password) {
                if (score > user.highScore.Guess)
                    user.highScore.Guess = score;
                user.gamesPlayed.Guess++;
            }
        });

        localStorage.removeItem("users");
        localStorage.setItem("users", JSON.stringify(users1));

        setTimeout(()=>{
            fullScreenMessage.innerHTML = `You won!!<br>Youre score: ${score}<br>Your number of attempts are: ${sum}`;  
            fullScreenMessage.style.display = "flex"; // הצגת ההודעה
        
        },700)
        return ;


    }
    else if(x > y)
    {
    p.innerHTML="the number id bigger."
    score-=10
    if(score <= 0){
        fullScreenMessage.innerHTML=`Game over`
        fullScreenMessage.style.display = "flex"; // הצגת ההודעה

    }
    document.getElementById('score').innerText = score;

    
    }
    else
    {
        p.innerHTML="the number id smaller."
        score-=10
        if(score<=0){
        fullScreenMessage.innerHTML=`Game over`
        fullScreenMessage.style.display = "flex"; // הצגת ההודעה
        disableInteraction();
        }
    document.getElementById('score').innerText = score;
    }
    setTimeout(() => {
    document.querySelector("#inp").value=""
    
},800);

setTimeout(() => {
    p.innerHTML=""
    p1.innerHTML="enter egain"
},900);
}
    but.addEventListener("click", input);
    document.addEventListener("keydown", function(event){
        if(event.key==="Enter")
            input()

    });
   
    

    document.body.appendChild(fullScreenMessage);
    
    const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
    const users1 = JSON.parse(localStorage.getItem("users"));
    // זה ההוצאה של הנתונים מה localstoriage


