function calculateThatAge(birthYear, currentYear){
    currentYear = new Date().getFullYear();
    console.log(currentYear);
    
    let result = currentYear - birthYear;
    console.log(`You are ${result} years old! And don't forget it next time!`);
}
calculateThatAge(parseInt(prompt("Please enter your year of birth: ")));