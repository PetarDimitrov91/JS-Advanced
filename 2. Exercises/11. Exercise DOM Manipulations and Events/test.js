let arr = ['a','b','b','c'];
let arr2 = []

for (let i = 0; i < arr.length; i++) {
    arr2.push(String.fromCharCode(arr[i].charCodeAt(0) + 1));
}

console.log(arr2);