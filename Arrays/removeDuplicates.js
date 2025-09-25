let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

let x = 0;

var removeDup = (n) => {
    for (i = 0; i < n.length; i++) {
        if (arr[i]>arr[x]) {
            x = x+1;
            arr[x] = arr[i]
        }
        
    }
    return x+1;
}
let result = removeDup(arr)

console.log("result",result)