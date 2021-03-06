'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Ignore the code above, It's used to run at site HackerRank

function plusMinus(arr) {
    var plus =0
    var minus =0
    var equal =0
    
    for(let i=0; i < arr.length; i++){
        if(arr[i] < 0)
        {
            minus++ 
        }else if(arr[i] == 0)
        {
            equal++
        }else
        {
            plus++
        }
    }
    console.log(parseFloat(plus/arr.length).toFixed(6) + '\n' +
    parseFloat(minus/arr.length).toFixed(6) + '\n' +
     parseFloat(equal/arr.length).toFixed(6))
}

// Ignore the code below, It's used to run at site HackerRank

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
