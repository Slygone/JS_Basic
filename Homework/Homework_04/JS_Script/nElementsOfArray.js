// Write a JavaScript function to get the first nth elements of an array. 
//Passing a parameter 'nth' will return the first 'nth' elements of the array.

function getNthElement(arr = [], number) {
    // number = parseInt(prompt("Please enter a number: "))
    let i = 0;
    while (i < number) {
        console.log(arr[i]);
        i++;
    }
}
getNthElement([37, 22, 54, 8, 17, 2, 86, 30, 87, 71], 7);

