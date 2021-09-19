function check(num) {
    let str = num.toString();
    let flag = true;
    let sum = parseInt(str.charAt(0));
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(i - 1)) {
            flag = false;
        }
        sum += parseInt(str.charAt(i));
    }
    console.log(flag);
    console.log(sum);
}

check(2222222);
check(1234);