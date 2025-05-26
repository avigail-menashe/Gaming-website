window.onload = function () {
    const userInput = document.getElementById('user-input');
    const copyText = document.getElementById('copy_text');
    const textElement = document.getElementById('text');
    const fullScreenMessage = document.createElement('div')//מציג את הודעות הסופיות

    fullScreenMessage.className = "full-screen-message"
    fullScreenMessage.style.display = "none"
    document.body.appendChild(fullScreenMessage); // הוספת האלמנט ל-DOM בהתחלה

    const v = document.getElementById('V')
    const x = document.getElementById('X');
    x.innerHTML = 0
    v.innerHTML = 0
    let score = 100;
    document.getElementById('score').innerText = score;


    let currentIndex = 0;
     const arrWord = ["Believe you can and you're halfway there.", "Love conquers all, always together.", "Every sunset brings the promise of a new dawn.", "Happiness is not by chance, but by choice.", "In the middle of difficulty lies opportunity.",];
    // const arrWord = ["123", "456", "789"];
    let text = arrWord[currentIndex]; // הטקסט הנוכחי להקלדה

    textElement.innerText = text;
    textElement.style.color = "#fff";

    const displayFullScreenMessage = (msg) => {//פונ שמציגה את הודעה הסופית
        fullScreenMessage.innerHTML = msg;
        fullScreenMessage.style.display = "flex";

    }
    const disableInteraction = () => {
        document.querySelector("#user-input").classList.add('disable-interaction');
    };

    userInput.addEventListener('input', (event) => {
        const inputText = event.target.value; // לוקח את מה שהמשתמש הקליד
        copyText.innerHTML = '';

        let correct = 0;
        let error = 0;

        //  בדוק אם יש שגיעה שלא תוקנה
        if (inputText.length > text.length) {

            userInput.value = '';
            x.innerHTML++
            score -= 10
            if (score <= 0)
                score = 0
            document.getElementById('score').innerText = score;

        }


        for (let i = 0; i < inputText.length; i++) {
            const span = document.createElement('span');
            span.innerText = inputText[i];

            if (i < text.length && inputText[i] === text[i]) {
                span.classList.add('yes');
                correct++;
            } else {
                span.classList.add('no');
                error++;
            }

            copyText.appendChild(span);

        }

        // בדוק אם כל התווים נכונים
        if (correct === text.length) {
            currentIndex++;



            if (currentIndex < arrWord.length) {
                text = arrWord[currentIndex];
                textElement.innerText = text;   // המילה הבאה להקלדה
                userInput.value = '';
                v.innerHTML++
            }

            else {
                textElement.innerHTML = "Congratulations! You finished all words.";
                userInput.value = '';
                setTimeout(() => {

                    disableInteraction()
                    checwon()
                }, 500);

            }

        }

        // הצג את התוצאות
        end(correct, error);


    });

    function end(correct, error) {

        endSpan.classList.add('result');
        endSpan.innerText = `Correct:  ${correct}  Errors:${error}`;

        copyText.appendChild(endSpan);

    }
    function checwon() {

        if (v.innerHTML >= x.innerHTML) {
            users1.forEach(user => {
                if (user.name === currentUser1.name && user.password === currentUser1.password) {
                    if (score > user.highScore.WordsGame)
                        user.highScore.WordsGame = score;
                    user.gamesPlayed.WordsGame++;
                }
            });

            localStorage.removeItem("users");
            localStorage.setItem("users", JSON.stringify(users1));

            displayFullScreenMessage(`you won !! <br> Your score: ${score}`)
        }
        else
            // document.getElementById('score').innerText = 0;
            displayFullScreenMessage(`you didn't won. <br> Your score: ${0}`)
        copyText.innerHTML = '';
        copyText.innerHTML = ''
        x.innerHTML = 0
        v.innerHTML = 0
        currentIndex = 0;
        text = arrWord[currentIndex]; // הטקסט הנוכחי להקלדה

        textElement.innerText = text;
        document.body.appendChild(fullScreenMessage)
    }
    const endSpan = document.createElement('div');



    const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
    const users1 = JSON.parse(localStorage.getItem("users"));
    // זה ההוצאה של הנתונים מה localstoriage

}







