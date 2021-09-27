let strArr = 'this is an example'.split(' ');
let transformed = strArr[0];

for (let i = 1; i < strArr.length; i++) {
    transformed = transformed + strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
}
console.log(transformed);