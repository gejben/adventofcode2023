const fs = require('fs');

checkVal = (lines, lineNum, index) => {
    let val = false;
    try {
        valOne = lines[lineNum][index] != '.';
        valTwo = parseInt(lines[lineNum][index]);
        val = valOne && isNaN(valTwo);
    } catch (error) {
        console.log(error);
    }
    return val
}


checkViableNum = (lines, lineNum, index, length) => {

    let itStart = (index == 0 ? 0 : index - 1)

    if (lineNum > 0) {
        for (let it = itStart; it < index + length + 1; it++) {
            if (checkVal(lines, lineNum - 1, it)) return true;
        }
    }

    for (let it = itStart; it < index + length + 1; it++) {
        if (checkVal(lines, lineNum, it)) return true;
    }
    if (lineNum < lines.length - 1) {
        for (let it = itStart; it < index + length + 1; it++) {
            if (checkVal(lines, lineNum + 1, it)) return true;
        }
    }

}

poop = (lines) => {
    let viableNums = [];
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            let str = lines[i]
            let test = str.substring(j)
            let num = parseInt(test)
            if (num) {
                let length = num.toString().length;
                console.log('checknum:' + num)
                if (checkViableNum(lines, i, j, length)) {
                    console.log('viabie')
                    viableNums.push(num);
                } else {
                    console.log(' not viable')
                }
                j += length;
            }
        }
    }
    return viableNums;
}

go = () => {
    let data = fs.readFileSync("adventofcode2023\\data\\input3test.txt", { encoding: 'utf-8' })
    var lines = data.split(/\r?\n/);


    let numbers = poop(lines)
    let sum = 0;
    for (let number of numbers) sum += number;
    console.log(sum);

}


go();