// Global State
let selectedEdition = 'biblica'; // 'biblica' or 'general'
let numTeams = 2;
let teamNames = [];
let scores = [];
let timerInterval = null;
let timeLeft = 30;
let currentRound = 1;
let currentQuestion = null;
let currentCategoryIndex = -1;
let currentQuestionIndex = -1;

let currentTurn = 0;
// Tracks which powerups each team has USED (true = used)
let teamPowerUps = [];
// Pending powerups clicked before selecting a question
let pendingPowerUps = { double: false, shield: false };
// Tracks which powerups are active for the CURRENT question
let activePowerUps = { double: false, shield: false };

let playedCards = [];

function selectEdition(editionKey) {
    selectedEdition = editionKey;
    const btnBiblica = document.getElementById('btn-edition-biblica');
    const btnGeneral = document.getElementById('btn-edition-general');
    const titleEdition = document.getElementById('start-title-edition');

    if (editionKey === 'biblica') {
        btnBiblica.classList.add('active');
        btnGeneral.classList.remove('active');
        titleEdition.innerText = 'BÍBLICO';
        titleEdition.style.color = 'var(--gold)';
    } else {
        btnGeneral.classList.add('active');
        btnBiblica.classList.remove('active');
        titleEdition.innerText = 'GENERAL';
        titleEdition.style.color = '#38bdf8';
    }
}

function saveGameState() {
    const state = {
        selectedEdition,
        numTeams,
        teamNames,
        scores,
        currentRound,
        currentTurn,
        teamPowerUps,
        playedCards
    };
    localStorage.setItem('jeopardyState', JSON.stringify(state));
}

function loadGameState() {
    const saved = localStorage.getItem('jeopardyState');
    return saved ? JSON.parse(saved) : null;
}

function clearGameState() {
    localStorage.removeItem('jeopardyState');
}

function restartGame(force = false) {
    if (force || confirm("¿Seguro que quieres reiniciar el juego?")) {
        clearGameState();
        location.reload();
    }
}

window.onload = function() {
    const savedState = loadGameState();
    if (savedState) {
        selectedEdition = savedState.selectedEdition || 'biblica';
        selectEdition(selectedEdition);

        numTeams = savedState.numTeams;
        teamNames = savedState.teamNames;
        scores = savedState.scores;
        currentRound = savedState.currentRound;
        currentTurn = savedState.currentTurn;
        teamPowerUps = savedState.teamPowerUps;
        playedCards = savedState.playedCards || [];
        
        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        
        if (numTeams === 3) {
            document.getElementById('team-name-2').style.display = 'block';
            document.getElementById('toggle-teams-btn').innerText = 'Usar 2 Equipos';
        }
        
        updateEditionBadge();
        setupRound(currentRound);
        renderScores();
        
        checkRoundEnd();
    }
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const board = document.getElementById('jeopardy-board');
const scoresContainer = document.getElementById('scores-container');
const roundTitle = document.getElementById('round-title');
const turnIndicator = document.getElementById('turn-indicator');
const editionBadge = document.getElementById('edition-badge');

// Modals
const modalOverlay = document.getElementById('modal-overlay');
const finalModalOverlay = document.getElementById('final-modal-overlay');
const modalQuestion = document.getElementById('modal-question');
const modalAnswer = document.getElementById('modal-answer');

const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const timerFill = document.querySelector('.timer-fill');
const hintDisplay = document.getElementById('hint-display');

function toggleTeams() {
    const input3 = document.getElementById('team-name-2');
    const btn = document.getElementById('toggle-teams-btn');
    if (input3.style.display === 'none') {
        input3.style.display = 'block';
        btn.innerText = 'Usar 2 Equipos';
        numTeams = 3;
    } else {
        input3.style.display = 'none';
        btn.innerText = 'Usar 3 Equipos';
        numTeams = 2;
    }
}

function updateEditionBadge() {
    if (selectedEdition === 'biblica') {
        editionBadge.innerHTML = '📖 EDICIÓN BÍBLICA';
        editionBadge.style.borderColor = 'var(--gold)';
        editionBadge.style.color = 'var(--gold)';
    } else {
        editionBadge.innerHTML = '🌐 EDICIÓN GENERAL';
        editionBadge.style.borderColor = '#38bdf8';
        editionBadge.style.color = '#38bdf8';
    }
}

function startGame() {
    // Init Audio Context (needs user interaction)
    if(typeof audioCtx !== 'undefined' && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    clearGameState();
    playedCards = [];
    
    numTeams = document.getElementById('team-name-2').style.display === 'none' ? 2 : 3;
    teamNames = [];
    teamPowerUps = [];
    for(let i=0; i<numTeams; i++) {
        teamNames.push(document.getElementById(`team-name-${i}`).value || `Equipo ${i+1}`);
        teamPowerUps.push({ double: false, shield: false, hint: false, time: false });
    }
    
    scores = new Array(numTeams).fill(0);
    currentTurn = 0;
    
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    updateEditionBadge();
    renderScores();
    setupRound(1);
}

function renderScores() {
    scoresContainer.innerHTML = '';
    for (let i = 0; i < numTeams; i++) {
        const isActive = (i === currentTurn) ? 'active-turn' : '';
        scoresContainer.innerHTML += `
            <div class="team-score ${isActive}">
                <div class="team-name">${teamNames[i]}</div>
                <div class="score-value ${scores[i] < 0 ? 'negative' : ''}" id="score-${i}">${scores[i]}</div>
            </div>
        `;
    }
    turnIndicator.innerText = `Turno de: ${teamNames[currentTurn]}`;
    
    const btnPreDouble = document.getElementById('btn-pre-double');
    const btnPreShield = document.getElementById('btn-pre-shield');
    if (btnPreDouble && btnPreShield && teamPowerUps.length > 0) {
        btnPreDouble.className = 'btn btn-powerup';
        btnPreShield.className = 'btn btn-powerup';
        
        if (teamPowerUps[currentTurn].double) btnPreDouble.classList.add('disabled');
        if (teamPowerUps[currentTurn].shield) btnPreShield.classList.add('disabled');
        if (pendingPowerUps.double) btnPreDouble.classList.add('active');
        if (pendingPowerUps.shield) btnPreShield.classList.add('active');
    }
}

function updateScore(teamIdx, amount) {
    scores[teamIdx] += amount;
    renderScores();
    saveGameState();
}

function setupRound(roundNum) {
    currentRound = roundNum;
    roundTitle.innerText = roundNum === 1 ? "Ronda 1" : "Ronda 2";
    
    const roundData = gameData[selectedEdition]['round' + roundNum];
    
    renderBoard(roundData);
    sounds.boardFill();
    saveGameState();
}

function renderBoard(roundData) {
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${roundData.length}, 1fr)`;
    
    roundData.forEach(cat => {
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerText = cat.category;
        board.appendChild(header);
    });

    for (let qIdx = 0; qIdx < 5; qIdx++) {
        for (let catIdx = 0; catIdx < roundData.length; catIdx++) {
            const card = document.createElement('div');
            card.className = 'card';
            const cardId = `r${currentRound}-c${catIdx}-q${qIdx}`;
            if (playedCards.includes(cardId)) {
                card.classList.add('played');
            }
            card.innerText = roundData[catIdx].questions[qIdx].points;
            card.onclick = () => handleCardClick(catIdx, qIdx, card);
            board.appendChild(card);
        }
    }
}

function handleCardClick(catIdx, qIdx, cardElement) {
    if (cardElement.classList.contains('played')) return;
    
    cardElement.classList.add('played');
    const cardId = `r${currentRound}-c${catIdx}-q${qIdx}`;
    playedCards.push(cardId);
    saveGameState();
    
    const roundData = gameData[selectedEdition]['round' + currentRound];
    currentQuestion = roundData[catIdx].questions[qIdx];
    currentCategoryIndex = catIdx;
    currentQuestionIndex = qIdx;

    modalOverlay.classList.add('active');
    sounds.boardFill();
    showQuestionView();
}

function usePrePowerUp(type) {
    const btn = document.getElementById(`btn-pre-${type}`);
    if (!btn || btn.classList.contains('disabled')) return;
    
    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        pendingPowerUps[type] = false;
    } else {
        btn.classList.add('active');
        pendingPowerUps[type] = true;
        sounds.boardFill();
    }
}

// Views Management
function hideAllModalViews() {
    modalQuestion.classList.remove('active');
    modalAnswer.classList.remove('active');
}

function showQuestionView() {
    hideAllModalViews();
    modalQuestion.classList.add('active');
    questionText.innerText = currentQuestion.question;
    
    // Transfer pending powerups to active
    activePowerUps.double = pendingPowerUps.double;
    activePowerUps.shield = pendingPowerUps.shield;
    
    // Commit the usage globally if transferred
    if (pendingPowerUps.double) teamPowerUps[currentTurn].double = true;
    if (pendingPowerUps.shield) teamPowerUps[currentTurn].shield = true;
    
    // Reset pending
    pendingPowerUps = { double: false, shield: false };
    
    saveGameState();
    
    // Update board buttons
    renderScores();
    
    hintDisplay.style.display = 'none';
    hintDisplay.innerText = '';
    
    // Update Hint Button UI
    const btnHint = document.getElementById('btn-powerup-hint');
    if (btnHint) {
        btnHint.className = 'btn btn-powerup';
        if (teamPowerUps[currentTurn].hint || !currentQuestion.hint) {
            btnHint.classList.add('disabled');
        }
    }

    // Update Extra Time Button UI
    const btnTime = document.getElementById('btn-powerup-time');
    if (btnTime) {
        btnTime.className = 'btn btn-powerup';
        if (teamPowerUps[currentTurn].time) {
            btnTime.classList.add('disabled');
        }
    }
    
    startTimer();
}

function usePowerUp(type) {
    const btn = document.getElementById(`btn-powerup-${type}`);
    if (!btn || btn.classList.contains('disabled')) return;
    
    if (type === 'hint') {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            teamPowerUps[currentTurn].hint = false;
            hintDisplay.style.display = 'none';
            hintDisplay.innerText = '';
        } else {
            btn.classList.add('active');
            teamPowerUps[currentTurn].hint = true;
            hintDisplay.style.display = 'block';
            hintDisplay.innerText = `💡 Pista: ${currentQuestion.hint}`;
            sounds.dailyDouble();
        }
    } else if (type === 'time') {
        if (!teamPowerUps[currentTurn].time) {
            btn.classList.add('disabled');
            teamPowerUps[currentTurn].time = true;
            timeLeft += 15;
            document.getElementById('numeric-timer').innerText = timeLeft;
            sounds.dailyDouble();
        }
    }
    saveGameState();
}

function startTimer() {
    const numericTimer = document.getElementById('numeric-timer');
    timeLeft = 30;
    numericTimer.innerText = timeLeft;
    
    timerFill.style.transition = 'none';
    timerFill.style.width = '100%';
    setTimeout(() => {
        timerFill.style.transition = 'width 30s linear';
        timerFill.style.width = '0%';
    }, 50);

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        numericTimer.innerText = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            sounds.buzzer();
        }
    }, 1000);
}

function showAnswer() {
    clearInterval(timerInterval);
    hideAllModalViews();
    modalAnswer.classList.add('active');
    answerText.innerText = currentQuestion.answer;
    
    const buttonsContainer = document.getElementById('scoring-buttons');
    buttonsContainer.innerHTML = '';
    
    // We show scoring buttons for all teams to support Rebounds.
    for(let i=0; i<numTeams; i++) {
        let isTurn = (i === currentTurn);
        let turnLabel = isTurn ? "(En Turno)" : "(Rebote)";
        
        buttonsContainer.innerHTML += `
            <div class="team-score-controls" style="${isTurn ? 'border: 2px solid var(--gold);' : ''}">
                <h4>${teamNames[i]} <small style="font-size: 0.8rem; color: #ccc;">${turnLabel}</small></h4>
                <div class="score-btn-group">
                    <button class="btn-correct" onclick="handleScore(${i}, true)">Correcto</button>
                    <button class="btn-wrong" onclick="handleScore(${i}, false)">Incorrecto</button>
                </div>
            </div>
        `;
    }
}

function handleScore(teamIdx, isCorrect) {
    const isTurn = (teamIdx === currentTurn);
    let amount = 0;
    
    if (isCorrect) {
        sounds.correct();
        amount = currentQuestion.points;
        if (isTurn && activePowerUps.double) {
            amount *= 2;
        }
        updateScore(teamIdx, amount);
        
        // Disable all buttons once scored correct
        document.querySelectorAll('.team-score-controls button').forEach(b => b.disabled = true);
    } else {
        sounds.wrong();
        amount = currentQuestion.points;
        
        if (isTurn && activePowerUps.shield) {
            amount = 0; // Shield prevents loss
        }
        
        updateScore(teamIdx, -amount);
        
        // Disable only this team's buttons so others can rebound
        const group = document.querySelectorAll('.team-score-controls')[teamIdx];
        if(group) {
            group.querySelectorAll('button').forEach(b => b.disabled = true);
        }
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    
    // Advance turn
    currentTurn = (currentTurn + 1) % numTeams;
    renderScores();
    saveGameState();
    
    checkRoundEnd();
}

function checkRoundEnd() {
    const unplayedCards = document.querySelectorAll('.card:not(.played)');
    if (unplayedCards.length === 0) {
        if (currentRound === 1) {
            setupRound(2);
        } else {
            setupFinalJeopardy();
        }
    }
}

// ================= FINAL JEOPARDY =================
function setupFinalJeopardy() {
    gameScreen.classList.remove('active');
    finalModalOverlay.classList.add('active');
    
    const finalData = gameData[selectedEdition].final;
    document.getElementById('final-category').innerText = `Categoría: ${finalData.category}`;
    
    const wagersContainer = document.getElementById('final-wager-inputs');
    wagersContainer.innerHTML = '';
    for(let i=0; i<numTeams; i++) {
        wagersContainer.innerHTML += `
            <div class="team-wager-box">
                <label>${teamNames[i]} (Pts: ${scores[i]})</label>
                <input type="number" id="final-wager-${i}" min="0" value="0">
            </div>
        `;
    }
}

let finalWagers = [];

function submitFinalWagers() {
    finalWagers = [];
    for(let i=0; i<numTeams; i++) {
        finalWagers.push(parseInt(document.getElementById(`final-wager-${i}`).value) || 0);
    }
    
    document.getElementById('final-wagers-view').classList.remove('active');
    document.getElementById('final-question-view').classList.add('active');
    
    const finalData = gameData[selectedEdition].final;
    document.getElementById('final-question-text').innerText = finalData.question;
    sounds.dailyDouble();
}

function showFinalAnswer() {
    document.getElementById('final-question-view').classList.remove('active');
    document.getElementById('final-answer-view').classList.add('active');
    
    const finalData = gameData[selectedEdition].final;
    document.getElementById('final-answer-text').innerText = finalData.answer;
    
    const checkboxes = document.getElementById('final-scoring-buttons');
    checkboxes.innerHTML = '';
    for(let i=0; i<numTeams; i++) {
        checkboxes.innerHTML += `
            <label style="display:block; margin: 1rem; font-size: 1.5rem;">
                <input type="checkbox" id="final-correct-${i}"> ¿${teamNames[i]} Correcto?
            </label>
        `;
    }
}

function finishGame() {
    for(let i=0; i<numTeams; i++) {
        const correct = document.getElementById(`final-correct-${i}`).checked;
        if(correct) {
            updateScore(i, finalWagers[i]);
        } else {
            updateScore(i, -finalWagers[i]);
        }
    }
    
    document.getElementById('final-answer-view').classList.remove('active');
    document.getElementById('winner-view').classList.add('active');
    
    let maxScore = Math.max(...scores);
    let winners = [];
    for(let i=0; i<numTeams; i++) {
        if(scores[i] === maxScore) winners.push(teamNames[i]);
    }
    
    document.getElementById('winner-text').innerText = `¡Gana: ${winners.join(', ')} con ${maxScore} puntos!`;
    sounds.correct();
    setTimeout(() => sounds.correct(), 500);
    setTimeout(() => sounds.correct(), 1000);
    
    clearGameState();
}
