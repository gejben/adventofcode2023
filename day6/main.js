const fs = require('fs');


evaluate = (time, distance) => {
    let cameLonger = [];
    for (let i = 0; i < time; i++) {
        console.log(`accelerating for ${i} ms took us ${(time - i) * i}mm`)
        if (((time - i) * i) > distance) {
            cameLonger.push(i);
            console.log(`which is longer than ${distance}mm`)
        }
    }
    return cameLonger
}

evaluate2 = (time, distance) => {
    let start = 0;
    let end = 0;
    let increment = 10000000;
    for (let i = 0; i < time; i += increment) {
        console.log(`accelerating for ${i} ms took us ${(time - i) * i}mm`)
        if (((time - i) * i) > distance) {
            if (increment != 1) {
                i -= increment;
                increment /= 10;
                continue;
            }
            start = i;
            break;
        }
    }
    increment = 10000000;
    for (let i = time; i > 0; i -= increment) {
        console.log(`accelerating for ${i} ms took us ${(time - i) * i}mm`)
        if (((time - i) * i) > distance) {
            if (increment != 1) {
                i += increment;
                increment /= 10;
                continue;
            }
            end = i+1;
            break;
        }
    }

    return end - start;
}

testEval = (time,distance) => {
    let cameLonger = [];
    for (let i = 8598430; i < 32230735; i++) {
        console.log(`accelerating for ${i} ms took us ${(time - i) * i}mm`)
        if (((time - i) * i) > distance) {
            cameLonger.push(i);
            console.log(`which is longer than ${distance}mm`)
        }
    }
    return cameLonger
}

go = () => {
    let data = fs.readFileSync("data\\input6.txt", { encoding: 'utf-8' })
    var lines = data.split(/\r?\n/);

    let time = [];
    let distance = [];

    for (let line of lines) {
        let lineData = line.split(':')
        if (lineData[0] == 'Time') {
            time = lineData[1].split(' ');
            time = time.filter(t => t != '');
        } else if (lineData[0] == 'Distance') {
            distance = lineData[1].split(' ');
            distance = distance.filter(t => t != '');
        }
    }
    let races1 = [];

    for (let i = 0; i < time.length; i++) {
        races1.push(evaluate(time[i], distance[i]));
    }

    let timestr = '';
    let distStr = '';
    for (let i = 0; i < time.length; i++) {
        timestr += time[i];
        distStr += distance[i];
    }
    let sum2 = 0;
    try {
        sum2 = evaluate2(parseInt(timestr), parseInt(distStr))
    } catch (e) {
        console.error(e);
    }


    let sum = 1;
    for (let race of races1) {
        sum *= race.length;
    }
    console.log('1:' + sum);
    console.log('2:' + sum2);

}


go();