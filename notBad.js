function notBad(input) {
    //transforms the inputted string to lower case characters
    input = input.toLowerCase()
    //regexp used with replace method "not" and "bad" along with anything in between
    input = input.replace(/not.*bad/, 'good')
    //prints the result to the space below the input field
    document.getElementById('notBadOutput').innerText = input
}