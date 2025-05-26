

    document.addEventListener('DOMContentLoaded', function () {
        // יצירת אלמנטים
        const body = document.body;
        const container1 = document.createElement('div');
        container1.className = 'container1';


        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const image = document.createElement('img');
        image.src = "../תמונות/3\ נקודות.gif";
        image.alt = 'תמונה';
        image.className = 'image';


        const links = document.createElement('div');
        links.className = 'links';


        const tooltip = document.getElementById('tooltip');



        const linksArray = [
            { href: '../../HOME.html', text: 'HOME' },
            { href: '../פרופיל/profile.html', text: 'PROFILE' },
            { href: '../בינגו/bingo.html', text: 'Bingo' },
            { href: '../משחק זיכרון אביגיל מנשה/MeMoryGame.html', text: 'Memory game' },
            { href: '../נחש את המספר/gues.html', text: 'Guass the number' },
            { href: '../איקס עיגול/x.html', text: 'Tic Tac Tuc' },
            { href: '../מישחק מילים/index.html', text: 'Words game' },
            { href: '../צייר/paint.html', text: 'Painter' }
        ];

        linksArray.forEach(linkInfo => {
            const link = document.createElement('a');
            link.href = linkInfo.href;
            link.textContent = linkInfo.text;
            if (linkInfo === 1) {
                link.classList.add('link-separator'); 
            }
            links.appendChild(link);
        });


        // הוספת אלמנטים ל-DOM
        imageContainer.appendChild(image);
        imageContainer.appendChild(links);
        container1.appendChild(imageContainer);
        body.appendChild(container1);
    });

