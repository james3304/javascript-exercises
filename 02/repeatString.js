const repeatString = function(string, num) {
    let i = 0
    let word = ""
    if (num < 0){
    word = "ERROR"
    }
    else
        {while(i < num){
            word += string
            i++
        }
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
