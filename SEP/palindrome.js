// Write a function isPalindrome(x) that takes an integer x and returns true if it 
// reads the same backward and forward; otherwise false.

// let isPalindrome = (n)=>{

//     if(n<0) return false;

//     let xCopy = n;

//     let rev=0;

//     while(n>0){
//         rem = n%10;
//         rev=(10*rev) + rem;
//         n= Math.floor(n/10)
//     }
//     return rev === xCopy;
// }

// let number = 1221;

// let result = isPalindrome(number)

// console.log("result",result)


let isPalindrome = (n)=>{
    if(n<0) return false;
    let rev = 0;
    let original = n;
    while(n>0){
        let rem=n%10;
        rev = (rev*10)+rem;
        n = Math.floor(n/10)
    }
        console.log("rev === n",rev , n);
    
    return rev === original;
    }

let num = 1221;

let result = isPalindrome(num)

console.log("result",result)