//way without removing members from the array
function oneBigString(arr = []){
    let counter = 0;
    let finalString = [];
    while (counter < arr.length){
        finalString += `${arr[counter]} `
        counter++;
    }
    console.log(finalString)
    console.log(arr)
}


oneBigString(["Hello", "there", "students", "of", "SEDC", "!"]);

// //way with removing members from the array
// function oneBigStringToo(arr = []) {
//     let finalString = "";
//     //no need for counter because we are removing elements from arrays
//     while (0 < arr.length) {
//         let removedMember = arr.shift();
//         finalString += ` ${removedMember}`;
//     }
//     console.log(finalString);
//     console.log(arr);
// }

// oneBigStringToo(["Hello", "there", "students", "of", "SEDC", "!"]);