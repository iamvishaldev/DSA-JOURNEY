// Find Largest element in an array

function largest(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            first = arr[i]
        }
    }
   return first
}

// let arr = [-10,11,12,5,10,20]
// console.log(largest(arr))

// Find second largest element in an array

let first = -Infinity;
let second = -Infinity;

function secondLargest(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            second = first;
            first = arr[i]
        }else if(arr[i]>second){
            second = arr[i]
        }
    }
    return second;
}

let arr = [4,9,0,2,8,71]
console.log(secondLargest(arr))