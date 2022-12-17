function squareNumber(arr) {
    let sum = 0;
    for (const number of arr) {
        sum += Math.pow(number, 2);
        console.log(sum);
    }
}

let newArr = []
function numberArr(startNum, endNum) {
    for(startNum; startNum <= endNum;startNum++){
        // console.log(startNum);
        newArr.push(startNum);
    }
}

numberArr(101,150);
squareNumber(newArr);