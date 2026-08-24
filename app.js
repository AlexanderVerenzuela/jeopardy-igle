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
let pendingPowerUps = { double: false, triple: false, shield: false };
// Tracks which powerups are active for the CURRENT question
let activePowerUps = { double: false, triple: false, shield: false };

let playedCards = [];
let selectedFinalCategoryIndex = 0;

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

function changeTeamsCount(delta) {
    numTeams += delta;
    if (numTeams < 1) numTeams = 1;
    if (numTeams > 8) numTeams = 8;
    document.getElementById('teams-count-display').innerText = numTeams;
    renderTeamInputs();
}

function renderTeamInputs() {
    const container = document.getElementById('team-inputs');
    if (!container) return;
    
    const existingValues = [];
    for (let i = 0; i < 8; i++) {
        const input = document.getElementById(`team-name-${i}`);
        if (input) existingValues.push(input.value);
        else existingValues.push(`Equipo ${i+1}`);
    }

    container.innerHTML = '';
    for (let i = 0; i < numTeams; i++) {
        const val = existingValues[i] || `Equipo ${i+1}`;
        container.innerHTML += `
            <input type="text" id="team-name-${i}" class="team-input" placeholder="Nombre Equipo ${i+1}" value="${val}">
        `;
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
    renderTeamInputs();
    
    const savedState = loadGameState();
    if (savedState) {
        selectedEdition = savedState.selectedEdition || 'biblica';
        selectEdition(selectedEdition);

        numTeams = savedState.numTeams || 2;
        document.getElementById('teams-count-display').innerText = numTeams;
        renderTeamInputs();

        teamNames = savedState.teamNames;
        scores = savedState.scores;
        currentRound = savedState.currentRound;
        currentTurn = savedState.currentTurn;
        teamPowerUps = savedState.teamPowerUps;
        playedCards = savedState.playedCards || [];
        
        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        
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
    if(typeof audioCtx !== 'undefined' && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    clearGameState();
    playedCards = [];
    
    teamNames = [];
    teamPowerUps = [];
    for(let i=0; i<numTeams; i++) {
        const inputVal = document.getElementById(`team-name-${i}`).value;
        teamNames.push(inputVal || `Equipo ${i+1}`);
        teamPowerUps.push({ double: false, triple: false, shield: false, hint: false });
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
    const btnPreTriple = document.getElementById('btn-pre-triple');
    const btnPreShield = document.getElementById('btn-pre-shield');

    if (btnPreDouble && btnPreTriple && btnPreShield && teamPowerUps.length > 0) {
        btnPreDouble.className = 'btn btn-powerup';
        btnPreTriple.className = 'btn btn-powerup';
        btnPreShield.className = 'btn btn-powerup';
        
        const curPowerUps = teamPowerUps[currentTurn];
        if (curPowerUps.double) btnPreDouble.classList.add('disabled');
        if (curPowerUps.triple) btnPreTriple.classList.add('disabled');
        if (curPowerUps.shield) btnPreShield.classList.add('disabled');

        if (pendingPowerUps.double) btnPreDouble.classList.add('active');
        if (pendingPowerUps.triple) btnPreTriple.classList.add('active');
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
        // Double and Triple are mutually exclusive
        if (type === 'double') {
            pendingPowerUps.triple = false;
            const btnT = document.getElementById('btn-pre-triple');
            if (btnT) btnT.classList.remove('active');
        } else if (type === 'triple') {
            pendingPowerUps.double = false;
            const btnD = document.getElementById('btn-pre-double');
            if (btnD) btnD.classList.remove('active');
        }

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
    activePowerUps.triple = pendingPowerUps.triple;
    activePowerUps.shield = pendingPowerUps.shield;
    
    // Commit the usage globally if transferred
    if (pendingPowerUps.double) teamPowerUps[currentTurn].double = true;
    if (pendingPowerUps.triple) teamPowerUps[currentTurn].triple = true;
    if (pendingPowerUps.shield) teamPowerUps[currentTurn].shield = true;
    
    // Reset pending
    pendingPowerUps = { double: false, triple: false, shield: false };
    
    saveGameState();
    renderScores();
    
    hintDisplay.style.display = 'none';
    hintDisplay.innerText = '';
    
    // Update Hint Button UI
    const btnHint = document.getElementById('btn-powerup-hint');
    if (btnHint) {
        btnHint.className = 'btn btn-powerup';
        if (selectedEdition === 'biblica') {
            btnHint.innerText = '💡 Pista (Cita Bíblica)';
        } else {
            btnHint.innerText = '💡 Pista';
        }
        if (teamPowerUps[currentTurn].hint || !currentQuestion.hint) {
            btnHint.classList.add('disabled');
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
            const label = selectedEdition === 'biblica' ? '📖 Cita Bíblica' : '💡 Pista';
            hintDisplay.innerText = `${label}: ${currentQuestion.hint}`;
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
        if (isTurn && activePowerUps.triple) {
            amount *= 3;
        } else if (isTurn && activePowerUps.double) {
            amount *= 2;
        }
        updateScore(teamIdx, amount);
        
        document.querySelectorAll('.team-score-controls button').forEach(b => b.disabled = true);
    } else {
        sounds.wrong();
        amount = currentQuestion.points;
        
        if (isTurn && activePowerUps.shield) {
            amount = 0;
        }
        
        updateScore(teamIdx, -amount);
        
        const group = document.querySelectorAll('.team-score-controls')[teamIdx];
        if(group) {
            group.querySelectorAll('button').forEach(b => b.disabled = true);
        }
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    
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
    
    document.getElementById('final-category-select-view').classList.add('active');
    document.getElementById('final-wagers-view').classList.remove('active');
    document.getElementById('final-question-view').classList.remove('active');
    document.getElementById('final-answer-view').classList.remove('active');
    document.getElementById('winner-view').classList.remove('active');
    
    const finalOptions = gameData[selectedEdition].finalOptions;
    const catContainer = document.getElementById('final-category-options');
    catContainer.innerHTML = '';
    
    finalOptions.forEach((opt, idx) => {
        catContainer.innerHTML += `
            <button class="btn btn-secondary final-cat-card" onclick="selectFinalCategory(${idx})">
                <span class="final-cat-name">${opt.category}</span>
            </button>
        `;
    });
}

function selectFinalCategory(catIdx) {
    selectedFinalCategoryIndex = catIdx;
    const finalData = gameData[selectedEdition].finalOptions[selectedFinalCategoryIndex];
    
    document.getElementById('final-category-select-view').classList.remove('active');
    document.getElementById('final-wagers-view').classList.add('active');
    
    document.getElementById('final-category').innerText = `Categoría Seleccionada: ${finalData.category}`;
    
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
    sounds.dailyDouble();
}

let finalWagers = [];

function submitFinalWagers() {
    finalWagers = [];
    for(let i=0; i<numTeams; i++) {
        finalWagers.push(parseInt(document.getElementById(`final-wager-${i}`).value) || 0);
    }
    
    document.getElementById('final-wagers-view').classList.remove('active');
    document.getElementById('final-question-view').classList.add('active');
    
    const finalData = gameData[selectedEdition].finalOptions[selectedFinalCategoryIndex];
    document.getElementById('final-selected-category-header').innerText = `Categoría: ${finalData.category}`;
    document.getElementById('final-question-text').innerText = finalData.question;
    sounds.dailyDouble();
}

function showFinalAnswer() {
    document.getElementById('final-question-view').classList.remove('active');
    document.getElementById('final-answer-view').classList.add('active');
    
    const finalData = gameData[selectedEdition].finalOptions[selectedFinalCategoryIndex];
    document.getElementById('final-answer-text').innerText = finalData.answer;
    
    const checkboxes = document.getElementById('final-scoring-buttons');
    checkboxes.innerHTML = '';
    for(let i=0; i<numTeams; i++) {
        checkboxes.innerHTML += `
            <label style="display:block; margin: 0.8rem; font-size: 1.3rem;">
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
