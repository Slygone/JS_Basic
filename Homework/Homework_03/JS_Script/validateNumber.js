function validateFiveNumber(numbers = []) {
    //TODO-Find a more dynamic way to fill an array instead of setting it like this.
    //multiple functions with prompts that can pass data to fill the array?
    numbers[0] = parseInt(prompt("Please enter First Number: "))
    numbers[1] = parseInt(prompt("Please enter Second number: "));
    numbers[2] = parseInt(prompt("Please enter Third number: "));
    numbers[3] = parseInt(prompt("Please enter Fourth number: "));
    numbers[4] = parseInt(prompt("Please enter Fifth number: "));

    let counter = 0;
    let sum = 0;
    while (counter < numbers.length) {
        sum += numbers[counter];
        console.log(numbers[counter])
        counter++;
    }
    return alert(`The sum of the numbers is: ${sum}`);
}

validateFiveNumber();

//bonus validation
function validateNumber(number = []) {
    //counter for the while loop to count the array size
    let counter = 0;
    while (counter <= number.length - 1) {
        console.log(number.length)
        //number validation
        if (isNaN(number[counter])) {
            alert(`Error, ${number[counter]} this is not a valid number`)
        } else {
            alert(`${number[counter]} is a valid number :)`);
        }
        //iteration of counter to continue the while loop
        counter++;
    }
}


validateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, "Nikola"])