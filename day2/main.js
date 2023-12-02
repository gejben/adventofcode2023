const fs = require('fs');


partOne = (games) => {
    let viableGames = games.filter(g => (g.blueMax <= 14 && g.greenMax <= 13 && g.redMax <= 12));
    let ans = 0;
    for (let g of viableGames) {
        ans += g.index;
    }
    console.log('part 1:' + ans)
}
partTwo = (games) => {
    let ans = 0;
    for (let g of games) {
        let power = (g.blueMax * g.greenMax * g.redMax)
        console.log(power);
        ans += power;
    }
    console.log('part 2:' + ans)
}


parseLine = (line) => {
    let game = {
        blueMax: 0,
        redMax: 0,
        greenMax: 0,
        index: 0
    }

    let index = line.split(':')[0]
    game.index = parseInt(index.split(' ')[1]);

    let showings = line.split(':')[1].split(';')

    for (let showing of showings) {
        let hands = showing.split(',');
        for (let hand of hands) {
            let data = hand.trimStart().trimEnd();
            let val = parseInt(data.split(' ')[0]);
            if (hand.includes('blue')) {
                if (val > game.blueMax) game.blueMax = val;
            } else if (hand.includes('green')) {
                if (val > game.greenMax) game.greenMax = val;
            } else {
                if (val > game.redMax) game.redMax = val;
            }
        }
    }
    return game;
}

go = () => {
    let data = fs.readFileSync("adventofcode2023\\data\\input2.txt", { encoding: 'utf-8' })
    var lines = data.split(/\r?\n/);

    let games = [];


    for (let line of lines) {
        games.push(parseLine(line))
    }
    partOne(games)
    partTwo(games)

}


go();