window.onload = function () {
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////////טופס הרשמה/התחברות//////////////////////////



    let nameU = document.getElementById("p")
    let signup = document.getElementById("signup")
    signup.className = "signup-login"

    let modal = document.createElement('div');
    modal.id = "myModal";
    modal.className = "modal";
    document.body.appendChild(modal);

    let modalContent = document.createElement('div');
    modalContent.className = "modal-content";
    modal.appendChild(modalContent);

    nameU.style.fontSize="20px"
    // nameU.style.marginLeft="40px"



    // הגדרת משתנים
    let container = document.createElement('div');
    let form = document.createElement('form');
    let title = document.createElement('h1');
    let signUpBtn = document.createElement('button');
    let logInBtn = document.createElement('button');
    let div = document.createElement('div');


    signUpBtn.innerHTML = "Sign up"; //הרשמה
    logInBtn.innerHTML = "Log in"; //התחברות

    //הוספת class לתגיות
    container.className = "container";
    div.className = "successOrNot";
    logInBtn.className = "logInBtn";
    title.innerHTML = "הרשמה / התחברות";

    nameU.addEventListener('click', function () {
        window.location.href = "משחקים/פרופיל/profile.html"
    })


    // הוספת משתמש חדש
    signUpBtn.addEventListener('click', function () {

        let isSignUp = false;
        const newusers = JSON.parse(localStorage.getItem("users"));

        const name = userName.value;
        const pas = userPassword.value;
        newusers.forEach(user => {
            if (user.name === name && user.password === pas) {
                div.innerHTML = `AUser ${name} exists in the system. Click on 'login' to enter the website.`
                isSignUp = true;
            }
        })
        if (isSignUp === false && name !== "" && pas !== "") {
            div.innerHTML = "";
            const user = {
                "name": name,
                "password": pas,
                "highScore": { "memoryGame": 0, "ticTacToe": 0, "Guess": 0, "Paint": 0, "Bingo": 0, "WordsGame": 0 },
                "gamesPlayed": { "memoryGame": 0, "ticTacToe": 0, "Guess": 0, "Paint": 0, "Bingo": 0, "WordsGame": 0 },
                "lastGame": { "memoryGame": 0, "ticTacToe": 0, "Guess": 0, "Paint": 0, "Bingo": 0, "WordsGame": 0 }
            }
            newusers.push(user);
            localStorage.removeItem("users");   // מחיקת ה users מה localStorage
            localStorage.setItem("users", JSON.stringify(newusers));
            div.innerHTML="You have successfully registered. Click on 'login"
        }
        if (name === "" || pas === "")
            div.innerHTML = "Enter username and password."
    })
    // התחברות
    logInBtn.addEventListener('click', function () {
        let connected = false;
        const name = userName.value;
        const pas = userPassword.value;
        const newusers = JSON.parse(localStorage.getItem("users"));
        newusers.forEach(user => {
            if (user.name === name && user.password === pas) {
                div.innerHTML = `Hello ${name}`;
                connected = true;
                const currentUser =
                {
                    "name": name,
                    "password": pas
                }
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                modalContent.innerHTML = `<img src="./משחקים/תמונות/Iridicent\ word.gif" class="loding"></img>`
                setTimeout(function () { modal.style.display = "none"; }, 1000);
                nameU.innerHTML = `user: ${name}`;
            }
        })
        if (connected === false) {
            div.innerHTML = `Username or password incorrect`;
        }
        if (name === "" || pas === "")
            div.innerHTML = "Enter username and password.";
    })
    const users = [];

    if(!localStorage.getItem("users"))
        {
            // localStorage.setItem("UserIsLoggedIn",JSON.stringify(UserIsLoggedIn));
            localStorage.setItem("users", JSON.stringify(users));
        }

    // הגדרות אינפוט
    let input;
    const setAttributeFunction = (id, type, placeholder) => {
        input = document.createElement('input');
        form.appendChild(input);
        input.setAttribute('id', id);
        input.setAttribute('type', type);
        input.setAttribute('placeholder', placeholder);
        input.setAttribute('required', "required");
        return input;
    }
    const userName = setAttributeFunction("userNameInput", "text", "user name");
    const userPassword = setAttributeFunction("userPasswordInput", "password", "user password");

    userName.addEventListener('focus', function () { userName.style.border = "solid #50e3c2 4px"; });
    userName.addEventListener('blur', function () { userName.style.border = ""; });
    userPassword.addEventListener('focus', function () { userPassword.style.border = "solid #50e3c2 4px" });
    userPassword.addEventListener('blur', function () { userPassword.style.border = ""; });

    //התנתקות
    const users1 = JSON.parse(localStorage.getItem("users"));
    const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
    const disconnection = document.getElementById('disconnection')
    disconnection.addEventListener('click', () => {
        if (currentUser1.name === "")
            return;
        const arr = users1.filter(user => user.name !== currentUser1.name && user.password !== currentUser1.password);
      
        currentUser1.name = ""
        currentUser1.password = ""
        localStorage.setItem("users", JSON.stringify(arr))
        localStorage.setItem("currentUser", JSON.stringify(currentUser1))

        setTimeout(() => {
            nameU.innerHTML = "User removed successfully"
        }, 2000);

    })



    userName.className = "userNameInput";
    userPassword.className = "userPasswordInput";


    // הוספת התגיות למקום המתאים
    modalContent.appendChild(container);
    container.appendChild(title);
    container.appendChild(form);
    container.appendChild(signUpBtn);
    container.appendChild(logInBtn);
    container.appendChild(div);

    // הפעלת החלון הקופץ
    let modalLink = document.querySelector('.signup-login'); // עדכון המחלקה לקישור
    modalLink.onclick = function () {
        modal.style.display = "block";
    };


    ////////////////////////////////////////////////////////////
    ///////////////////chat////////////////////////////////////
    
    const wrapper = document.createElement('div');
    const container2 = document.createElement('div');
    const divHi = document.createElement('div');
    const write = document.createElement('div');
    const textInput = document.createElement('input');
    const sendBtn = document.createElement('button');

    let modal_chat = document.createElement('div');
    modal_chat.id = "myModalChat";
    modal_chat.className = "modal_chat";
    document.body.appendChild(modal_chat);
    let modalContentChat = document.createElement('div');
    modalContentChat.className = "modal-content-chat";
    modal_chat.appendChild(modalContentChat);
    divHi.className = "divHi";
    divHi.innerHTML = "Hi!";

    container2.className = "container2";
    write.className = "write";
    wrapper.className = "wrapper";
    sendBtn.innerHTML = "send";

    const createMessage = (message, isBot) => {
        const div = document.createElement('div');
        div.className = `divMessage ${isBot ? 'bot' : 'user'}`;
        div.innerHTML = message;
        container2.insertBefore(div, container2.firstChild);
    }

    const sendMessage = () => {
        if (textInput.value === "") return;

        const userMessage = textInput.value;
        createMessage(userMessage, false); // הצגת הודעת המשתמש

        textInput.value = "";

        setTimeout(() => {
            const response = getBotResponse(userMessage); // קבלת התגובה מהבוט
            createMessage(response, true); // הצגת התגובה מהבוט
        }, 1000); // עיכוב של שנייה לפני הצגת התשובה
    }

    const getBotResponse = (userMessage) => {
        const questions = ["תודה","אתה גבר","אני אוהת אותך","אין עליך","אני אוהבת אותך","ביי","טוב","למה?","למה פיתחו אותך?","מצוין","איך אתה?","מה קורה?","איך משחקים?","איך קוראים לך?","מי פיתח אותך?"];
        const answers = ["באהבה❣️","😉","😘","💖","❤️","להתראות, שמחתי לעזור, אל תהסס לפנות אלי שוב אם אתה צריך עזרה.","בכיף, אם אתה צריך עזרה אני פה בשבילך.","למה מה❓","אביגיל היתה צריכה להגיש פרוייקט לכן היא המציאה אותי","אני שמח😁." ,"אין לי רגשות,איך אתה מרגיש?","הכל קורה😏.","תלחץ על איזה משחק שאתה רוצה ותפעל לפי ההוראות.","אין לי שם, אני רובוט.","  אביגיל מנשה התותחית!!!!!!058-320-9848"];

        for (let i = 0; i < questions.length; i++) {
            if (userMessage.includes(questions[i])) {
                return answers[i];
            }
        }
        return "לא הבנתי את השאלה שלך."; // ברירת מחדל
    }

    sendBtn.addEventListener('click', sendMessage);
    textInput.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // הפעלת החלון הקופץ
    let modalLinkChat = document.querySelector('.img'); // עדכון המחלקה לקישור
    modalLinkChat.onclick = function () {
        modal_chat.style.display = "block";
    };
    window.onclick = function (event) {
        if (event.target == modal_chat) {
            modal_chat.style.display = "none";
        }
    };

    modalContentChat.appendChild(wrapper);
    wrapper.appendChild(container2);
    container2.appendChild(divHi);
    wrapper.appendChild(write);
    write.appendChild(sendBtn); 
     write.appendChild(textInput);
}
   

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////התנתקות////////////////////////////////////////////