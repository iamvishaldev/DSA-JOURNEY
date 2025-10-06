// console.log("x",x);

// var x =22;

function isEven(arr){
    let arr1 = []
   arr.map((n)=>{
        let evn = n%2;
        if(evn<1){
        arr1.push(n)
        }
   })
   return arr1;
}
arr = [1,2,3,4,5,6,7,8,9]
let result = isEven(arr)
console.log("result",result);
