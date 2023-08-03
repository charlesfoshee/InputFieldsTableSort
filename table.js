const inputFields = document.getElementById('input_fields')
let input = []
let cellCount = 0

function addCell() {
    //adds one to cell count to keep track of amount of input fields
    cellCount++
    //creates new row in the table
    const row = inputFields.insertRow()
    //creates two new cells in the row one for the input field and one for the length display
    const cell1 = row.insertCell()
    const cell2 = row.insertCell()
    //creates the input field
    const createInput = document.createElement("input")
    //creates the length display
    const createLength = document.createElement("p")
    //assigns properties for the new input field and length display
    createInput.type = "text"
    createInput.name = "dynamic_field[]"
    createInput.id = "input" + cellCount.toString()
    createInput.className = "inputField"
    createInput.onchange = function () {
        storeInput(this.id)
    }
    createInput.onkeyup = function () {
        textCounter(this.id)
    }
    createLength.id = "length" + cellCount.toString()
    createLength.className = "characterCounter"
    //checks if there is value associated with the input field
    if (input[cellCount] != null) {
        //if there is a value associated with the input field place the value inside the input field
        createInput.value = input[cellCount]
        //place the length of the value next to the input field
        createLength.innerText = input[cellCount].length
    } else {
        //if there is no value associated give the input field an empty value and show 0 for the length
        createInput.value = ""
        createLength.innerText = "0"
    }
    //places the input field and length inside the new cells
    cell1.appendChild(createInput)
    cell2.appendChild(createLength)
}

function removeCell() {
    //checks that the length of the table is greater than 2, 1 for the title 2 for the first input field.
    if (inputFields.rows.length > 2) {
        //if the length is greater than 2 subtract 1 from cell count
        cellCount--
        //delete the last row in the table
        inputFields.deleteRow(inputFields.rows.length - 1)
    }
}

function storeInput(cellId) {
    //get the id number for the array cell number from the id of input field
    let cellIdNum = cellId.replace(/\D/g, "")
    //store the input inside the input array
    input[cellIdNum] = document.getElementById(cellId).value
}

function textCounter(cellId) {
    //get the id number for the length id number from the id of input field
    let cellIdNum = cellId.replace(/\D/g, "")
    //get the value length from the value inside the input field
    let valueLength = document.getElementById(cellId).value.length
    //print the length next to the input field
    document.getElementById("length" + cellIdNum).innerText = valueLength
}

function sortTable() {
    //sorts only the visible elements in the array
    input = input.slice(0, cellCount + 1).sort((a, b) => b.length - a.length).concat(
        input.slice(cellCount + 1, input.length))
    //prints the new sorted values in the input fields as well as there correct lengths
    for (let i = 0; i <= cellCount; i++) {
        if (input[i] != null) {
            document.getElementById("input" + i.toString()).value = input[i]
            document.getElementById("length" + i.toString()).innerText = input[i].length
        } else {
            document.getElementById("input" + i.toString()).value = ""
            document.getElementById("length" + i.toString()).innerText = "0"
        }
    }
}

function changeColor(colorChosen, colorChange) {
    //checks if the background or foreground colors are getting changed
    if (colorChange == "backgroundColor") {
        //changes the background color according to the chosen color
        document.body.style.backgroundColor = colorChosen
    } else if (colorChange == "foregroundColor") {
        //gets all foreground elements from the screen
        let foregroundHeaders = document.querySelectorAll("h3")
        let foregroundParagraphs = document.querySelectorAll("p")
        let foregroundInputFields = document.querySelectorAll("input")
        //changes the color of all these elements according to the chosen color
        foregroundHeaders.forEach((foregroundHeader) =>
            foregroundHeader.style.color = colorChosen)
        foregroundParagraphs.forEach((foregroundParagraph) =>
            foregroundParagraph.style.color = colorChosen)
        foregroundInputFields.forEach((foregroundInputField) =>
            foregroundInputField.style.color = colorChosen)
    }
}