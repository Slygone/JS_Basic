var firstNumber = parseInt(prompt("Please enter first Number: "));
var secondNumber = parseInt(prompt("Please enter second Number: "));
var thirdNumber = parseInt(prompt("Please enter third Number: "));
var fourthtNumber = parseInt(prompt("Please enter fourth Number: "));
var fifthNumber = parseInt(prompt("Please enter fifth Number: "));

if((firstNumber > secondNumber) && (firstNumber > thirdNumber) && (firstNumber > fourthtNumber) && (firstNumber > fifthNumber)){
    alert(`First Number(${firstNumber}) is the largest`);
}

if((secondNumber > firstNumber) && (secondNumber > thirdNumber) && (secondNumber > fourthtNumber) && (secondNumber > fifthNumber)){
    alert(`Second Number(${secondNumber}) is the largest`);
}

if((thirdNumber > firstNumber) && (thirdNumber > secondNumber) && (thirdNumber > fourthtNumber) && (thirdNumber > fifthNumber)){
    alert(`Third Number(${thirdNumber}) is the largest`);
}

if((fourthtNumber > firstNumber) && (fourthtNumber > secondNumber) && (fourthtNumber > thirdNumber) && (fourthtNumber > fifthNumber)){
    alert(`Fourth Number(${fourthtNumber}) is the largest`);
}

if((fifthNumber > firstNumber) && (fifthNumber > secondNumber) && (fifthNumber > thirdNumber) && (fifthNumber > fourthtNumber)){
    alert(`Fifth Number(${fifthNumber}) is the largest`);
}

