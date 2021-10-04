function solve(numbers, sortCriteria) {
    const sorting = {
        desc() {
            return numbers.sort((a, b) => b - a)
        },
        asc(){
            return numbers.sort((a,b) => a - b);
        }
    }
    return sorting[sortCriteria]();
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));