// Q1. Find largest element in the an array

function checkLargestNumber(arr){
   let largest = - Infinity
   for(let i =0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
   }
   return largest
}

let arr = [-5,-4,-1]

// console.log(checkLargestNumber(arr))

// Q2. Find smallest element in the an array

// function checkSmallestNumber(arr){
//     let smallest = Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest
// }  
// let arr = [-5,-4,-1,0,4,5]
// console.log(checkSmallestNumber(arr))


