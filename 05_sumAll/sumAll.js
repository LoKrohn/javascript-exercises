const sumAll = function(start,end) {
    let sum = 0;
    if (start<0 || end<0 || typeof(start)!='number' || typeof(end)!='number'){
        return 'ERROR';
    }
    else if (start<=end){
        for (let i = start; i < end +1; i++) {
            sum += i
        }
        return sum;
    }
    else if (end<start){
        for (let i = end; i < start +1; i++) {
            sum += i
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
