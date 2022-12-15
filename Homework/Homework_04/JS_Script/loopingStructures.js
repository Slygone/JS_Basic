//working version

function sumOfMinMax(arr = []) {
    let counter = 0;
    let max = -Infinity;
    let min = Infinity;
    while (counter < arr.length) {
        //validate if the current index is not a number and skip if true  
        if (isNaN(arr[counter])) {
            // console.log(typeof (arr[counter]))
            // console.log(`skiped ${arr[counter]}`);
            counter++;
        }
        //validate if the current index is not a boolean and skip if its a boolean
        if (arr[counter] === true || arr[counter] === false) {
            // console.log(typeof (arr[counter]))
            // console.log(`skiped ${arr[counter]}`)
            counter++;
        }
        //find the minimum by comparing each index to the next
        if (arr[counter] < min) {
            min = [arr[counter]];
        }
        //find the maximum by comparing each index to the next
        if (arr[counter] > max) {
            max = [arr[counter]];
        }
        //increase the counter
        counter++;
    }
    console.log(`the max is: ${max}`)
    console.log(`the min is: ${min}`)
}

sumOfMinMax([15, 99, true, -2, null, "string", 55, 32, false, 56, 41, 23, "another string", 100, "string # 3", 101, "more more strings"]);



//version where i try to remove the elements from one array.
//fill the array with numbers and find min/max
//fill the non numbers in another array
//if i use + in array it converts it to string
//use push/pop etc.


// function sumOfMinMax(arr = []) {
//     let counterForFirstArray = 0;
//     let counterForSecondArray = 0;
//     let removedMember = [];
//     let sortedArray = [];
//     let max = -Infinity;
//     let min = Infinity;
//     while (counterForFirstArray < arr.length) {
//         if (!isNaN(arr[counterForFirstArray])) {
//             removedMember = arr.shift();
//             console.log("removed",removedMember)
//             sortedArray += removedMember; //TODO UNFINISHED LOGIC CANT USE + TO FILL ARRAY
//             console.log("Stored", sortedArray);
//         }
//         if (arr[counterForFirstArray] === true || arr[counterForFirstArray] === false) {
//             console.log("boolean removed", arr[counterForFirstArray])
//             arr.shift();
//         }
//         if (isNaN(arr[counterForFirstArray])) {
//             console.log("string removed", arr[counterForFirstArray])
//             arr.shift();
//         }
//     }
//     while (counterForSecondArray < sortedArray.length) {
//         if (sortedArray[counterForSecondArray] > max) {
//             max = [sortedArray[counterForSecondArray]];
//         }
//         if (sortedArray[counterForSecondArray] < min) {
//             min = [sortedArray[counterForSecondArray]];
//         }

//         counterForSecondArray++;
//     }
//     console.log("1",removedMember);
//     console.log("2",sortedArray);
//     console.log("3",max);
//     console.log("4",min);
// }

// sumOfMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "wow",99]);