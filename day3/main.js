const fs = require('fs');

checkVal = (lines, lineNum, index) => {
    let val = false;
    try {
        valOne = lines[lineNum][index] != '.';
        valTwo = parseInt(lines[lineNum][index]);
        val = valOne && isNaN(valTwo);
    } catch (error) {
        console.error(error);
    }
    return val
}


checkViableNum = (lines, lineNum, index, length) => {
    let itStart = index - 1;
    let itStop = index + length;

    if (index === 0) {
        itStart = 0;
    } else {
        if (checkVal(lines, lineNum, itStart)) return true;
    }

    if (index + length == lines[lineNum].length) {
        itStop = index + length - 1;
    } else {
        if (checkVal(lines, lineNum, itStop)) return true;
    }


    if (lineNum > 0) {
        for (let it = itStart; it <= itStop; it++) {
            if (checkVal(lines, lineNum - 1, it)) return true;
        }
    }

    if (lineNum < lines.length - 1) {
        for (let it = itStart; it <= itStop; it++) {
            if (checkVal(lines, lineNum + 1, it)) return true;
        }
    }

}

isDigit = (char) => {
    return !isNaN(parseInt(char))
}

poop = (lines) => {
    let viableNums = [];
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {

            let num = NaN;
            if (isDigit(lines[i][j])) {
                let numstr = '';
                let char = lines[i][j];
                let jindex = j;
                while (isDigit(char)) {
                    numstr += char;
                    jindex++;
                    char = lines[i][jindex];
                }
                length = jindex - j;
                num = parseInt(numstr);
            }


            if (!isNaN(num)) {
                let length = num.toString().length;
                //console.log('checknum:' + num)
                if (checkViableNum(lines, i, j, length)) {
                    console.log(num + ' : True')
                   
                        viableNums.push(num);
                } else {
                    console.log(num + ' : False')
                }
                j += length;
            }
        }
    }
    return viableNums;
}

go = () => {
    let data = fs.readFileSync("data\\input3.txt", { encoding: 'utf-8' })
    var lines = data.split(/\r?\n/);


    let numbers = poop(lines)
    let sum = 0;

    for (let number of numbers) {
        // console.log(sum + '+' + number + '=')
        sum += number;
        // console.log(sum)
    }
    console.log(sum);

}


go();