const circleRadius = +prompt('Give us any radius length of a circle', ' ');

function calculateCircleArea(radius){
    const areaResult = (Math.PI * Math.pow(radius, 2));
    return areaResult;
}

const area = calculateCircleArea(circleRadius);

alert(`The area of a circle you've requested is ${area}`);