function sum(a, b) {
    let n = Number(a);
    let m = Number(b);
    let res = 0;
    for (let i = n; i <= m; i++) {
        res += i;
    }
    return res;
}

let res = (sum('1', '5'));
console.log(res);