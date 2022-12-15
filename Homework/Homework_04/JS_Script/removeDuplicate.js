// //Write a JavaScript program to 
// //remove duplicate items from an array.

// function removeDuplicate(arr = []) {
//     let i = 0;
//     while (i < arr.length) {
//         let j = 1;
//         while (arr[i] < arr[j]) {
//             if (arr[i] == arr[j]) {
//                 console.log(arr[j])
//                 arr.splice(j, 1);
//             }
//             j++;
//             // console.log("I while inside J",i);
//             // console.log("J while inside J",j);
//         }
//         // console.log("I",i);
//         i++;
//     }
//     //check first number with all numbers after it.
//     //remove current number when you reach end of array if there was a duplicate number

//     console.log(arr);
// }

// removeDuplicate([1,2,3,4,4,5]);
// //1,2,3,4,5

function removeDuplicate(arr = []) {
    let i = 0;
    while (i < arr.length) {
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            } else {
                j++;
            }
        }
        i++;
    }
    console.log(arr)
}

//   const arr = [1, 2, 3, 4, 4, 5];
//   const unique = removeDuplicate(arr); // [1, 2, 3, 4, 5]
removeDuplicate([1, 2, 3, 4, 4, 5, 5, 4, 3, 6]);