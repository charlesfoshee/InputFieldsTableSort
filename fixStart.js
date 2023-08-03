function fixStart(input) {
    //transforms the inputted string to lower case characters
    input = input.toLowerCase()
    //takes the first character of the string and places it in a variable
    let firstChar = input.substring(0, 1)
    //replaces all instance of the first character inside the inputted string
    let result = input.replaceAll(firstChar, "*")
    //puts the first back into the first position of the string
    result = firstChar + result.substring(1)
    //prints the result to the space below the input field
    document.getElementById('fixStartOutput').innerText = result
}