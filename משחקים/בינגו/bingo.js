window.onload = function () {
    const player_div = document.createElement('div')
    const player1 = document.createElement('p')
    const player2 = document.createElement('p')
    const title = document.createElement('h1')
    const text = document.createElement('p')// שאלות
    const board_computer = document.createElement('div')
    const board_player = document.createElement('div')
    const container = document.createElement('div')
    const message = document.createElement('p')
    const sum_score = document.createElement('div')
    const sum_error = document.createElement('div')
    const navi = document.createElement('div')
    const fullScreenMessage = document.createElement('div')//מציג את הודעות הסופיות
    const timer = document.createElement('div')
    const start = document.createElement('button')
    const instructions = document.createElement('button')
    const instructions_div = document.createElement('div')
    const instructions_h3 = document.createElement('h3')
    const instructions_p = document.createElement('p')
    const instructions_modal = document.createElement('div')


    let indexQuastion = -1 //אנדקס של המערך המבולגן
    let index
    index_card_computer = 0
    index_card_player = 0
    let score = 320
    let errors = 0
    let correct = true

    timer.className = "timer"
    title.innerHTML = "Bingo"
    title.className = "title"
    board_player.className = "board"
    board_computer.className = "board"
    board_player.id = "board_player"
    board_computer.id = "board_computer"
    container.className = "container"
    sum_score.id = "sum_score"
    player_div.className = "player_div"
    player2.innerHTML = "computer"
    navi.className = "navi"
    text.className = "text"
    start.innerHTML = "Start game"
    instructions.innerHTML = "Instructions"
    instructions_div.className = "instructions_div"
    fullScreenMessage.className = "full-screen-message"
    instructions_modal.className = "instructions_modal"
    fullScreenMessage.style.display = "none"
    instructions_h3.innerHTML = "הוראות משחק"
    instructions_p.className = "instructions_p"



    const answers = [75, 74, 50, 22, 1995, 8849, 28000, 1963, 46, 19, 1969, 17508, 76, 200, 330, 54]; // תשובות
    const arranswers = [75, 74, 50, 22, 1995, 8849, 28000, 1963, 46, 19, 1969, 17508, 76, 200, 330, 54]; // תשובות

    const quastions = [
        "?כמה שנים קיימת מדינת ישראל", "?מה גילו של ביבי נתניהו", "?כמה כוכבים יש על דגל ארצות הברית", "?כמה שחקנים נמצאים בו זמנית על מגרש במשחק כדורגל", "?באיזו שנה היה רצח רבין", "?מהו גובהו של הר האוורסט", "?מהו שטחה של מדינת ישראל", "?באיזו שנה נרצח ג'ון קנדי", "?כמה נשיאים היו לארצות הברית", "?כמה ימים ערכה מלחמת יום הכיפורים"
        , "?באיזו שנה נחת האדם הראשון על הירח", "?כמה איים יש באינדונזיה", " ?כמה קלוריות יש בחציל בנוני", "?מהו אורכו של כביש 6", "?מהו גובהו של מגדל אייפל", "?כמה מדינות יש באפריקה"]
    const arr = [
        "?כמה שנים קיימת מדינת ישראל", "?מה גילו של ביבי נתניהו", "?כמה כוכבים יש על דגל ארצות הברית", "?כמה שחקנים נמצאים בו זמנית על מגרש במשחק כדורגל", "?באיזו שנה היה רצח רבין", "?מהו גובהו של הר האוורסט", "?מהו שטחה של מדינת ישראל", "?באיזו שנה נרצח ג'ון קנדי", "?כמה נשיאים היו לארצות הברית", "?כמה ימים ערכה מלחמת יום הכיפורים"
        , "?באיזו שנה נחת האדם הראשון על הירח", "?כמה איים יש באינדונזיה", " ?כמה קלוריות יש בחציל בנוני", "?מהו אורכו של כביש 6", "?מהו גובהו של מגדל אייפל", "?כמה מדינות יש באפריקה"]



    const winner = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [4, 8, 12, 16], [1, 6, 11, 16], [4, 7, 10, 13]]

    sum_score.innerHTML = `Your score: ${score}`// הצגה פעם ראשונה של הניקוד ההתחלתי
    let coumtdoun
    let timeLeft = 10
    const setTimer = () => {
        if (coumtdoun)
            clearInterval(coumtdoun)
        timeLeft = 10;
        timer.innerHTML = timeLeft;
        timer.classList.remove("red")//
        coumtdoun = setInterval(() => {
            timeLeft--
            timer.innerHTML = timeLeft
            if (timeLeft <= 3) {
                timer.classList.add("red")

            }
            if (timeLeft <= 0) {
                clearInterval(coumtdoun)
                score -= 20
                sum_score.innerHTML = `Your score: ${score}`
                setTimeout(compyuterTurn, 800)

            }
        }, 1000)

    }

    function randomArray(arr) {
        arr.sort(() => Math.random() - 0.5)
    }
    randomArray(arr);

    const functionerror = () => {
        message.innerHTML = ""
    }
    const disableInteraction = () => {
        document.querySelectorAll('.card, button').forEach(element => {
            element.classList.add('disable-interaction');
        });
    }

    const displayFullScreenMessage = (msg) => {//פונ שמציגה את הודעה הסופית
        fullScreenMessage.innerHTML = msg;
        fullScreenMessage.style.display = "flex";

    }
  
    

    const chekwinner = () => {
        let playerWon = false;
        let computerWon = false
        winner.forEach(condition => {

            const [a, b, c, d] = condition

            if (board_player_cards[a - 1].style.backgroundColor === "yellow" &&
                board_player_cards[b - 1].style.backgroundColor === "yellow" &&
                board_player_cards[c - 1].style.backgroundColor === "yellow" &&
                board_player_cards[d - 1].style.backgroundColor === "yellow") {

                board_player_cards[a - 1].style.backgroundColor = "red";
                board_player_cards[b - 1].style.backgroundColor = "red";
                board_player_cards[c - 1].style.backgroundColor = "red";
                board_player_cards[d - 1].style.backgroundColor = "red";
                playerWon = true;

            }

            if (board_coputer_cards[a - 1].style.backgroundColor === "orange" &&
                board_coputer_cards[b - 1].style.backgroundColor === "orange" &&
                board_coputer_cards[c - 1].style.backgroundColor === "orange" &&
                board_coputer_cards[d - 1].style.backgroundColor === "orange") {


                board_coputer_cards[a - 1].style.backgroundColor = "red";
                board_coputer_cards[b - 1].style.backgroundColor = "red";
                board_coputer_cards[c - 1].style.backgroundColor = "red";
                board_coputer_cards[d - 1].style.backgroundColor = "red";


                computerWon = true;
            }
        });

        setTimeout(() => {

            if (computerWon || playerWon) {
                text.innerHTML = ""
                timer.innerHTML = ""
                clearInterval(coumtdoun);

                disableInteraction();

            }

            if (playerWon && computerWon || playerWon) {

                users1.forEach(user => {
                    if (user.name === currentUser1.name && user.password === currentUser1.password) {
                        if (score > user.highScore.Bingo)
                            user.highScore.Bingo = score;
                        user.gamesPlayed.Bingo++;
                    }
                });
    
                localStorage.removeItem("users");
                localStorage.setItem("users", JSON.stringify(users1));


                    displayFullScreenMessage(`You won!!<br>Final score: ${score}<br>Your number of errors: ${errors}`)


                }
                else if (computerWon) {
                    displayFullScreenMessage(`The computer won!! <br>score: ${0}`)
                    disableInteraction();
                }
            }, 1100);

    }
    const compyuterTurn = () => {
        index = quastions.indexOf(arr[indexQuastion]);
        for (let i = 1; i <= 16; i++) {
            let card = document.getElementById(`card${i}`)
            if (card.innerHTML == answers[index]) {
                card.style.backgroundColor = "orange";
                break;
            }
        }
        chekwinner(); // בדיקת מנצח בכל סיבוב
        if (indexQuastion < arr.length - 1) { // בדיקה אם יש שאלות נוספות
            startGame();
        }

    }

    const clickCart = (event) => {
        let card = event.target  //הכרטיס שעליו לחצתי
        index = quastions.indexOf(arr[indexQuastion]); // המיקום של השאלה המוצגת במערך המקורי והתשובה שלה


        if (card.innerHTML == answers[index]) {
            correct = true
            card.style.backgroundColor = "yellow";
        }
        else {

            correct = false
            message.innerHTML = "ERROR!"
            message.style.color = "red"
            // message.style.position = "fixed"
            setTimeout(functionerror, 1000)
            score -= 10;
            errors++
            if (score ===0  || score <0) {
                displayFullScreenMessage(`GAME OVER<br>Final score:  ${score}<br>Your number of errors: ${errors}`)
                text.innerHTML = ""
                timer.innerHTML = ""
                clearInterval(coumtdoun);
                disableInteraction();


            }

            sum_score.innerHTML = `Yore score: ${score}`


        }
        if (correct)
            setTimeout(compyuterTurn, 800)
    }


    const creatcards = (board) => {
        randomArray(arranswers);

        for (let i = 0; i < arranswers.length; i++) {
            const card = document.createElement('div')
            card.innerHTML = arranswers[i];
            if (board === board_player) {
                index_card_player++

                card.id = `cards_player${index_card_player}`
            }

            if (board === board_computer) {
                index_card_computer++
                card.id = `card${index_card_computer}`;

            }
            card.className = "card"
            board.appendChild(card);
            if (board == board_player) {
                card.addEventListener('click', clickCart)
            }

        }

    }
    const startGame = () => {
        indexQuastion++
        text.innerHTML = arr[indexQuastion];
        setTimer();
    }
    const startp = () => {
        timer.innerHTML = ""
        startGame()


    }
    start.addEventListener('click', startp)

    document.body.appendChild(title)
    document.body.appendChild(navi)
    navi.appendChild(timer)
    timer.appendChild(start)
    timer.appendChild(instructions)
    navi.appendChild(sum_score)
    document.body.appendChild(text)
    document.body.appendChild(player_div)
    player_div.appendChild(player1)
    player_div.appendChild(player2)
    document.body.appendChild(container)
    container.appendChild(board_player)
    container.appendChild(board_computer)
    document.body.appendChild(message)
    document.body.appendChild(sum_error)
    document.body.appendChild(fullScreenMessage)
    document.body.appendChild(instructions_modal)
    instructions_modal.appendChild(instructions_div)
    instructions_div.appendChild(instructions_h3)
    instructions_div.appendChild(instructions_p)

    instructions.addEventListener('click', () => { instructions_modal.style.display = "block" })
    window.onclick = function (event) {
        if (event.target == instructions_modal) {
            instructions_modal.style.display = "none";

        }

    };

    creatcards(board_player);
    creatcards(board_computer);

    const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
    const users1 = JSON.parse(localStorage.getItem("users"));
    player1.innerHTML = currentUser1.name

    instructions_p.innerHTML = `${currentUser1.name} היי 
    <br>
    
    לפניך תוצג שאלה, עליך ללחוץ על התשובה המתאימה לה
    <br>
    ❣️שים לב
    <br>
    .בתחילת המשחק מוענקים לך 320 נקודות
    <br>
    .על המסך מוצג טיימר, עליך להספיק לענות תשובה בזמן
    <br>
    ,אם תשובתך אינה נכונה, יופחתו מניקודך 10 נקודות
    <br>
    .במידה ולא הספקתה לענות של התשובה יופחתו מניקודך 20 נקודות 
    <br>
    .תור המחשב: המחשב יסמן את תשובתו 
    <br>
    .תשובה נכונה תודגש
    <br>
    :זכייה
    <br>
    .המנצח, הוא השחקן שבלוחו קיים שורה, עמודה או  אלכסון מודגש
    `

    const board_player_cards = document.querySelectorAll('#board_player .card');
    const board_coputer_cards = document.querySelectorAll('#board_computer .card');



}

