// Q1: Find the maximum number in an array without using Math.max()

// let arr = [2, 9, 4, 7, 1, 10];

// let arrA = arr[0];

// for(let i=1;i<arr.length;i++){
//    if(arr[i])
// }

// Q2: Find Max & Min

// let Max = arr[0]
// let Min = arr[0];

// for(let i=1;i<arr.length;i++){
//    if(arr[i]> Max) Max =   arr[i]
//    if(arr[i]< Min) Min = arr[i]
// }

// console.log("Max",Max,"Min",Min)

// Q2: Find the Sum of All Numbers in an Array

// let sum =arr[0];

// for(let i=1;i<arr.length;i++){
//    sum += arr[i];
// }

// console.log("sum",sum)

// Q3: Count Even and Odd Numbers

// Find

// for(let i=0;i<arr.length;i++){
//    if(arr[i] %10 === 0){
//       console.log(arr[i],"is even")
//    }else{
//       console.log(arr[i],"is odd")
//    }
// }

// Find Count

// let evenC = 0;
// let oddC = 0;

// for(let i =0;i<arr.length;i++){
//     if(arr[i]%2 === 0){
//         evenC += 1 
//     }else{
//         oddC += 1
//     }
// }

// console.log("evenC",evenC,"oddC",oddC)


//Q4: Find the index of an element in an array (manually)

// let arr = [2, 9, 4, 7, 1, 10];
// let target = 7;
// let found = false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] === target){
//         console.log('index',i)
//         found = true;
//         break
//     }
// }

//Q5: Find the largest element in array

// let arr = [10, 4, 9, 2, 15, 7];

// let largest = -Infinity

// for(let i =1;i<arr.length;i++){
//    if(arr[i]>largest){
//       max = arr[i]
//    }
// }

// console.log(max)

//Q6: Find the smallest element in array

// let arr = [10, 4, 9, 2, 15, 7];

// let smallest = Infinity

// for(let i =1;i<arr.length;i++){
//    if(arr[i]<smallest){
//       smallest = arr[i]
//    }
// }

// console.log(smallest)

//Q7: Find the 2nd largest element in array


// Q8: Find the largest element in the array

let arr = [-10, -4, -9, -19, -15, -7];

function smallest(arr){
   let smallest = Infinity;

   for(let i=0;i<arr.length;i++){
      if(arr[i]<smallest){
         smallest = arr[i]
      }
   }
   console.log("largest",smallest);
   
}

smallest(arr)


