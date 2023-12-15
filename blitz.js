let circleRadius = prompt('Give us any radius length of a circle', 0);

function calculateCircleArea(radius) {
    const areaResult = Math.PI * Math.pow(radius, 2);
    return areaResult.toFixed(2);
}

const area = calculateCircleArea(circleRadius);

alert(`The area of a circle you've requested is ${area}`);