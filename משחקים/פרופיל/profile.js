window.onload = function()
{
    let profileCircle = document.createElement('div');
    let pName = document.createElement('p');
    let container = document.createElement('div');
    let table = document.createElement('table');

    const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
    const users1 = JSON.parse(localStorage.getItem("users"));
    const achievements = [
        { "NameOfTheGame": "Memmory game", "gamesPlayed": 15, "highScore": 1200, "lastPlayed": '01-08-2024' },
        { "NameOfTheGame": "Tic Tac Toe", "gamesPlayed": 20, "highScore": 1100, "lastPlayed": '30-07-2024' },
        { "NameOfTheGame": "Guess", "gamesPlayed": 25, "highScore": 1300, "lastPlayed": '02-08-2024' },
        { "NameOfTheGame": "Bingo", "gamesPlayed": 25, "highScore": 1300, "lastPlayed": '02-08-2024' },
        { "NameOfTheGame": "WordsGame", "gamesPlayed": 25, "highScore": 1300, "lastPlayed": '02-08-2024' }
    ];

    const user = users1.find(user=> user.name === currentUser1.name && user.password === currentUser1.password)
    achievements.forEach(achievement=>{
        const gameName = achievement.NameOfTheGame;
        let key;
        switch(gameName) {
            case "Memmory game":
                key = "memoryGame";
                break;
            case "Tic Tac Toe":
                key = "ticTacToe";
                break;
            case "Guess":
                key = "Guess";
                break;
            case "Bingo":
                key = "Bingo";
                break;
            case "WordsGame":
                key = "WordsGame";
                break;
        }
        achievement.gamesPlayed = user.gamesPlayed[key];
        achievement.highScore = user.highScore[key];
        achievement.lastPlayed = user.lastGame;
    })


    
    // יצירת כותרות הטבלה
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Name of the game', 'Games Played', 'High Score', 'Last Played'];
    headers.forEach(title => {
        const th = document.createElement('th');
        th.innerHTML = title;
        headerRow.appendChild(th);
    });

    

    // יצירת גוף הטבלה
    const tbody = document.createElement('tbody');

    //הכנסת הנתונים לטבלה
    achievements.forEach(achievement => {
        const row = document.createElement('tr');

        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        td1.innerHTML = achievement.NameOfTheGame;
        td2.innerHTML = achievement.gamesPlayed;
        td3.innerHTML = achievement.highScore;
        td4.innerHTML = achievement.lastPlayed;
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        tbody.appendChild(row);
    });


    profileCircle.className = "profileCircle";
    pName.className = "pName";
    container.className = "container";

    const firstLetter = currentUser1.name.charAt(0);
    profileCircle.innerHTML = firstLetter.toUpperCase();
    pName.innerHTML = currentUser1.name;

    document.body.appendChild(profileCircle);
    document.body.appendChild(pName);
    document.body.appendChild(container);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
}