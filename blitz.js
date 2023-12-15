let circleRadius = +prompt('Give us any radius length of a circle', ' ');

function calculateCircleArea(radius){
    const areaResult = Math.PI * radius * radius;
    return areaResult;
}

const area = Math.round(calculateCircleArea(circleRadius));

alert(`The area of a circle you've requested is ${area}`);