// Functions to get the greeting and sum of two numbers
function greet(name){
    console.log("Hello",name)
}

greet("Vishal")
greet("Yadav")

// Function to calculate the sum of two numbers
function sum (a,b){
    return a * b;
}

console.log(sum(10,20))

// Function to get the square of a number
function square(num){
 return num * num;
}

let res = square(5) // Whatever value is returned by the function will be stored in res
console.log(res)


// Create a function which accepts the age and tells whether the person is eligible to vote or not
function isEligibleToVote(age){
    if(age <=0){
        console.log("InValid number")
    }else if(age >=18){
        console.log("eligible to vote")
    }else{
        console.log("not eligible to vote")
    }
}

isEligibleToVote(5); // whatever value is returned by the function will be stored in result
isEligibleToVote(17); // whatever value is returned by the function will be stored in result
isEligibleToVote(0); // whatever value is returned by the function will be stored in result
isEligibleToVote(19); // whatever value is returned by the function will be stored in result
isEligibleToVote(0); // whatever value is returned by the function will be stored in result


// Create a function to check if a number is even or odd

function checkEvenOdd(num){
    let rem = num % 2 === 0;
    if(rem){
        console.log("It is even number")
    }else{
        console.log("It is odd number")
    }
}

checkEvenOdd(10)
checkEvenOdd(252525)
