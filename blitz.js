const circleRadius = +prompt('Give us any radius length of a circle', ' ');

function calculateCircleArea(radius){
    return Math.Pi * Math.pow(radius, 2);
}

const area = calculateCircleArea(circleRadius);

alert(`The area of a circle you've requested is ${area}`);