function rectangle(width, height, color) {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return {
        width: Number(width),
        height: Number(height),
        color: capitalizeFirstLetter(color),
        calcArea() {
            return this.width * this.height;
        }
    };

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


