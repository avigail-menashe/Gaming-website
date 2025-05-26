
window.onload = function () {
    let numOfCards = document.getElementById("numOfCards");
    let but = document.getElementById("but");
    const cards = document.getElementById("cards");
    const fullScreenMessage = document.createElement('div')//מציג את הודעות הסופיות
    fullScreenMessage.className = "fullScreenMessage"

    let colorArr = [];
    let firstCard, secondCard;
    let sum = 0;
    let sum1=0;

    const startGame = () => {
        clearScreen();
        creatCards();
    };

    const clearScreen = () => {
        num_cards = numOfCards.value;
        if (num_cards <= 1) {
            alert("Please enter a number greater than 1");
            return;
        }
        numOfCards.value = "";
        cards.innerHTML = "";
        sum = 0; // אפס את הניקוד בתחילת משחק חדש
        sum1=0;
        document.getElementById('score').innerText = sum;
    };



    const checkMe = (event) => {
        const clickedCard = event.target;
        if (clickedCard.getAttribute("data-opened") === "true") {
            return; // קלף כבר נלחץ
        }

        if (!firstCard) {
            firstCard = clickedCard;
            firstCard.style.backgroundColor = colorArr[firstCard.id];
            firstCard.setAttribute("data-opened", "true");
        } else if (!secondCard && clickedCard !== firstCard) {
            secondCard = clickedCard;
            secondCard.style.backgroundColor = colorArr[secondCard.id];
            secondCard.setAttribute("data-opened", "true");

            setTimeout(() => {
                if (colorArr[firstCard.id] === colorArr[secondCard.id]) {
                    firstCard.innerText = "😃";
                    secondCard.innerText = "😃";
                    sum += 20;
                    sum1+=20
                    document.getElementById('score').innerText = sum;
                    
                    if (sum1 === num_cards * 20) {
                        users1.forEach(user => {
                            if (user.name === currentUser1.name && user.password === currentUser1.password) {
                                if (sum > user.highScore.memoryGame)
                                    user.highScore.memoryGame = sum;
                                user.gamesPlayed.memoryGame++;
                            }
                        });
                
                        localStorage.removeItem("users");
                        localStorage.setItem("users", JSON.stringify(users1));
                        setTimeout(() => {
                            fullScreenMessage.innerHTML = `you won!!! <br> you number of score: ${sum}`
                            fullScreenMessage.style.display = "flex";
                            container.style.opacity = 0.2;

                        }, 700);
                    }

                } else {


                    sum -= 10;
                    if(sum<=0){
                        sum=0
                    }
                    document.getElementById('score').innerText = sum;
                    firstCard.style.backgroundColor = "#50e3c2";
                    secondCard.style.backgroundColor = "#50e3c2";
                    firstCard.removeAttribute("data-opened");
                    secondCard.removeAttribute("data-opened");
                }
                firstCard = null;
                secondCard = null;
            }, 700);
        }
    };

    // הגרלת צבעים
    function randomColor() {
        let allowed = "ABCDEF0123456789",
            S = "#";

        while (S.length < 7) {
            S += allowed.charAt(Math.floor(Math.random() * 16));
        }
        return S;
    }

    function addColor() {
        colorArr = [];
        let numPairs = num_cards;
        for (let i = 0; i < numPairs; i++) {
            let color = randomColor();
            colorArr.push(color, color);
        }
        colorArr.sort(() => Math.random() - 0.5);
    }

    function creatCards() {
        addColor();
        for (let i = 0; i < num_cards * 2; i++) {
            const newCard = document.createElement("div");
            newCard.innerText = "😶";
            newCard.classList.add("card");
            newCard.id = i;
            newCard.style.backgroundColor = "#50e3c2";
            newCard.setAttribute("data-opened", "false");
            newCard.addEventListener("click", checkMe);

            cards.appendChild(newCard);
        }
    }

    but.addEventListener("click", startGame);
    document.body.appendChild(fullScreenMessage);

    
    const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
    const users1 = JSON.parse(localStorage.getItem("users"));
    // זה ההוצאה של הנתונים מה localstoriage
}