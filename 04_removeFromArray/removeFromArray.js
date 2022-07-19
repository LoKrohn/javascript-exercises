const removeFromArray = function(arr, ...args) {
    let argArr = [...args];
    let newArr = arr.filter(elem => !argArr.includes(elem));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
