class List {

    constructor() {
        this.list = [];
        this.size = 0;
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    add(number) {
        this.list.push(number);
        this.size++;
        this.sort();
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1);
            this.size--;
            this.sort();
        }
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

