const fs = require('fs');



go = () => {
    let data = fs.readFileSync("day3\\test2.txt", { encoding: 'utf-8' })
    var lines = data.split(/\r?\n/);

    let sum = 0;
    for (let line of lines) {
        let diitii = line.split(':');
        if (diitii[1].trimStart() == 'True') {
            sum += parseInt(diitii[0]);
        }
    }

    console.log(sum);

}


go();