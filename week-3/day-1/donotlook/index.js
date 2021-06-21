const myTextField = document.getElementById('textField');

// Feature 1: User can select numbers and operators
// and add them to the input field
function updateInputField(data) {
    console.log('data: ', 9)
    myTextField.value += data;
}

// Feature 2: evaluating the expressions
// MVP: Minimal Viable Product - Just getting all operations to work
function evaluateExpression() {
    // const myExpressionArray
    const expression = myTextField.value;
    // if ( condition) { // block
        // execute this block of code
    //}
    if ( expression.includes('+')) {
        const myExpressionArray = expression.split('+');
        myTextField.value = parseInt(myExpressionArray[0])  + parseInt(myExpressionArray[1]);

    } else if (expression.includes('-')) { // expression: 9-1
        // psuedo-code
        // split the expression string into two numbers
         const myExpressionArray = expression.split('-') // ['9', '1']  
        // covert the each string number into integers
        // subtract the two integers
        // update the input value with the result
        myTextField.value = parseInt(myExpressionArray[0]) - parseInt(myExpressionArray[1])
    }
}

// Feature 3: clearing the display
function clearDisplay() {
    myTextField.value = '';
}

