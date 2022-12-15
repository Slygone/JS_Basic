//Write a JavaScript program which inserts dashes (-) 
//between each two even numbers in an array. 
//For example if you accept [0,2,5,4,6,8] the output should be 0-254-6-8.

function insertDashes(arr = []) {
    let i = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            // console.log(`number ${arr[i]} is even`)
            // console.log(i);
            if (arr[i + 1] % 2 == 0){
                arr.splice(i, 1, `${parseInt(arr[i])}-`)
            }
            console.log(arr.length)
            if((i == arr.length - 1) && (arr[i] % 2 == 0)){
                arr.splice(i, 1, `${parseInt(arr[i])}-`)
            }
        } 
    }
    console.log(arr);
}


insertDashes([0, 2, 5, 4, 6, 8,12,13,15,16,18,20]);

// let numbers = [1,2,3,4,5];
// numbers.splice(the position of the index, the number of elements to be removed,and with what)
// numbers.splice(1,1,2);
// console.log(numbers)