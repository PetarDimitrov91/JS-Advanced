function circleArea(a) {
    let type = typeof(a);
    if (type === 'number') {
        let area = a ** 2 * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (a)}.`);
    }
}

circleArea(5);
circleArea('ssda');