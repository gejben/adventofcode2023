const fs = require('fs');

go = () => {
    let data = fs.readFileSync("data\\input4.txt", { encoding: 'utf-8' })
    var lines = data.split(/\r?\n/);

    let sum = 0;
    let cards = [];
    for (let line of lines) {
        let lineData = line.split(':');
        let card = {
            name: lineData[0],
            winningNumbers: [],
            sum: 0,
            instances: 1
        }
        let numbersHaveStr = lineData[1].trimStart().split('|')[0].trimStart().trimEnd();
        let winningNumbersStr = lineData[1].trimStart().split('|')[1].trimStart().trimEnd();
        let numbersHave = numbersHaveStr.split(' ')
        let winningNumbers = winningNumbersStr.split(' ')
        let sum = 0;
        let firstMatch = true;
        for (let number of numbersHave) {
            if (number != '')
                if (winningNumbers.includes(number)) {
                    let num = parseInt(number);
                    card.winningNumbers.push(num);
                    if (firstMatch == true) {
                        sum = 1
                        firstMatch = false;
                    }
                    else sum *= 2;
                }
        }
        card.sum = sum;
        cards.push(card)

    }
    for (let i = 0; i < cards.length; i++) {
        let matchingNumbers = cards[i].winningNumbers.length;
        let increment = cards[i].instances;
        for (let j = i + 1; j < i + 1 + matchingNumbers; j++) {
            cards[j].instances += increment;
        }

    }

    let no1 = 0;
    for (let card of cards) {
        no1 += card.sum
    }
    console.log(no1)
    let no2 = 0
    for (let card of cards) {
        no2 += card.instances
    }
    console.log(no2)


}


go();