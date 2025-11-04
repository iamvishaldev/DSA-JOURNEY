// Find Even Number in Array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findEven = (n) =>{
  let evenNum = []
  for(let i=0;i<n.length;i++){
    if(n[i]%2 === 0){
        evenNum.push(n[i])
    }
  }
  return evenNum;
}

let resultE = findEven(arr)
// console.log("resultE",resultE);

// ODD Number 

let findOdd = (num)=>{
    let oddNum = []
    for(let i=0;i<num.length;i++){
        if(num[i]%2 === 1){
            oddNum.push(num[i])
        }
    }
    return oddNum;
}

let resultO = findOdd(arr)
// console.log("resultO",resultO);


// Prime Number

let findPrime = (num)=>{
    if(num<2) return false;
    if(num === 2)return true;
    if(num % 2 === 0)return false;

}

let resultP = findOdd(arr)
// console.log("resultP",resultP);

let original = {name: "Vishal", address: {city: "Mumbai"}};

// Deep copy using JSON
let copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Pune";  // original unaffected
console.log(original.address.city); // Mumbai
