function stringLength(a, b, c) {
    let length = a.length + b.length + c.length;
    let averageLength = Math.floor(length / 3);
    console.log(length);
    console.log(averageLength)
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');