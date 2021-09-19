function agr(nums) {
    const res = [];

    for (let num of nums) {
        if (num < 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }
    for (let num of res) {
        console.log(num);
    }
}

agr([7, -2, 8, 9]);