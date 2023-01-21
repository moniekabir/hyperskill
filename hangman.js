// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

const words = ['python', 'java', 'swift', 'javascript'];

let lives = 8, win = 0, lost = 0;

console.log(`H A N G M A N # ${lives} attempts`);

while (true) {
    switch (input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: `)) {
        case 'play':
            (function () {
                let r = Math.floor(Math.random() * 4), word = words[r]
                let mask = (w) => [...w].reduce((acc, letter) => acc + (guessed.includes(letter) ? letter : '-'), "");
                let guessed = [];

                while (lives) {
                    const letter = (input(`\n${mask(word)}\nInput a letter: `));

                    if (letter.length !== 1) {
                        console.log(`Please, input a single letter.`)
                    } else if (!/[a-z]/.test(letter)) {
                        console.log(`Please, enter a lowercase letter from the English alphabet.`)
                    } else if (!(word.includes(letter))) {
                        lives -= 1;
                        console.log(`That letter doesn't appear in the word. # ${lives} attempts`);
                    }

                    letter.length === 1 ? guessed.push(letter) : null
                    if (guessed.indexOf(letter) !== guessed.lastIndexOf(letter)) {
                        console.log(`You've already guessed this letter. # ${lives} attempts`)
                    }

                    if (!mask(word).includes('-')) {
                        break;
                    }
                }
                console.log(lives ? `You guessed the word ${word}!\nYou survived!` : `\nYou lost!`);
                return lives > 0;
            })() ? win += 1 : lost += 1;
            continue
        case 'results':
            console.log(`You won: ${win} times.`, `\nYou lost: ${lost} times.`)
            continue
        case 'exit':
            return;
    }
}
