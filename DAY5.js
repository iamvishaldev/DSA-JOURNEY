// Q1 --->

// Write the function that return the number of negative numbers in an array

function countNegative(arr){
    let count = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]<0){
            count++
        }
    }
    return count
}

// let arr = [2,-9,17,0,1,-10,-4,8] // 3
// console.log(countNegative(arr))s

// Q2 -->

// Write a function that return the largest number in an array
// function checkLargestNumber(arr){
//     let max = arr[0]
//     for(let i =1;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// let arr = [5,0,7,10,8,17,1] // 17

// console.log("checkLargestNumber",checkLargestNumber(arr))

// Q3 -->

// Find the Smallest Number in an Array

function isSmallestNumber(arr){
    let min = arr[0] // 2
    for(let i =1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min
}   

// let arr = [10, 4, 2, 7, 9]
// console.log(isSmallestNumber(arr))

// Find largest element in the an array


function findLargestNumber(arr){
    let largest = -Infinity; 
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}

// let arr = [-9,-19,-3] // 23 - length  = 8
// console.log(findLargestNumber(arr));

// Find the smallest number in the array

// function smallestNumber(arr){
//     let smallest = Infinity
//     for(let i =1;i<arr.length;i++){
//          if(arr[i]<smallest){
//             smallest = arr[i]
//     }
//     }
//    return smallest
// }

// let arr = [15,-4,0,23,-17,8,42,-9]
// console.log(smallestNumber(arr));


// Find The Second Largest in an Array

function findSecondLargest(arr){
    let firstLargest = arr[0]
    for(let i =1;i<arr.length;i++){
        if(arr[i]>firstLargest){
            firstLargest=arr[i]
        }
    }
    return firstLargest
}

// let arr = [10, 4, 2, 7, 9]

// console.log(findSecondLargest(arr))