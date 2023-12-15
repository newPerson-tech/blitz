/**
 * Create a function which takes 2 integers from a User and provides one of four basic mathematical operations depending on the request
 */

const inputIntegerOne = prompt('Please enter any integer', 0);
const inputIntegerTwo = prompt('Please enter one more integer', 0);
const operationRequest = prompt('What operation would you like us to do', '');

function makeAnOperation(int1, int2, operation) {
    if (operation === 'addition') {
        return int1 + int2;
    } else if (operation === 'substruction') {
        return int1 - int2;
    } else if (operation === 'multiplication') {
        return int1 * int2;
    } else if (operation === 'division') {
        return int1 / int2;
    } else {
        console.log('Sorry, we do not do other than four basic mathematical operations');
        return;
    }
}

makeAnOperation(inputIntegerOne, inputIntegerTwo, operationRequest);