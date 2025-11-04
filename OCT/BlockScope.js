// {
//     var a=10;
//     let b =10;
//     const c=10;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// const a =20;
// {
//     const a =200;
//     {
//         const a =300;
//     }

// }
// console.log(a);

// async await

// let getData = async () => {
//   try{
//     let res = await fetch('https://jsonplaceholder.org/posts')
//     if(!res.ok){
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     let result = await res.json()
//     console.log("result",result);
    
//   }catch(error){
//     console.log("error",error)
//   }
// }

// getData()