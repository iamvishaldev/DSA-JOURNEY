
// let arr =[10,20,30,40]

// console.log("---->lll");
// let i=0;
// console.log("---->");

// while(i<arr.length){
//     console.log("i first",i);
    
//     console.log(arr[i]);

//     console.log("i after",i);

//     i++;
// }

// Write a function that return the count of digit in a number

function countDigit(n){
    if (n === 0) return 1;
    let count = 0;
    // Integer to positive
    n = Math.abs(n)
    while (n>0) {    
        // Decimal to number
        n = Math.floor(n/10)
        count++
    }
    return count;
}

let n=12.34;

let result = countDigit(n)

console.log("result",result);
