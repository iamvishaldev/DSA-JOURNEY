let name ={
    firstName:"Vishal",
    lastName:'Yadav',
}

function printFullName (hometown){
        return `${this.firstName + " " + this.lastName + " " + hometown}`
    }
console.log(printFullName.call(name,"Mumbai"))

let name2 = {
    firstName:"Sachin",
    lastName:'Bhai',
}

// call - function borrowing
console.log(printFullName.call(name2,"India"))
// apply
console.log(printFullName.apply(name2,["India"]))
// bind - bind the object and return the copy of that object but which can be invoke later
let myPrint = printFullName.bind(name2,"kudus")
console.log(myPrint);
myPrint()

