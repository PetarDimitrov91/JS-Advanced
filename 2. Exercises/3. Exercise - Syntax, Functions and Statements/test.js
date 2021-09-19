function upper(str){
let arr = str.toUpperCase().split(/[^a-zA-Z0-9]+/g);
let strss = arr.filter(e => e !== '').join(", ");
console.log(strss);
}

upper('Hi, how are you?');
upper('hello');
upper('functions, in, js, can, be, nested, I, e, hold, other, functions');
upper('312312 2132 123 ');
