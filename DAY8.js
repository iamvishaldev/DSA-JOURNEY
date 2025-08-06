//Find Largest element in the array.

// let largest = -Infinity;

// function checkLargest(arr){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// let arr = [4,9,0,2,8,7,1]
// console.log(checkLargest(arr))

//Find Secondlargest element in the array.

// function secondLargestNumber(arr){
//     if(arr.length<2){
//         return "Array length should be greater then 1"
//     }
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }else if(arr[i]>secondLargest && arr[i] !== largest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// console.log(secondLargestNumber([10,20,20]));

// Loop in Loop

// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         console.log("j",j)
//     }
//     console.log("i",i)
// }

// for(let i=0;i<5;i++){
//     for(let j=0;j<=i;j++){
//         console.log("i",i,"j",j)
//     }
// }

// reverse loop

// let arr = [1,2,3,4,5,6]

// for(let i=5;i>0;i--){
//     console.log("i",i)
// }

// for(let i=5;i>0;i--){
//    for(j=0;j<i;j++){
//     console.log("i",i,"j",j)
//    }
// }