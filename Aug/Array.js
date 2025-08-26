
// let unique1 = [];
// for (let i = 0; i < dupArr.length; i++) {
//   let isDuplicate = false;
//   for (let j = 0; j < unique1.length; j++) {
//     if (dupArr[i] === unique1[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     unique1.push(dupArr[i]);
//   }
// }
// console.log("Unique (loop):", unique1);

// const getDub = [...new Set(dupArr)]
// console.log(getDub)

// let filterArr = dupArr.filter((el,index)=>dupArr.indexOf(el) === index)
// console.log("filterArr",filterArr); 

const dupArr = [45, 2, 10, 5, 2, 3, 43, 100]; //8

let unique1 = []

for(let i=0;i<dupArr.length;i++){
    let isDuplicate = false;
    for(let j=0;j<unique1.length;j++){
        if(dupArr[i] === unique1[j]){
            isDuplicate = true
        }
        break;
    }
    if(!isDuplicate){
        unique1.push((dupArr[i]))
    }
}

// function isPalindrome(str) {
//   let n = str.length;
//   for (let i = 0; i < n / 2; i++) {
//     if (str[i] !== str[n - 1 - i]) {
//       return false; // agar koi character match nahi hua to palindrome nahi hai
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false
