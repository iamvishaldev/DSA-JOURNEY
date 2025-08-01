// // Q1. Find largest element in the an array

// function smallestNumber(arr){
//     let smallest = Infinity;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest;
// }

// let arr = [-100,-50,-200]
// console.log(smallestNumber(arr))

// 🔥 Q3: Count how many numbers are negative in an array

// function countNegative(arr){
//     let count =0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] < 0){
//             count ++
//         }
//     }
//     return count;
// }

// let arr = [2, -4, 0, -9, 7, -1,-5,-0];  
// console.log(countNegative(arr))


// Q4: Return all even numbers from array (new array)

// function evenNumbersFromArray(arr){
//     let evenArr = []
//     for(let i = 0;i <arr.length;i++){
//         if(arr[i]%2 === 0){
//             evenArr.push(arr[i])
//         }
//     }
//     return evenArr;
// }   

// let arr = [2, 4, 0, -9, 7, -1,-5,-0];  
// console.log(evenNumbersFromArray(arr))

// Q5. find second largest value in the array.

// let first = -Infinity;
// let second = -Infinity;
// function findSecondLargest(arr){
//     if(arr.length<2){
//         console.log("Array should be more then 1 elements")
//     }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>first){
//         second= first;
//         first = arr[i];
//     }else if(arr[i]>second){
//         second = arr[i]
//     }
// }
// return second;
// }

// let arr = [10,20,30,40,20]
// console.log(findSecondLargest(arr))