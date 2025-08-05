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

function secondLargestNumber(arr){
    if(arr.length<2){
        return "Array length should be greater then 1"
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i]>secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargestNumber([10,20,20]));