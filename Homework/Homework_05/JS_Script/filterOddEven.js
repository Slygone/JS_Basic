//we can use entry parameters but lets be more creative :)
function findNumber() {
    //array for the user inputed array
    let arr = [];
    //loop to keep prompting
    while (true) {
        var input = prompt("Please enter an integer (or press `Cancel` to stop: ");
        //parse int because we want a integer
        var number = parseInt(input);
        //break for escaping the loop
        if (input == null) {
            break;
        }
        //validation for number :)
        if (Number.isNaN(number)) {
            console.log("Please enter a valid integer");
        } else {
            //fill array
            arr.push(number);
        }
        console.log(arr);
    }
    //input for odd/even
    var inputType = prompt("Please enter type: ");
    if (inputType == "even") {
        //array for the even numbers
        let evenNum = [];
        for (const evenNumbers of arr) {
            if(evenNumbers % 2 == 0){
                //fill even numbers array
                evenNum.push(evenNumbers);
            }
        }
        console.log(evenNum);
        return evenNum;
    }else if (inputType == "odd"){
        //array for odd numbers
        let oddNum = [];
        for (const oddNumbers of arr) {
            if(oddNumbers % 2 != 0){
                //fill odd numbers array
                oddNum.push(oddNumbers);
            }
        }
        console.log(oddNum);
        return oddNum;
    }
}

findNumber();


// let me know if you want me to solve it the other way. 
//I like this way more because it is more challenging for me.