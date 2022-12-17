let userInput = parseInt(prompt("Please enter a year: "));
input = ((userInput - 4) % 12);

switch (input) {
    case 0:
        console.log("It's the year of the Rat");
        break;
    case 1:
        console.log("It's the year of the Ox");
        break;
    case 2:
        console.log("It's the year of the Tiger");
        break;
    case 3:
        console.log("It's the year of the Rabbit");
        break;
    case 4:
        console.log("It's the year of the Dragon");
        break;
    case 5:
        console.log("It's the year of the Snake");
        break;
    case 6:
        console.log("It's the year of the Horse");
        break;
    case 7:
        console.log("It's the year of the Goat");
        break;
    case 8:
        console.log("It's the year of the Monkey");
        break;
    case 9:
        console.log("It's the year of the Rooster");
        break;
    case 10:
        console.log("It's the year of the Dog");
        break;
    case 11:
        console.log("It's the year of the Pig");
        break;
    default:
        console.log("Please enter a valid year!")
}