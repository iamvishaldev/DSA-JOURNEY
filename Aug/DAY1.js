// Find the largest element in the array


// let largest = -Infinity;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
// }

// console.log(largest);

// Find the second largest element in the array




function checkSecondLargest(arr){

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i =0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i]
    }else if(arr[i]>secondLargest){
        secondLargest = arr[i]
    }
}
    return secondLargest
}
const arr = [45, 2, 10, 5, 2, 3, 43, 100];

console.log(checkSecondLargest(arr))
