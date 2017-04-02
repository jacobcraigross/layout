// tinkering with Node.js // 

// a function that takes data from an array and spits out the average //

function average (scores){
    var total = 0;
    scores.forEach (function(score){
        total += score;
    });
    var avg = total/scores.length;
    return Math.round(avg);
}

var scores = [60, 90, 99, 44, 88, 77];
console.log(average(scores));

