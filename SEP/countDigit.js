// Write a function that return the count of digit in a number

let countDigit=(num)=>{
    num = Math.abs(num)
    if(num === 0) return 1;
    let count=0;
    while(num>0){
        num = Math.floor(num/10);
        count++
    }
    return count;
}

let digit = -0;

let result = countDigit(digit)

console.log("result",result)