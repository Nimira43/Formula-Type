const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
    'farina',
    'fangio',
    'ascari',
    'moss',
    'hawthorn',
    'brabham',
    'hill',
    'clark',
    'surtees',
    'hulme',
    'rindt',
    'stewart',
    'lauda',
    'fittipaldi',
    'hunt',
    'andretti',
    'scheckter',
    'jones',
    'piquet',
    'rosberg',
    'prost',
    'senna',
    'schumacher',
    'hakkinen',
    'villeneuve',
    'alonso',
    'raikkonen',
    'hamilton',
    'vettel',
    'verstappen',
    'button',
    'coulthard',
    'reutemann',
    'massa',
    'barrichello',
    'peterson',
    'berger',
    'ricciardo',
    'montoya',
    'bottas',
    'webber',
    'ickx',
    'arnoux',
    'brooks',
    'laffite',
    'patrese',
    'regazzoni',
    'watson',
    'alboreto',
    'leclerc',
    'trintignant',
    'fisichella',
    'rodriguez',
    'jabouille',
    'depailler',
    'baghetti',
    'scarfiotti',
    'brambilla',
    'nannini',
    'kovalainen',
    'maldonado',
    'ferrari',
    'williams',
    'mercedes',
    'lotus',
    'brabham',
    'renault',
    'honda',
    'mclaren',
    'haas',
    'goodyear',
    'pirelli',
    'bridgestone',
    'brundle',
    'silverstone',
    'monaco',
    'monza',
    'suzuka',
    'spa',
    'estoril',
    'jerez',
    'catalunya',
    'imola',
    'patrese',
    'ford',
    'cooper',
    'vanwall',
    'maserati',
    'minardi',
    'osella',
    'dallara',
    'eurobrun',
    'coloni',
    'murray',
    'pole',
    'lando',
    'norris',
    'russell',
    'albon',
    'gasly',
    'ocon',
    'lenny',
    'concorde',
    'homologation',
    'postlethwaite',
    'constructors',
    'aerodynamics',
    'autoclave',
    'backmarker',
    'bargeboard',
    'degradation',
    'delta',
    'downforce',
    'monocoque',
    'oversteer',
    'understeer',
    'pits',
    'powertrain',
    'scrutineering',
    'slipstreaming',
    'torque',
    'traction',
    'telemetry',
    'sidepod',
    'marbles',
    'graining',
    'paddock',
    'turbulence',
    'turbocharger',
    'tyres',
    'wheelbase',
    'camber',
    'yaw'
];    

let randomWord;
let score = 0;
let time = 10;
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

text.focus();
const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    endgameEl.innerHTML = `
        <h1>OUT OF TIME</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Try Again?</button>
    `;
    endgameEl.style.display = 'flex';
} 

addWordToDOM();

text.addEventListener('input', e => {
    const insertedText = e.target.value;
    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        e.target.value = '';

        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 4; 
        } else {
            time += 6;
        }
        updateTime();
    }
});

settingsBtn.addEventListener('click', () =>
settings.classList.toggle('hide'));    

settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});
