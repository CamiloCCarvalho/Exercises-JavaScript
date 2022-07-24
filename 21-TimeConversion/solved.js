'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
// Ignore the code above, it's used to run at site hackerrank
function timeConversion(s) {
    if(s.includes("AM") && Number(s.slice(0,2)) != 12 || (s.includes("PM") && Number(s.slice(0,2)) == 12)){
        return (s.substring(0, s.length-2))
    }else{
        let task = s.substring(0, s.length-2)
        let temp = Number(task.substring(0, 2))
        temp = (temp == 12)? "00": temp + 12
        let numb = temp.toString()
        return (numb += task.substring(2, task.length))
    }
}
// Ignore the code below, it's used to run at site hackerrank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}