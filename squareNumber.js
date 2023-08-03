function squareNumber(input) {
    //takes the inputted string and casts to num variable
    let num = Number(input)
    //checks if num has a proper value or if it contains NaN
    if (isNaN(num)) {
        //if num is NaN prints statement that input was invalid below the input field
        document.getElementById('squareNumberOutput').innerText = input + " is not a number so it cannot be " +
            "squared."
    } else {
        //if num is valid square the number
        let numSquared = Math.pow(num, 2)
        //print the original value along with the result below the input field
        document.getElementById('squareNumberOutput').innerText = "The result of squaring the number " +
            num + " is " + numSquared + "."
    }
}