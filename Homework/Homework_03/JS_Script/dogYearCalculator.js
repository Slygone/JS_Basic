function calculateDogYears(age){
    age = age * 7;
    console.log(`Your dog is: ${age} years old in dog years!`);
    age = age / 7
    console.log(`Your dog is: ${age} years old in human years!`);
}

calculateDogYears(parseInt(prompt("Please enter the human years for the dog to be calculated ")), parseInt(prompt("Please enter dog years for the dog to be calculated: ")));