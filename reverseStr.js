const reverseString = (str) => {
    let newStr = '';
    for(let i = str.length -1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

module.exports = reverseString;