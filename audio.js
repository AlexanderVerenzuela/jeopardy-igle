const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playTone(freq, type, duration, vol = 0.1) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playBuzzer() {
    playTone(150, 'sawtooth', 0.5, 0.2);
    setTimeout(() => playTone(150, 'sawtooth', 0.6, 0.2), 100);
}

function playCorrect() {
    playTone(523.25, 'sine', 0.2, 0.1); // C5
    setTimeout(() => playTone(659.25, 'sine', 0.4, 0.1), 150); // E5
    setTimeout(() => playTone(783.99, 'sine', 0.6, 0.1), 300); // G5
}

function playWrong() {
    playTone(300, 'square', 0.4, 0.1);
    setTimeout(() => playTone(250, 'square', 0.6, 0.1), 200);
}

function playDailyDouble() {
    let time = 0;
    for(let i=0; i<6; i++){
        setTimeout(() => playTone(880, 'sine', 0.2, 0.1), time); // A5
        time += 150;
        setTimeout(() => playTone(1046.50, 'sine', 0.2, 0.1), time); // C6
        time += 150;
    }
}

function playBoardFill() {
    // A quick ascending sweep
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.5);

    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
}

const sounds = {
    buzzer: playBuzzer,
    correct: playCorrect,
    wrong: playWrong,
    dailyDouble: playDailyDouble,
    boardFill: playBoardFill
};
