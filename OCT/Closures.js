// Exp1
// function x(){
//     var a=7;
//     function y(){
//         console.log("a",a)
//     }
//     return y;
// }
// let result = x()
// console.log(result);
// result()

// Exp2
// setTimeOut
// function x(){
//   for(var i=1;i<=5;i++){
//     function close(i){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }
// close(i)
// }
//     console.log("js");
// }
// x()

function x(){
    for(var i=0;i<=5;i++){
        setTimeout(()=>{
        console.log(i)
    },i*1000)
    }
   console.log("NJ");
    
}
x()