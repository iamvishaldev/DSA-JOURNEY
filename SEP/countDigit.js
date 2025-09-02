// Write a function that return the count of digit in a number

let countDigit = (n)=>{
    if(n === 0) return 1;
    n = Math.abs(n)
    let count = 0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}

let n = 12345;

let result = countDigit(n)
console.log("result",result);