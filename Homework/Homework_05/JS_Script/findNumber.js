function findNumber(number, arr) {
    if(arr.length < 0){
        console.log("Please enter a valid array!")
        return;
    }
    if((typeof(arr) != "number") && (typeof(number) != "number")){
        console.log("Please enter only integers")
        return;
    }
    let countOfNumber = 0;
    for (let numbersInArray of arr) {
        if (numbersInArray === number) {
            countOfNumber++;
        }
    }
    console.log(`There are ${countOfNumber} occurrences of number ${number} in the array!`)
}


findNumber(3, [3, 3, 3, 7, 2, 9, 1, 5, 6])
findNumber(8, [8, 1, 8, 8, 8, 3, 4, 6, 2, 8])
findNumber(17, [17, 17, 17, 17, 7, 2, 9, 1, 5, 9])
//validation
findNumber("string", [17, 17, 17, 17, 7, 2, 9, 1, 5, 9,"string"])