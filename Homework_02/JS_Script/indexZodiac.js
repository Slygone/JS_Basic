var userInput = prompt("Enter year to find out what Chinese Zodiac a given year is: ");
//Reusable parsed value
var userParsedValue = parseInt(userInput);
var zodiacCalculation = (userParsedValue - 4) % 12;
console.log(zodiacCalculation);
// console.log(typeof(userInput)); //always string because of prompt
// console.log(typeof(zodiacCalculation)); //always int/number because of parseint

if (zodiacCalculation == 0) {
    alert("It is the year of the Rat")
} else if (zodiacCalculation == 1) {
    alert("It is the year of the Ox")
} else if (zodiacCalculation == 2) {
    alert("It is the year of the Tiger")
} else if (zodiacCalculation == 3) {
    alert("It is the year of the Rabbit")
} else if (zodiacCalculation == 4) {
    alert("It is the year of the Dragon")
} else if (zodiacCalculation == 5) {
    alert("It is the year of the Snake")
} else if (zodiacCalculation == 6) {
    alert("It is the year of the Horse")
} else if (zodiacCalculation == 7) {
    alert("It is the year of the Goat")
} else if (zodiacCalculation == 8) {
    alert("It is the year of the Monkey")
} else if (zodiacCalculation == 9) {
    alert("It is the year of the Rooster")
} else if (zodiacCalculation == 10) {
    alert("It is the year of the Dog")
} else if (zodiacCalculation == 11) {
    alert("It is the year of the Pig")
}

//Validation for false input
if (isNaN(zodiacCalculation)){
    alert("Please entera valid Year");
}
