function weightInChickens (kilograms){
    let chickenWeight = kilograms * 2;
    console.log(chickenWeight);
    let result = document.getElementById("result");
    result.innerHTML = `Your weight is equal to ${chickenWeight} chickens`
}


weightInChickens(parseFloat(prompt("Enter kilograms to know how you weigh in chickens:  ")));

