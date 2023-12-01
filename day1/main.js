const fs = require('fs');

possibleStrings = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

parse = (firstDone, string) => {
    let value = null

    for (let i = 0; i < string.length; i++) {
        for (let number of possibleStrings) {
            if (string.substr(i, 5).includes(number)) {
                if (!firstDone) {
                    firstDone = true;
                    value = possibleStrings.indexOf(number);
                    i = string.length;
                    break;
                } else {
                    value = possibleStrings.indexOf(number);
                }
            }
        }
    }

    return value;
}



calc = (line) => {
    let list = line.split(/(\d{1})/);
    let first = null;
    let last = null;
    let firstDone = false;

    for (let entry of list) {
        let data = parseInt(entry);
        if (data) {
            if (!firstDone) {
                first = data;
                firstDone = true;
                last = data;
            } else {
                last = data;
            }
        } else {
            let val = parse(firstDone, entry);
            if (val != null) {
                if (!firstDone) {
                    first = val;
                    firstDone = true;
                    last = val;
                } else {
                    last = val;
                }
            }
        }
    }
    let num = first + '' + last;
    return parseInt(num)
}

go = () => {
    let data = fs.readFileSync("..\\data\\input1.txt", { encoding: 'utf-8' })
    var lines = data.split(/\r?\n/);

    total = 0;
    for (let line of lines) {
        total += calc(line)
    }
    console.log(total);
}


go();