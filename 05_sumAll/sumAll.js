const sumAll = function(num1, num2) {
    let bigNum;
    let smallNum;
    let total = 0;

    if (
        typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        num1 < 0 ||
        num2 < 0 ||
        num1 % 1 !== 0 ||
        num2 % 1 !== 0
    ) {
        return "ERROR";
    } else {
        if (num2 > num1) {
            smallNum = num1;
            bigNum = num2;
        } else {
            smallNum = num2;
            bigNum = num1;
        }
    }

    for(let i = smallNum; i <= bigNum; i++) {
        total+=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
