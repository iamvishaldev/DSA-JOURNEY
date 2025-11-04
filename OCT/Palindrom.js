// palindrome

function isPalindrome(num){
    let original = num;
    let rev = 0;
    while(num>0){
        let rem = num % 10;
       
        rev = (rev * 10) + rem;
        
        num = Math.floor(num/10)
       
    }
    return original === rev;
}

let result = isPalindrome(1221)
console.log("result",result);
