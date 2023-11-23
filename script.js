let originalString = '';
let currentString = '';
let guessingString ;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('guessLetter').addEventListener('keypress', (event) => {
        updateString(event.key);
    });
});

function initializeString() {
    originalString = document.getElementById('inputString').value.toLowerCase();
    currentString = originalString;
    guessingString = originalString.split("")
    updateDisplay();
}

function updateDisplay() {
    currentString = originalString;
    guessingString = originalString.split("")
    document.getElementById('currentString').textContent = currentString;
    document.getElementById('GuessingString').textContent = guessingString;
    console.log(guessingString)
}

function updateString(letterToRemove) {
    console.log(letterToRemove)
    const index = guessingString.indexOf(letterToRemove.toLowerCase());
    console.log(index)
    // If the letter is found, remove it
    if (index > -1) {
        guessingString.splice(index, 1);
    }
    console.log(guessingString)
    document.getElementById('GuessingString').textContent = guessingString;
}

function resetString() {
    updateDisplay();
}