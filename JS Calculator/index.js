// input first number
var number1 = parseFloat(prompt("Enter your first number: "));
// operator input
var operator = prompt("Enter operator ( either +, -, * or / ) : ");
//input second number
var number2 = parseFloat(prompt("Enter your second number: "));

var result;

// switch statement to operate according to the operator
switch (operator)
// adding two numbers
{
    case "+":
        result = number1 + number2;
        break;
    // subtracting two numbers
    case "-":
        result = number1 - number2;
        break;
    // multiplying two numbers
    case "*":
        result = number1 * number2;
        break;
    // dividing two numbers
    case "/":
        result = number1 / number2;
        break;

    default:
        console.log('Invalid operator');
        break;
}

//  Result Display
window.alert("Answer= " + result);