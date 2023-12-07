const fs = require('fs');

analyzeHand = (hand) => {
    
}

go = () => {
    let data = fs.readFileSync("adventofcode2023\\data\\input7.txt", { encoding: 'utf-8' })
    let lines = data.split(/\r?\n/);

    hands = [];
    for (let line of lines) {
        let lineData = line.split(' ')
        hands.push({ cards: lineData[0], bid: parseInt(lineData[1]) })
    }

    for (let hand of hands) {
        analyzeHand(hand);
    }

    let debug = 1;
}


go();