function letterFinder(word, match) {

    if (typeof (word) == 'string' && word.length >= 2) {
        var condition1 = true;
    }
    else {
        var condition1 = false;
    }

    if (typeof (match) == 'string' && match.length == 1) {
        var condition2 = true;
    }
    else {
        var condition2 = false;
    }

    if (condition1 == true && condition2 == true) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder("cat", "c")