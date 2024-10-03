const fibonacci = function(num) {
    value = parseInt(num);
    if(value === 0) {
        return 0;
    } else if(value < 0) {
        return "OOPS"
    }
    const fibArray = [1, 1];
    for(let i=1; i<value; i++) {
        fibArray.push(fibArray[i] + fibArray[i-1]);
    };
    return fibArray[value-1];
};

// Do not edit below this line
module.exports = fibonacci;
