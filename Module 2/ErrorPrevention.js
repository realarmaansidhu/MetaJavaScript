function addTwoNums(a, b) {
    try {

        if(typeof(a) != 'number'){
            throw new ReferenceError("The First Argument is not a number")
        }
        else if(typeof(b) != 'number'){
            throw new ReferenceError("The Second Argument is not a number")
        }
        else {
        console.log(a+b);
        }
    } catch (err) {
        console.log("Error! " + err);
    }
}

addTwoNums(5, "5");