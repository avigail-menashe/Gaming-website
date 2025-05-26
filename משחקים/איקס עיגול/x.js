window.onload=function(){


    let two_players = document.getElementById('but2');
    let single_player = document.getElementById('but1');
    let gameButtons = document.getElementById('game-buttons');
    const but_end=document.createElement('button')
    const fullScreenMessage = document.createElement('div');
    const messageText = document.createElement('p');
    const title1=document.createElement('h1')
    const title2 = document.createElement('h3');
    const container_title=document.createElement('div')
    fullScreenMessage.className = 'fullscreen-message';
    but_end.className = 'end-button';
    but_end.textContent = "Finish the game";
    container_title.className='container_title'
    title1.className='title1'
    title2.className='title2'

    title1.innerHTML="TIC Tac Toe"
    title2.innerHTML="Choose how you want to play -"
     
    let x = true; // true = תור השחקן X, false = תור המחשב O
    let s = 0;   //סכום לחיצות
    
   
    let btns = document.querySelectorAll(".btn");
    let winText = document.getElementById('wintext');
    const sum_o = document.getElementById('V')
    const sum_x= document.getElementById('X');
    let gameStarted = false;

     sum_x.innerHTML=0
     sum_o.innerHTML=0


but_end.addEventListener('click',()=>{
    let player
    if(sum_x.innerHTML> sum_o.innerHTML){
        player='its you'

    users1.forEach(user => {
        if (user.name === currentUser1.name && user.password === currentUser1.password) {
            if (sum_x.innerHTML > user.highScore.ticTacToe)
                user.highScore.ticTacToe = sum_x.innerHTML;
            user.gamesPlayed.ticTacToe++;
        }
    });

    localStorage.removeItem("users");
    localStorage.setItem("users", JSON.stringify(users1));
}

     else if(sum_x.innerHTML< sum_o.innerHTML)

        player='o'
     else   
       player='Teko'
     messageText.innerHTML = `The winning player ${player}! <br><br>Score X: ${sum_x.innerHTML} <br> Score O: ${sum_o.innerHTML }`;
     disableInteraction();
    fullScreenMessage.style.display = "flex";
    

})

    two_players.addEventListener('click', () => {
        gameStarted = true;
        twoPlayers();
        gameButtons.style.display = 'none';
        title2.style.display='none'
    });
    
    single_player.addEventListener('click', () => {
        gameStarted = true;
        singlePlayer();
        gameButtons.style.display = 'none';
        title2.style.display='none'
    });

function twoPlayers(){//שתי שחקנים

    btns.forEach(b => {
        b.addEventListener("click", btnClick);
     });
function btnClick() {
   if (this.textContent != "") return;
   s++;

   if (x) this.textContent = "X";
   else this.textContent = "O";
   f1()
}
 checkWin() 
 resetBoard() 

}


function singlePlayer(){        //שחקן לבד  

    btns.forEach(b => {
        b.addEventListener("click", btnClick);
     });
function btnClick() {
   if (this.textContent != "" || !x) return;  //אם הכפתור מלא וזה לא השחקן איקס יוצר מהפונ
   s++;

   this.textContent = "X"; 
   f1() 

   if (!checkWin().win && !checkWin().isTie) {

   setTimeout(computerMove, 500); // מחכה קצת להפעלת שחקן המחשב
   }
}

function computerMove() { // פונקציה שמביאה את המחשב לבצע מהלך אוטומטי

   let emptyBtns = Array.from(btns).filter(btn => btn.textContent === ""); // מציאת הכפתורים הריקים
   if (emptyBtns.length === 0) return;                                     // אם אין כפתורים ריקים, יצא מהפונקציה

   let randomIndex = Math.floor(Math.random() * emptyBtns.length);         // בחירת כפתור רנדומלי
   emptyBtns[randomIndex].textContent = "O"; 
   s++; 
   f1() 
}

checkWin() 
 resetBoard() 

}





function f1() { // פונקציה שמחזירה (אם) מי ניצח וצובעת את השורה
    let obj = checkWin(); 

    if (obj.win) { // צובעת באדום את המערך שחזר
        obj.pos.forEach(p => {
            btns[p].style.color = "red";
        });

        setTimeout(() => {
            if (x) {
                winText.innerHTML = `the X player wins!`;
                winText.style.color="#fff"
                sum_x.innerHTML  ++;
                setTimeout(() => {// כדי שלא ישאר לאורך כל המשחק winText מוחק את 
                    winText.innerHTML=""
                }, 1000);
            } else {
                winText.innerHTML = `the O player wins!`;
                winText.style.color="#fff"
                sum_o.innerHTML ++;
                setTimeout(() => {
                    winText.innerHTML=""
                }, 1000);
            }
            resetBoard();
        }, 700);

    } 
    else if (obj.isTie) {
        setTimeout(() => {
            winText.innerHTML = `It's a Tie 🙄!`;
            winText.style.color="#fff"

            setTimeout(() => {
                winText.innerHTML=""
            }, 1000);
            resetBoard();
           
        }, 700);

    } else {
        // העברת התור לשחקן הבא
        x = !x;
    }
}
function checkWin() 
{
   let btns = document.querySelectorAll(".btn"); 
   if (btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent && btns[2].textContent != "")
       return { win: true, isTie: false, pos: [0, 1, 2] };
   if (btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent && btns[5].textContent != "")
       return { win: true, isTie: false, pos: [3, 4, 5] };
   if (btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent && btns[8].textContent != "")
       return { win: true, isTie: false, pos: [6, 7, 8] };
   if (btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent && btns[6].textContent != "")
       return { win: true, isTie: false, pos: [0, 3, 6] };
   if (btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent && btns[7].textContent != "")
       return { win: true, isTie: false, pos: [1, 4, 7] };
   if (btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent && btns[8].textContent != "")
       return { win: true, isTie: false, pos: [2, 5, 8] };
   if (btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent && btns[8].textContent != "")
       return { win: true, isTie: false, pos: [0, 4, 8] };
   if (btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent && btns[6].textContent != "")
       return { win: true, isTie: false, pos: [2, 4, 6] };
   // בדיקת תיקו
   if (s == 9)
       return { win: false, isTie: true, pos: [] };
   return { win: false, isTie: false, pos: [] };
}
const disableInteraction = () => {
    btns.forEach(button => {
        button.classList.add('disable-interaction'); // מוסיף את ה-class שמונע אינטראקציה
    });
};
function resetBoard() {
    btns.forEach(b => {
        b.textContent = ""; // איפוס התוכן של כל הכפתורים
        b.style.color = ""; // איפוס הצבע של כל הכפתורים
    });
    s = 0; // איפוס מונה הצעדים
    x = true; // התחלת התור מחדש עם השחקן X

   
 }
 document.body.appendChild(container_title)
 container_title.appendChild(title1)
 container_title.appendChild(title2)
 document.body.appendChild(but_end)
 document.body.appendChild(fullScreenMessage);
 fullScreenMessage.appendChild(messageText);

 
 const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
 const users1 = JSON.parse(localStorage.getItem("users"));
 // זה ההוצאה של הנתונים מה localstoriage

}

 