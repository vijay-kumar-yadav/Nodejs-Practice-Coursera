const swapDigits = (number) => {
    if(number <= 0){
        return 0;
    }
    let numIntoStr = "" + number;
    let answer = "";
    let swappedNumber = 0
    //write logic here
    const length = numIntoStr.length;
    var i = 0;
    var k = 0;
    if (length % 2 != 0) {
        i = 1;
        k = 1;
        answer+=numIntoStr[0];
    }
    for (i; i <= ((length - k)/2) + 1; i+=2) {
        answer +=  numIntoStr[i + 1];
        answer += numIntoStr[i];
    }

    swappedNumber = parseInt(answer);
    return swappedNumber;

}

module.exports = swapDigits
