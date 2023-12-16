const usersAge = +prompt('How old are you?', 0);
const usersCity = prompt('What is your current town/city of living?', ' ');
const favSport = prompt('Are you going for any sports? What about football? Or tennis? Rugby?', ' ');

const placeOfResidence = ' ';
const sportsLegend = ' ';


function showCurrentCity(city) {
    if (city === 'London') {
        placeOfResidence = `You live in the capital of United Kingdom, not bad!`;
        return placeOfResidence;
    } else if (city === 'Washington') {
        placeOfResidence = `You live in the capital of USA, well done you!`;
        return placeOfResidence;
    } else if (city === 'Kyiv') {
        placeOfResidence = `You live in the capital of Ukraine and it is the best place on Earth I swear!`;
        return placeOfResidence;
    } else {
        placeOfResidence = city;
        return placeOfResidence;
    }
}

function showSportsLegends(sport) {
    if (sport === 'football') {
        sportsLegend = `Hey, would you want to become another Messi?`;
    } else if (sport === 'tennis') {
        sportsLegend = `Do you think you could beat Djokovic?`;
    } else if (sport === 'rugby') {
        sportsLegend = `Do you know Etzebeth? Me neither..`;
    } else {
        alert('Sorry, no time for other kinds of sports..');
    }
}


alert(`Hey, you are ${usersAge}, good for you! and you live in ${placeOfResidence}`)